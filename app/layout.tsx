import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chaitanya Sai | Applied AI Engineer",
  description:
    "Applied AI engineering portfolio focused on Generative AI, RAG, Agentic AI, AI Platform Engineering, backend engineering and reliable AI systems.",
  keywords: [
    "Applied AI Engineer",
    "Generative AI Engineer",
    "RAG",
    "Agentic AI",
    "AI Platform Engineering",
    "FastAPI",
    "Python",
  ],
  openGraph: {
    title: "Chaitanya Sai | Applied AI Engineer",
    description:
      "Generative AI · RAG · Agentic AI · AI Platform Engineering",
    type: "website",
    url: siteUrl,
    siteName: "Chaitanya Sai — Applied AI Engineering Portfolio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaitanya Sai | Applied AI Engineer",
    description:
      "Generative AI · RAG · Agentic AI · AI Platform Engineering",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
