"use client";

import { Node, NodeProps } from "@xyflow/react";

import { Code2 } from "lucide-react";

import LiveNode from "./LiveNode";

import { useLeetcodeStats } from "@/hooks/useLeetcodeStats";
import DifficultyCarousel from "@/components/widget/leetcode/components/DifficultyCarousel";

type Data = {
  username: string;

  size?: "sm" | "md" | "lg" | "xl";

  accentColor?: string;
};

type T = Node<Data>;

export default function LeetcodeNode({ data }: NodeProps<T>) {
  const stats = useLeetcodeStats();

  return (
    <LiveNode
      title="LeetCode"
      icon={<Code2 size={36} />}
      mainStat={stats.data?.solved.total}
      mainStatLabel="Solved"
      loading={stats.loading}
      error={stats.error}
      size={data.size}
      accentColor={data.accentColor}
      onClick={() =>
        window.open(`https://leetcode.com/u/${data.username}`, "_blank")
      }
      overlay={{
        initialHeight: 0,
        hoverHeight: 100,

        content: stats.data ? (
          <div
            className="
              h-full
              w-full
              rounded-full

              bg-white
              text-slate-900

              flex
              items-center
              justify-center
            "
          >
            <DifficultyCarousel stats={stats.data} />
          </div>
        ) : null,
      }}
    />
  );
}
