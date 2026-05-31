import { motion } from "framer-motion";
import { Download, Mail, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-gradient-hero"
    >
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-gradient-brand opacity-20 blur-3xl animate-float" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-brand-violet opacity-20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-border/60 text-sm mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-muted-foreground">Disponible pour un stage</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Ndeye Fatou
            <br />
            <span className="text-gradient">DIOGOUL</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-medium mb-4">
            Étudiante en Informatique · Développeuse Web 
          </p>

          <p className="text-base text-muted-foreground/90 max-w-xl mb-8 leading-relaxed">
            Passionnée par les technologies numériques, le développement web et la
            résolution de problèmes informatiques.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/cv-ndeye-fatou-diogoul.pdf"
              download
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-brand text-primary-foreground font-medium shadow-elegant hover:shadow-glow transition-smooth hover:-translate-y-0.5"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              Télécharger mon CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card hover:bg-accent font-medium transition-smooth hover:-translate-y-0.5"
            >
              <Mail size={18} />
              Me contacter
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-brand rounded-full blur-3xl opacity-40 scale-110" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-card shadow-elegant">
              <img
                src={profileImg}
                alt="Ndeye Fatou DIOGOUL"
                width={768}
                height={768}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass border border-border/60 rounded-2xl px-4 py-3 shadow-card-elegant">
              <div className="text-xs text-muted-foreground">Spécialité</div>
              <div className="text-sm font-semibold text-gradient">Dev Web</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
