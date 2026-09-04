export type EvidenceStatus =
  | "public"
  | "private"
  | "in-progress"
  | "planned";

export type ProjectTier =
  | "flagship"
  | "featured"
  | "supporting";

export type EvidenceGroup = {
  status: EvidenceStatus;
  title: string;
  items: string[];
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type FlagshipCaseStudy = {
  problem: string;
  architecture: string[];
  engineeringFocus: string[];
};

export type Project = {
  name: string;
  label: string;
  role: string;
  summary: string;

  // V1 compatibility fields. These will be replaced by the richer
  // evidence presentation when the V2 project components are added.
  proof: string[];
  stack: string[];
  status: string;

  tier: ProjectTier;
  evidence: EvidenceGroup[];
  metrics: ProjectMetric[];
  caseStudy?: FlagshipCaseStudy;

  href: string;
};

export const portfolio = {
  name: "Chaitanya Sai",
  headline: "Applied AI Engineer",
  positioning:
    "Generative AI · LLMs · RAG · Agentic AI · AI Platform & Backend Engineering",
  location: "Texas, USA · Open to Remote & Relocation",
  email: "chaitanya.careerpaths@gmail.com",
  intro:
    "I build applied AI systems that connect model intelligence with production engineering: retrieval, agent orchestration, governed execution, APIs, evaluation, backend architecture, and reliability.",
  resumeUrl: "",
  links: {
    github: "https://github.com/chaitanyaAI-careers",
    linkedin: "https://www.linkedin.com/in/chaitanyaai-careers/",
    email: "mailto:chaitanya.careerpaths@gmail.com",
  },
  statusLegend: [
    {
      status: "public" as const,
      symbol: "●",
      title: "Implemented — Public",
      text: "Verifiable implementation evidence exists in the public repository.",
    },
    {
      status: "private" as const,
      symbol: "◆",
      title: "Implemented — Private",
      text: "Broader implementation exists outside the recruiter-safe public repository.",
    },
    {
      status: "in-progress" as const,
      symbol: "◐",
      title: "In Progress",
      text: "Actively being developed or strengthened.",
    },
    {
      status: "planned" as const,
      symbol: "○",
      title: "Platform Direction",
      text: "Architecture or roadmap direction; not claimed as implemented.",
    },
  ],
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
      title: "Architecture & Reliability",
      text: "Service boundaries, data flows, persistence, authorization, workflow reliability, observability, and deployment architecture.",
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
        "Flagship agentic AI and AI-platform project with public evidence for role routing, approval and risk controls, controlled-execution boundaries, provider abstraction, deterministic evaluation, testing, and CI. Broader platform development extends into multi-agent orchestration, governance, auditability, and MCP integration.",
      proof: [
        "Role routing and approval / risk controls",
        "Controlled-execution boundaries",
        "Provider abstraction and deterministic evaluation",
        "Automated testing and GitHub Actions CI",
      ],
      stack: ["Python", "pytest", "GitHub Actions", "Evaluation", "Human Approval"],
      href: "https://github.com/chaitanyaAI-careers/Agentic-ai-platform",
      status: "Active flagship",
      tier: "flagship",
      metrics: [
        { label: "Public verification", value: "7 tests + CI" },
        { label: "Primary signal", value: "Agentic AI Platform" },
      ],
      evidence: [
        {
          status: "public",
          title: "Public Evidence",
          items: [
            "Role routing",
            "Approval and risk controls",
            "Controlled-execution boundaries",
            "Provider abstraction",
            "Deterministic evaluation",
            "Automated tests and GitHub Actions CI",
          ],
        },
        {
          status: "private",
          title: "Broader Platform Implementation",
          items: [
            "Planner / Coder / Reviewer / Tester orchestration",
            "Governance and policy gates",
            "Auditability and execution lineage",
            "Model routing and broader operator workflows",
          ],
        },
        {
          status: "in-progress",
          title: "In Progress",
          items: [
            "MCP client / server foundation",
            "MCP discovery and schema handling",
            "Authorized MCP invocation",
          ],
        },
        {
          status: "planned",
          title: "Platform Direction",
          items: [
            "PostgreSQL durable workflow state",
            "Pause / persist / restart / resume",
            "Dockerized runtime",
            "Expanded observability",
          ],
        },
      ],
      caseStudy: {
        problem:
          "How can multi-agent systems execute useful work while preserving explicit authorization, human control, evaluation, and operational boundaries?",
        architecture: [
          "Request / task intake",
          "Role routing and orchestration",
          "Approval and policy gates",
          "Controlled execution",
          "Evaluation and auditability",
        ],
        engineeringFocus: [
          "Agent orchestration",
          "Human-in-the-loop control",
          "Governance",
          "Evaluation",
          "AI platform reliability",
        ],
      },
    },
    {
      name: "Pharma AI Platform",
      label: "Flagship · Regulated AI / RAG",
      role: "Grounded and traceable regulated-AI contracts",
      summary:
        "Regulated-AI engineering showcase with public evidence for retrieval-evidence contracts, citation identity, grounded outputs, structured summaries, traceability, human-review transitions, testing, and CI. Retrieval, document-intelligence, and LLM expansion remain broader platform directions.",
      proof: [
        "Retrieval-evidence and citation contracts",
        "Grounded-answer and structured-summary contracts",
        "Human-review transitions and trace IDs",
        "8 automated tests and GitHub Actions CI",
      ],
      stack: ["Python", "Dataclasses", "Enum", "pytest", "GitHub Actions"],
      href: "https://github.com/chaitanyaAI-careers/Pharma-ai-platform",
      status: "Active flagship",
      tier: "flagship",
      metrics: [
        { label: "Public verification", value: "8 tests + CI" },
        { label: "Primary signal", value: "Regulated AI" },
      ],
      evidence: [
        {
          status: "public",
          title: "Public Evidence",
          items: [
            "Retrieval-evidence contracts",
            "Stable citation identity",
            "Grounded-answer contracts",
            "Structured summary contracts",
            "Trace IDs and human-review transitions",
            "Automated tests and GitHub Actions CI",
          ],
        },
        {
          status: "planned",
          title: "Broader Platform Direction",
          items: [
            "Document intelligence and version-aware preparation",
            "Dense / lexical / hybrid retrieval",
            "Metadata filtering and reranking",
            "Retrieval and citation evaluation",
            "Governance and review expansion",
          ],
        },
      ],
      caseStudy: {
        problem:
          "How should regulated document-intelligence systems represent evidence, grounded outputs, review state, and traceability before adding more complex retrieval and LLM layers?",
        architecture: [
          "Document / evidence inputs",
          "Evidence and citation contracts",
          "Grounded or structured output",
          "Human review",
          "Traceability and evaluation",
        ],
        engineeringFocus: [
          "Grounding",
          "Citation integrity",
          "Structured outputs",
          "Human review",
          "Regulated-AI engineering",
        ],
      },
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
      tier: "featured",
      metrics: [
        { label: "Public verification", value: "19 tests / 7 files + CI" },
        { label: "Primary signal", value: "Product Engineering" },
      ],
      evidence: [
        {
          status: "public",
          title: "Public Evidence",
          items: [
            "Governed connector policy",
            "Job normalization",
            "Freshness classification",
            "Cross-source deduplication",
            "Deterministic skill matching",
            "React UI example, Vitest, type checking, and CI",
          ],
        },
        {
          status: "private",
          title: "Broader Product Implementation",
          items: [
            "Next.js / React application architecture",
            "PostgreSQL / Prisma persistence",
            "Authentication foundations",
            "Resume and application workflows",
            "ATS connector architecture",
          ],
        },
        {
          status: "in-progress",
          title: "Currently Strengthening",
          items: [
            "Private-monorepo test coverage",
            "Playwright end-to-end coverage",
            "Retry / backoff and connector observability",
            "Formal matching evaluation",
          ],
        },
      ],
    },
    {
      name: "HR AI Content System",
      label: "Supporting · Responsible AI / Evaluation",
      role: "Governed enterprise retrieval",
      summary:
        "Governed enterprise-retrieval project implementing SentenceTransformer embeddings, semantic search, deterministic PII redaction, role-conditioned governance, grounded extractive answers, and evaluation.",
      proof: [
        "SentenceTransformer embeddings and NumPy-backed retrieval",
        "Deterministic PII / sensitive-term redaction",
        "Role-conditioned governance; RBAC-aware retrieval is roadmap",
        "17-test unit/integration suite and GitHub Actions CI",
      ],
      stack: ["Python", "Sentence Transformers", "NumPy", "scikit-learn", "Gradio", "pytest"],
      href: "https://github.com/chaitanyaAI-careers/HR-ai-content-system",
      status: "Supporting project",
      tier: "featured",
      metrics: [
        { label: "Public verification", value: "17 tests + CI" },
        { label: "Primary signal", value: "Governed Retrieval" },
      ],
      evidence: [
        {
          status: "public",
          title: "Public Evidence",
          items: [
            "SentenceTransformer embeddings",
            "NumPy-backed semantic retrieval",
            "Deterministic PII redaction",
            "Role-conditioned governance",
            "Grounded extractive answers",
            "Golden-question evaluation and CI",
          ],
        },
        {
          status: "planned",
          title: "Research Direction",
          items: [
            "Authorization-aware / RBAC retrieval",
            "Recall@K, MRR, and NDCG",
            "Leakage-rate measurement",
            "Governance regression benchmarking",
          ],
        },
      ],
    },
    {
      name: "Medicine Verification Platform",
      label: "Supporting · Backend Engineering",
      role: "Typed backend API and service architecture",
      summary:
        "Backend/API engineering showcase implementing FastAPI, Pydantic contracts, service and repository boundaries, synthetic regulatory-source adapters, structured verification outcomes, health checks, testing, and CI.",
      proof: [
        "FastAPI health and verification endpoints",
        "Pydantic request / response validation",
        "Service, repository, and regulatory-source abstractions",
        "7 automated tests and GitHub Actions CI",
      ],
      stack: ["Python", "FastAPI", "Pydantic", "pytest", "GitHub Actions"],
      href: "https://github.com/chaitanyaAI-careers/Medicine-verification-platform",
      status: "Supporting project",
      tier: "supporting",
      metrics: [
        { label: "Public verification", value: "7 tests + CI" },
        { label: "Primary signal", value: "Backend / API" },
      ],
      evidence: [
        {
          status: "public",
          title: "Public Evidence",
          items: [
            "FastAPI health and verification endpoints",
            "Pydantic request / response contracts",
            "Service-layer orchestration",
            "Repository abstraction",
            "Synthetic regulatory-source adapter",
            "Automated API / service tests and CI",
          ],
        },
        {
          status: "planned",
          title: "Platform Direction",
          items: [
            "Database-backed persistence",
            "Real regulatory-data integration",
            "Containerization",
            "Authentication and authorization",
          ],
        },
      ],
    },
    {
      name: "Nudge",
      label: "Supporting · Reliability / Workflow Systems",
      role: "Workflow contracts and reliability-oriented state management",
      summary:
        "Systems-engineering showcase implementing scheduled-work contracts, queue eligibility, idempotency requirements, explicit lifecycle states, controlled transitions, delivery outcomes, testing, and CI.",
      proof: [
        "Pending → queued → completed / failed lifecycle",
        "Queue eligibility and idempotency-key validation",
        "Invalid-transition and delivery-order enforcement",
        "8 automated tests and GitHub Actions CI",
      ],
      stack: ["Python", "Dataclasses", "Enum", "pytest", "GitHub Actions"],
      href: "https://github.com/chaitanyaAI-careers/Nudge",
      status: "Supporting project",
      tier: "supporting",
      metrics: [
        { label: "Public verification", value: "8 tests + CI" },
        { label: "Primary signal", value: "Workflow Reliability" },
      ],
      evidence: [
        {
          status: "public",
          title: "Public Evidence",
          items: [
            "Scheduled-work contracts",
            "Queue eligibility rules",
            "Idempotency-key requirements",
            "Explicit workflow lifecycle states",
            "Controlled delivery transitions",
            "Automated tests and CI",
          ],
        },
        {
          status: "planned",
          title: "Platform Direction",
          items: [
            "Scheduler and worker runtime",
            "Durable persistence",
            "Retry / backoff policy",
            "Notification adapters",
            "Trusted-contact workflows",
          ],
        },
      ],
    },
  ] satisfies Project[],
  skills: {
    publicEvidence: [
      "Python",
      "FastAPI",
      "Pydantic",
      "TypeScript",
      "React",
      "Sentence Transformers",
      "Semantic Retrieval",
      "Evaluation",
      "Human-in-the-Loop",
      "REST APIs",
      "pytest",
      "Vitest",
      "GitHub Actions",
      "AI Governance",
      "Reliability Engineering",
    ],
    broaderDirection: [
      "Generative AI",
      "LLM Applications",
      "RAG",
      "Hybrid Retrieval",
      "Agentic AI",
      "Model Routing",
      "PostgreSQL",
      "SQLAlchemy",
      "Next.js",
      "Prisma",
      "Authentication",
      "Docker",
      "Observability",
    ],
  },
};
