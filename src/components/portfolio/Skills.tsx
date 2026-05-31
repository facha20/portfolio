import { motion } from "framer-motion";
import { Code, Cpu, Database, Network, FileText } from "lucide-react";
import { SectionHeader } from "./About";

const categories = [
  {
    icon: Code,
    title: "Développement Web",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    icon: Cpu,
    title: "Programmation",
    skills: [
      { name: "Java", level: 70 },
      { name: "C", level: 65 },
    ],
  },
  {
    icon: Database,
    title: "Bases de données",
    skills: [
      { name: "SQL", level: 80 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    icon: Network,
    title: "Systèmes & Réseaux",
    skills: [
      { name: "Linux", level: 75 },
      { name: "Réseaux Informatiques", level: 70 },
    ],
  },
  {
    icon: FileText,
    title: "Bureautique",
    skills: [
      { name: "Microsoft Word", level: 90 },
      { name: "Excel", level: 85 },
      { name: "PowerPoint", level: 90 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-soft relative">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Compétences" title="Mon stack technique" center />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-card border border-border/60 shadow-card-elegant hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center text-primary-foreground">
                  <cat.icon size={20} />
                </div>
                <h3 className="font-semibold text-lg">{cat.title}</h3>
              </div>
              <div className="space-y-3">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-brand rounded-full"
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
