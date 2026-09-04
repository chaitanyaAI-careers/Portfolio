export type Project = {
  name: string;
  label: string;
  role: string;
  summary: string;
  proof: string[];
  stack: string[];
  href: string;
  status: string;
};

export const portfolio = {
  name: "Chaitanya Sai",
  headline: "Applied AI Engineer",
  positioning:
    "Generative AI · RAG · Agentic AI · AI Platform Engineering · System Design",
  location: "Milwaukee, WI · Open to Remote & Relocation",
  email: "chaitanya.careerpaths@gmail.com",
  intro:
    "I build applied AI systems that connect model intelligence with production engineering: retrieval, agent orchestration, governed execution, APIs, evaluation, backend architecture, and reliability.",
  resumeUrl: "",
  links: {
    github: "https://github.com/chaitanyaAI-careers",
    linkedin: "https://www.linkedin.com/in/chaitanyaai-careers/",
    huggingface: "https://huggingface.co/chaitanyaAI-careers",
    email: "mailto:chaitanya.careerpaths@gmail.com",
  },
  focus: [
    {
      title: "Applied AI",
      text: "LLM applications, retrieval systems, structured outputs, grounded workflows, evaluation, and human oversight.",
    },
    {
      title: "AI Platforms",
      text: "Orchestration, policy gates, tool integration, workflow state, auditability, model routing, and operational controls.",
    },
    {
      title: "System Design",
      text: "API boundaries, data flows, persistence, reliability, authorization, event-driven workflows, observability, and deployment architecture.",
    },
    {
      title: "Backend Engineering",
      text: "Python, FastAPI, TypeScript, PostgreSQL-oriented systems, REST APIs, Docker, tests, and production-minded service design.",
    },
  ],
  projects: [
    {
      name: "Agentic AI Platform",
      label: "Flagship · Agentic AI / AI Platform",
      role: "Governed agent orchestration and controlled execution",
      summary:
        "A local-first agentic AI control plane centered on role-based agents, approval gates, sandboxed execution, rollback, auditability, evaluation, model routing, and policy-aware workflows.",
      proof: [
        "Planner / Coder / Reviewer / Tester roles",
        "Human approval and execution gates",
        "Sandbox, rollback, audit and evaluation workflows",
        "Model registry and local-provider routing",
      ],
      stack: ["Python", "FastAPI", "Pydantic", "pytest", "Ollama"],
      href: "https://github.com/chaitanyaAI-careers/Agentic-ai-platform",
      status: "Active flagship",
    },
    {
      name: "Pharma AI Platform",
      label: "Flagship · Regulated AI / RAG",
      role: "Document intelligence for regulated workflows",
      summary:
        "A consolidated pharma AI platform direction spanning document intelligence, retrieval, summarization, compliance workflows, citations, governance, review, and evaluation.",
      proof: [
        "Pharma-focused document workflows",
        "Retrieval and grounded-answer architecture",
        "Governance / audit-oriented design",
        "Consolidation target for prior pharma MVP logic",
      ],
      stack: ["Python", "FastAPI", "RAG", "LLMs", "Vector Retrieval"],
      href: "https://github.com/chaitanyaAI-careers/Pharma-ai-platform",
      status: "Active flagship",
    },
    {
      name: "Job Copilot",
      label: "Featured · Product Engineering",
      role: "Job intelligence and workflow product",
      summary:
        "A product-engineering project focused on governed job ingestion, normalization, freshness, deduplication, candidate intelligence, and application workflow design.",
      proof: [
        "Deterministic ingestion contracts",
        "Freshness and deduplication logic",
        "Type-safe public showcase",
        "Vitest verification and CI-oriented structure",
      ],
      stack: ["TypeScript", "React", "Node.js", "Vitest", "GitHub Actions"],
      href: "https://github.com/chaitanyaAI-careers/Job-copilot",
      status: "Portfolio-ready showcase",
    },
    {
      name: "HR AI Content System",
      label: "Supporting · Responsible AI / Evaluation",
      role: "Governed enterprise retrieval",
      summary:
        "A retrieval and evaluation project differentiated by PII handling, RBAC-aware access controls, grounded responses, and measurable retrieval quality.",
      proof: [
        "PII-aware content handling",
        "RBAC-aware retrieval direction",
        "Golden-question evaluation",
        "Responsible AI and governance emphasis",
      ],
      stack: ["Python", "Embeddings", "Retrieval", "PII", "RBAC"],
      href: "https://github.com/chaitanyaAI-careers/HR-ai-content-system",
      status: "Supporting project",
    },
    {
      name: "Medicine Verification Platform",
      label: "Supporting · Backend Engineering",
      role: "API, database and service architecture",
      summary:
        "A deliberately non-LLM-heavy project used to demonstrate traditional backend engineering: APIs, validation, relational persistence, containerized services, and integration-oriented design.",
      proof: [
        "FastAPI service layer",
        "SQLAlchemy / PostgreSQL-oriented persistence",
        "REST API and validation patterns",
        "Docker-based local architecture",
      ],
      stack: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Docker", "REST"],
      href: "https://github.com/chaitanyaAI-careers/Medicine-verification-platform",
      status: "Supporting project",
    },
    {
      name: "Nudge",
      label: "Supporting · Reliability / Workflow Systems",
      role: "Scheduled workflows and notification architecture",
      summary:
        "A full-stack supporting project positioned around reliable scheduled check-ins, background processing, notification workflows, retries, idempotency, and trusted-contact flows.",
      proof: [
        "Authentication and trusted-contact workflow",
        "Backend / frontend integration",
        "PostgreSQL-oriented application design",
        "Reliability specialization roadmap",
      ],
      stack: ["FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Docker"],
      href: "https://github.com/chaitanyaAI-careers/Nudge",
      status: "Supporting / evolving",
    },
  ] satisfies Project[],
  skills: [
    "Python",
    "FastAPI",
    "TypeScript",
    "React",
    "Next.js",
    "RAG",
    "Hybrid Retrieval",
    "LLM Applications",
    "Agentic AI",
    "Evaluation",
    "Guardrails",
    "Human-in-the-Loop",
    "REST APIs",
    "PostgreSQL",
    "Docker",
    "System Design",
    "AI Governance",
    "Observability",
  ],
};
