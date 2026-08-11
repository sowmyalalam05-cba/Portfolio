import { Download, FileText, ShieldCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import { OWNER } from "./data";

export function Resume() {
  return (
    <section id="resume" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="07"
          title="Resume"
          subtitle="A one-page summary of my experience, projects, and credentials."
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <Reveal>
            <div className="glass-card p-7">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                <h3 className="min-w-0 truncate text-lg font-semibold">{OWNER.name}</h3>
              </div>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-accent">
                {OWNER.role}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{OWNER.bio}</p>

              <dl className="mt-6 grid gap-4 border-t border-border/60 pt-6 sm:grid-cols-3">
                {[
                  { k: "Focus", v: "Network Security" },
                  { k: "Location", v: "Baltimore, MD" },
                  { k: "Availability", v: "Open to roles" },
                ].map((row) => (
                  <div key={row.k}>
                    <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {row.k}
                    </dt>
                    <dd className="mt-1 text-sm text-foreground">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card flex h-full flex-col items-center justify-center gap-5 p-7 text-center">
              <div className="grid h-24 w-20 place-items-center rounded-md border border-primary/30 bg-secondary/50">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">Sowmya_Lalam_Resume.pdf</p>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">PDF · 1 page</p>
              </div>
              <a
                href="#contact"
                className="glow-neon inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105"
              >
                <Download className="h-4 w-4" /> Download
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
