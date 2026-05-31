import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 bg-card/40">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-bold text-lg">
            <span className="text-gradient">Ndeye Fatou DIOGOUL</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            © {new Date().getFullYear()} — Tous droits réservés.
          </p>
        </div>

        <ul className="flex flex-wrap gap-5 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-muted-foreground hover:text-foreground transition-smooth">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Mail, href: "mailto:ndeyefatou.diogoul@email.com" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-gradient-brand hover:text-primary-foreground hover:border-transparent transition-smooth"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
