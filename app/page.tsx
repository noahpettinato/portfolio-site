"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import TabNav from "@/components/TabNav";
import TypedPrompt from "@/components/TypedPrompt";

type Project = {
  title: string;
  blurb: string;
  tech: string;
  img: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "Nonlinear Radiation Solver",
    blurb:
      "Fully implicit MATLAB solver for one-dimensional heat diffusion with nonlinear radiation (Robin) boundaries. Implements Newton’s method with analytic Jacobians and Backward Euler time-stepping to compare finite difference and ghost-point (CCFD) methods for stability and convergence.",
    tech: "MATLAB · PDEs · numerical methods · Newton solvers · Backward Euler",
    img: "/nonlinear-radiation-solver.png",
    repo: "https://github.com/noahpettinato/nonlinear-radiation-solver",
  },
  {
    title: "Financial Data Analysis (AAPL Forecasting)",
    blurb:
      "Explores stock market trends and time series forecasting using ARIMA on seven years of AAPL data. Performs exploratory data analysis (EDA), model tuning via AIC/BIC, and residual diagnostics, with results visualized through interactive dashboards in Power BI and Tableau.",
    tech: "Python · pandas · ARIMA · Power BI · Tableau · Excel",
    img: "/financial-data-analysis.png",
    repo: "https://github.com/noahpettinato/financial-data-analysis",
  },
  {
    title: "Movie Data Analysis ETL",
    blurb:
      "End-to-end ETL and exploratory data analysis pipeline for The Movies Dataset (Kaggle). Includes data cleaning, transformation, and insight generation with visual summaries, built to demonstrate automation and reproducible analysis workflows.",
    tech: "Python · pandas · ETL · data cleaning · visualization",
    img: "/movie-data-analysis-etl.png",
    repo: "https://github.com/noahpettinato/movie-data-analysis-etl",
  },
  {
    title: "Algorithms Portfolio",
    blurb:
      "Concise Python implementations covering recursion, greedy algorithms, dynamic programming, and regression. Benchmarked for runtime efficiency and scalability.",
    tech: "Python · recursion · dynamic programming · runtime benchmarking",
    img: "/algorithms-portfolio.png",
    repo: "https://github.com/noahpettinato/algorithms-portfolio",
  },
];

const sectionClass = "scroll-mt-[6.75rem] border-b border-[var(--term-border)] px-4 py-10 sm:px-8 sm:py-12";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--term-desktop)] sm:px-4 sm:py-6 md:px-8 md:py-8">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col bg-[var(--term-bg)] sm:min-h-0 sm:rounded-lg sm:border sm:border-[var(--term-border)] sm:shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
        <header className="sticky top-0 z-50 bg-[var(--term-tab)] sm:rounded-t-lg">
          <TitleBar />
          <TabNav />
        </header>

        <main className="flex-1 font-sans text-[var(--term-text)]">
          <section id="home" className={sectionClass}>
            <TypedPrompt command={'Get-Content .\\readme.md'} keepCaret />
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="font-mono text-xs text-[var(--term-cyan)]">
                  # Data Systems &amp; Analytics
                </p>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[var(--term-bright)] sm:text-5xl lg:text-6xl">
                  Noah <span className="text-[var(--term-cyan)]">Pettinato</span>
                </h1>
                <p className="mt-3 font-mono text-sm text-[var(--term-yellow)] sm:text-base">
                  Emerging Data Analyst · Applied Mathematics &amp; Computer Science
                </p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--term-text)] sm:text-lg">
                  I’m an emerging data analyst with a background in applied mathematics and computer science.
                  I build data pipelines, dashboards, and predictive models that turn raw data into
                  clear, actionable insights. Skilled in SQL, Python, Power BI, and Tableau, with experience
                  combining multi-source datasets, automating ETL workflows, and visualizing trends
                  for technical and business users.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:noahpettinato@gmail.com"
                    className="inline-flex min-h-11 items-center justify-center rounded-sm border border-[var(--term-accent)] bg-[var(--term-accent)] px-5 font-mono text-sm font-semibold text-white transition-colors hover:bg-[#1683dd]"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex min-h-11 items-center justify-center rounded-sm border border-[var(--term-cyan)] bg-transparent px-5 font-mono text-sm font-semibold text-[var(--term-cyan)] transition-colors hover:bg-[var(--term-cyan)] hover:text-[var(--term-bg)]"
                  >
                    View Projects
                  </a>
                  <a
                    href="/Noah%20Pettinato%20Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center rounded-sm border border-[var(--term-border)] bg-[var(--term-elevated)] px-5 font-mono text-sm font-semibold text-[var(--term-bright)] transition-colors hover:border-[var(--term-dim)]"
                  >
                    Resume
                  </a>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <SocialLink href="https://linkedin.com/in/noah-pettinato" label="LinkedIn">
                    <LinkedInIcon />
                  </SocialLink>
                  <SocialLink href="https://github.com/noahpettinato" label="GitHub">
                    <GitHubIcon />
                  </SocialLink>
                </div>
              </div>

              <aside className="justify-self-center lg:justify-self-end">
                <div className="relative w-64 overflow-hidden rounded-sm border border-[var(--term-border)] bg-[var(--term-tab)] md:w-72">
                  <div className="relative aspect-square w-full">
                    <Image
                      src="/Headshot.png"
                      alt="Noah Pettinato headshot"
                      fill
                      priority
                      sizes="288px"
                      className="object-cover object-[center_24px]"
                    />
                  </div>
                  <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-2 border-b border-[var(--term-border)] bg-[var(--term-tab)] px-3 py-1.5 font-mono text-[11px] text-[var(--term-dim)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--term-green)]" />
                    headshot.png
                  </div>
                </div>
                <div className="mt-4 rounded-sm border border-[var(--term-border)] bg-[var(--term-surface)] px-4 py-3 text-center">
                  <p className="font-mono text-sm text-[var(--term-bright)]">
                    Python · SQL · Excel · Power BI · Tableau
                  </p>
                  <p className="mt-1 font-mono text-xs text-[var(--term-dim)]">
                    San Diego, CA
                  </p>
                </div>
              </aside>
            </div>
          </section>

          <section id="about" className={sectionClass}>
            <TypedPrompt command={'Get-Content .\\about.md'} />
            <h2 className="mt-6 font-mono text-xl text-[var(--term-bright)] sm:text-2xl">
              <span className="text-[var(--term-dim)]"># </span>About
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-relaxed sm:text-lg">
              I’m a recent graduate from Oregon State University with a B.S. in Applied
              and Computational Mathematics and a minor in Computer Science. My work blends
              data engineering and analytics: collecting and cleaning complex data, validating
              data quality, and building clear dashboards that drive decisions. I’ve developed pipelines
              in SQL and Python, built predictive models in Python, implemented numerical solvers in MATLAB,
              and created interactive dashboards in Power BI and Tableau. I enjoy solving open-ended problems
              and building tools that make data easier to understand and use.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <InfoPane
                title="Data Engineering"
                body="Automating data extraction, cleaning, and transformation through SQL and Python ETL pipelines."
              />
              <InfoPane
                title="Analytics & Visualization"
                body="Creating reports and dashboards in Power BI, Tableau, and Excel to uncover insights and communicate trends."
              />
              <InfoPane
                title="Modeling & Research"
                body="Applying mathematical models and numerical methods in MATLAB for stability analysis and simulation."
              />
            </div>
          </section>

          <section id="experience" className={sectionClass}>
            <TypedPrompt command={'Get-ChildItem .\\experience\\'} />
            <h2 className="mt-6 font-mono text-xl text-[var(--term-bright)] sm:text-2xl">
              <span className="text-[var(--term-dim)]"># </span>Experience
            </h2>
            <div className="mt-6 space-y-4">
              <ExperienceEntry
                title="Jr. Data Analyst · Axos Bank"
                dates="Jan 2026 – Present"
                current
                body="Develop and optimize SQL-driven reporting and BI solutions using SSRS, Tableau, and Excel to support commercial lending operations. Partner with stakeholders to deliver custom dashboards and analytical solutions, and automate reporting workflows with Power Automate, SQL Server, and Python. Build SQL queries, stored procedures, and reporting infrastructure, including a natural-language data discovery platform integrating Collibra metadata to accelerate enterprise report development."
                tags="SQL Server · SSRS · Tableau · Excel · Power Automate · Python · workflow automation · business intelligence"
              />
              <ExperienceEntry
                title="Mathematics Expert (Contract) · Mercor"
                dates="Sept 2025 – Present"
                current
                body="Curate and author advanced undergraduate and master’s-level mathematics problems, evaluate and refine AI-generated reasoning for rigor and clarity, and provide subject matter expertise to strengthen datasets powering next-generation large language models."
                tags="AI training · dataset curation · solution validation"
              />
              <ExperienceEntry
                title="Data Operations Intern · Wagner Engineering"
                dates="Oct 2025 – Jan 2026"
                body="Automate extraction, cleaning, and structuring of Texas SmartBuy procurement data using Python, Playwright, and pandas. Develop cloud-ready ETL pipelines integrating web scraping and data transformation so the team can feed clean data directly into BI dashboards and automated workflows."
                tags="Python · Playwright · pandas · ETL · automation · AWS"
              />
              <ExperienceEntry
                title="Undergraduate Research Assistant · Oregon State University"
                dates="Apr 2025 – Jul 2025"
                body="Developed MATLAB solvers for steady-state and time-dependent nonlinear heat transfer problems with flux-based Robin boundary conditions. Implemented Newton solvers with analytic Jacobians and adaptive damping, analyzed convergence behavior, and documented algorithms and assumptions for reproducibility."
                tags="MATLAB · PDEs · numerical methods · Newton methods · stability & convergence"
              />
              <ExperienceEntry
                title="Data and Research Intern · Pettinato & Associates"
                dates="Jun 2019 – Jul 2025"
                body="Extracted, cleaned, and combined claim data in SQL Server using multi-table joins and relational logic. Generated Crystal Reports and SQL queries to streamline reporting, ensure accuracy, and prioritize high-value claims using verified public data."
                tags="SQL Server · Crystal Reports · data transformation · workflow automation"
              />
            </div>
          </section>

          <section id="skills" className={sectionClass}>
            <TypedPrompt command={'Get-Content .\\skills.json'} />
            <h2 className="mt-6 font-mono text-xl text-[var(--term-bright)] sm:text-2xl">
              <span className="text-[var(--term-dim)]"># </span>Skills
            </h2>
            <SkillGroup
              title="Programming & Scripting"
              skills={["Python", "MATLAB", "SQL", "Java", "JavaScript", "HTML", "R", "C#"]}
            />
            <SkillGroup
              title="Data & Analytics"
              skills={[
                "NumPy",
                "pandas",
                "Tableau",
                "Power BI",
                "Excel",
                "Crystal Reports",
                "Data Cleaning",
                "Predictive Modeling",
              ]}
            />
            <SkillGroup
              title="Dev & Collaboration"
              skills={["VS Code", "GitHub", "Git", "LaTeX", "Salesforce", "Playwright"]}
            />
            <SkillGroup
              title="Technical Focus"
              skills={[
                "ETL pipelines",
                "web scraping",
                "AWS",
                "workflow automation",
                "data visualization",
                "predictive analytics",
                "reporting automation",
                "model tuning",
                "runtime benchmarking",
                "dashboard creation",
                "quality assurance",
              ]}
            />
          </section>

          <section id="projects" className={sectionClass}>
            <TypedPrompt command={'Get-ChildItem .\\projects\\'} />
            <h2 className="mt-6 font-mono text-xl text-[var(--term-bright)] sm:text-2xl">
              <span className="text-[var(--term-dim)]"># </span>Projects
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="flex flex-col overflow-hidden rounded-sm border border-[var(--term-border)] bg-[var(--term-surface)]"
                >
                  <div className="flex items-center gap-2 border-b border-[var(--term-border)] px-3 py-2 font-mono text-[11px] text-[var(--term-dim)]">
                    <span className="text-[var(--term-cyan)]">PS</span>
                    <span className="truncate">{project.title}</span>
                  </div>
                  <div className="relative h-44 bg-black md:h-48">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-lg font-semibold text-[var(--term-bright)]">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--term-text)]">{project.blurb}</p>
                    <p className="mt-3 font-mono text-xs text-[var(--term-cyan)]">{project.tech}</p>
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex min-h-11 w-fit items-center gap-2 rounded-sm border border-[var(--term-border)] bg-[var(--term-elevated)] px-4 font-mono text-sm text-[var(--term-bright)] transition-colors hover:border-[var(--term-cyan)]"
                      >
                        <GitHubIcon className="h-4 w-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className={`${sectionClass} border-b-0`}>
            <TypedPrompt command={'Write-Output "Let\'s Connect"'} />
            <h2 className="mt-6 text-center font-mono text-2xl text-[var(--term-bright)] sm:text-3xl">
              Let&apos;s Connect
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-center text-base leading-relaxed sm:text-lg">
              I turn messy data into clear, actionable insights. If you’re building pipelines,
              dashboards, or automation and need a reliable, detail-oriented collaborator,
              reach out and let&apos;s talk.
            </p>
            <div className="mt-8 overflow-hidden rounded-sm border border-[var(--term-border)]">
              <div className="grid md:grid-cols-2">
                <div className="flex flex-col items-center justify-center bg-[var(--term-elevated)] px-8 py-10">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-[var(--term-accent)] md:h-32 md:w-32">
                    <Image
                      src="/Headshot.png"
                      alt="Noah Pettinato"
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-5 font-mono text-lg font-semibold text-[var(--term-bright)]">
                    Noah Pettinato
                  </h3>
                  <p className="mt-1 max-w-xs text-center text-sm text-[var(--term-dim)]">
                    Transforming data systems into actionable solutions.
                  </p>
                </div>
                <div className="border-t border-[var(--term-border)] bg-[var(--term-surface)] p-8 md:border-t-0 md:border-l">
                  <p className="leading-relaxed">
                    I’m always interested in connecting with others working in data analytics and automation.
                    Whether you’re building ETL pipelines, developing dashboards, or exploring predictive modeling,
                    I’d be happy to connect and exchange ideas.
                  </p>
                  <div className="mt-5 rounded-sm border border-[var(--term-border)] bg-[var(--term-bg)] p-4">
                    <p className="font-mono text-sm text-[var(--term-yellow)]"># Areas I enjoy discussing:</p>
                    <ul className="mt-3 space-y-2 font-mono text-sm text-[var(--term-text)]">
                      <li><span className="text-[var(--term-green)]">+</span> New projects or collaborations</li>
                      <li><span className="text-[var(--term-green)]">+</span> ETL, dashboards, or analytics engineering</li>
                      <li><span className="text-[var(--term-green)]">+</span> Predictive modeling or experimentation</li>
                    </ul>
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://linkedin.com/in/noah-pettinato"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-[var(--term-accent)] px-5 font-mono text-sm font-semibold text-white transition-colors hover:bg-[#1683dd]"
                    >
                      <LinkedInIcon />
                      Connect on LinkedIn
                    </a>
                    <a
                      href="https://github.com/noahpettinato"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-[var(--term-border)] bg-[var(--term-elevated)] px-5 font-mono text-sm font-semibold text-[var(--term-bright)] transition-colors hover:border-[var(--term-cyan)]"
                    >
                      <GitHubIcon className="h-4 w-4" />
                      Check out my GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-[var(--term-border)] px-4 py-10 sm:px-8">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <h3 className="font-mono text-lg font-semibold text-[var(--term-bright)]">Noah Pettinato</h3>
                <p className="mt-3 max-w-sm text-sm">Where data meets clarity and execution.</p>
              </div>
              <div>
                <h3 className="font-mono font-semibold text-[var(--term-bright)]">Quick Links</h3>
                <ul className="mt-3 space-y-1 font-mono text-sm">
                  {[
                    ["Home", "#home"],
                    ["About", "#about"],
                    ["Experience", "#experience"],
                    ["Skills", "#skills"],
                    ["Projects", "#projects"],
                    ["Contact", "#contact"],
                  ].map(([label, href]) => (
                    <li key={href}>
                      <a href={href} className="inline-flex min-h-11 items-center text-[var(--term-cyan)] hover:underline">
                        {`.\\${label.toLowerCase()}`}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-mono font-semibold text-[var(--term-bright)]">Get In Touch</h3>
                <div className="mt-3 flex items-center gap-3">
                  <SocialLink href="https://linkedin.com/in/noah-pettinato" label="LinkedIn">
                    <LinkedInIcon />
                  </SocialLink>
                  <SocialLink href="https://github.com/noahpettinato" label="GitHub">
                    <GitHubIcon />
                  </SocialLink>
                  <SocialLink href="mailto:noahpettinato@gmail.com" label="Email">
                    <MailIcon />
                  </SocialLink>
                </div>
                <p className="mt-3 font-mono text-sm text-[var(--term-cyan)]">noahpettinato@gmail.com</p>
              </div>
            </div>
            <p className="mt-10 text-center font-mono text-xs text-[var(--term-dim)]">
              I built this site from scratch.{" "}
              <a
                href="https://github.com/noahpettinato/portfolio-site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--term-cyan)] hover:underline"
              >
                View the GitHub repo
              </a>
            </p>
          </section>
        </main>

        <footer className="flex min-h-8 items-center justify-between gap-3 border-t border-[var(--term-border)] bg-[var(--term-tab)] px-3 font-mono text-[11px] text-[var(--term-dim)] sm:rounded-b-lg">
          <span>PowerShell 7.4</span>
          <span className="truncate">C:\Users\noah\portfolio</span>
          <span>UTF-8</span>
        </footer>
      </div>
    </div>
  );
}

function TitleBar() {
  return (
    <div className="flex h-9 items-center justify-between bg-[var(--term-tab)] pl-3 text-[var(--term-text)]">
      <div className="flex min-w-0 items-center gap-2 font-mono text-xs">
        <TerminalMark />
        <span className="truncate">noahpettinato — portfolio</span>
      </div>
      <div className="flex h-full" aria-hidden="true">
        <span className="flex w-11 items-center justify-center text-[var(--term-dim)]">
          <svg viewBox="0 0 12 12" className="h-3 w-3" fill="currentColor">
            <rect x="1" y="5.25" width="10" height="1.5" />
          </svg>
        </span>
        <span className="flex w-11 items-center justify-center text-[var(--term-dim)]">
          <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="1.5" y="1.5" width="9" height="9" />
          </svg>
        </span>
        <span className="flex w-11 items-center justify-center text-[var(--term-dim)]">
          <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M2 2l8 8M10 2L2 10" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function InfoPane({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-sm border border-[var(--term-border)] bg-[var(--term-surface)] p-4">
      <h3 className="font-mono text-sm text-[var(--term-cyan)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--term-text)]">{body}</p>
    </div>
  );
}

function ExperienceEntry({
  title,
  dates,
  body,
  tags,
  current = false,
}: {
  title: string;
  dates: string;
  body: string;
  tags: string;
  current?: boolean;
}) {
  return (
    <article className="rounded-sm border border-[var(--term-border)] bg-[var(--term-surface)] p-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-base font-semibold text-[var(--term-bright)] sm:text-lg">
          <span className="font-mono text-[var(--term-green)]">{current ? "*" : "-"}</span> {title}
        </h3>
        <span className="font-mono text-sm text-[var(--term-yellow)]">{dates}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed sm:text-base">{body}</p>
      <p className="mt-3 font-mono text-xs text-[var(--term-dim)]">{tags}</p>
    </article>
  );
}

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="mt-6">
      <h3 className="font-mono text-sm text-[var(--term-amber)]"># {title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-sm border border-[var(--term-border)] bg-[var(--term-elevated)] px-3 py-2 font-mono text-sm text-[var(--term-text)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[var(--term-border)] bg-[var(--term-elevated)] text-[var(--term-text)] transition-colors hover:border-[var(--term-cyan)] hover:text-[var(--term-cyan)]"
    >
      {children}
    </a>
  );
}

function TerminalMark() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-[var(--term-cyan)]" fill="currentColor" aria-hidden="true">
      <path d="M2 3.5A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5v9a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 12.5v-9zM4.2 5.1L6.8 7.3 4.2 9.5l.8 1 3.4-2.9L5 4.1l-.8 1zM8.5 10.2h3.2v1.2H8.5v-1.2z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.64c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V23h-4V8z" />
    </svg>
  );
}

function GitHubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 .5a11.5 11.5 0 00-3.64 22.41c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.26 3.41.96.11-.76.41-1.26.74-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.12-3.04 0 0 .97-.31 3.18 1.19a11.08 11.08 0 015.8 0c2.2-1.5 3.17-1.19 3.17-1.19.64 1.58.24 2.75.12 3.04.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.42.36.8 1.07.8 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A11.5 11.5 0 0012 .5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.511l-10 6.25-10-6.25V6zm0 2.489V18a2 2 0 002 2h16a2 2 0 002-2V8.489l-9.445 5.896a2 2 0 01-2.11 0L2 8.489z" />
    </svg>
  );
}
