import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Brain, Code, Lightbulb, Target } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const dur = 1500;
    const tick = () => {
      const p = Math.min((Date.now() - start) / dur, 1);
      setN(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const traits = [
  { Icon: Brain, title: "AI Enthusiast", desc: "Passionate about Machine Learning and intelligent systems." },
  { Icon: Code, title: "Full Stack Mindset", desc: "Building responsive, user-friendly web applications." },
  { Icon: Lightbulb, title: "Quick Learner", desc: "Curious explorer with a problem-solving mindset." },
  { Icon: Target, title: "Goal Driven", desc: "Becoming an AI Engineer & Full Stack Developer." },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-center">
          <p className="text-sm font-medium text-neon-cyan">/ About Me</p>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">Crafting intelligent <span className="text-gradient">experiences</span></h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate <span className="font-semibold text-foreground">B.Tech student in Artificial Intelligence &amp; Data Science</span> at Rohini College of Engineering and Technology. My curiosity sits at the intersection of intelligent algorithms and elegant interfaces.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              I love working across <span className="text-foreground">Machine Learning, Web Development and Data Analytics</span>, building applications that are both smart and a joy to use. My goal is to grow into an <span className="text-foreground">AI Engineer and Full Stack Developer</span> shipping products that solve real problems.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: 10, s: "+", l: "Projects" },
                { v: 5, s: "+", l: "Certifications" },
                { v: 15, s: "+", l: "Technologies" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl glass p-4 text-center">
                  <div className="text-3xl font-bold text-gradient"><Counter to={s.v} suffix={s.s} /></div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="mb-3 inline-flex rounded-xl bg-gradient-primary p-2.5 text-primary-foreground">
                  <t.Icon className="size-5" />
                </div>
                <h3 className="font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
