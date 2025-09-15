import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Abdullah Yaqub — Software Engineer",
  description:
    "Minimal 3D portfolio: backend engineering, scalable systems, analytics, and tasteful UI.",
  openGraph: {
    title: "Abdullah Yaqub — Software Engineer",
    description:
      "Portfolio with interactive WebGL hero, selected work, projects, and contact.",
    url: "https://your-domain.com",
    siteName: "Abdullah Yaqub",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://your-domain.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdullah Yaqub",
    url: "https://your-domain.com",
    email: "mailto:abdullahyaqub555@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/abdullah-yaqub-385b8121a/",
      "https://github.com/AbdullahYaqub72",
      "https://abdullahyaqubcs.github.io/Portfolio/"
    ],
    jobTitle: "Software Engineer",
    address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <header className="sticky top-0 z-50 backdrop-blur">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
              <Link href="/" className="font-semibold tracking-tight hover:opacity-80">AY</Link>
              <div className="flex items-center gap-4 text-sm">
                <Link href="/#work" className="hover:opacity-80">Work</Link>
                <Link href="/#projects" className="hover:opacity-80">Projects</Link>
                <Link href="/#about" className="hover:opacity-80">About</Link>
                <Link href="/#contact" className="hover:opacity-80">Contact</Link>
                <ThemeToggle />
              </div>
            </nav>
          </header>
          <main className="max-w-6xl mx-auto px-6">{children}</main>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
          <footer className="max-w-6xl mx-auto px-6 py-10 text-sm text-[color:var(--muted)]">
            © {new Date().getFullYear()} Abdullah Yaqub. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
