import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'PDF RAG Chatbot',
    category: 'AI / LLM INFRASTRUCTURE',
    description:
      'An end-to-end Retrieval-Augmented Generation system. Implements document chunking and embedding via Sentence Transformers, vector storage in FAISS, and Llama3 (Ollama) for context-aware response generation.',
    githubUrl: 'https://github.com/JP007-star/pdf-rag-chatbot',
    tech: [
      'Python',
      'FastAPI',
      'FAISS',
      'Sentence-Transformers',
      'Llama3',
      'Ollama',
      'RAG',
      'Vector DB',
    ],
    metrics: [
      { label: 'MODEL', value: 'Llama3' },
      { label: 'STORAGE', value: 'FAISS' },
      { label: 'RETRIEVAL', value: 'Similarity Search' },
    ],
  },
  {
    number: '02',
    title: 'End-to-End MLOps Pipeline',
    category: 'MLOps / CLOUD PLATFORM',
    description:
      'A comprehensive ML lifecycle pipeline covering preprocessing, training, and deployment. Utilizes Docker for containerization and Kubernetes for scalable production deployment with multi-cloud integration.',
    githubUrl: 'https://github.com/JP007-star/ml_ops_project',
    tech: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'Docker',
      'Kubernetes',
      'AWS',
      'GCP',
      'Azure',
      'CI/CD',
    ],
    metrics: [
      { label: 'DEPLOY', value: 'Kubernetes' },
      { label: 'CLOUD', value: 'Multi-Cloud' },
      { label: 'MONITOR', value: 'Data Drift' },
    ],
  },
  {
    number: '03',
    title: 'Docusign Integration Microservice',
    category: 'ENTERPRISE / FINTECH',
    description:
      'Developed a from-scratch integration microservice for automated document processing, reducing manual effort by 50%. Implemented advanced observability using Prometheus, Grafana, and Loki.',
    githubUrl: 'https://github.com/JP007-star',
    tech: [
      'Java',
      'Spring Boot',
      'Helm',
      'Grafana',
      'Loki',
      'Prometheus',
      'Zipkin',
      'REST API',
    ],
    metrics: [
      { label: 'EFFORT', value: '-50% Manual' },
      { label: 'DEBUG', value: '-40% Time' },
      { label: 'STACK', value: 'Observability' },
    ],
  },
  {
    number: '04',
    title: 'Resume ATS Scoring Platform',
    category: 'AI / HR-TECH',
    description:
      'Designed and developed scalable backend microservices for calculating resume ATS scores. Built with Spring Boot and MongoDB, deployed on AWS for high availability and horizontal scalability.',
    githubUrl: 'https://github.com/JP007-star',
    tech: [
      'Spring Boot',
      'AWS (EC2, S3, RDS)',
      'MongoDB',
      'Java',
      'Microservices',
      'REST API',
    ],
    metrics: [
      { label: 'DATABASE', value: 'MongoDB' },
      { label: 'CLOUD', value: 'AWS' },
      { label: 'ARCH', value: 'Microservices' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-white text-slate-900 font-sans selection:bg-red-50 selection:text-red-600 pt-20 pb-32 px-6 sm:px-12 lg:px-20 transition-colors duration-500"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-slate-100 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-slate-100 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-red-500"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-red-500/80 via-slate-200 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500 drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-400 to-red-600 drop-shadow-[0_8px_25px_rgba(184,134,11,0.2)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-slate-600 max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.05)] group overflow-hidden transition-colors duration-500 hover:border-red-400">

                {/* Top Red Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-400/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-400/60 group-hover:border-red-400 transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-400/60 group-hover:border-red-400 transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-400/60 group-hover:border-red-400 transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-400/60 group-hover:border-red-400 transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-slate-200 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-red-500">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-slate-500">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 mb-4 group-hover:text-red-500 transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-slate-600 leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-slate-200 bg-white text-slate-700 group-hover:border-red-400/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-slate-200">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-slate-500 block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-slate-200 bg-white flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-slate-500">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-red-500">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-slate-800 bg-slate-900 hover:border-red-400 hover:bg-slate-800 text-white text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>VIEW ON GITHUB</span>
                      <span className="text-xs">↗</span>
                    </a>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;
