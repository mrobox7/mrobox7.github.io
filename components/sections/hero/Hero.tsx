"use client";

import {
  // Background,
  // BackgroundVariant,
  ReactFlow,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import {
  ProfileNode,
  LeetcodeNode,
  ResumeNode,
  SectionNode,
  SocialNode,
} from "./nodes";

import FloatingEdge from "./edge/FloatingEdge";
import FloatingConnectionLine from "./edge/FloatingConnectionLine";

import { nodes as initialNodes, edges as initialEdges } from "@/data/graph";

const nodeTypes = {
  profile: ProfileNode,
  leetcode: LeetcodeNode,
  section: SectionNode,
  social: SocialNode,
  resume: ResumeNode,
};

const edgeTypes = {
  floating: FloatingEdge,
};

export default function Hero() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);

  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="relative h-175 w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        fitViewOptions={{
          padding: 0.275,
        }}
        nodesDraggable
        nodesConnectable={false}
        elementsSelectable={false}
        defaultEdgeOptions={{
          type: "floating",
          animated: false,
          style: {
            stroke: "#52525b",
            strokeWidth: 1,
            strokeDasharray: "6 4",
          },
        }}
        connectionLineComponent={FloatingConnectionLine}
        proOptions={{ hideAttribution: true }}
      >
        {/* <Background
          variant={BackgroundVariant.Dots}
          gap={8}
          size={1}
          color="#3f3f46"
        /> */}
      </ReactFlow>

      {/* <button
        className="absolute right-4 bottom-4 rounded-lg bg-zinc-900 px-4 py-2 text-sm text-white border border-zinc-700 hover:border-cyan-400"
        onClick={() => {
          console.log(
            nodes.map((node) => ({
              id: node.id,
              position: node.position,
            }))
          );
        }}
      >
        Export Positions
      </button> */}
    </div>
  );
}
