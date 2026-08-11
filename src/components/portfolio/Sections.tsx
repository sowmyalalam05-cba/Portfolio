import { Award, GraduationCap, BookOpen, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import { CERTIFICATIONS, POSTS } from "./data";

export function Certifications() {
  return (
    <section id="certifications" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="04"
          title="Certifications"
          subtitle="Credentials earned and in flight."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="glass-card h-full p-6">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-base font-semibold">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                <span
                  className={`mt-4 inline-block rounded-full px-3 py-1 font-mono text-[11px] ${
                    c.status === "In Progress"
                      ? "border border-accent/40 bg-accent/10 text-accent"
                      : "border border-primary/40 bg-primary/10 text-primary"
                  }`}
                >
                  {c.status}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading index="05" title="Education" subtitle="Academic foundation." />
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass-card grid h-full gap-6 p-7 sm:grid-cols-[auto_minmax(0,1fr)]">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/40 bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">Master&apos;s in Cybersecurity</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  University of Maryland, Baltimore County
                </p>
                <p className="mt-3 font-mono text-xs uppercase tracking-widest text-accent">
                  2024 — 2026
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass-card grid h-full gap-6 p-7 sm:grid-cols-[auto_minmax(0,1fr)]">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/40 bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold">B.Tech</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Aditya College of Engineering and Technology
                </p>
                <p className="mt-3 font-mono text-xs uppercase tracking-widest text-accent">
                  2020 — 2024
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Blog() {
  return (
    <section id="blog" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="06"
          title="Blog"
          subtitle="Notes and breakdowns from my security research."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="glass-card group flex h-full flex-col p-6">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-accent">
                  <BookOpen className="h-3.5 w-3.5" /> {p.tag}
                </div>
                <h3 className="mt-4 text-base font-semibold transition-colors group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between font-mono text-[11px] text-muted-foreground">
                  <span>
                    {p.date} · {p.read}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
