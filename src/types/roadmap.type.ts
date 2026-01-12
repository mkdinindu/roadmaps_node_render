
export interface RoadmapNode {
  id: string
  title: string
  description?: string
  resources?: string[]
  children?: RoadmapNode[]
}

export interface Roadmap {
  id: string
  name: string
  nodes: RoadmapNode[]
}
