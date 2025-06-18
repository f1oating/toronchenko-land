import { motion } from "framer-motion";
import GlitchText from "@/components/ui/glitch-text";
import NeonButton from "@/components/ui/neon-button";
import { useLanguage } from "@/hooks/useLanguage";

export default function HeroSection() {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`border-l ${i % 2 === 0 ? 'border-neon-cyan' : 'border-neon-purple'} animate-pulse`}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-cyber font-black mb-6">
            <GlitchText text="DMYTRO" className="text-neon-cyan block" />
            <GlitchText text="TORONCHENKO" className="text-neon-purple block" />
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 text-slate-200">
            <span className="text-neon-green">&gt;</span> {t.heroSubtitle}
            <span className="animate-pulse text-neon-cyan ml-1">_</span>
          </div>
          
          <NeonButton onClick={scrollToContact}>
            {t.contactButton}
          </NeonButton>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 text-neon-cyan opacity-50"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="text-4xl">⚛</div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-10 text-neon-purple opacity-50"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <div className="text-3xl">💻</div>
      </motion.div>
      
      <motion.div
        className="absolute top-1/2 right-20 text-neon-green opacity-30"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
      >
        <div className="text-5xl">📜</div>
      </motion.div>
    </section>
  );
}
