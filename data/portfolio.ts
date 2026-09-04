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
    "AI Governance",
    "Observability",
  ],
};
