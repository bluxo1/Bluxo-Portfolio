export type Project = {
  slug: string
  name: string
  category: string
  summary: string
  problem: string
  solution: string
  contribution: string
  stack: string[]
  result: string
  status: string
  url: string
  featured: boolean
  accent: string
}

export const projects: Project[] = [
  {
    slug: 'regressa', name: 'Regressa', category: 'Featured / repository',
    summary: 'A project by Shikhar Sharma. The repository link is live, while the detailed case-study copy remains intentionally pending source verification.',
    problem: 'Project context pending verification from the repository source.', solution: 'Project implementation pending verification from the repository source.', contribution: 'Owner-authored project; contribution details pending verification.',
    stack: ['[STACK TO VERIFY]'], result: 'No result claims added before repository inspection.', status: 'Repository linked', url: 'https://github.com/bluxo1/Regressa', featured: true, accent: '#ff4d5a'
  },
  {
    slug: 'network-intrusion-detection-system', name: 'ML-Based Network Intrusion Detection System', category: 'Featured / machine learning',
    summary: 'A PyTorch-based network intrusion detection system served through a Flask web app. It analyzes NSL-KDD network traffic with a two-stage model: first detecting normal versus attack traffic, then classifying attack families.',
    problem: 'Detect malicious network traffic while handling highly imbalanced attack classes and the difference between in-distribution validation data and unseen test attacks.', solution: 'Use a binary high-recall gate followed by a multi-class classifier, with serialized preprocessing shared between training and inference.', contribution: 'Built the training, preprocessing, inference, Flask web layer, JSON API, tests, and evaluation workflow represented in the repository.',
    stack: ['Python', 'PyTorch', 'Flask', 'NSL-KDD'], result: 'The repository reports 99.6% validation accuracy and 78.2% multi-class accuracy on KDDTest+; those figures are project-reported benchmark results, not independent validation.', status: 'Repository linked', url: 'https://github.com/bluxo1/Network-Intrusion-Detection-System', featured: true, accent: '#8f7dff'
  }
]
