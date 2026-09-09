export type SkillGroup = { title: string; eyebrow: string; skills: string[]; evidence: string }
export const skillGroups: SkillGroup[] = [
  { title: 'Languages', eyebrow: '01 / language', skills: ['Python', 'TypeScript', 'JavaScript', 'MySQL'], evidence: 'Primary languages and database work shown in Shikhar’s supplied skill profile.' },
  { title: 'AI / ML & data', eyebrow: '02 / intelligence', skills: ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'CatBoost'], evidence: 'Deep learning, model tuning, and data wrangling across the ML workflow.' },
  { title: 'Backend & web', eyebrow: '03 / interface', skills: ['FastAPI', 'Flask', 'React', 'Next.js', 'Tailwind CSS', 'PostgreSQL'], evidence: 'Model-serving APIs, frontend interfaces, and the data layer around them.' },
  { title: 'Tools', eyebrow: '04 / systems', skills: ['Linux', 'Git', 'Docker', 'Postman', 'Wireshark'], evidence: 'Development, deployment, API testing, and network debugging.' }
]
