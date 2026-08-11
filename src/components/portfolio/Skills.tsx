import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Reveal, SectionHeading } from "./primitives";
import { SKILL_GROUPS } from "./data";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between gap-3">
        <span className="min-w-0 truncate text-sm text-foreground/90">{name}</span>
        <span className="shrink-0 font-mono text-[11px] text-accent">{level}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
        <motion.div
          className="h-full rounded-full bg-[image:var(--gradient-neon)]"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="02"
          title="Skills"
          subtitle="Tooling, languages, and concepts I use to find, understand, and close security gaps."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.08}>
              <div className="glass-card h-full p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {group.title}
                </h3>
                <div className="mt-5 space-y-4">
                  {group.items.map((item, i) => (
                    <SkillBar key={item.name} name={item.name} level={item.level} delay={i * 0.08} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
