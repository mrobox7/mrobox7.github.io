import ExperienceSection from "@/components/sections/experience/ExperienceSection";
import Hero from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <main className="portfolio-grid min-h-screen w-full bg-surface-soft">
      <Hero />
      <ExperienceSection />
    </main>
  );
}
