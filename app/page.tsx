import { ExternalIcon, GitHubIcon } from "@/components/icons";
import { SocialLinks } from "@/components/social-links";
import { portfolio } from "@/data/portfolio";

function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}



function ProjectMark({
  name,
  compact = false,
}: {
  name: string;
  compact?: boolean;
}) {
  const identities: Record<string, { mark: string; id: string }> = {
    "Agentic AI Platform": { mark: "A", id: "agentic" },
    "Pharma AI Platform": { mark: "P", id: "pharma" },
    "Job Copilot": { mark: "J", id: "job" },
    "HR AI Content System": { mark: "HR", id: "hr" },
    "Medicine Verification Platform": { mark: "M", id: "medicine" },
    "Nudge": { mark: "N", id: "nudge" },
  };

  const identity = identities[name] ?? {
    mark: name.slice(0, 1).toUpperCase(),
    id: "default",
  };

  return (
    <span
      className={`project-mark ${compact ? "project-mark-compact" : ""}`}
      data-project={identity.id}
      aria-hidden="true"
    >
      {identity.mark}
    </span>
  );
}

function FlagshipCaseStudy({
  project,
  number,
}: {
  project: (typeof portfolio.projects)[number];
  number: string;
}) {
  return (
    <article className="flagship-case">
      <div className="flagship-header">
        <div>
          <ProjectMark name={project.name} />
          <p className="flagship-number">Flagship {number}</p>
          <p className="flagship-label">{project.label}</p>
          <h3>{project.name}</h3>
          <p className="flagship-role">{project.role}</p>
        </div>

        <div className="flagship-metrics">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="flagship-body">
        <div className="flagship-copy">
          <p className="flagship-summary">{project.summary}</p>

          {project.caseStudy ? (
            <div className="case-problem">
              <span>Engineering question</span>
              <p>{project.caseStudy.problem}</p>
            </div>
          ) : null}
        </div>


      </div>

      <div className="flagship-architecture">
        <div className="flagship-architecture-heading">
          <div>
            <span>Architecture overview</span>
            <strong>{project.name}</strong>
          </div>

          <small>Evidence status is encoded directly in the diagram.</small>
        </div>

        <img
          src={
            project.name === "Agentic AI Platform"
              ? "/architecture/agentic-ai-platform.svg"
              : "/architecture/pharma-ai-platform.svg"
          }
          alt={`${project.name} architecture diagram showing public, private, in-progress, and planned capabilities`}
        />
      </div>

      {project.caseStudy ? (
        <div className="engineering-focus-row">
          <span>Engineering focus</span>

          <div>
            {project.caseStudy.engineeringFocus.map((focus) => (
              <em key={focus}>{focus}</em>
            ))}
          </div>
        </div>
      ) : null}

      <a
        className="flagship-link"
        href={project.href}
        target="_blank"
        rel="noreferrer"
      >
        Explore repository
        <ExternalIcon />
      </a>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-nav">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Chaitanya Sai home">
            <span className="brand-mark">CS</span>
            <span className="brand-copy">
              <strong>Chaitanya Sai</strong>
              <small>Applied AI Engineer</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#architecture">Architecture</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="availability">
            <span />
            Open to full-time Applied AI · Generative AI · AI Platform roles
          </p>

          <p className="eyebrow">Applied AI Engineer</p>

          <h1>
            Building AI systems that are
            <span> useful, governed, and engineered to hold up.</span>
          </h1>

          <p className="hero-lede">{portfolio.intro}</p>
          <p className="positioning">{portfolio.positioning}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View selected work
            </a>

            {portfolio.resumeUrl ? (
              <a
                className="button button-secondary"
                href={portfolio.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Resume
                <ExternalIcon />
              </a>
            ) : null}
          </div>

          <SocialLinks />

          <div className="hero-meta" aria-label="Location and work preference">
            <span>Texas, USA</span>
            <i />
            <span>Open to Remote & Relocation</span>
          </div>
        </div>

        <aside className="hero-panel profile-panel" aria-label="Engineering profile">
          <p className="profile-kicker">Engineering profile</p>

          <div className="profile-heading">
            <span className="profile-mark">AI</span>

            <div>
              <strong>{portfolio.headline}</strong>
              <small>Applied systems · governed AI · backend engineering</small>
            </div>
          </div>

          <div className="profile-signals">
            <div className="signal-row">
              <span className="signal-label">Primary</span>
              <strong>Applied AI</strong>
            </div>

            <div className="signal-row">
              <span className="signal-label">Focus</span>
              <strong>GenAI · RAG · Agents</strong>
            </div>

            <div className="signal-row">
              <span className="signal-label">Engineering</span>
              <strong>AI Platforms · APIs · Backend</strong>
            </div>

            <div className="signal-row">
              <span className="signal-label">Evidence</span>
              <strong>Code · Tests · CI · Evaluation</strong>
            </div>
          </div>

          <div className="profile-proof">
            <span>AI Systems</span>
            <span>Governance</span>
            <span>Reliability</span>
          </div>
        </aside>
      </section>

      <section className="evidence-intro shell" aria-labelledby="evidence-model-title">
        <div className="evidence-intro-heading">
          <div>
            <p className="eyebrow">Evidence model</p>
            <h2 id="evidence-model-title">How to read this portfolio.</h2>
          </div>

          <p>
            Public implementation, broader private work, active development,
            and roadmap direction stay explicitly separated.
          </p>
        </div>

        <div className="status-legend-grid">
          {portfolio.statusLegend.map((item) => (
            <article
              className={`legend-card legend-${item.status}`}
              key={item.status}
            >
              <div className="legend-topline">
                <span className="legend-symbol" aria-hidden="true">
                  {item.symbol}
                </span>
                <strong>{item.title}</strong>
              </div>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="architecture" className="section shell">
        <SectionTitle
          eyebrow="Engineering focus"
          title="AI capability is only one layer of the system."
          copy="The portfolio is organized around implementation evidence: model behavior, application logic, backend architecture, governance, reliability and evaluation."
        />

        <div className="focus-grid">
          {portfolio.focus.map((item, index) => (
            <article className="focus-card" key={item.title}>
              <span className="index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section shell work-section">
        <SectionTitle
          eyebrow="Flagship engineering"
          title="Two systems that define the portfolio."
          copy="The flagships show the deepest Applied AI work: governed agentic systems and evidence-centered regulated AI."
        />

        <div className="flagship-stack">
          <FlagshipCaseStudy project={portfolio.projects[0]} number="01" />
          <FlagshipCaseStudy project={portfolio.projects[1]} number="02" />
        </div>

        <div className="supporting-work">
          <SectionTitle
            eyebrow="Selected engineering"
            title="Four projects, four additional engineering signals."
            copy="Product engineering, governed retrieval, backend architecture and workflow reliability broaden the portfolio without duplicating the flagships."
          />

          <div className="project-grid supporting-project-grid">
            {portfolio.projects.slice(2).map((project) => (
              <article className="project-card" key={project.name}>
                <ProjectMark name={project.name} compact />
                <div className="project-topline">
                  <span>{project.label}</span>
                  <span className="status">{project.status}</span>
                </div>

                <h3>{project.name}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-summary">{project.summary}</p>

                <div className="compact-evidence">
                  {project.evidence.map((group) => (
                    <div
                      className={`compact-evidence-group evidence-${group.status}`}
                      key={`${project.name}-${group.status}-${group.title}`}
                    >
                      <span>
                        {group.status === "public"
                          ? "●"
                          : group.status === "private"
                            ? "◆"
                            : group.status === "in-progress"
                              ? "◐"
                              : "○"}
                      </span>

                      <div>
                        <strong>{group.title}</strong>
                        <p>{group.items.slice(0, 3).join(" · ")}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="chip-row">
                  {project.stack.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  className="repo-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository
                  <ExternalIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="section shell">
        <SectionTitle
          eyebrow="Technical surface"
          title="Built across AI, backend, product and systems."
        />
        <div className="stack-groups">
          <div>
            <p className="stack-label">Publicly evidenced across the portfolio</p>
            <div className="stack-cloud">
              {portfolio.skills.publicEvidence.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="stack-label">Broader engineering experience & platform direction</p>
            <div className="stack-cloud">
              {portfolio.skills.broaderDirection.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="truth-card">
          <div>
            <p className="eyebrow">Portfolio principle</p>
            <h2>Evidence over buzzwords.</h2>
          </div>
          <p>
            Public claims should map back to implementation, tests, architecture, evaluation,
            deployment evidence, or professional experience. Planned capabilities stay labeled
            as planned until they are verifiable.
          </p>
        </div>
      </section>

      <section id="contact" className="section shell contact">
        <div>
          <p className="eyebrow">Connect</p>
          <h2>Applied AI, platform engineering, and systems work.</h2>
          <p className="section-copy">
            {portfolio.location}. For opportunities, technical conversations, or project review,
            use any of the links below.
          </p>
        </div>
        <SocialLinks />
      </section>

      <footer className="footer shell">
        <span>© 2026 {portfolio.name}</span>
        <span>Applied AI · LLMs · RAG · Agentic AI · AI Platforms</span>
      </footer>
    </main>
  );
}
