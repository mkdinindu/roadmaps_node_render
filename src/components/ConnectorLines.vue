<template>
  <svg class="lines">
    <line
      v-for="line in lines"
      :key="line.id"
      :x1="line.x1"
      :y1="line.y1"
      :x2="line.x2"
      :y2="line.y2"
      stroke="#888"
      stroke-width="2"
    />
  </svg>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

interface Line {
  id: string
  x1: number
  y1: number
  x2: number
  y2: number
}

const lines = ref<Line[]>([])

onMounted(() => {

  const parent = document.getElementById("foundations")
  const child = document.getElementById("html")

  if (!parent || !child) return

  const p = parent.getBoundingClientRect()
  const c = child.getBoundingClientRect()

  lines.value.push({
    id: "foundations-html",
    x1: p.left + p.width / 2,
    y1: p.bottom,
    x2: c.left + c.width / 2,
    y2: c.top
  })
})
</script>

<style scoped>
.lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
</style>
