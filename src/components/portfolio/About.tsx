import { motion } from "framer-motion";
import { GraduationCap, Code2, Database, Server } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "Parcours", text: "Étudiante en informatique, en quête perpétuelle d'apprentissage et de défis techniques." },
  { icon: Code2, title: "Développement Web", text: "Création d'interfaces modernes, responsives et accessibles." },
  { icon: Database, title: "Bases de données", text: "Conception et modélisation de bases de données relationnelles fiables." },
  { icon: Server, title: "Administration Système", text: "Gestion d'environnements Linux et configurations réseau." },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="À propos" title="Une étudiante curieuse, rigoureuse et passionnée" />

        <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              Je m'appelle <span className="text-foreground font-medium">Ndeye Fatou DIOGOUL</span>,
              étudiante en informatique avec une passion réelle pour le développement web,
              les bases de données et l'administration système.
            </p>
            <p>
              Mon objectif est de construire des solutions numériques utiles, performantes
              et bien pensées — tout en continuant à explorer de nouvelles technologies
              et à affiner mes compétences techniques.
            </p>
            <p>
              Je recherche aujourd'hui des opportunités professionnelles qui me
              permettront d'apprendre aux côtés d'équipes engagées et de contribuer
              à des projets ambitieux.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-card border border-border/60 shadow-card-elegant hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center text-primary-foreground mb-3">
                  <h.icon size={20} />
                </div>
                <h3 className="font-semibold mb-1">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, center = false }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium uppercase tracking-wider mb-4">
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        {title}
      </h2>
    </motion.div>
  );
}
