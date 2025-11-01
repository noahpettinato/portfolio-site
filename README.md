# Personal Portfolio Website

A responsive portfolio website showcasing data analytics, automation, and research projects. Built from scratch with **Next.js** and **Tailwind CSS**, written in **TypeScript/React**, and deployed on **Vercel**.

**Live Site:** https://noahpettinato.vercel.app  
**Repo:** https://github.com/noahpettinato/portfolio-site

---

## Overview

This site presents my background as an emerging data analyst with a B.S. in Applied & Computational Mathematics and a minor in Computer Science. It emphasizes data systems and analytics through concise project writeups, an experience timeline, a structured skills matrix, and a contact section. The projects and copy mirror the content rendered in `app/page.tsx`.

---

## Site Sections

- **Home/Hero** — Name, tagline (“Data Systems & Analytics”), summary (“Emerging Data Analyst · Applied Mathematics & Computer Science”), quick actions (Get in Touch, View Projects, Resume), and social links.
- **About** — Recent graduate profile; focus on pipelines (SQL/Python), predictive models (Python), numerical solvers (MATLAB), and dashboards (Power BI/Tableau).
- **Experience** — Four entries:
  - **Data Operations Intern · Wagner Engineering** (Oct 2025 – Present): Python, Playwright, pandas; web scraping + ETL to BI workflows; AWS.
  - **Mathematics Expert (Contract) · Mercor** (Sept 2025 – Present): author/curate advanced problems; improve AI reasoning data.
  - **Undergraduate Research Assistant · Oregon State University** (Apr 2025 – Jul 2025): MATLAB nonlinear heat transfer; Newton solvers with analytic Jacobians; stability & convergence.
  - **Data and Research Intern · Pettinato & Associates** (Jun 2019 – Jul 2025): SQL Server, Crystal Reports; reporting automation and data validation.
- **Skills** —
  - *Programming & Scripting:* Python, MATLAB, SQL, Java, JavaScript, HTML, R, C#
  - *Data & Analytics:* NumPy, pandas, Tableau, Power BI, Excel, Crystal Reports, Data Cleaning, Predictive Modeling
  - *Dev & Collaboration:* VS Code, GitHub, Git, LaTeX, Salesforce, Playwright
  - *Technical Focus:* ETL pipelines, web scraping, AWS, workflow automation, data visualization, predictive analytics, reporting automation, model tuning, runtime benchmarking, dashboard creation, quality assurance
- **Projects (carousel)** — Four projects with per-project repo links and screenshots.
- **Contact** — “Let’s Connect” card with profile, areas of interest, CTA buttons for LinkedIn and GitHub, and email.
- **Footer** — “I built this site from scratch. View the GitHub repo”.

---

## Projects

- **Nonlinear Radiation Solver**  
  Fully implicit MATLAB solver for 1D heat diffusion with nonlinear radiation (Robin) boundaries. Implements Newton’s method with analytic Jacobians and Backward Euler time-stepping to compare finite difference and ghost-point (CCFD) methods for stability and convergence.  
  *Tech:* MATLAB · PDEs · numerical methods · Newton solvers · Backward Euler  
  *Repo:* https://github.com/noahpettinato/nonlinear-radiation-solver

- **Financial Data Analysis (AAPL Forecasting)**  
  Explores stock trends and ARIMA forecasting on seven years of AAPL data. Includes EDA, AIC/BIC model tuning, and residual diagnostics; results visualized with interactive dashboards in Power BI and Tableau.  
  *Tech:* Python · pandas · ARIMA · Power BI · Tableau · Excel  
  *Repo:* https://github.com/noahpettinato/financial-data-analysis

- **Movie Data Analysis ETL**  
  End-to-end ETL and exploratory data analysis pipeline for The Movies Dataset (Kaggle): cleaning, transformation, and insight generation with visual summaries; built to demonstrate automation and reproducible workflows.  
  *Tech:* Python · pandas · ETL · data cleaning · visualization  
  *Repo:* https://github.com/noahpettinato/movie-data-analysis-etl

- **Algorithms Portfolio**  
  Concise Python implementations covering recursion, greedy algorithms, dynamic programming, and regression. Benchmarked for runtime efficiency and scalability.  
  *Tech:* Python · recursion · dynamic programming · runtime benchmarking  
  *Repo:* https://github.com/noahpettinato/algorithms-portfolio

---

## Tech Stack

- **Framework:** Next.js  
- **Styling:** Tailwind CSS  
- **Language:** TypeScript/React  
- **Deployment:** Vercel

---

## Running Locally

```bash
# Clone the repository
git clone https://github.com/noahpettinato/portfolio-site.git
cd portfolio-site

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open http://localhost:3000 in your browser.

---

## Project Structure

```
portfolio-site/
├── app/
│   ├── page.tsx        # Main homepage and sections (hero, about, experience, skills, projects, contact)
│   └── layout.tsx      # Global layout
├── components/         # Reusable UI components
├── public/             # Static assets (images: project screenshots, headshot)
├── styles/             # Global Tailwind styles
└── README.md
```

---

## Features

- Sectioned, recruiter-friendly layout (About, Experience, Skills, Projects, Contact)
- Project carousel with screenshots and direct GitHub links
- Responsive design and accessible color contrasts
- Minimalist UI with subtle transitions
- Simple configuration via the `projects` array in `page.tsx`

---

## License

This project is open-source and available under the MIT License.
