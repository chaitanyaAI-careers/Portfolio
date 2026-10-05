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
    "Agentic AI · RAG · AI Platform & Backend · AI Product Engineering",
  location: "Texas, USA · Open to Remote & Relocation",
  email: "chaitanya.careerpaths@gmail.com",
  intro:
    "I build production-oriented Applied AI systems across agentic orchestration, hybrid retrieval, AI backends, full-stack AI products, evaluation, governance, observability, reliability, and regulated software.",
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
      text: "Service boundaries, data flows, persistence, authorization, workflow reliability, and deployment architecture.",
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
        "Flagship agentic AI and AI-platform system. The public showcase demonstrates role routing, approvals, controlled execution, deterministic evaluation, testing, and CI; the verified broader implementation adds LangGraph typed-state orchestration, MCP, durable checkpoints, LiteLLM routing, Redis/Kafka runtimes, identity controls, observability, and cloud deployment.",
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
        { label: "Task completion", value: "94.8%" },
        { label: "Regression tests", value: "3,950+" },
        { label: "Public verification", value: "7 tests + CI" },
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
            "LangGraph TypedDict state graphs across Planner / Coder / Reviewer / Tester",
            "Conditional routing, durable checkpoints, graph interrupts and rollback / recovery",
            "Sandboxed MCP JSON-RPC tool execution and schema-aware context integration",
            "LiteLLM routing across Bedrock / Anthropic / OpenAI / Ollama with automated failover",
            "Redis workers, Kafka event streams, OAuth2/OIDC/JWT and SSO-ready patterns",
            "Langfuse / OpenTelemetry tracing plus Terraform, Kubernetes, Helm and AWS operations",
          ],
        },
        {
          status: "planned",
          title: "Next Evidence Surface",
          items: [
            "Additional SLO and autoscaling measurements",
            "Expanded load-testing and recovery-time evidence",
            "More public-facing implementation samples where proprietary boundaries allow",
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
        "Regulated-AI and RAG platform with public evidence for citation, grounding, review, testing, and CI plus verified broader implementation of BM25 + PostgreSQL/pgvector hybrid retrieval, HNSW/IVFFlat indexing, query rewriting, Redis caching, reranking, Bedrock-backed generation, human review, and traced evaluation.",
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
        { label: "Recall@10", value: "91.4%" },
        { label: "MRR / NDCG", value: "0.86 / 0.89" },
        { label: "Latency", value: "140 ms P50 · <420 ms P95" },
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
          status: "private",
          title: "Verified Broader Implementation",
          items: [
            "BM25 + SentenceTransformer / PostgreSQL pgvector hybrid retrieval",
            "HNSW / IVFFlat indexing, query rewriting and metadata filtering",
            "Redis retrieval caching and reranking",
            "Bedrock-backed generation and Pydantic structured outputs",
            "Langfuse / OpenTelemetry traces across retrieval, model calls and review",
            "1,000+ page corpus and 200 openFDA validation records",
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
        "Full-stack AI product spanning governed job ingestion, normalization, freshness, deduplication, resume/application workflows, deterministic state, and AI-assisted career intelligence. The public showcase remains recruiter-safe while the verified broader implementation adds PostgreSQL/pgvector, Redis/Kafka, LiteLLM, OAuth2/OIDC/JWT, FastAPI, Vercel/AWS and an 11-entity relational source of truth.",
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
        { label: "Relational model", value: "11 entities" },
        { label: "Public verification", value: "19 tests / 7 files + CI" },
        { label: "Primary signal", value: "AI Product Engineering" },
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
            "Next.js / React product architecture with an 11-entity PostgreSQL / Prisma source-of-truth model",
            "PostgreSQL/pgvector semantic matching",
            "Redis-backed workers and Kafka event-driven ingestion",
            "LiteLLM multi-model assistance with token / latency / cost tracing",
            "OAuth2/OIDC/JWT identity with SSO-ready integration patterns",
            "FastAPI services and Vercel plus AWS / Kubernetes / Helm / Terraform delivery",
          ],
        },
        {
          status: "in-progress",
          title: "Currently Strengthening",
          items: [
            "Matching-quality benchmarks and workflow-completion evidence",
            "Expanded load / latency and queue metrics",
            "Additional end-to-end product evidence",
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
        "SentenceTransformer embeddings and scikit-learn cosine-similarity retrieval",
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
            "scikit-learn cosine-similarity semantic retrieval",
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
      "LangGraph",
      "MCP",
      "LiteLLM",
      "AWS Bedrock",
      "Hybrid RAG",
      "PostgreSQL / pgvector",
      "Redis",
      "Kafka",
      "OAuth2 / OIDC / JWT",
      "Langfuse / OpenTelemetry",
      "Docker / Kubernetes / Helm",
      "Terraform / AWS",
      "Next.js / Prisma",
    ],
  },
};

export const aboutProfile = {
  eyebrow: "ABOUT",
  title: "Applied AI engineering grounded in software systems.",
  paragraphs: [
    "I am an Applied AI Engineer and software developer with 3+ years of experience across enterprise and regulated software systems, progressing from Python/SQL data, search, document processing, and automation into production-oriented Applied AI.",
    "My current work spans LangGraph/MCP orchestration, governed RAG, async FastAPI services, PostgreSQL/pgvector, Redis/Kafka runtimes, model routing, identity/security controls, observability, cloud infrastructure, evaluation, and recovery-oriented system design.",
  ],
  facts: [
    { label: "Primary", value: "Applied AI Engineering" },
    { label: "Focus", value: "GenAI · RAG · Agentic AI" },
    { label: "Engineering", value: "AI Platforms · APIs · Backend" },
    { label: "Location", value: "United States · Remote / Relocation" },
  ],
};

export const professionalExperience = [
  {
    company: "SPACTR AI Labs LLC",
    role: "Software Developer — Applied AI Engineering (Independent)",
    period: "June 2026 — Present",
    location: "United States · Remote",
    summary:
      "Independent Applied AI engineering across agentic orchestration, regulated RAG, AI backends, full-stack AI products, evaluation/observability, cloud infrastructure, workflow reliability, and cross-project platform architecture.",
    highlights: [
      "Architected LangGraph typed-state workflows across Planner, Coder, Reviewer, and Tester roles with checkpoints, interrupt-based approvals, sandboxed execution, rollback/recovery, and 94.8% benchmark task completion while preserving 3,950+ regression tests.",
      "Upgraded PharmaAI to BM25 + PostgreSQL/pgvector hybrid retrieval with HNSW/IVFFlat, reranking, Redis caching and traced evaluation, reaching 91.4% Recall@10, 0.86 MRR, 0.89 NDCG, 140 ms P50 retrieval and <420 ms P95 end-to-end latency.",
      "Built production-oriented backend/platform capabilities with async FastAPI, SSE/WebSockets, MCP, LiteLLM, Redis/Kafka, OAuth2/OIDC/JWT, Langfuse/OpenTelemetry, Terraform, Kubernetes/Helm, AWS and GitHub Actions.",
    ],
    skills: [
      "Python",
      "FastAPI",
      "Agentic AI",
      "RAG",
      "Evaluation",
      "Governance",
      "TypeScript",
    ],
  },
  {
    company: "SolutionsMax Technology Services Inc.",
    role: "Software Developer — Applied AI/ML Engineering",
    period: "February 2026 — May 2026",
    location: "Sacramento, California · Remote",
    summary:
      "Developed Python backend, document-processing, and AI-assisted workflows for enterprise and pharmaceutical software environments.",
    highlights: [
      "Built FastAPI services for document ingestion, structured extraction, retrieval, transformation, and downstream application workflows.",
      "Applied chunking, embeddings, semantic search, metadata filtering, structured outputs, PostgreSQL/vector search, and LLM integrations.",
      "Supported testing, debugging, integrations, deployment workflows, and regulated document and compliance-oriented systems.",
    ],
    skills: [
      "Python",
      "FastAPI",
      "LLMs",
      "Semantic Retrieval",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
  },
  {
    company: "SolutionsMax Technology Services Pvt. Ltd.",
    role: "Software Developer — Data, Search & Automation Systems",
    period: "June 2020 — July 2023",
    location: "Visakhapatnam, India",
    summary:
      "Worked across enterprise software and regulated pharmaceutical data workflows using Python, SQL, relational systems, ETL, testing, and technical documentation.",
    highlights: [
      "Built Python and SQL validation, transformation, ETL, migration, and reporting workflows for enterprise datasets.",
      "Contributed to QMS, CAPA, deviations, change control, controlled documentation, RBAC, audit trails, traceability, and data-integrity workflows.",
      "Supported system analysis, integrations, testing, debugging, migration, deployment, and validation-oriented engineering activities.",
    ],
    skills: [
      "Python",
      "SQL",
      "ETL",
      "Relational Databases",
      "QMS",
      "Data Integrity",
      "Testing",
    ],
  },
];
