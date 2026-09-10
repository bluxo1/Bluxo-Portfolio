export type SkillGroup = { title: string; eyebrow: string; skills: string[] }
export const skillGroups: SkillGroup[] = [
  { title: 'Languages', eyebrow: '01 / language', skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Bash'] },
  { title: 'Frameworks & libraries', eyebrow: '02 / intelligence', skills: ['LangGraph', 'LangChain', 'Next.js', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Hugging Face', 'Pandas', 'NumPy', 'Flask'] },
  { title: 'Cloud & devops', eyebrow: '03 / systems', skills: ['AWS', 'GCP', 'Docker', 'Git', 'Vercel'] },
  { title: 'Databases', eyebrow: '04 / storage', skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'MySQL', 'SQLite'] }
]
