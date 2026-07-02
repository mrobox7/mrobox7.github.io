import { ReactFlow} from '@xyflow/react';
import { ProfileNode, ResumeNode, SectionNode, SocialNode } from './nodes/index';
import '@xyflow/react/dist/style.css';
import { nodes, edges } from '@/data/graph';

const nodeTypes = {
    profile: ProfileNode,
    section: SectionNode,
    social: SocialNode,
    resume: ResumeNode,
};

export default function Hero() {
  return (
    <div style={{ height: 600 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnDrag={false}
        elementsSelectable={false}
        selectNodesOnDrag={false}
        selectionOnDrag={false}
      />
    </div>
  );
}
