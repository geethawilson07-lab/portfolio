import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Bot, BarChart3, ScanFace, Globe } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot Web App",
    desc: "React + Django chatbot with real-time responses and authentication.",
    tags: ["React", "Django", "AI"],
    category: "AI",
    Icon: Bot,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Student Performance Predictor",
    desc: "ML model predicting student marks with an interactive dashboard.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    category: "ML",
    Icon: BarChart3,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "Smart Attendance System",
    desc: "Face-recognition attendance with OpenCV-powered automation.",
    tags: ["Python", "OpenCV", "AI"],
    category: "AI",
    Icon: ScanFace,
    gradient: "from-pink-400 to-orange-500",
  },
  {
    title: "Portfolio Website",
    desc: "Responsive personal portfolio with smooth animations.",
    tags: ["React", "Tailwind", "Motion"],
    category: "Web",
    Icon: Globe,
    gradient: "from-emerald-400 to-cyan-500",
  },
];

const filters = ["All", "AI", "ML", "Web"];

export function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 text-center">
          <p className="text-sm font-medium text-neon-cyan">/ Projects</p>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">Featured <span className="text-gradient">work</span></h2>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === f ? "bg-gradient-primary text-primary-foreground shadow-neon" : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group overflow-hidden rounded-2xl glass transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                  <p.Icon className="size-20 text-white/90 transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-neon-cyan">
                      <Github className="size-4" /> Code
                    </a>
                    <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-neon-cyan">
                      <ExternalLink className="size-4" /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
