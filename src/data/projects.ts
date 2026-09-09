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
    slug: 'regressa', name: 'Regressa', category: 'Featured / developer tooling',
    summary: 'A prompt evaluation and regression-testing framework. Editing a prompt has no compiler and no type system, so a change that fixes one behavior can silently break others. Regressa gives that workflow a test suite, a baseline, and a diff.',
    problem: 'A single codebase with no test suite for model behavior, so prompt and parameter changes surface regressions only after they reach production. Prompts have no type system, and model outputs are nondeterministic, so drift is easy to miss.',
    solution: 'YAML-defined suites with cases, model targets, and assertions — deterministic checks (contains, regex, JSON schema, latency, cost) plus model-graded ones (rubric judges, embedding similarity). Runs persist to SQLite with one pinned baseline; the diff classifies each pair as regressed, fixed, added, or removed, and diff versus compare covers single-target regression and two-target A/B promotion.',
    contribution: 'Author and maintainer of the framework, its test suite, and the CI workflow it documents.',
    stack: ['Python', 'Pydantic', 'Typer', 'SQLite', 'Anthropic SDK', 'pytest'], result: 'MIT-licensed public repository. Its results are operational rather than benchmark-based: pass/fail exit codes gate CI, the score is an early-warning signal, and a mock provider runs the whole harness offline.', status: 'MIT licensed', url: 'https://github.com/bluxo1/Regressa', featured: true, accent: '#ff4d5a'
  },
  {
    slug: 'network-intrusion-detection-system', name: 'ML-Based Network Intrusion Detection System', category: 'Featured / machine learning',
    summary: 'A PyTorch-based network intrusion detection system served through a Flask web app. It analyzes NSL-KDD network traffic with a two-stage model: first detecting normal versus attack traffic, then classifying attack families.',
    problem: 'Detect malicious network traffic while handling highly imbalanced attack classes and the difference between in-distribution validation data and unseen test attacks.', solution: 'Use a binary high-recall gate followed by a multi-class classifier, with serialized preprocessing shared between training and inference.', contribution: 'Built the training, preprocessing, inference, Flask web layer, JSON API, tests, and evaluation workflow represented in the repository.',
    stack: ['Python', 'PyTorch', 'Flask', 'NSL-KDD'], result: 'The repository reports 99.6% validation accuracy and 78.2% multi-class accuracy on KDDTest+; those figures are project-reported benchmark results, not independent validation.', status: 'Public repository', url: 'https://github.com/bluxo1/Network-Intrusion-Detection-System', featured: true, accent: '#8f7dff'
  }
]
