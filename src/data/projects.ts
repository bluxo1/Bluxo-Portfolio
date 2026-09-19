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
  },
  {
    slug: 'axiom-rag', name: 'Axiom-RAG', category: 'Featured / retrieval-augmented generation',
    summary: 'A citation-grounded RAG agent built on the principle "start from what you can prove." Every answer claim is tied to a retrieved, verified source, low-confidence responses are flagged, and the agent falls back to live web search rather than guessing — so zero unsupported claims reach the user unflagged.',
    problem: 'LLMs hallucinate — they surface fabricated or unsupported claims with the same confidence as grounded ones, and standard RAG still lets invented citations through to the user.',
    solution: 'A pipeline that chunks and embeds documents into a vector store, then at query time retrieves context, generates answers with inline citations, verifies each citation as a hard gate, scores confidence, and routes to answer, flag, or web fallback. Fabricated citations are blocked before the UI, thresholds and budget caps are configurable, and every routing decision is logged.',
    contribution: 'Author and maintainer of the full stack — ingestion, retrieval, the verification gate, confidence routing, the FastAPI backend, React frontend, and the golden-set eval harness run in CI.',
    stack: ['Python', 'FastAPI', 'Postgres', 'Chroma', 'React', 'Vite', 'Docker', 'RAGAS'], result: 'Project-reported eval on a 30-pair golden set: citation precision 1.000 (24/24) against a ≥0.95 target, unsupported-claim escape rate 0, and a 0.200 web-fallback rate; RAGAS faithfulness and relevancy targets are gated behind live-LLM runs.', status: 'Phase 4 in progress', url: 'https://github.com/bluxo1/Axiom-RAG', featured: true, accent: '#2dd4bf'
  }
]
