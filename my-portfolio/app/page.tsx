"use client";

import { useState } from "react";

type Project = {
  title: string;
  blurb: string;
  tech: string;
  img: string;
  layout?: 'stacked' | 'side';
  repo?: string;
  imgHeight?: string;
  imgWidthClass?: string;
};

export default function Home() {
  // ----- PROJECT CAROUSEL DATA -----
  const projects: Project[] = [
    {
      title: "Nonlinear Radiation Solver",
      blurb:
        "Fully implicit MATLAB solver for one-dimensional heat diffusion with nonlinear radiation (Robin) boundaries. Implements Newton’s method with analytic Jacobians and Backward Euler time-stepping to compare finite difference and ghost-point (CCFD) methods for stability and convergence.",
      tech: "MATLAB · PDEs · numerical methods · Newton solvers · Backward Euler",
      img: "/nonlinear-radiation-solver.png",
      layout: "stacked",
      repo: "https://github.com/noahpettinato/nonlinear-radiation-solver",
    },
    {
      title: "Financial Data Analysis (AAPL Forecasting)",
      blurb:
        "Explores stock market trends and time series forecasting using ARIMA on seven years of AAPL data. Performs exploratory data analysis (EDA), model tuning via AIC/BIC, and residual diagnostics, with results visualized through interactive dashboards in Power BI and Tableau.",
      tech: "Python · pandas · ARIMA · Power BI · Tableau · Excel",
      img: "/financial-data-analysis.png",
      layout: "stacked",
      repo: "https://github.com/noahpettinato/financial-data-analysis",
    },
    {
      title: "Movie Data Analysis ETL",
      blurb:
        "End-to-end ETL and exploratory data analysis pipeline for The Movies Dataset (Kaggle). Includes data cleaning, transformation, and insight generation with visual summaries, built to demonstrate automation and reproducible analysis workflows.",
      tech: "Python · pandas · ETL · data cleaning · visualization",
      img: "/movie-data-analysis-etl.png",
      layout: "stacked",
      repo: "https://github.com/noahpettinato/movie-data-analysis-etl",
    },
    {
      title: "Algorithms Portfolio",
      blurb:
        "Concise Python implementations covering recursion, greedy algorithms, dynamic programming, and regression. Benchmarked for runtime efficiency and scalability.",
      tech: "Python · recursion · dynamic programming · runtime benchmarking",
      img: "/algorithms-portfolio.png",
      layout: "stacked",
      imgHeight: "h-56 md:h-60 lg:h-[18rem]",
      imgWidthClass: "max-w-[86.3%]",
      repo: "https://github.com/noahpettinato/algorithms-portfolio",
    },
  ];

  const [index, setIndex] = useState(0);

  function prevProject() {
    setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  }

  function nextProject() {
    setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));
  }

  const current = projects[index];
  
  return (
    <main className="font-sans text-zinc-800 scroll-smooth">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-zinc-900 font-extrabold text-xl md:text-2xl lg:text-3xl tracking-tight">
            Noah Pettinato
          </span>
          <ul className="flex flex-wrap gap-5 text-sm md:text-base font-semibold text-zinc-600">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Experience", "#experience"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* HOME / HERO (refined) */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-b border-zinc-200"
      >
        {/* subtle background shape */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-200/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* LEFT: copy + actions */}
          <div>
            {/* badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-sm md:text-base font-semibold text-blue-700 shadow-sm">
              Data Systems & Analytics
            </span>

            {/* headline */}
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 leading-tight">
              Noah <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Pettinato</span>
            </h1>

            {/* subhead */}
            <p className="text-blue-700/90 mt-3 text-lg font-medium">
              Emerging Data Analyst · Applied Mathematics & Computer Science
            </p>

            {/* synopsis */}
            <p className="mt-4 text-zinc-700 text-lg leading-relaxed">
              I’m an emerging data analyst with a background in applied mathematics and computer science.
              I build data pipelines, dashboards, and predictive models that turn raw data into
              clear, actionable insights. Skilled in SQL, Python, Power BI, and Tableau, with experience
              combining multi-source datasets, automating ETL workflows, and visualizing trends
              for technical and business users.
            </p>

            {/* primary actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:noahpettinato@gmail.com"
                className="rounded-lg border border-zinc-600 bg-zinc-800 px-6 py-3 text-white font-bold shadow-sm hover:bg-zinc-900 hover:border-zinc-700 transition-all"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="rounded-lg border border-blue-500 bg-blue-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-blue-700 hover:border-blue-600 transition-all"
              >
                View Projects
              </a>
              <a
                href="/Noah%20Pettinato%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-indigo-500 bg-indigo-500 px-6 py-3 text-white font-medium shadow-sm hover:bg-indigo-600 hover:border-indigo-600 transition-all"
              >
                Resume
              </a>
            </div>
            {/* Social icons row remains below as previously arranged */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://linkedin.com/in/noah-pettinato"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-600 shadow-sm hover:bg-zinc-50 hover:border-zinc-400 transition-all"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.64c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V23h-4V8z"/></svg>
              </a>
              <a
                href="https://github.com/noahpettinato"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-600 shadow-sm hover:bg-zinc-50 hover:border-zinc-400 transition-all"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path fillRule="evenodd" d="M12 .5a11.5 11.5 0 00-3.64 22.41c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.26 3.41.96.11-.76.41-1.26.74-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.12-3.04 0 0 .97-.31 3.18 1.19a11.08 11.08 0 015.8 0c2.2-1.5 3.17-1.19 3.17-1.19.64 1.58.24 2.75.12 3.04.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.42.36.8 1.07.8 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A11.5 11.5 0 0012 .5z" clipRule="evenodd"/></svg>
              </a>
            </div>

            {/* scroll cue */}
            <a href="#about" className="mt-10 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-700">
              <span>Scroll down</span>
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 14l-6-6h12l-6 6z"/></svg>
            </a>
          </div>

          {/* RIGHT: photo card */}
          <div className="justify-self-center lg:justify-self-end">
            <div className="relative rounded-full border-4 border-blue-200 bg-white p-1 shadow-xl w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-300/40 to-indigo-300/40 blur-xl -z-10" />
              <img
                src="/Headshot.png"
                alt="Noah Pettinato headshot"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="mt-6 text-center rounded-xl border border-blue-200 bg-white/80 backdrop-blur p-5 shadow-sm">
              <p className="text-zinc-800 font-semibold text-base">
              Python · SQL · Excel · Power BI · Tableau
              </p>
              <p className="text-zinc-600 text-sm mt-2">Sacramento, CA (open to relocation)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT (refined) */}
      <section id="about" className="bg-gradient-to-br from-zinc-50 to-blue-50 border-b border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">About</h2>
          <p className="text-zinc-700 text-lg leading-relaxed max-w-4xl">
          I’m a recent graduate from Oregon State University with a B.S. in Applied 
          and Computational Mathematics and a minor in Computer Science. My work blends 
          data engineering and analytics: collecting and cleaning complex data, validating 
          data quality, and building clear dashboards that drive decisions. I’ve developed pipelines 
          in SQL and Python, built predictive models in Python, implemented numerical solvers in MATLAB, 
          and created interactive dashboards in Power BI and Tableau. I enjoy solving open-ended problems 
          and building tools that make data easier to understand and use.
          </p>
          {/* three pillars */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-zinc-900">Data Engineering</h3>
              <p className="mt-1 text-sm text-zinc-600">
                Automating data extraction, cleaning, and transformation through SQL and Python ETL pipelines.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-zinc-900">Analytics & Visualization</h3>
              <p className="mt-1 text-sm text-zinc-600">
                Creating reports and dashboards in Power BI, Tableau, and Excel to uncover insights and communicate trends.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-zinc-900">Modeling & Research</h3>
              <p className="mt-1 text-sm text-zinc-600">
                Applying mathematical models and numerical methods in MATLAB for stability analysis and simulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE (white bg with subtle gradient) */}
      <section id="experience" className="bg-gradient-to-br from-white to-zinc-50 border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">
            Experience
          </h2>

          <div className="space-y-8">
            {/* Wagner Engineering */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                <h3 className="text-zinc-900 font-semibold text-lg">
                  Data Operations Intern · Wagner Engineering
                </h3>
                <span className="text-blue-600 text-sm font-medium">
                  Oct 2025 – Present
                </span>
              </div>
              <p className="text-zinc-700 mt-3 leading-relaxed text-base">
              Automate extraction, cleaning, and structuring of Texas SmartBuy 
              procurement data using Python, Playwright, and pandas. Develop cloud-ready 
              ETL pipelines integrating web scraping and data transformation so the 
              team can feed clean data directly into BI dashboards and automated workflows.
              </p>
              <p className="text-zinc-500 text-sm mt-3 font-medium">
                Python · Playwright · pandas · ETL · automation · AWS
              </p>
            </div>

            {/* Mercor */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                <h3 className="text-zinc-900 font-semibold text-lg">
                  Mathematics Expert (Contract) · Mercor
                </h3>
                <span className="text-blue-600 text-sm font-medium">
                  Sept 2025 – Present
                </span>
              </div>
              <p className="text-zinc-700 mt-3 leading-relaxed text-base">
              Curate and author advanced undergraduate and master’s-level 
              mathematics problems, evaluate and refine AI-generated reasoning 
              for rigor and clarity, and provide subject matter expertise to strengthen 
              datasets powering next-generation large language models.
              </p>
              <p className="text-zinc-500 text-sm mt-3 font-medium">
                AI training · dataset curation · solution validation
              </p>
            </div>

            {/* OSU Research */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                <h3 className="text-zinc-900 font-semibold text-lg">
                  Undergraduate Research Assistant · Oregon State University
                </h3>
                <span className="text-blue-600 text-sm font-medium">
                  Apr 2025 – Jul 2025
                </span>
              </div>
              <p className="text-zinc-700 mt-3 leading-relaxed text-base">
              Developed MATLAB solvers for steady-state and time-dependent 
              nonlinear heat transfer problems with flux-based Robin boundary 
              conditions. Implemented Newton solvers with analytic Jacobians and 
              adaptive damping, analyzed convergence behavior, and documented 
              algorithms and assumptions for reproducibility.
              </p>
              <p className="text-zinc-500 text-sm mt-3 font-medium">
                MATLAB · PDEs · numerical methods · Newton methods · stability & convergence
              </p>
            </div>

            {/* Pettinato & Associates */}
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                <h3 className="text-zinc-900 font-semibold text-lg">
                  Data and Research Intern · Pettinato & Associates
                </h3>
                <span className="text-blue-600 text-sm font-medium">
                  Jun 2019 – Jul 2025
                </span>
              </div>
              <p className="text-zinc-700 mt-3 leading-relaxed text-base">
              Extracted, cleaned, and combined claim data in SQL Server using 
              multi-table joins and relational logic. Generated Crystal Reports and 
              SQL queries to streamline reporting, ensure accuracy, and prioritize 
              high-value claims using verified public data.
              </p>
              <p className="text-zinc-500 text-sm mt-3 font-medium">
                SQL Server · Crystal Reports · data transformation · workflow automation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS (gradient bg) */}
      <section id="skills" className="bg-gradient-to-br from-indigo-50 to-blue-50 border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">
            Skills
          </h2>

          {/* Programming / scripting */}
          <div className="mb-8">
            <h3 className="text-zinc-800 text-lg font-semibold mb-4">
              Programming & Scripting
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Python",
                "MATLAB",
                "SQL",
                "Java",
                "JavaScript",
                "HTML",
                "R",
                "C#",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-blue-200 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium shadow-sm hover:bg-blue-200 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Data / analytics tools */}
          <div className="mb-8">
            <h3 className="text-zinc-800 text-lg font-semibold mb-4">
              Data & Analytics
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "NumPy",
                "pandas",
                "Tableau",
                "Power BI",
                "Excel",
                "Crystal Reports",
                "Data Cleaning",
                "Predictive Modeling",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-indigo-200 bg-indigo-100 text-indigo-800 px-4 py-2 text-sm font-medium shadow-sm hover:bg-indigo-200 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Dev / workflow */}
          <div className="mb-8">
            <h3 className="text-zinc-800 text-lg font-semibold mb-4">
              Dev & Collaboration
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "VS Code",
                "GitHub",
                "Git",
                "LaTeX",
                "Salesforce",
                "Playwright",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-purple-200 bg-purple-100 text-purple-800 px-4 py-2 text-sm font-medium shadow-sm hover:bg-purple-200 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Core technical themes */}
          <div className="mb-2">
            <h3 className="text-zinc-800 text-lg font-semibold mb-4">
              Technical Focus
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
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
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-zinc-300 bg-white text-zinc-700 px-4 py-2 text-sm font-medium shadow-sm hover:bg-zinc-50 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS (gradient bg, WITH CAROUSEL) */}
      <section id="projects" className="bg-gradient-to-br from-white to-blue-50 border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-3xl font-bold text-zinc-900">Projects</h2>

            <div className="flex items-center gap-3">
              <button
                onClick={prevProject}
                aria-label="Previous project"
                className="rounded-lg border border-blue-200 bg-blue-100 px-4 py-2 text-blue-700 font-medium shadow-sm hover:bg-blue-200 transition-colors duration-200"
              >
                ← Prev
              </button>
              <button
                onClick={nextProject}
                aria-label="Next project"
                className="rounded-lg border border-blue-200 bg-blue-100 px-4 py-2 text-blue-700 font-medium shadow-sm hover:bg-blue-200 transition-colors duration-200"
              >
                Next →
              </button>
            </div>
          </div>

          {/* carousel card */}
          <div className={`rounded-xl border border-zinc-200 bg-white p-6 shadow-sm flex flex-col ${current.layout === 'side' ? 'lg:flex-row' : 'lg:flex-col'} gap-8 hover:shadow-md transition-shadow duration-200`}>
            {/* text (placed first for stacked) */}
            <div className={`${current.layout === 'side' ? 'lg:w-1/2 order-2 lg:order-2' : 'lg:w-full order-1'} w-full flex flex-col`}>
              <h3 className="text-zinc-900 font-bold text-xl mb-3">
                {current.title}
              </h3>
              <p className="text-zinc-700 text-base mb-4 leading-relaxed">
                {current.blurb}
              </p>
              <p className="text-blue-600 text-sm font-medium">{current.tech}</p>
              {Boolean(current.repo) && (
                <div className="mt-4">
                  <a
                    href={current.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 hover:border-zinc-400 transition-colors duration-200"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path fillRule="evenodd" d="M12 .5a11.5 11.5 0 00-3.64 22.41c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.26 3.41.96.11-.76.41-1.26.74-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.12-3.04 0 0 .97-.31 3.18 1.19a11.08 11.08 0 015.8 0c2.2-1.5 3.17-1.19 3.17-1.19.64 1.58.24 2.75.12 3.04.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.42.36.8 1.07.8 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A11.5 11.5 0 0012 .5z" clipRule="evenodd"/></svg>
                    <span>Source Code</span>
                  </a>
                </div>
              )}
            </div>

            {/* image (placed first for side) */}
            <div key={current.img} className={`${current.layout === 'side' ? 'lg:w-1/2 order-1 lg:order-1' : 'lg:w-full order-2'} w-full rounded-lg border border-zinc-200 bg-white overflow-hidden flex items-center justify-center text-zinc-500 text-center px-0 ${current.layout === 'side' ? 'h-[28rem] md:h-[32rem] lg:h-[36rem]' : (current.imgHeight || 'h-96 md:h-[28rem] lg:h-[32rem]')} ${current.imgWidthClass ? `${current.imgWidthClass} mx-auto` : ''}`}>
              <img
                src={current.img}
                alt={current.title}
                loading="lazy"
                decoding="async"
                className={`w-full h-full ${current.layout === 'side' ? 'object-contain' : 'object-contain'}`}
                onLoad={(e) => {
                  const img = e.currentTarget;
                  const fallback = img.nextElementSibling as HTMLElement;
                  img.style.display = 'block';
                  if (fallback) fallback.style.display = 'none';
                }}
                onError={(e) => {
                  const img = e.currentTarget;
                  const fallback = img.nextElementSibling as HTMLElement;
                  if (fallback) {
                    img.style.display = 'none';
                    fallback.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback placeholder - hidden by default */}
              <div className="w-full h-full bg-gradient-to-br from-zinc-100 to-blue-100 items-center justify-center hidden">
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-zinc-200 flex items-center justify-center">
                    <svg className="w-8 h-8 text-zinc-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Project Screenshot</p>
                  <p className="text-xs text-zinc-400 mt-1">{current.img}</p>
                </div>
              </div>
            </div>
          </div>

          {/* small note removed in favor of per-project source links */}
        </div>
      </section>

      {/* CONTACT (refined "Let's Connect") */}
      <section id="contact" className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900">
            Let's Connect
          </h2>
          <p className="mt-3 text-center text-zinc-600 max-w-3xl mx-auto text-lg">
          I turn messy data into clear, actionable insights. If you’re building pipelines, 
          dashboards, or automation and need a reliable, detail-oriented collaborator, 
          reach out and let's talk.
          </p>

          {/* profile + message card */}
          <div className="mt-8 rounded-2xl border border-blue-200 bg-white shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 p-8 md:p-10 text-white flex flex-col items-center justify-center">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full ring-4 ring-white/30 overflow-hidden shadow-lg">
                  <img src="/Headshot.png" alt="Noah Pettinato" className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-5 text-xl font-bold">Noah Pettinato</h3>
                <p className="mt-1 text-blue-100 text-center max-w-xs">Transforming data systems into actionable solutions.</p>
                <div className="mt-6 h-px w-24 bg-white/30" />
              </div>
              <div className="p-8 md:p-10">
                <p className="text-zinc-700 leading-relaxed">
                I’m always interested in connecting with others working in data analytics and automation. 
                Whether you’re building ETL pipelines, developing dashboards, or exploring predictive modeling, 
                I’d be happy to connect and exchange ideas.
                </p>
                <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-zinc-800 font-semibold text-sm">Areas I enjoy discussing:</p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                    <li className="flex items-start gap-2"><span>New projects or collaborations</span></li>
                    <li className="flex items-start gap-2"><span>ETL, dashboards, or analytics engineering</span></li>
                    <li className="flex items-start gap-2"><span>Predictive modeling or experimentation</span></li>
                  </ul>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="https://linkedin.com/in/noah-pettinato" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 text-white px-5 py-3 font-semibold shadow-sm hover:bg-black transition-colors">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.64c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V23h-4V8z"/></svg>
                    <span>Connect on LinkedIn</span>
                  </a>
                  <a href="https://github.com/noahpettinato" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-5 py-3 font-semibold text-zinc-800 shadow-sm hover:bg-zinc-50 hover:border-zinc-400 transition-colors">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path fillRule="evenodd" d="M12 .5a11.5 11.5 0 00-3.64 22.41c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.26 3.41.96.11-.76.41-1.26.74-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.12-3.04 0 0 .97-.31 3.18 1.19a11.08 11.08 0 015.8 0c2.2-1.5 3.17-1.19 3.17-1.19.64 1.58.24 2.75.12 3.04.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.42.36.8 1.07.8 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A11.5 11.5 0 0012 .5z" clipRule="evenodd"/></svg>
                    <span>Check out my GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* end spacing below the card */}
          <div className="mt-6" />
        </div>
      </section>

      {/* SITE INFO (final section) */}
      <section className="bg-gradient-to-br from-white to-blue-50 text-zinc-700 border-t border-zinc-200">
        
        <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-zinc-900 font-extrabold text-lg">Noah Pettinato</h3>
            <p className="mt-3 text-sm text-zinc-700 max-w-sm">
            Where data meets clarity and execution.

            </p>
          </div>
          <div>
            <h3 className="text-zinc-900 font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#home" className="hover:text-zinc-900 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-zinc-900 transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-zinc-900 transition-colors">Experience</a></li>
              <li><a href="#skills" className="hover:text-zinc-900 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-zinc-900 font-semibold">Get In Touch</h3>
            <div className="mt-3 flex items-center gap-3">
              <a href="https://linkedin.com/in/noah-pettinato" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white hover:bg-black transition-colors" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.64c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V23h-4V8z"/></svg>
              </a>
              <a href="https://github.com/noahpettinato" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white hover:bg-black transition-colors" aria-label="GitHub">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path fillRule="evenodd" d="M12 .5a11.5 11.5 0 00-3.64 22.41c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.26 3.41.96.11-.76.41-1.26.74-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.12-3.04 0 0 .97-.31 3.18 1.19a11.08 11.08 0 015.8 0c2.2-1.5 3.17-1.19 3.17-1.19.64 1.58.24 2.75.12 3.04.75.81 1.2 1.84 1.2 3.1 0 4.42-2.69 5.39-5.25 5.67.42.36.8 1.07.8 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A11.5 11.5 0 0012 .5z" clipRule="evenodd"/></svg>
              </a>
              <a href="mailto:noahpettinato@gmail.com" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white hover:bg-black transition-colors" aria-label="Email">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.511l-10 6.25-10-6.25V6zm0 2.489V18a2 2 0 002 2h16a2 2 0 002-2V8.489l-9.445 5.896a2 2 0 01-2.11 0L2 8.489z"/></svg>
              </a>
            </div>
            <p className="mt-3 text-sm text-zinc-700">noahpettinato@gmail.com</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-zinc-400 py-10 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <p>
            I built this site from scratch with Next.js and Tailwind CSS.{" "}
            <a
              href="https://github.com/noahpettinato/portfolio-site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              View the GitHub repo
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}

