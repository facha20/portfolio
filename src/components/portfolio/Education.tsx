import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "./About";

const timeline = [
  { title: "Formation en Informatique", period: "En cours", description: "Tronc commun en sciences informatiques avec spécialisation progressive." },
  { title: "Développement Web", period: "Module clé", description: "HTML, CSS, JavaScript, Bootstrap — conception d'interfaces responsives." },
  { title: "Bases de Données", period: "Module clé", description: "Modélisation, SQL, MySQL, conception et requêtes avancées." },
  { title: "Réseaux", period: "Module clé", description: "Architecture réseau, protocoles, configuration et dépannage." },
  { title: "Administration Linux", period: "Module clé", description: "Gestion d'utilisateurs, scripting, sécurité et services réseau." },
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Formation" title="Mon parcours académique" center />

        <div className="max-w-3xl mx-auto mt-14 relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative pl-16 md:pl-0 md:w-1/2 mb-10 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}
            >
              <div className={`absolute top-1 w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-primary-foreground shadow-elegant
                ${i % 2 === 0 ? "left-0 md:left-auto md:-right-5" : "left-0 md:-left-5"}`}>
                <GraduationCap size={18} />
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-card-elegant">
                <div className="text-xs font-medium text-primary mb-1">{item.period}</div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
