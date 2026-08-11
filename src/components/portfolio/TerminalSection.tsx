import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Reveal, SectionHeading } from "./primitives";

const SEQUENCE = [
  { cmd: "whoami", out: "Sowmya Lalam (Cybersecurity Analyst)" },
  { cmd: "skills", out: "Network Security | Ethical Hacking | Threat Analysis" },
  { cmd: "status", out: "Actively seeking opportunities" },
];

type Line = { type: "cmd" | "out"; text: string };

export function TerminalSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [lines, setLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;

    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const run = async () => {
      for (const step of SEQUENCE) {
        for (let i = 1; i <= step.cmd.length; i++) {
          if (cancelled) return;
          setTyping(step.cmd.slice(0, i));
          await wait(70);
        }
        await wait(350);
        if (cancelled) return;
        setTyping("");
        setLines((prev) => [
          ...prev,
          { type: "cmd", text: step.cmd },
          { type: "out", text: step.out },
        ]);
        await wait(600);
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, [inView]);

  return (
    <section id="terminal" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="01"
          title="Terminal"
          subtitle="A quick shell into who I am and what I do."
        />

        <Reveal>
          <div
            ref={ref}
            className="glass-card overflow-hidden font-mono text-sm shadow-[0_30px_80px_-40px_oklch(0.88_0.24_155_/_0.4)]"
          >
            <div className="flex items-center gap-2 border-b border-border/70 bg-secondary/40 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-destructive/80" />
              <span className="h-3 w-3 rounded-full bg-chart-4/80" />
              <span className="h-3 w-3 rounded-full bg-primary/80" />
              <span className="ml-3 truncate text-xs text-muted-foreground">
                sowmya@secops: ~/portfolio
              </span>
            </div>

            <div className="min-h-[280px] space-y-2 p-5 sm:p-7">
              {lines.map((line, i) =>
                line.type === "cmd" ? (
                  <p key={i} className="text-primary">
                    <span className="text-accent">➜</span> {line.text}
                  </p>
                ) : (
                  <p key={i} className="pl-5 text-foreground/80">
                    {line.text}
                  </p>
                ),
              )}
              <p className="text-primary">
                <span className="text-accent">➜</span> {typing}
                <span className="caret">▍</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
