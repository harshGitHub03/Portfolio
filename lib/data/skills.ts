export interface Skill {
  name: string
}

export interface SkillCategory {
  _id: string
  title: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    _id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'Redux' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    _id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
    ],
  },
  {
    _id: 'databases',
    title: 'Databases',
    skills: [
      { name: 'MongoDB' },
      { name: 'SQL' },
    ],
  },
  {
    _id: 'tools',
    title: 'Tools & Integrations',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'REST APIs' },
      { name: 'OpenAI' },
      { name: 'Mistral AI' },
      { name: 'CI/CD' },
      { name: 'VPS Deployment' },
    ],
  },
]
