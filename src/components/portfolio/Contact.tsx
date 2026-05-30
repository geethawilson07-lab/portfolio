import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Heart } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <section id="contact" className="relative px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-center">
            <p className="text-sm font-medium text-neon-cyan">/ Contact</p>
            <h2 className="mt-2 text-4xl font-bold md:text-5xl">Let's <span className="text-gradient">connect</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Have an opportunity, collaboration or just want to say hi? Drop me a message.</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-5">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-4 md:col-span-2">
              {[
                { Icon: Mail, label: "Email", value: "geetha.wilson@email.com" },
                { Icon: MapPin, label: "Location", value: "Tamil Nadu, India" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 rounded-2xl glass p-5">
                  <div className="rounded-xl bg-gradient-primary p-2.5">
                    <c.Icon className="size-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="text-sm font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl glass p-5">
                <p className="mb-3 text-sm font-medium">Find me online</p>
                <div className="flex gap-3">
                  {[
                    { Icon: Github, href: "https://github.com" },
                    { Icon: Linkedin, href: "https://linkedin.com" },
                    { Icon: Instagram, href: "https://instagram.com" },
                  ].map(({ Icon, href }, i) => (
                    <a key={i} href={href} target="_blank" rel="noreferrer" className="rounded-full glass p-2.5 text-muted-foreground transition-all hover:scale-110 hover:text-foreground">
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.form
              onSubmit={submit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 rounded-2xl glass p-6 md:col-span-3"
            >
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl bg-input/60 px-4 py-2.5 text-sm outline-none ring-0 transition focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                  maxLength={100}
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl bg-input/60 px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-primary"
                  placeholder="you@email.com"
                  maxLength={255}
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full resize-none rounded-xl bg-input/60 px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-primary"
                  placeholder="Tell me about your project..."
                  maxLength={1000}
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-neon transition-transform hover:scale-[1.02]">
                {sent ? "Message sent ✓" : (<><Send className="size-4" /> Send message</>)}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Geetha Wilson. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">Built with <Heart className="size-3.5 fill-neon-pink text-neon-pink" /> using React &amp; Tailwind</p>
        </div>
      </footer>
    </>
  );
}
