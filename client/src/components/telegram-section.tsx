import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import GlassCard from "@/components/ui/glass-card";
import NeonButton from "@/components/ui/neon-button";
import { useLanguage } from "@/hooks/useLanguage";

export default function TelegramSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const benefits = [
    {
      icon: "💻",
      title: t.codeReviews,
      description: t.codeReviewsDesc,
      color: "neon-cyan"
    },
    {
      icon: "👥",
      title: t.networking,
      description: t.networkingDesc,
      color: "neon-purple"
    },
    {
      icon: "💡",
      title: t.techInsights,
      description: t.techInsightsDesc,
      color: "neon-green"
    }
  ];

  return (
    <section id="telegram" className="py-20 bg-cyber-dark" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-neon-cyan mb-4">
            <span className="animate-glow">{t.telegramTitle}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-green mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8 md:p-12 neon-border text-center">
              <div className="mb-8">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-6xl text-neon-cyan mb-6"
                >
                  ✈️
                </motion.div>
                <h3 className="text-3xl font-cyber text-neon-green mb-4">Dev Community Hub</h3>
                <p className="text-xl text-slate-200 mb-6">
                  {t.communityDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className={`bg-cyber-gray rounded-lg p-6 border border-${benefit.color}/30`}
                  >
                    <div className={`text-2xl text-${benefit.color} mb-3`}>{benefit.icon}</div>
                    <h4 className={`font-cyber text-${benefit.color} mb-2`}>{benefit.title}</h4>
                    <p className="text-sm text-slate-200">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <NeonButton
                  onClick={() => window.open("https://t.me/f1oatingtech", "_blank")}
                  variant="cyan"
                  size="lg"
                  className="text-xl"
                >
                  {t.joinTelegram}
                </NeonButton>

                <p className="text-sm text-slate-200 mt-4">
                  {t.freeToJoin}
                </p>
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
