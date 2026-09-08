"use client";

import { useEffect, useState } from "react";

export const TABS = [
  { id: "home", label: "home.ps1" },
  { id: "about", label: "about.md" },
  { id: "experience", label: "experience.ps1" },
  { id: "skills", label: "skills.json" },
  { id: "projects", label: "projects.ps1" },
  { id: "contact", label: "contact.md" },
] as const;

export default function TabNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = TABS.map((tab) => document.getElementById(tab.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section tabs"
      className="tab-scroll flex overflow-x-auto border-b border-[var(--term-border)] bg-[var(--term-tab)]"
    >
      {TABS.map((tab) => {
        const isActive = active === tab.id;
        return (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            onClick={() => setActive(tab.id)}
            className={`relative flex min-h-11 shrink-0 items-center justify-center px-3 font-mono text-xs sm:px-4 sm:text-[13px] transition-colors ${
              isActive
                ? "bg-[var(--term-bg)] text-[var(--term-bright)]"
                : "text-[var(--term-dim)] hover:bg-[var(--term-tab-hover)] hover:text-[var(--term-text)]"
            }`}
          >
            {isActive && (
              <span className="absolute inset-x-0 top-0 h-[2px] bg-[var(--term-accent)]" />
            )}
            {tab.label}
          </a>
        );
      })}
    </nav>
  );
}
