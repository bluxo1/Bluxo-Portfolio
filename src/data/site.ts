export type SiteConfig = {
  name: string
  role: string
  location: string
  tagline: string
  bio: string
  aboutPoints: string[]
  email: string
  resumeLabel: string
}

export type SocialLink = { label: string; href: string; note: string }

export const site: SiteConfig = {
  name: 'Shikhar Sharma',
  role: 'AI Engineer',
  location: 'India',
  tagline: 'I build intelligent systems that make complex signals easier to understand.',
  bio: "I work on both halves of the problem. On one side that's deep learning — training and tuning models in PyTorch and TensorFlow. On the other it's everything that has to exist before a model is useful to anyone: the API in front of it, the frontend around it, the database under it, and the network between them.",
  aboutPoints: [
    'Training models in PyTorch and TensorFlow, wrangling data with NumPy and Pandas.',
    'Serving models over FastAPI and Flask.',
    'Building interfaces with React, Next.js, and Tailwind CSS.',
    'Debugging what the wire is really doing in Wireshark.',
    'Most at home in Python; also write TypeScript.'
  ],
  email: 'mailto:b1uxo@protonmail.com',
  resumeLabel: '[ADD RESUME PDF]'
}

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/bluxo1', note: 'Code, experiments, and source' },
  { label: 'X', href: 'https://x.com/b1uxo', note: 'Updates and technical notes' },
  { label: 'Email', href: site.email, note: 'Start a conversation' }
]
