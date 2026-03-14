"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { IconType } from "react-icons"
import {
  SiReact, SiRedux, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGit,
  SiGithub, SiOpenai, SiLinux, SiNextdotjs,
} from "react-icons/si"
import { TbApi, TbBrain, TbServer } from "react-icons/tb"

import Container from "@/components/global/container"
import { SkillCategory } from "@/lib/data/skills"

/* ─── icon + colour map ─────────────────────────────────────── */
const SKILL_META: Record<string, { icon: IconType; color: string }> = {
  "React.js":       { icon: SiReact,        color: "#61DAFB" },
  "Next.js":        { icon: SiNextdotjs,    color: "#000000" },
  "Redux":          { icon: SiRedux,        color: "#764ABC" },
  "Tailwind CSS":   { icon: SiTailwindcss,  color: "#06B6D4" },
  "HTML5":          { icon: SiHtml5,        color: "#E34F26" },
  "CSS3":           { icon: SiCss3,         color: "#1572B6" },
  "Node.js":        { icon: SiNodedotjs,    color: "#339933" },
  "Express.js":     { icon: SiExpress,      color: "#000000" },
  "MongoDB":        { icon: SiMongodb,      color: "#47A248" },
  "SQL":            { icon: SiMysql,        color: "#4479A1" },
  "Git":            { icon: SiGit,          color: "#F05032" },
  "GitHub":         { icon: SiGithub,       color: "#181717" },
  "REST APIs":      { icon: TbApi,          color: "#6B7280" },
  "OpenAI":         { icon: SiOpenai,       color: "#412991" },
  "Mistral AI":     { icon: TbBrain,        color: "#FF7000" },
  "CI/CD":          { icon: TbServer,       color: "#6B7280" },
  "VPS Deployment": { icon: SiLinux,        color: "#FCC624" },
}

/* ─── marquee ───────────────────────────────────────────────── */
const MARQUEE_TEXT = (["Skills ✦ ", "Frontend ✦ ", "Backend ✦ ", "Databases ✦ ", "Tools ✦ "]).join("")

function Marquee() {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, -500])

  return (
    <div className="relative overflow-x-hidden pt-10 pb-6 md:pt-16 md:pb-10 border-b border-black/8">
      <motion.p
        className="whitespace-nowrap text-[2.6rem] md:text-[5rem] font-extralight tracking-tighter text-black/10 select-none"
        style={{ x }}
      >
        {[...Array(4)].map(() => MARQUEE_TEXT).join("")}
      </motion.p>
    </div>
  )
}

/* ─── single skill card ─────────────────────────────────────── */
function SkillCard({ name, index }: { name: string; index: number }) {
  const meta = SKILL_META[name]
  const Icon = meta?.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-black/8 bg-white/50 hover:bg-black hover:border-black transition-colors duration-200 cursor-default"
    >
      {Icon && (
        <Icon
          size={18}
          style={{ color: meta.color }}
          className="shrink-0 group-hover:!text-white transition-colors duration-200"
        />
      )}
      <span className="text-sm font-medium tracking-tight text-black/80 group-hover:text-white transition-colors duration-200">
        {name}
      </span>
    </motion.div>
  )
}

/* ─── category row ──────────────────────────────────────────── */
function CategoryRow({ category, rowIndex }: { category: SkillCategory; rowIndex: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: rowIndex * 0.1, duration: 0.5, ease: "easeOut" }}
      className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-10 py-10 border-b border-black/8 last:border-b-0"
    >
      {/* label */}
      <div className="flex md:flex-col md:pt-1">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-black/35">
          {category.title}
        </p>
        <span className="ml-2 md:ml-0 md:mt-1 text-xs text-black/20">
          {category.skills.length} {category.skills.length === 1 ? "skill" : "skills"}
        </span>
      </div>

      {/* skill cards */}
      <ul className="flex flex-wrap gap-2.5">
        {category.skills.map((skill, i) => (
          <li key={skill.name}>
            <SkillCard name={skill.name} index={i} />
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

/* ─── page ──────────────────────────────────────────────────── */
export default function SkillsShowcase({ categories }: { categories: SkillCategory[] }) {
  return (
    <>
      {/* heading */}
      <header className="pt-8 md:pt-10">
        <Container>
          <h1 className="-ml-1 text-3xl md:text-5xl font-light leading-none tracking-tight">
            Skills
          </h1>
        </Container>
      </header>

      {/* animated marquee */}
      <Marquee />

      {/* categories */}
      <section className="py-6 md:py-10">
        <Container>
          {categories.map((category, i) => (
            <CategoryRow key={category._id} category={category} rowIndex={i} />
          ))}
        </Container>
      </section>
    </>
  )
}
