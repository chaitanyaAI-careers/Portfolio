type IconProps = { size?: number; className?: string };

export function GitHubIcon({ size = 20, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .7a11.3 11.3 0 0 0-3.57 22c.57.1.77-.24.77-.54v-2.16c-3.15.69-3.81-1.34-3.81-1.34-.51-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.51-.29-5.15-1.26-5.15-5.59 0-1.24.44-2.24 1.17-3.03-.12-.29-.51-1.44.11-2.99 0 0 .95-.31 3.11 1.16a10.7 10.7 0 0 1 5.66 0c2.16-1.47 3.11-1.16 3.11-1.16.62 1.55.23 2.7.11 2.99.73.79 1.17 1.79 1.17 3.03 0 4.34-2.64 5.29-5.16 5.58.41.35.77 1.04.77 2.1v3.11c0 .3.21.65.78.54A11.3 11.3 0 0 0 12 .7Z"/>
    </svg>
  );
}

export function LinkedInIcon({ size = 20, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.34 3.55a2.78 2.78 0 1 1 0 5.56 2.78 2.78 0 0 1 0-5.56ZM3 10.5h4.68V21H3V10.5Zm7.25 0h4.49v1.43h.06c.62-1.18 2.15-2.42 4.43-2.42C23 9.51 23.7 12 23.7 15.24V21h-4.67v-5.1c0-1.22-.02-2.79-1.7-2.79-1.7 0-1.96 1.33-1.96 2.7V21h-4.67V10.5h-.45Z"/>
    </svg>
  );
}

export function ExternalIcon({ size = 18, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6" />
    </svg>
  );
}

export function MailIcon({ size = 20, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
