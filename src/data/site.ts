export type SiteConfig = {
  name: string
  role: string
  location: string
  tagline: string
  bio: string
  aboutPoints: string[]
  currentFocus: { detail: string; projectSlug: string; label: string }
  email: string
  resumeLabel: string
}

export type SocialLink = { label: string; href: string; note: string }

export const site: SiteConfig = {
  name: 'Shikhar Sharma',
  role: 'AI Engineer',
  location: 'India',
  tagline: 'To become a star, you must burn.',
  bio: "I work on both halves of the problem. On one side that's deep learning — training and tuning models in PyTorch and TensorFlow. On the other it's everything that has to exist before a model is useful to anyone: the API in front of it, the frontend around it, the database under it, and the network between them.",
  aboutPoints: [
    'Training models in PyTorch and TensorFlow, wrangling data with NumPy and Pandas.',
    'Serving models over FastAPI and Flask.',
    'Building interfaces with React, Next.js, and Tailwind CSS.',
    'Debugging what the wire is really doing in Wireshark.',
    'Most at home in Python; also write TypeScript.'
  ],
  currentFocus: {
    detail: 'Governing shared local AI execution: who can invoke a model, how much capacity they can use, and how accounting and recovery behave when a request times out or a process fails. Arbiter v0.1.0 brings that work together in a released Python/FastAPI control plane.',
    projectSlug: 'arbiter',
    label: 'Explore Arbiter'
  },
  email: 'mailto:b1uxo@protonmail.com',
  resumeLabel: 'Request the full CV'
}

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/bluxo1', note: 'Code, experiments, and source' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/b1uxo', note: 'Experience and background' },
  { label: 'X', href: 'https://x.com/b1uxo', note: 'Updates and technical notes' },
  { label: 'Email', href: site.email, note: 'Start a conversation' }
]
