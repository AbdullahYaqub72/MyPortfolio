import HeroScene from "@/components/HeroScene";
import { ArrowUpRight } from "lucide-react";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
      {children}
    </span>
  );
}

function CTA({
  href,
  children,
  external = true,
}: {
  href: string; children: React.ReactNode; external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 transition
                 border hover:translate-y-[-1px]"
      style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--fg)" }}
    >
      {children} <ArrowUpRight size={16} />
    </a>
  );
}

export default function Page() {
  const contactEmail = "mailto:abdullahyaqub555@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Abdullah%2C%0A%0A";
  const whatsapp = "https://wa.me/923344381565";

  const projects = [
    {
      title: "Vidit — Urdu Poetry Text-to-Video",
      year: "2023–2024",
      desc:
        "Django-based AI pipeline to transform Urdu couplets into animated video scenes with background music; " +
        "context modeling with NLP and structured semantics; backend orchestration and storage for video segments.",
      tech: ["Django", "Python", "NLP", "Deep Learning", "APIs"],
    },
    {
      title: "CXOR Engineering — Inventory Management System",
      year: "2023",
      desc:
        "Desktop inventory app in C#/.NET with normalized SQL schema, role-based access, and KPI analytics; " +
        "team delivery & Git-based workflow.",
      tech: [".NET", "C#", "SQL"],
    },
    {
      title: "Course Scraping & Sorting Analytics",
      year: "2022",
      desc:
        "Python scraper for Coursera metadata; performance comparison of sorting algorithms using thousands of rows; " +
        "PyQt5 GUI for filtering/visualization.",
      tech: ["Python", "PyQt5", "Data", "Algorithms"],
    },
    {
      title: "JazzCash Desktop Clone",
      year: "2021",
      desc:
        "Java/Swing wallet flows: registration, transfers, bill payments, history; safe rollback, auth guards, " +
        "and modular OOP design.",
      tech: ["Java", "Swing"],
    },
  ];

  const skills = [
    "Python", "Java", "C++", "C#", "SQL",
    "FastAPI", "Django", "Node.js", "TypeScript",
    "Postgres", "Redis", "Elasticsearch", "Kafka",
    "Git/GitHub/GitLab", "Adobe Illustrator", "Photoshop"
  ];

  return (
    <section className="space-y-20 py-10 md:py-16">
      {/* HERO */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            <Pill>Software Engineer — Dubizzle Labs</Pill>
            <Pill>CS @ UET Lahore (CGPA 3.82)</Pill>
            <Pill>Backend • Analytics • ML</Pill>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Building reliable systems with clean APIs & subtle 3D aesthetics.
          </h1>
          <p className="text-[color:var(--muted)]">
            I optimize CRM APIs and analytics for Zameen.com/OLX.pk, contributed to the Dubizzle Cars UAE backend
            revamp, and previously worked in computer vision/ML at Arbisoft and KICS UET. Passionate about
            scalable services and pragmatic UI.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border hover:translate-y-[-1px]"
               style={{ borderColor: "var(--border)" }}>
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 border hover:translate-y-[-1px]"
               style={{ borderColor: "var(--border)" }}>
              Contact
            </a>
          </div>
        </div>
        <HeroScene />
      </div>

      {/* WORK (Experience highlights) */}
      <div id="work" className="space-y-6">
        <h2 className="text-xl md:text-2xl font-medium">Selected Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Jarvis CRM Analytics",
              desc: "Faster reporting pipelines & API performance for Zameen/OLX.pk.",
              tech: "Python • FastAPI • Postgres • Kafka",
              href: "#"
            },
            {
              title: "Dubizzle Cars Revamp (UAE)",
              desc: "Backend features & scalability for listings and search.",
              tech: "Node.js • TypeScript • Redis • Elasticsearch",
              href: "#"
            },
            {
              title: "Operational Dashboards",
              desc: "Clean UI for ops KPIs with subtle motion and 3D accents.",
              tech: "Next.js • R3F • Tailwind",
              href: "#"
            }
          ].map((p) => (
            <a key={p.title}
               href={p.href}
               className="group rounded-2xl border p-5 hover:bg-black/[.03] dark:hover:bg-white/[.03] transition"
               style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{p.title}</h3>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition" size={16}/>
              </div>
              <p className="text-sm text-[color:var(--muted)] mt-2">{p.desc}</p>
              <p className="text-xs text-[color:var(--muted)] mt-4">{p.tech}</p>
            </a>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <div id="projects" className="space-y-6">
        <h2 className="text-xl md:text-2xl font-medium">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((prj) => (
            <div key={prj.title}
                 className="rounded-2xl border p-5 hover:bg-black/[.03] dark:hover:bg-white/[.03] transition"
                 style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{prj.title}</h3>
                <span className="text-xs text-[color:var(--muted)]">{prj.year}</span>
              </div>
              <p className="text-sm text-[color:var(--muted)] mt-2">{prj.desc}</p>
              <div className="flex gap-2 flex-wrap mt-4">
                {prj.tech.map((t) => <Pill key={t}>{t}</Pill>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <div id="about" className="space-y-6">
        <h2 className="text-xl md:text-2xl font-medium">About</h2>
        <p className="text-[color:var(--muted)]">
          Computer Science graduate from UET Lahore (CGPA 3.82). I focus on backend development, scalable systems,
          and analytics. I&apos;ve worked across CRM platforms, automotive products for the UAE market, and earlier did
          hands-on ML/CV internships.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-5" style={{ borderColor: "var(--border)" }}>
            <h3 className="font-medium">Experience</h3>
            <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
              <li><strong>Software Engineer — Dubizzle Labs</strong> (Jun 2024 – Present)
                <ul className="list-disc pl-5">
                  <li>Optimized APIs & analytics for Jarvis CRM (Zameen.com/OLX.pk).</li>
                  <li>Backend feature dev; scalability/performance across services.</li>
                  <li>Revamped backend for Dubizzle Cars (UAE).</li>
                </ul>
              </li>
              <li><strong>ML Intern — Arbisoft</strong> (Jun–Aug 2023)
                <ul className="list-disc pl-5">
                  <li>Deep learning for image classification & alignment/rescaling.</li>
                </ul>
              </li>
              <li><strong>CV/ML Intern — KICS UET</strong> (May–Jul 2022)
                <ul className="list-disc pl-5">
                  <li>Top-view re-identification with LSTM & 3D CNNs.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border p-5" style={{ borderColor: "var(--border)" }}>
            <h3 className="font-medium">Education</h3>
            <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
              <li><strong>UET Lahore — B.Sc. CS</strong> (2020–2024) • CGPA 3.82/4.0</li>
              <li>GCU Lahore — FSc Pre-Engineering (2018–2020) • 91%</li>
              <li>Honours School System — Matric (2016–2018) • 97%</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-5" style={{ borderColor: "var(--border)" }}>
            <h3 className="font-medium">Tech & Tools</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map(s => <Pill key={s}>{s}</Pill>)}
            </div>
            <div className="mt-4 text-xs text-[color:var(--muted)]">
              Version control: Git/GitHub/GitLab. Design: Illustrator, Photoshop.
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-5" style={{ borderColor: "var(--border)" }}>
            <h3 className="font-medium">Affiliations</h3>
            <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
              <li>Co-Lead, ACM UET (2023–2024) — led web team; mentored juniors.</li>
              <li>Core Member, GDSC UET (2022–2023) — workshops & backend setup.</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5" style={{ borderColor: "var(--border)" }}>
            <h3 className="font-medium">Achievements</h3>
            <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
              <li>Winner — FYP Competition, CS Dept @ UET (2024); 2nd overall university.</li>
              <li>Runner-up — ITEC &apos;23 FYP Idea Competition (2023).</li>
              <li>Multiple wins — Literary Society poetry/literature events (2021–2023).</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border p-5" style={{ borderColor: "var(--border)" }}>
          <h3 className="font-medium">References</h3>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
            <li>
              <strong>Dr. Talha Waheed</strong> — Assistant Professor, UET Lahore
              • Phone: +92-300-4300348 • Email: Only4students@gmail.com
            </li>
            <li>
              <strong>Dr. Samyan Qayyum Wahla</strong> — Lecturer, UET Lahore
              • Phone: +92-334-8079134 • Email: samyan.wahla@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" className="space-y-4 pb-12">
        <h2 className="text-xl md:text-2xl font-medium">Contact</h2>
        <p className="text-[color:var(--muted)]">
          Say hi — open to collaborations and interesting problems.
        </p>
        <div className="flex flex-wrap gap-3">
          <CTA href={contactEmail}>Email</CTA>
          <CTA href={whatsapp}>WhatsApp</CTA>
          <CTA href="https://www.linkedin.com/in/abdullah-yaqub-385b8121a/">LinkedIn</CTA>
          <CTA href="https://github.com/AbdullahYaqub72">GitHub</CTA>
          <CTA href="https://abdullahyaqubcs.github.io/Portfolio/">Old Portfolio</CTA>
        </div>
      </div>
    </section>
  );
}