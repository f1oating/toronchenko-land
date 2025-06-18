import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import GlassCard from "@/components/ui/glass-card";
import { useLanguage } from "@/hooks/useLanguage";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const techStack = [
    { name: "React 18", icon: "⚛", color: "neon-cyan" },
    { name: "TypeScript", icon: "📝", color: "neon-green" },
    { name: "Node.js", icon: "🟢", color: "neon-green" },
    { name: "MongoDB", icon: "🗃", color: "neon-purple" },
    { name: "AWS", icon: "☁", color: "neon-cyan" },
    { name: "Docker", icon: "🐳", color: "neon-green" },
  ];

  return (
    <section id="about" className="py-20 bg-cyber-gray" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-neon-cyan mb-4">
            <span className="animate-glow">{t.aboutTitle}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8 neon-border">
              <h3 className="text-2xl font-cyber text-neon-purple mb-6">
                {t.developerProfile}
              </h3>
              <p className="text-slate-200 leading-relaxed mb-6">
                {t.aboutDescription}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-cyber-dark rounded-lg border border-neon-cyan/30">
                  <div className="text-2xl font-bold text-neon-cyan">5+</div>
                  <div className="text-sm text-slate-300">{t.yearsExperience}</div>
                </div>
                <div className="text-center p-4 bg-cyber-dark rounded-lg border border-neon-purple/30">
                  <div className="text-2xl font-bold text-neon-purple">50+</div>
                  <div className="text-sm text-slate-300">{t.projectsCompleted}</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GlassCard className="p-8 neon-border">
              <h3 className="text-2xl font-cyber text-neon-green mb-6">
                {t.techStack}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className={`flex items-center space-x-3 p-3 bg-cyber-dark rounded-lg border border-${tech.color}/20 hover:border-${tech.color}/60 transition-colors duration-300`}
                  >
                    <span className={`text-${tech.color} text-xl`}>{tech.icon}</span>
                    <span className="text-slate-200">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
