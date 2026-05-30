import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { CursorGlow, ScrollProgress, ParticleBackground } from "@/components/portfolio/Effects";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Geetha Wilson — AI & Data Science Student | Portfolio" },
      { name: "description", content: "Portfolio of Geetha Wilson, B.Tech AI & Data Science student. Machine Learning, React development, Python and AI innovation." },
      { property: "og:title", content: "Geetha Wilson — AI & Data Science Portfolio" },
      { property: "og:description", content: "Future AI Engineer & Frontend Developer crafting intelligent, user-friendly experiences." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="mx-auto size-14 rounded-full border-2 border-transparent border-t-neon-cyan border-r-neon-purple"
        />
        <p className="mt-5 text-sm font-medium text-gradient">Loading portfolio...</p>
      </div>
    </motion.div>
  );
}

function Index() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <ScrollProgress />
      <CursorGlow />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}
