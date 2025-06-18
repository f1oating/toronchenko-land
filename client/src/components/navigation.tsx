import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Language } from "@/lib/i18n";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { href: "#hero", label: t.home },
    { href: "#about", label: t.about },
    { href: "#github", label: t.github },
    { href: "#projects", label: t.projects },
    { href: "#telegram", label: t.community },
    { href: "#contact", label: t.contact },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'ru', label: 'RU', flag: '🇷🇺' },
    { code: 'uk', label: 'UA', flag: '🇺🇦' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-neon-cyan font-cyber text-xl font-bold">
            <span className="animate-glow">/Toronchenko</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="hover:text-neon-cyan transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Selector */}
            <div className="flex space-x-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-1 rounded text-sm transition-colors duration-300 ${
                    language === lang.code 
                      ? 'text-neon-cyan border border-neon-cyan/50' 
                      : 'text-slate-400 hover:text-neon-cyan'
                  }`}
                >
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>
          </div>
          
          <Button
            variant="ghost"
            className="md:hidden text-neon-cyan"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </Button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 hover:text-neon-cyan transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="flex space-x-2 mt-4 pt-4 border-t border-neon-cyan/20">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-1 rounded text-sm transition-colors duration-300 ${
                    language === lang.code 
                      ? 'text-neon-cyan border border-neon-cyan/50' 
                      : 'text-slate-400 hover:text-neon-cyan'
                  }`}
                >
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
