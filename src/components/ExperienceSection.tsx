// src/components/ExperienceSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: 'MAR 2025 - PRESENT',
    title: 'SENIOR ENGINEER',
    organization: 'ALTIMETRIK',
    description: 'Leading observability and AI platform operations. Reduced debugging time by 40% via Helm-deployed Grafana/Loki stack and improved deployment speed by 60% through Azure AI Jenkins pipelines.',
  },
  {
    id: '02',
    year: 'NOV 2024 - MAR 2025',
    title: 'SENIOR SOFTWARE ENGINEER',
    organization: 'YASH TECHNOLOGIES',
    description: 'Architected scalable backend microservices using Spring Boot and MongoDB for an automated Resume ATS Scoring system, deployed on AWS for high reliability.',
  },
  {
    id: '03',
    year: 'AUG 2021 - NOV 2024',
    title: 'ASSOCIATE SOFTWARE ENGINEER',
    organization: 'TORRY HARRIS INTEGRATED SOLUTION',
    description: 'Engineered RESTful APIs and migrated legacy Java services to AWS EKS. Optimized MySQL/MongoDB schemas and managed critical JDK upgrades (8 to 17).',
  },
  {
    id: '04',
    year: 'FEB 2021 - JUL 2021',
    title: 'SOFTWARE ENGINEER TRAINEE',
    organization: 'AVANZE TECHNOLOGIES',
    description: 'Developed responsive user interfaces with React.js and implemented backend functionality using PHP Laravel and CodeIgniter frameworks.',
  },
  {
    id: '05',
    year: '2017 - 2021',
    title: 'B.E. ELECTRICAL & ELECTRONICS',
    organization: 'SCAD COLLEGE OF ENGINEERING',
    description: 'Graduated with 8.22 CGPA from Anna University. Focused on core engineering principles and algorithmic problem solving.',
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative w-full bg-white text-slate-900 font-sans selection:bg-red-50 selection:text-red-600 pt-20 pb-32 px-6 sm:px-12 lg:px-20 overflow-hidden transition-colors duration-500"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[50rem] h-[50rem] bg-slate-100 rounded-full blur-[150px] pointer-events-none opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-red-50 rounded-full blur-[150px] pointer-events-none opacity-50" />

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
            04 / EXPERIENCE
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-red-500/80 via-slate-200 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500 drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
              PROFESSIONAL
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-400 to-red-600 drop-shadow-[0_8px_25px_rgba(184,134,11,0.2)]">
              CALENDAR.
            </span>
          </h2>
        </motion.div>

        {/* Calendar-Style Horizontal Journey */}
        <div className="relative w-full overflow-x-auto pb-12 scrollbar-hide">

          <div className="flex items-start space-x-6 min-w-max px-4">
            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative w-80 group"
              >
                {/* Calendar Card */}
                <div className="relative flex flex-col h-full bg-white rounded-sm border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 group-hover:border-red-400 group-hover:shadow-[0_20px_50px_rgba(248,113,113,0.1)] overflow-hidden">

                  {/* Calendar Header Block */}
                  <div className="bg-slate-50 border-b border-slate-200 p-4 group-hover:bg-red-50 transition-colors duration-500 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tighter group-hover:text-red-400 transition-colors">
                        Timeline
                      </span>
                      <span className="text-sm font-bold text-slate-800 group-hover:text-red-600 transition-colors font-mono leading-none mt-1">
                        {stop.year}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-red-500 group-hover:border-red-400 transition-all duration-500">
                      {stop.id}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col">
                    <h3
                      className="text-2xl tracking-wide text-slate-900 group-hover:text-red-600 transition-colors mb-1 leading-none"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {stop.title}
                    </h3>

                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-1 h-1 rounded-full bg-red-500" />
                      <span
                        className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-500"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {stop.organization}
                      </span>
                    </div>

                    <p
                      className="text-sm font-light text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {stop.description}
                    </p>
                  </div>

                  {/* Calendar Footer Accent */}
                  <div className="h-1.5 w-full bg-slate-100 group-hover:bg-red-500 transition-all duration-500" />
                </div>

                {/* Connector Line to next card (except last one) */}
                {idx !== journey.length - 1 && (
                  <div className="absolute top-1/2 -right-6 w-6 h-[2px] bg-slate-200 group-hover:bg-red-400 transition-colors duration-500 z-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
