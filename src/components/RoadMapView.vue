<template>
  <div class="roadmap-container">
    <h1>{{ roadmap.name }}</h1>

    <div class="roadmap-tree">
      <RoadmapNode
        v-for="node in roadmap.nodes"
        :key="node.id"
        :node="node"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import RoadmapNode from "../components/RoadMapNode.vue"
import { roadmapData } from "../data/roadmap.data"
import type { Roadmap } from "../types/roadmap.type"

const roadmap: Roadmap = roadmapData
</script>

<style scoped>
.roadmap-container {
  padding: 40px;
}

.roadmap-tree {
  display: flex;
  justify-content: center;
}
</style>
