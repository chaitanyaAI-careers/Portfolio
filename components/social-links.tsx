import { portfolio } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

const base = "social-link";

export function SocialLinks() {
  return (
    <div className="social-row" aria-label="Professional profiles">
      <a className={base} href={portfolio.links.github} target="_blank" rel="noreferrer">
        <GitHubIcon />
        <span>GitHub</span>
      </a>
      <a className={base} href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
        <LinkedInIcon />
        <span>LinkedIn</span>
      </a>
      <a className={base} href={portfolio.links.huggingface} target="_blank" rel="noreferrer">
        <span className="hf-mark" aria-hidden="true">🤗</span>
        <span>Hugging Face</span>
      </a>
      <a className={base} href={portfolio.links.email}>
        <MailIcon />
        <span>Email</span>
      </a>
    </div>
  );
}
