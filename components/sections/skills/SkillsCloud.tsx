"use client";

import {
  forceCollide,
  forceSimulation,
  forceX,
  forceY,
  type SimulationNodeDatum,
} from "d3-force";
import { hierarchy, pack } from "d3-hierarchy";
import { useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import { formatExperienceMonths, type SkillScore } from "@/lib/skill-score";

import SkillBall from "./SkillBall";

type SkillsCloudProps = {
  skills: SkillScore[];
};

type CloudDatum = {
  skill?: SkillScore;
  children?: CloudDatum[];
};

type BallLayout = {
  skill: SkillScore;
  x: number;
  y: number;
  diameter: number;
};

type PhysicsNode = SimulationNodeDatum & {
  skill: SkillScore;
  radius: number;
};

export default function SkillsCloud({ skills }: SkillsCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const spawnPositions = useRef(new Map<string, number>());
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [balls, setBalls] = useState<BallLayout[]>([]);
  const [selectedSkillId, setSelectedSkillId] = useState(skills[0]?.id);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const packedBalls = useMemo(() => {
    if (size.width === 0 || size.height === 0) return [];

    const root = hierarchy<CloudDatum>({
      children: skills.map((skill) => ({ skill })),
    })
      .sum((datum) => {
        return datum.skill ? Math.max(18, datum.skill.score) : 0;
      })
      .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

    return pack<CloudDatum>()
      .size([size.width, size.height])
      .padding(5)(root)
      .leaves()
      .flatMap((node) => {
        return node.data.skill
          ? [
              {
                skill: node.data.skill,
                x: node.x,
                y: node.y,
                diameter: node.r * 2,
              },
            ]
          : [];
      });
  }, [size, skills]);

  useEffect(() => {
    if (packedBalls.length === 0) {
      setBalls([]);
      return;
    }

    if (shouldReduceMotion) {
      setBalls(packedBalls);
      return;
    }

    const nodes: PhysicsNode[] = packedBalls.map(
      ({ skill, diameter }, index) => {
        const radius = diameter / 2;
        let spawn = spawnPositions.current.get(skill.id);

        if (spawn === undefined) {
          spawn = Math.random();
          spawnPositions.current.set(skill.id, spawn);
        }

        return {
          skill,
          radius,
          x: radius + spawn * Math.max(0, size.width - diameter),
          y: -radius - (index % 5) * 12,
          vx: 0,
          vy: 0,
        };
      },
    );

    const simulation = forceSimulation(nodes)
      .force("center-x", forceX<PhysicsNode>(size.width / 2).strength(0.025))
      .force(
        "gravity",
        forceY<PhysicsNode>((node) => size.height - node.radius - 4).strength(
          0.105,
        ),
      )
      .force(
        "collision",
        forceCollide<PhysicsNode>((node) => node.radius + 3)
          .strength(1)
          .iterations(3),
      )
      .alpha(1)
      .alphaDecay(0.022)
      .velocityDecay(0.22)
      .on("tick", () => {
        for (const node of nodes) {
          const radius = node.radius;

          if ((node.x ?? radius) - radius < 0) {
            node.x = radius;
            node.vx = Math.abs(node.vx ?? 0) * 0.25;
          } else if ((node.x ?? 0) + radius > size.width) {
            node.x = size.width - radius;
            node.vx = -Math.abs(node.vx ?? 0) * 0.25;
          }

          if ((node.y ?? radius) - radius < 0 && (node.vy ?? 0) < 0) {
            node.y = radius;
            node.vy = Math.abs(node.vy ?? 0) * 0.2;
          } else if ((node.y ?? 0) + radius > size.height) {
            node.y = size.height - radius;
            node.vy = -Math.abs(node.vy ?? 0) * 0.2;
          }
        }

        setBalls(
          nodes.map((node) => ({
            skill: node.skill,
            x: node.x ?? 0,
            y: node.y ?? 0,
            diameter: node.radius * 2,
          })),
        );
      });

    return () => {
      simulation.stop();
    }
  }, [packedBalls, shouldReduceMotion, size.height, size.width]);

  const selectedSkill =
    skills.find(({ id }) => id === selectedSkillId) ?? skills[0];

  return (
    <>
      <div className="flex flex-col gap-md">
        <div
          ref={containerRef}
          className="relative h-[calc(var(--space-section)*4)] w-full mt-md overflow-hidden tablet:h-[calc(var(--space-section)*5)] rounded-lg border border-hairline"
        >
          {balls.map(({ skill, x, y, diameter }, index) => (
            <SkillBall
              key={skill.id}
              skill={skill}
              diameter={diameter}
              position={{ x, y }}
              delay={index * 0.025}
              selected={skill.id === selectedSkill?.id}
              onSelect={(selected) => setSelectedSkillId(selected.id)}
            />
          ))}
        </div>

        {selectedSkill ? (
          <div className="rounded-lg border border-hairline bg-surface-soft p-md">
            <div className="flex items-center justify-between gap-md">
              <p className="text-title-sm text-ink">{selectedSkill.label}</p>
              <p className="text-caption text-muted">
                {selectedSkill.score}/100 usage
              </p>
            </div>
            <div className="mt-sm flex flex-wrap gap-x-lg gap-y-xs text-caption text-muted">
              <span>
                {selectedSkill.projectCount} project
                {selectedSkill.projectCount === 1 ? "" : "s"}
              </span>
              <span>
                {formatExperienceMonths(selectedSkill.experienceMonths)}
                {selectedSkill.experienceMonths > 0 ? " professional use" : ""}
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
