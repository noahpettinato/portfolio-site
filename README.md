# Personal Portfolio Website

A responsive portfolio website showcasing data analytics, automation, and research projects. Built from scratch with **Next.js** and **Tailwind CSS**, written in **TypeScript/React**, and deployed on **Vercel**.

**Live Site:** https://noahpettinato.vercel.app  
**Repo:** https://github.com/noahpettinato/portfolio-site

---

## Overview

This site presents my background as an emerging data analyst with a B.S. in Applied & Computational Mathematics and a minor in Computer Science. It emphasizes data systems and analytics through concise project writeups, an experience timeline, a structured skills matrix, and a contact section.

---

## Sections
- Home/Hero (tagline, CTAs, social)
- About (pipelines, modeling, dashboards)
- Experience (Wagner Engineering; Mercor; OSU Research; Pettinato & Associates)
- Skills (Programming, Data & Analytics, Dev & Collaboration, Technical Focus)
- Projects (carousel with screenshots and source links)
- Contact and Footer

---

## Projects

- **Nonlinear Radiation Solver** — MATLAB solver for 1D heat diffusion with nonlinear radiation (Robin) boundaries using Newton’s method with analytic Jacobians and Backward Euler; compares FD vs CCFD for stability and convergence.  
- **Financial Data Analysis (AAPL)** — EDA and ARIMA forecasting on seven years of AAPL with AIC/BIC tuning and residual diagnostics; visuals prepared for Power BI and Tableau.  
- **Movie Data Analysis ETL** — End-to-end ETL and EDA for The Movies Dataset (Kaggle): cleaning, transformation, and insight generation; reproducible workflow.  
- **Algorithms Portfolio** — Python implementations spanning recursion, greedy algorithms, dynamic programming, and regression; runtime benchmarking.  

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
