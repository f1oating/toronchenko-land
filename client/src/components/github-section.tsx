import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import GlassCard from "@/components/ui/glass-card";
import NeonButton from "@/components/ui/neon-button";
import { useLanguage } from "@/hooks/useLanguage";

interface GitHubUser {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

export default function GitHubSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const { data: githubUser, isLoading } = useQuery<GitHubUser>({
    queryKey: ['github-user', 'f1oating'],
    queryFn: async () => {
      const response = await fetch('https://api.github.com/users/f1oating');
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub user data');
      }
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <section id="github" className="py-20 bg-cyber-dark" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-cyber font-bold text-neon-purple mb-4">
              <span className="animate-glow">{t.githubTitle}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto"></div>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8 neon-border">
              <div className="flex items-center justify-center">
                <div className="animate-pulse text-neon-cyan">Loading GitHub data...</div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    );
  }

  if (!githubUser) {
    return (
      <section id="github" className="py-20 bg-cyber-dark" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-cyber font-bold text-neon-purple mb-4">
              <span className="animate-glow">{t.githubTitle}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto"></div>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8 neon-border">
              <div className="text-center text-slate-200">
                <p>Unable to load GitHub profile data.</p>
                <p className="text-sm text-slate-400 mt-2">Please check your internet connection.</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="py-20 bg-cyber-dark" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-neon-purple mb-4">
            <span className="animate-glow">{t.githubTitle}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* GitHub Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8 neon-border">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple p-1">
                    <img
                      src={githubUser.avatar_url}
                      alt={`${githubUser.login} avatar`}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neon-green rounded-full flex items-center justify-center">
                    <span className="text-cyber-dark text-sm">✓</span>
                  </div>
                </div>
                
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-cyber text-neon-cyan mb-2">{githubUser.login}</h3>
                  <p className="text-slate-200 mb-4">{githubUser.bio || githubUser.name}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-neon-purple">🌿</span>
                      <span className="text-slate-200">{githubUser.public_repos} {t.repositories}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-neon-cyan">👥</span>
                      <span className="text-slate-200">{githubUser.followers} {t.followers}</span>
                    </div>
                  </div>
                </div>
                
                <NeonButton
                  onClick={() => window.open(githubUser.html_url, "_blank")}
                  variant="purple"
                >
                  {t.viewProfile}
                </NeonButton>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
