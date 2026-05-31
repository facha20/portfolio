import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { SectionHeader } from "./About";

const schema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  subject: z.string().trim().min(1, "Le sujet est requis").max(150),
  message: z.string().trim().min(1, "Le message est requis").max(1000),
});

const contactInfo = [
  { icon: Mail, label: "Email", value: "diogoulndeyefatou@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=diogoulndeyefatou@gmail.com" },
  { icon: Phone, label: "Téléphone", value: "+221 76 605 86 41", href: "tel:+221000000000" },
  { icon: Linkedin, label: "LinkedIn", value: "in/ndeye-fatou-diogoul", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "@ndeyefatou", href: "https://github.com/facha20" },
];

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader eyebrow="Contact" title="Travaillons ensemble" center />

        <div className="grid md:grid-cols-5 gap-8 mt-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4"
          >
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/60 hover:shadow-elegant hover:-translate-y-0.5 transition-smooth group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center text-primary-foreground">
                  <c.icon size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="text-sm font-medium truncate">{c.value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="md:col-span-3 p-6 md:p-8 rounded-2xl bg-card border border-border/60 shadow-card-elegant space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Nom" error={errors.name} />
              <Field name="email" type="email" label="Email" error={errors.email} />
            </div>
            <Field name="subject" label="Sujet" error={errors.subject} />
            <div>
              <label className="block text-sm font-medium mb-1.5">Message</label>
              <textarea
                name="message"
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-primary-foreground font-medium shadow-elegant hover:shadow-glow transition-smooth hover:-translate-y-0.5"
            >
              {sent ? (<><CheckCircle2 size={18} /> Message envoyé</>) : (<><Send size={18} /> Envoyer le message</>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
      />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}
