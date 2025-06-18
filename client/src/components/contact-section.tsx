import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import GlassCard from "@/components/ui/glass-card";
import { useLanguage } from "@/hooks/useLanguage";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const contacts = [
    {
      name: "GitHub",
      handle: "@f1oating",
      icon: "🐙",
      color: "neon-cyan",
      url: "https://github.com/f1oating"
    },
    {
      name: "Telegram",
      handle: "@f1oating",
      icon: "✈️",
      color: "neon-purple",
      url: "https://t.me/f1oating"
    },
    {
      name: "LinkedIn",
      handle: "dmytro-toronchenko",
      icon: "💼",
      color: "neon-green",
      url: "https://www.linkedin.com/in/dmytro-toronchenko-190383293/"
    },
    {
      name: "Email",
      handle: "dtoronchenko@gmail.com",
      icon: "✉️",
      color: "neon-cyan",
      url: "mailto:dtoronchenko@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-cyber-gray" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-neon-purple mb-4">
            <span className="animate-glow">{t.contactTitle}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8 neon-border">
              <div className="text-center mb-8">
                <p className="text-xl text-slate-200 mb-6">
                  {t.contactDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contacts.map((contact, index) => (
                  <motion.a
                    key={contact.name}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`group bg-cyber-dark rounded-lg p-6 border border-${contact.color}/30 hover:border-${contact.color} transition-all duration-300 text-center block`}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`text-4xl text-${contact.color} mb-4`}
                    >
                      {contact.icon}
                    </motion.div>
                    <h3 className={`font-cyber text-${contact.color} mb-2`}>{contact.name}</h3>
                    <p className="text-sm text-slate-200">{contact.handle}</p>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center mt-8"
              >
                <p className="text-slate-200">
                  {t.availableForWork}
                </p>
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
