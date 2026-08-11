import { useState, type FormEvent } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./primitives";
import { OWNER } from "./data";
import { sendContactMessage } from "./contact.functions";

const inputClass =
  "w-full rounded-md border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:shadow-[var(--glow-neon)]";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await sendContactMessage({
        data: {
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          message: String(formData.get("message") ?? ""),
        },
      });
      form.reset();
      toast.success("Message sent", {
        description: "Thanks! Your message has been delivered to Sowmya.",
      });
    } catch {
      toast.error("Message not sent", {
        description: "Please try again or email Sowmya directly.",
      });
    } finally {
      setSending(false);
    }
  };

  const channels = [
    { icon: Mail, label: OWNER.email, href: `mailto:${OWNER.email}` },
    { icon: Linkedin, label: "linkedin.com/in/sowmya-lalam", href: OWNER.linkedin },
    { icon: Github, label: "github.com/sowmyalalam05-cba", href: OWNER.github },
  ];

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="08"
          title="Contact"
          subtitle="Open to security analyst roles, internships, and collaboration."
        />

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <Reveal>
            <div className="glass-card h-full space-y-4 p-7">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex min-w-0 items-center gap-3 rounded-md border border-border/60 px-4 py-3 transition-colors hover:border-primary/60 hover:bg-primary/5"
                >
                  <c.icon className="h-4 w-4 shrink-0 text-primary" />
                  <span className="truncate font-mono text-xs text-muted-foreground">
                    {c.label}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="glass-card space-y-4 p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className={`mt-2 ${inputClass}`}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className={`mt-2 ${inputClass}`}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the role or project…"
                  className={`mt-2 resize-none ${inputClass}`}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="glow-neon inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-105 disabled:opacity-60"
              >
                <Send className="h-4 w-4" /> {sending ? "Transmitting…" : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5">
        <p className="min-w-0 truncate font-mono text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} {OWNER.name} — {OWNER.role}
        </p>
        <a href="#home" className="shrink-0 font-mono text-[11px] text-primary hover:underline">
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
