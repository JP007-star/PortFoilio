import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const bentoCategories = [
  {
    title: 'FULL STACK ARCHITECTURE',
    badge: 'CORE PILLAR',
    items: ['Java', 'Spring Boot', 'React.js', 'Node.js', 'FastAPI'],
    description: 'Architecting scalable microservices and responsive frontends. Expert in building RESTful APIs with strong emphasis on design patterns and modularity.',
    stat: 'SCALABLE SYSTEMS',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'DEVOPS & INFRASTRUCTURE',
    badge: 'CLOUD NATIVE',
    items: ['Kubernetes', 'Docker', 'Helm', 'AWS', 'GCP', 'Azure'],
    description: 'Orchestrating containerized workloads and automating CI/CD pipelines. Proficient in AWS (EKS, S3, EC2) and Azure cloud operations.',
    stat: 'K8s ORCHESTRATION',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'OBSERVABILITY & AI OPS',
    badge: 'RELIABILITY',
    items: ['Prometheus', 'Grafana', 'Loki', 'Promtail', 'Zipkin', 'Graylog'],
    description: 'Implementing full-stack monitoring for AI systems. Reducing MTTR and debugging time through advanced logging, tracing, and anomaly detection.',
    stat: 'MTTR REDUCTION',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'AI & DATA ENGINEERING',
    badge: 'INTELLIGENCE',
    items: ['Python', 'Bash', 'MySQL', 'MongoDB', 'FAISS', 'Sentence-Transformers'],
    description: 'Building RAG systems and MLOps pipelines. Expert in vector databases, embedding models, and automated AI model deployment.',
    stat: 'RAG & MLOps',
    colSpan: 'lg:col-span-7',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative w-screen bg-white text-slate-900 font-sans selection:bg-red-50 selection:text-red-600 pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center transition-colors duration-500"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-slate-100 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-slate-100 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-red-500"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            03 / TECH MATRIX
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-red-500/80 via-slate-200 to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500 drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
              ARCHITECTURAL MASTERY.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-400 to-red-600 drop-shadow-[0_8px_25px_rgba(184,134,11,0.2)]">
              PRECISION APPLIED.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {bentoCategories.map((block, idx) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`${block.colSpan} relative p-8 sm:p-9 rounded-sm border border-slate-200 bg-slate-50/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-red-400/80 hover:shadow-[0_16px_45px_rgba(0,0,0,0.05)] cursor-pointer group`}
            >
              {/* Top Subtle Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Minimal Pins */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-slate-300 group-hover:border-red-400 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-slate-300 group-hover:border-red-400 transition-colors duration-300" />

              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-red-500 group-hover:text-slate-900 transition-colors">
                  {block.badge}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 border border-slate-200 text-slate-600 bg-white group-hover:border-red-400/50 group-hover:text-slate-900 transition-all">
                  {block.stat}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-3xl sm:text-4xl font-normal tracking-wide text-slate-900 mb-3 group-hover:text-red-500 transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {block.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-7 max-w-xl group-hover:text-slate-800 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {block.description}
              </p>

              {/* Interactive Tag Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-slate-200 bg-white text-slate-700 group-hover:border-red-400/50 group-hover:bg-slate-50 group-hover:text-slate-900 transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
