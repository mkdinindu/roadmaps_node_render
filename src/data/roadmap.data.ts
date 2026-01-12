import type { Roadmap } from "../types/roadmap.type"

export const roadmapData: Roadmap = {
  id: "web-dev",
  name: "Web Development",
  nodes: [
    {
      id: "foundations",
      title: "Foundations",
      description: "You need to learn these before starting web development",
      children: [
        {
          id: "html",
          title: "HTML",
          description: "Hyper Text Markup Language",
          resources: [
            "https://developer.mozilla.org/en-US/docs/Web/HTML"
          ]
        },
        {
          id: "css",
          title: "CSS",
          description: "Cascading Style Sheets",
          resources: [
            "https://developer.mozilla.org/en-US/docs/Web/CSS"
          ]
        }
      ]
    }
  ]
}
