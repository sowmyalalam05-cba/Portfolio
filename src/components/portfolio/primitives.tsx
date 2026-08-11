import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-12">
      <p className="font-mono text-sm text-accent">
        <span className="text-primary">{index}</span> ./{title.toLowerCase().replace(/\s+/g, "-")}
      </p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
        <span className="text-gradient-neon">{title}</span>
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">{subtitle}</p>
      ) : null}
      <div className="mt-5 h-px w-28 bg-gradient-to-r from-primary to-transparent" />
    </Reveal>
  );
}

/** Types out `text` character by character once `start` is true. */
export function useTypewriter(text: string, speed = 45, start = true, startDelay = 0) {
  const [out, setOut] = useState("");

  useEffect(() => {
    if (!start) return;
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, start, startDelay]);

  return { out, done: out.length === text.length };
}
