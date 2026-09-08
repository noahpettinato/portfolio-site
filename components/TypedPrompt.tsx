"use client";

import { useEffect, useRef, useState } from "react";

type TypedPromptProps = {
  command: string;
  cwd?: string;
  keepCaret?: boolean;
};

export default function TypedPrompt({
  command,
  cwd = "PS C:\\Users\\noah\\portfolio>",
  keepCaret = false,
}: TypedPromptProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(command.length);
      setStarted(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [command]);

  useEffect(() => {
    if (!started || shown >= command.length) return;
    const delay = shown === 0 ? 120 : 22;
    const timer = window.setTimeout(() => setShown((value) => value + 1), delay);
    return () => window.clearTimeout(timer);
  }, [started, shown, command.length]);

  const done = shown >= command.length;
  const visibleCommand = command.slice(0, shown);

  return (
    <div ref={ref} className="font-mono text-[13px] sm:text-sm leading-relaxed">
      <span className="sr-only">
        {cwd} {command}
      </span>
      <p aria-hidden="true" className="m-0 break-words">
        <span className="text-[var(--term-green)]">{cwd}</span>
        <span className="text-[var(--term-bright)]">
          {" "}
          {visibleCommand}
        </span>
        {(!done || keepCaret) && <span className="caret" />}
      </p>
    </div>
  );
}
