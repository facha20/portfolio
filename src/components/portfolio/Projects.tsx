import { motion } from "framer-motion";
import { BookOpen, Globe, Package, Terminal, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./About";

const projects = [
  {
    icon: BookOpen,
    title: "Gestion de bibliothèque",
    description: "Application de gestion des emprunts de livres avec requêtes SQL complexes et suivi des retours.",
    tags: ["SQL", "Gestion des emprunts", "Requêtes complexes"],
  },
  {
    icon: Globe,
    title: "Site Web d'École",
    description: "Site institutionnel responsive avec présentation des formations, actualités et contact.",
    tags: ["HTML", "CSS", "Bootstrap", "Responsive"],
  },
  {
    icon: Package,
    title: "Application de Suivi de Colis",
    description: "Interface web permettant de suivre l'état des colis en temps réel via des données JSON.",
    tags: ["HTML", "CSS", "JavaScript", "JSON"],
  },
  {
    icon: Terminal,
    title: "Administration Linux",
    description: "Mise en place d'un environnement Linux : gestion des utilisateurs, droits et partages réseau.",
    tags: ["Linux", "Utilisateurs", "Partages réseau"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Projets" title="Quelques réalisations académiques" center />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-7 rounded-2xl bg-card border border-border/60 shadow-card-elegant hover:shadow-elegant hover:-translate-y-1 transition-smooth overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-20 blur-2xl transition-smooth" />
              <div className="flex items-start justify-between mb-4 relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center text-primary-foreground">
                  <p.icon size={22} />
                </div>
                <ArrowUpRight className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-smooth" />
              </div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
