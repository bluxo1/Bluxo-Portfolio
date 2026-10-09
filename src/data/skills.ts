export type SkillGroup = { title: string; eyebrow: string; skills: string[] }
export const skillGroups: SkillGroup[] = [
  { title: 'Languages', eyebrow: '01 / language', skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Bash'] },
  { title: 'AI, ML & evaluation', eyebrow: '02 / intelligence', skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'LangGraph', 'LangChain', 'Pandas', 'NumPy', 'RAG', 'RAGAS', 'Prompt regression testing'] },
  { title: 'Backend & web', eyebrow: '03 / applications', skills: ['FastAPI', 'Flask', 'Pydantic', 'SQLAlchemy', 'React', 'Next.js', 'Tailwind CSS'] },
  { title: 'Databases', eyebrow: '04 / storage', skills: ['PostgreSQL', 'Redis', 'SQLite', 'pgvector', 'Chroma', 'Supabase', 'MongoDB', 'MySQL'] },
  { title: 'AI infrastructure & security', eyebrow: '05 / governance', skills: ['Ollama', 'Keycloak', 'OIDC', 'Tenant isolation', 'PostgreSQL row-level security'] },
  { title: 'Cloud & delivery', eyebrow: '06 / operations', skills: ['AWS', 'GCP', 'Docker', 'Docker Compose', 'Git', 'GitHub Actions', 'pytest', 'Vitest', 'Vercel'] }
]
