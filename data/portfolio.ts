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
    "Generative AI & LLM Applications · Agentic AI · RAG & Retrieval · AI Platform & Backend · AI Product Engineering",
  location: "Texas, USA · Open to Remote & Relocation",
  email: "chaitanya.careerpaths@gmail.com",
  intro:
    "I’m a software engineer with 3+ years across enterprise and regulated pharmaceutical systems, now focused on Applied AI. I build LLM, retrieval, agentic, and backend systems around explicit state, authorization, evaluation, observability, and recovery.",
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
      title: "Applied AI & LLM Applications",
      text: "LLM applications, structured outputs, full-stack AI products, model routing, evaluation, and grounded workflows.",
    },
    {
      title: "Agentic AI",
      text: "LangGraph and MCP workflows with explicit state, policy gates, human approval, controlled tool execution, checkpoints, and recovery.",
    },
    {
      title: "RAG & Retrieval",
      text: "Hybrid BM25 + pgvector retrieval, reranking, citations, versioned evaluation, and measurable retrieval quality.",
    },
    {
      title: "AI Platform & Backend",
      text: "Python/FastAPI services, PostgreSQL, Redis/Kafka runtimes, identity, observability, cloud delivery, and reliability engineering.",
    },
  ],
  projects: [
    {
      name: "Agentic AI Platform",
      label: "Flagship · Agentic AI / AI Platform",
      role: "Governed agent orchestration and controlled execution",
      summary:
        "Built around one rule: planning is not authorization. The platform separates agent proposals from permission to execute, using policy checks, human approval, controlled MCP tool paths, durable checkpoints, rollback, evaluation, and auditability across a broader LangGraph-based runtime.",
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
          "How can AI agents do useful software work without letting model output become execution authority?",
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
        "Reworked after dense similarity repeatedly returned passages that were related to a regulatory question but were not the evidence needed to answer it. The current design combines BM25 + PostgreSQL/pgvector hybrid retrieval, reranking, citations, review, and traced evaluation.",
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
          "How do you retrieve the evidence that actually answers a regulatory question, then keep generation tied to that evidence through citations, review, and evaluation?",
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
        "Built on the rule that AI can assist the workflow without becoming the source of truth. An 11-entity relational model and deterministic rules own freshness, deduplication, permissions, and application state, while pgvector and LLM services assist matching and preparation.",
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
        "Explores a simple but important boundary: a result can be relevant and still be the wrong information to show a requester. The system combines semantic retrieval with deterministic PII controls, role-conditioned behavior, grounded answers, and repeatable evaluation.",
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
      name: "Medicine Verification Service",
      label: "Supporting · Backend Engineering",
      role: "Typed backend API and service architecture",
      summary:
        "Started from a deliberately narrower claim: finding a regulatory record does not prove a physical medicine is authentic. The service returns matched, not found, or ambiguous through typed FastAPI/Pydantic contracts and explicit service/source/repository boundaries.",
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
        "Models workflow reliability before infrastructure is added: explicit PENDING, QUEUED, COMPLETED, and FAILED states, idempotency requirements, queue eligibility, controlled transitions, and structured delivery outcomes.",
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
  title: "Applied AI engineering built on a software-systems foundation.",
  paragraphs: [
    "I’m a software engineer with 3+ years across enterprise and regulated pharmaceutical systems. I started with Python/SQL data workflows, enterprise search, document processing, ETL, testing, and automation before moving into LLM applications, retrieval, agentic systems, and AI backends.",
    "The problems I care about are usually around the model rather than just the model itself: what is allowed to execute, what state is authoritative, whether retrieval can be measured, how evidence stays traceable, and how a system behaves when a provider, workflow, or deployment fails.",
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
      "Independent engineering across connected Applied AI systems spanning agentic workflows, regulated RAG, AI backends, and full-stack AI products.",
    highlights: [
      "Separated agent planning from execution authority in a LangGraph PRD-to-software platform, with policy checks, approval gates, controlled MCP tool paths, recoverable checkpoints, 94.8% task completion, and 3,950+ regression tests.",
      "Reworked pharmaceutical retrieval after dense similarity returned related but weak evidence; hybrid BM25 + PostgreSQL/pgvector retrieval, query rewriting, and reranking reached 91.4% Recall@10, 0.86 MRR, and 0.89 NDCG across a 1,000+ page corpus.",
      "Standardized shared backend/platform concerns across projects with async FastAPI, Redis/Kafka, OAuth2/OIDC/JWT, LiteLLM, Langfuse/OpenTelemetry, Terraform, Kubernetes/Helm, AWS, and GitHub Actions.",
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
      "Worked on Python/FastAPI backends and AI-assisted document workflows for enterprise and pharmaceutical software.",
    highlights: [
      "Took documents from ingestion and structured extraction through chunking, embeddings, semantic retrieval, transformation, and downstream application integration.",
      "Integrated LLM APIs with PostgreSQL/vector search behind typed REST contracts and Pydantic validation so model output entered downstream systems as structured application data.",
      "Shipped and supported services through Docker, AWS, and CI/CD while translating regulated requirements around traceability, access control, and auditability into implementation work.",
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
      "Worked across Python, SQL, enterprise search, document processing, data workflows, automation, and regulated pharmaceutical systems.",
    highlights: [
      "Created Python/SQL workflows for ETL, migration, reconciliation, validation, transformation, and reporting across regulated-business systems.",
      "Built document-processing and enterprise-search workflows around metadata normalization, controlled records, versioning, approvals, RBAC, audit trails, and secure information access.",
      "Designed relational data models and data-quality controls while supporting testing, integrations, deployment, legacy modernization, and QMS/CAPA/deviation/change-control workflows.",
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
