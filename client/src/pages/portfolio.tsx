import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import GitHubSection from "@/components/github-section";
import ProjectsSection from "@/components/projects-section";
import TelegramSection from "@/components/telegram-section";
import ContactSection from "@/components/contact-section";
import { useLanguage } from "@/hooks/useLanguage";

export default function Portfolio() {
  const { t } = useLanguage();
  
  useEffect(() => {
    document.title = "Toronchenko";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-slate-100 font-mono overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GitHubSection />
      <ProjectsSection />
      <TelegramSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-cyber-dark border-t border-neon-cyan/20 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-slate-200">
                {t.footerText}
              </p>
            </div>
            <div className="flex space-x-6 items-center">
              <a 
                href="#hero" 
                className="text-neon-cyan hover:text-neon-purple transition-colors duration-300"
              >
                ↑
              </a>
              <span className="text-slate-600">|</span>
              <span className="text-neon-green animate-pulse">●</span>
              <span className="text-slate-200 text-sm">{t.systemOnline}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
