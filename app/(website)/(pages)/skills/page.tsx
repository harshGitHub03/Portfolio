import { Metadata } from "next"

import { fetchSkillCategories } from "@/lib/fetches"
import SkillsShowcase from "@/components/pages/skills/skills-showcase"

export const metadata: Metadata = {
  title: "Skills",
  description: "A showcase of my technical skills across frontend, backend, databases, and tooling.",
}

export default async function SkillsPage() {
  const categories = await fetchSkillCategories()

  return <SkillsShowcase categories={categories} />
}
