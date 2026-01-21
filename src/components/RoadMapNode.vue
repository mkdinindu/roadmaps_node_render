<template>
  <div class="node-wrapper">
    <div class="node-card">
      <h3>{{ node.title }}</h3>
      <p v-if="node.description">{{ node.description }}</p>

      <ul v-if="node.resources">
        <li v-for="r in node.resources" :key="r">
          <a :href="r" target="_blank">Resource</a>
        </li>
      </ul>
    </div>


    <div v-if="node.children?.length" class="children">
      <RoadmapNode
        v-for="child in node.children"
        :key="child.id"
        :node="child"
      />
    </div>
    <p>Ranuki badaaa</p>
  </div>
</template>

<script setup lang="ts">
import type { RoadmapNode as RoadmapNodeType } from "../types/roadmap.type"


import RoadmapNode from "../components/RoadMapNode.vue"

defineProps<{
  node: RoadmapNodeType
}>()
</script>

<style scoped>
.node-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}


.node-card {
  background: #1e1e1e;
  color: #ffffff;
  padding: 14px 18px;
  border-radius: 10px;
  min-width: 220px;
  text-align: center;
  margin: 12px 0;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.node-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
}


.children {
  display: flex;
  gap: 40px;
  margin-top: 36px;
  position: relative;
}


h3 {
  margin: 0 0 6px;
  font-size: 1rem;
  font-weight: 600;
}

p {
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.85;
}


ul {
  margin: 8px 0 0;
  padding: 0;
  list-style: none;
}

li {
  margin-top: 4px;
}

a {
  color: #4da3ff;
  font-size: 0.8rem;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>

