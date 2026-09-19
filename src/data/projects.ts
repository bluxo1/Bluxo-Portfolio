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
    stack: ['Python', 'FastAPI', 'Postgres', 'Chroma', 'React', 'Vite', 'Docker', 'RAGAS'], result: 'Project-reported eval on a 30-pair golden set: citation precision 1.000 (24/24) against a ≥0.95 target, unsupported-claim escape rate 0, and a 0.200 web-fallback rate; RAGAS faithfulness and relevancy targets are gated behind live-LLM runs.', status: 'Complete', url: 'https://github.com/bluxo1/Axiom-RAG', featured: true, accent: '#2dd4bf'
  },
  {
    slug: 'kimi-discord-rich-presence', name: 'Kimi Desktop Discord Presence', category: 'Tooling / desktop integration',
    summary: 'A background client that surfaces your Kimi Desktop session in Discord Rich Presence — current project, git branch, model, session duration, and quota usage — without touching credentials or modifying Kimi.',
    problem: 'Show live Kimi Desktop activity on Discord without a bot token, credential access, or intercepting network traffic.',
    solution: "Reads structured events from Kimi Desktop's own Electron log and talks only to Discord's local IPC pipe. Whitelist-based parsing drops prompt text and identifiers, and the git branch comes from reading .git/HEAD directly rather than shelling out.",
    contribution: 'Author of the client, its YAML config layer, windowless Windows autostart and packaging, a --doctor diagnostic mode, and privacy tests.',
    stack: ['Python', 'psutil', 'YAML', 'PyInstaller', 'pytest'], result: 'MIT-licensed and Windows-focused. Quota is shown as the consumed share (omniRatio) — a snapshot, since Kimi does not write per-message token counts locally.', status: 'MIT licensed', url: 'https://github.com/bluxo1/Kimi-Discord-Rich-Presence-For-kimi-desktop', featured: false, accent: '#f59e0b'
  },
  {
    slug: 'rpc-for-unity-hub', name: 'Discord Presence for Unity Hub', category: 'Tooling / desktop integration',
    summary: 'A Discord Rich Presence daemon that shows which Unity project you have open, the Unity version, and elapsed session time — no editor plugin, bot token, or project upload required.',
    problem: 'Surface current Unity work in Discord without a Unity Editor plugin, a Discord bot token, or uploading project contents.',
    solution: 'Detects the running editor by scanning the process table for a Unity process launched with -projectPath, maps it to a Discord activity, and communicates over Discord\'s local IPC. Handles idle states, config hot reload, and Discord\'s field limits.',
    contribution: 'Author of the TypeScript daemon, config validation and hot reload, a system tray, the Windows startup task, and the standalone executable plus Inno Setup release pipeline.',
    stack: ['TypeScript', 'Node.js', 'Vitest', 'Inno Setup'], result: 'MIT-licensed. Core detection and presence mapping ship as a packaged Windows executable; active-scene reporting and macOS/Linux packaging are noted as not yet done.', status: 'MIT licensed', url: 'https://github.com/bluxo1/RPC-for-Unity-Hub', featured: false, accent: '#38bdf8'
  },
  {
    slug: 'bluxo-portfolio', name: 'This Portfolio', category: 'Web / personal site',
    summary: 'The site you are on — a menu-driven, command-center portfolio with an original comic-book aesthetic, full keyboard navigation, a custom cursor, and reduced-motion support.',
    problem: 'Present the work as a memorable, interactive experience without sacrificing accessibility, performance, or clarity.',
    solution: 'A React and TypeScript single-page app with client-side routing, a CSS token system driving the whole visual identity, animated route transitions, and typed content modules kept separate from presentation.',
    contribution: 'Sole author — design, build, content model, animation, and Vercel deployment.',
    stack: ['React', 'TypeScript', 'Vite', 'React Router', 'CSS'], result: 'Deployed on Vercel with Speed Insights and Web Analytics. Static-first, with content in typed data modules.', status: 'Live', url: 'https://github.com/bluxo1/Bluxo-Portfolio', featured: false, accent: '#22c55e'
  }
]
