import { motion } from "framer-motion";

const groups = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "C Programming", level: 80 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React.js", level: 88 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Node.js", level: 70 },
    ],
  },
  {
    title: "AI & Data Science",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "Data Analysis", level: 82 },
      { name: "NumPy", level: 85 },
      { name: "Pandas", level: 85 },
      { name: "TensorFlow", level: 60 },
      { name: "Data Visualization", level: 78 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Canva", level: 85 },
      { name: "Figma", level: 78 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 text-center">
          <p className="text-sm font-medium text-neon-cyan">/ Skills</p>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">My <span className="text-gradient">toolkit</span></h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="rounded-2xl glass p-6"
            >
              <h3 className="mb-5 text-lg font-semibold">{g.title}</h3>
              <div className="space-y-4">
                {g.skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
