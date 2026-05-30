import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen, Award, Trophy, Users, Zap, Code2 } from "lucide-react";

const timeline = [
  {
    Icon: GraduationCap,
    period: "2023 — Present",
    title: "B.Tech, Artificial Intelligence & Data Science",
    place: "Rohini College of Engineering and Technology",
    note: "CGPA: 8.5 / 10 (placeholder) · Active in AI workshops and tech events.",
  },
  {
    Icon: School,
    period: "2021 — 2023",
    title: "Higher Secondary Education",
    place: "Senior Secondary School",
    note: "Mathematics & Computer Science focus.",
  },
];

const certs = [
  { title: "Python for Data Science", issuer: "IBM" },
  { title: "Machine Learning Basics", issuer: "Coursera" },
  { title: "Web Development Bootcamp", issuer: "Udemy" },
  { title: "AI Fundamentals", issuer: "Google" },
  { title: "React Development", issuer: "Meta" },
];

const achievements = [
  { Icon: Trophy, text: "Built multiple AI and full-stack web projects." },
  { Icon: Zap, text: "Active learner exploring cutting-edge AI technologies." },
  { Icon: Code2, text: "Participated in coding competitions and tech events." },
  { Icon: Users, text: "Strong teamwork and clear communication skills." },
];

export function Education() {
  return (
    <>
      <section id="education" className="relative px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-center">
            <p className="text-sm font-medium text-neon-cyan">/ Education</p>
            <h2 className="mt-2 text-4xl font-bold md:text-5xl">Academic <span className="text-gradient">journey</span></h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink md:left-1/2" />
            {timeline.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative mb-10 flex items-start gap-6 md:w-1/2 ${i % 2 === 0 ? "md:ml-auto md:pl-10" : "md:pr-10 md:text-right"}`}
              >
                <div className={`absolute left-4 top-2 -translate-x-1/2 rounded-full bg-gradient-primary p-2 shadow-neon md:left-auto ${i % 2 === 0 ? "md:-left-1" : "md:-right-9"}`}>
                  <t.Icon className="size-4 text-primary-foreground" />
                </div>
                <div className="ml-12 rounded-2xl glass p-6 md:ml-0">
                  <p className="text-xs font-medium text-neon-cyan">{t.period}</p>
                  <h3 className="mt-1 text-lg font-semibold">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.place}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{t.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-center">
            <p className="text-sm font-medium text-neon-cyan">/ Certifications</p>
            <h2 className="mt-2 text-4xl font-bold md:text-5xl">Continuous <span className="text-gradient">learning</span></h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-xl bg-gradient-primary p-2.5">
                    <Award className="size-5 text-primary-foreground" />
                  </div>
                  <BookOpen className="size-4 text-muted-foreground transition-transform group-hover:rotate-12" />
                </div>
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Issued by {c.issuer}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 text-center">
              <p className="text-sm font-medium text-neon-cyan">/ Achievements</p>
              <h2 className="mt-2 text-4xl font-bold md:text-5xl">Milestones &amp; <span className="text-gradient">wins</span></h2>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.text}
                  initial={{ opacity: 0, x: i % 2 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-4 rounded-2xl glass p-5"
                >
                  <div className="rounded-xl bg-gradient-primary p-2.5">
                    <a.Icon className="size-5 text-primary-foreground" />
                  </div>
                  <p className="pt-1 text-sm">{a.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
