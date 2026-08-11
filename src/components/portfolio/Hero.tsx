import { motion } from "motion/react";
import { ArrowDown, Download, Terminal as TerminalIcon } from "lucide-react";
import { MatrixRain } from "./MatrixRain";
import { useTypewriter } from "./primitives";
import { OWNER } from "./data";

export function Hero() {
  const line1 = useTypewriter(`Hi, I'm ${OWNER.name}`, 60, true, 300);
  const line2 = useTypewriter(OWNER.role, 60, line1.done, 400);

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 -z-20 grid-bg" aria-hidden="true" />
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <MatrixRain />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_40%,transparent_10%,var(--background)_78%)]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-6xl px-5 pt-28 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          system online — threat level: low
        </motion.p>

        <h1 className="mt-6 font-display text-4xl leading-tight font-bold sm:text-6xl lg:text-7xl">
          <span className="sr-only">Sowmya Lalam — Cybersecurity Analyst</span>
          <span aria-hidden="true" className="block glow-text">
            {line1.out}
            {!line1.done ? <span className="caret text-primary">▍</span> : null}
          </span>
          <span aria-hidden="true" className="mt-2 block text-gradient-neon">
            {line2.out}
            {line1.done ? <span className="caret text-accent">▍</span> : null}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          Securing systems. Defending networks. Building trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="glow-neon inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <TerminalIcon className="h-4 w-4" /> View Projects
          </a>
          <a
            href="#resume"
            className="inline-flex items-center gap-2 rounded-md border border-accent/60 px-6 py-3 font-mono text-sm font-semibold text-accent transition-all hover:bg-accent/10 hover:shadow-[var(--glow-cyan)]"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-20 flex items-center gap-2 font-mono text-xs text-muted-foreground"
        >
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-primary" /> scroll to decrypt
        </motion.div>
      </div>
    </section>
  );
}
