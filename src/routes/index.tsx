import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Stats } from "@/components/portfolio/Stats";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollTop } from "@/components/portfolio/ScrollTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ndeye Fatou DIOGOUL — Étudiante en Informatique & Développeuse Web" },
      { name: "description", content: "Portfolio de Ndeye Fatou DIOGOUL, étudiante en informatique passionnée par le développement web, les bases de données et l'administration système." },
      { property: "og:title", content: "Ndeye Fatou DIOGOUL — Portfolio" },
      { property: "og:description", content: "Étudiante en informatique · Développeuse web junior. Découvrez mes projets et compétences." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
