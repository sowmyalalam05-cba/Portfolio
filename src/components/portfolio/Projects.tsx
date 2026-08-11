import { Github, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import { PROJECTS } from "./data";

export function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="03"
          title="Projects"
          subtitle="Security tooling I've built to automate detection, analysis, and response."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="glass-card group relative h-full overflow-hidden p-7">
                <span className="absolute right-6 top-6 font-mono text-xs text-muted-foreground/60">
                  0{i + 1}
                </span>
                <h3 className="pr-10 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-[11px] text-accent"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary transition-transform hover:translate-x-1"
                >
                  <Github className="h-4 w-4" /> View source
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
