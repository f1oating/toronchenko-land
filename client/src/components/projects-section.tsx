import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import GlassCard from "@/components/ui/glass-card";
import { useLanguage } from "@/hooks/useLanguage";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const projects = [
    {
      title: "CyberDash",
      description: "Real-time analytics dashboard with cyberpunk aesthetics. Features include data visualization, real-time updates, and advanced filtering capabilities.",
      tags: ["React", "TypeScript", "D3.js"],
      status: t.live,
      statusColor: "neon-cyan",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&auto=format"
    },
    {
      title: "NeuroNet AI",
      description: "Advanced AI-powered assistant with neural network visualization. Includes machine learning models, real-time processing, and intuitive user interactions.",
      tags: ["React", "Python", "TensorFlow"],
      status: t.beta,
      statusColor: "neon-purple",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop&auto=format"
    },
    {
      title: "CryptoVault",
      description: "Comprehensive cryptocurrency portfolio manager with real-time tracking, advanced analytics, and secure transaction monitoring across multiple blockchain networks.",
      tags: ["React", "Web3", "Node.js"],
      status: t.new,
      statusColor: "neon-green",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=200&fit=crop&auto=format"
    },
    {
      title: "MetaSpace VR",
      description: "Immersive virtual reality collaboration platform with spatial computing, 3D interfaces, and multi-user synchronization for next-generation remote work experiences.",
      tags: ["React", "Three.js", "WebXR"],
      status: t.experimental,
      statusColor: "neon-purple",
      image: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=400&h=200&fit=crop&auto=format"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-cyber-gray" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cyber font-bold text-neon-green mb-4">
            <span className="animate-glow">{t.projectsTitle}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-green to-neon-purple mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <GlassCard className="overflow-hidden neon-border group hover:scale-105 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={`${project.title} Demo`} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-70"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`bg-${project.statusColor} text-cyber-dark px-3 py-1 rounded-full text-sm font-bold`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-cyber text-neon-cyan mb-3">{project.title}</h3>
                  <p className="text-slate-200 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tag}
                        className={`bg-cyber-dark text-${tagIndex % 3 === 0 ? 'neon-cyan' : tagIndex % 3 === 1 ? 'neon-purple' : 'neon-green'} px-2 py-1 rounded text-xs border border-${tagIndex % 3 === 0 ? 'neon-cyan' : tagIndex % 3 === 1 ? 'neon-purple' : 'neon-green'}/30`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
