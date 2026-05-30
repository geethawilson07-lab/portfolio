import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, FolderOpen, Github, Linkedin, Instagram } from "lucide-react";

const roles = ["Machine Learning Enthusiast", "React Developer", "Python Programmer", "AI Innovator"];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i];
    const timeout = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text === current) setTimeout(() => setDel(true), 1500);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text === "") {
          setDel(false);
          setI((i + 1) % roles.length);
        }
      }
    }, del ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, del, i]);

  return (
    <span className="text-gradient">{text}<span className="animate-pulse">|</span></span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="size-2 animate-pulse rounded-full bg-neon-cyan" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl"
        >
          Hi, I'm <span className="text-gradient">Geetha Wilson</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          AI &amp; Data Science Student · Future AI Engineer · Frontend Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-xl font-medium md:text-2xl"
        >
          <Typewriter />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <a href="/resume.pdf" download className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-neon transition-transform hover:scale-105">
            <Download className="size-4" /> Download Resume
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-colors hover:bg-card">
            <Mail className="size-4" /> Contact Me
          </a>
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-colors hover:bg-card">
            <FolderOpen className="size-4" /> View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex justify-center gap-4"
        >
          {[
            { Icon: Github, href: "https://github.com" },
            { Icon: Linkedin, href: "https://linkedin.com" },
            { Icon: Instagram, href: "https://instagram.com" },
            { Icon: Mail, href: "mailto:geetha@example.com" },
          ].map(({ Icon, href }, idx) => (
            <a key={idx} href={href} target="_blank" rel="noreferrer" className="rounded-full glass p-3 text-muted-foreground transition-all hover:scale-110 hover:text-foreground">
              <Icon className="size-5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
