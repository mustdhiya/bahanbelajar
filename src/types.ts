export interface SyllabusItem {
  topic: string;
  detail: string;
}

export type BadgeType = 'samarinda' | 'global' | 'leverage' | (string & {});
export type NodeCategory = 'spine' | 'branch' | 'subbranch' | (string & {});
export type NodeTier = 'spine' | 'branch' | 'subbranch';

export type NodeStatus = 'pending' | 'progress' | 'done';
export type FilterType = 'all' | 'spine' | 'samarinda' | 'global' | 'leverage';
export type AudioLangMode = 'bilingual' | 'id';

export interface RoadmapNode {
  id: string;
  category: NodeCategory;
  badgeText: string;
  badgeType: BadgeType;
  title: string;
  subtitle: string;
  keywords?: string;
  visualSteps?: string[];
  syllabus?: SyllabusItem[];
  todos?: string[];
  output?: string;
  tips?: string;
  subBranches?: RoadmapNode[];
}

export interface RoadmapPhase {
  id: string;
  spine: RoadmapNode;
  left: RoadmapNode[];
  right: RoadmapNode[];
}

export interface FlatRoadmapNode extends RoadmapNode {
  phaseIndex: number;
  parentTitle?: string;
}

export interface TodoStats {
  done: number;
  total: number;
  pct: number;
}

export interface SpeechSegment {
  lang: 'id-ID' | 'en-US';
  label: string;
  text: string;
}