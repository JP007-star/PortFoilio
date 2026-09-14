import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import type { Variants } from 'framer-motion';
import aboutImg from '../assets/about.png';

// --- Experience Data moved here ---
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const AboutSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(200);
  const spotlightY = useMotionValue(200);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [16, -16]), { damping: 18, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), { damping: 18, stiffness: 220 });

  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(circle 240px at ${x}px ${y}px, rgba(248,113,113,0.2), rgba(248,113,113,0.05), transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="about"
      className="relative w-screen min-h-screen bg-white text-slate-900 font-sans selection:bg-red-50 selection:text-red-600 py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center transition-colors duration-500"
    >
      {/* ================= BACKGROUND GLOWS ================= */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/6 w-[32rem] h-[32rem] bg-red-400 rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/6 right-1/4 w-[28rem] h-[28rem] bg-red-300 rounded-full blur-[170px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-4 mb-10"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-red-500"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            01 / ABOUT ME & EXPERIENCE
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-red-500/80 via-slate-200 to-transparent" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT CONTENT (7 COLS) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-start"
          >
            {/* Cinematic Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-8 select-none">
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight uppercase leading-[0.88]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500 drop-shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                  I DON'T JUST WRITE CODE.
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-400 to-red-600 drop-shadow-[0_8px_25px_rgba(184,134,11,0.2)]">
                  I BUILD WHAT'S NEXT.
                </span>
              </h2>
            </motion.div>

            {/* Achievement Metrics Grid */}
            <motion.div
              variants={fadeUpVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 pb-10 border-t border-slate-200 mb-12"
            >
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>5+</span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-slate-500 mt-0.5">Years Exp</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-light text-red-500 tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>8.22</span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-slate-500 mt-0.5">B.Tech CGPA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>10 +</span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-slate-500 mt-0.5">MICROSERVICES</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-light text-red-500 tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>GCP & ORACLE</span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-slate-500 mt-0.5">GEN AI CERTIFIED</span>
              </div>
            </motion.div>

            {/* CALENDAR EXPERIENCE ROW */}
            <motion.div variants={fadeUpVariants} className="relative w-full overflow-x-auto pb-8 scrollbar-hide">
              <div className="flex items-start space-x-6 min-w-max px-2">
                {journey.map((stop, idx) => (
                  <div
                    key={stop.id}
                    className="relative w-72 group"
                  >
                    <div className="relative flex flex-col h-full bg-white rounded-sm border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 group-hover:border-red-400 group-hover:shadow-[0_20px_50px_rgba(248,113,113,0.1)] overflow-hidden"
                    >
                      <div className="bg-red-600 border-b border-red-700 p-3 transition-colors duration-500 flex justify-between items-center">
                        <div className="flex flex-col">
                          <span className="text-[9px] font-mono text-red-100 uppercase tracking-tighter">Timeline</span>
                          <span className="text-xs font-bold text-white transition-colors font-mono leading-none mt-1">
                            {stop.year}
                          </span>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-[10px] font-bold text-white transition-all duration-500">
                          {stop.id}
                        </div>
                      </div>

                      <div className="p-5 flex flex-col">
                        <h3
                          className="text-xl tracking-wide text-slate-900 group-hover:text-red-600 transition-colors mb-1 leading-none"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {stop.title}
                        </h3>
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-1 h-1 rounded-full bg-red-500" />
                          <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-slate-500" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            {stop.organization}
                          </span>
                        </div>
                        <p className="text-xs font-light text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          {stop.description}
                        </p>
                      </div>
                      <div className="h-1 w-full bg-slate-100 group-hover:bg-red-500 transition-all duration-500" />
                    </div>
                    {idx !== journey.length - 1 && (
                      <div className="absolute top-1/2 -right-6 w-6 h-[2px] bg-slate-200 group-hover:bg-red-400 transition-colors duration-500 z-0" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT PORTRAIT FRAME */}
          <div className="lg:col-span-5 flex items-center justify-center relative perspective-[1400px]">
            <motion.div
              animate={{ scale: isCardHovered ? 1.15 : 1, opacity: isCardHovered ? 0.35 : 0.15, rotate: isCardHovered ? 180 : 0 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute -inset-6 bg-[conic-gradient(from_0deg,#f87171_0%,#ef4444_30%,transparent_60%,#f87171_100%)] blur-2xl rounded-3xl pointer-events-none"
            />

            <motion.div
              ref={cardRef}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsCardHovered(true)}
              onMouseLeave={() => setIsCardHovered(false)}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-3.5 border border-slate-200 rounded-sm bg-slate-50/80 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.1)] cursor-pointer group transition-colors duration-500 hover:border-red-400/80"
            >
              <div className="absolute inset-0 rounded-sm pointer-events-none overflow-hidden">
                <motion.div
                  animate={{ x: isCardHovered ? ['-100%', '200%'] : '-100%' }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-red-400/30 to-transparent skew-x-12"
                />
              </div>
              <div className="pointer-events-none">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-400 transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 shadow-[0_0_10px_rgba(248,113,113,0.4)]" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-400 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-[0_0_10px_rgba(248,113,113,0.4)]" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red-400 transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 shadow-[0_0_10px_rgba(248,113,113,0.4)]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-400 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5 shadow-[0_0_10px_rgba(248,113,113,0.4)]" />
              </div>
              <div className="relative overflow-hidden w-full max-w-[390px] aspect-[4/5] bg-white rounded-sm">
                <img src={aboutImg} alt="Jaya Prasad M" className="w-full h-full object-cover object-top filter brightness-100 contrast-[1.06] saturate-[1.02] group-hover:brightness-105 group-hover:contrast-[1.12] transition-all duration-700 ease-out" />
                <motion.div className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300" style={{ background: spotlightBg, opacity: isCardHovered ? 1 : 0 }} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 right-4 z-20 select-none">
                  <span className="text-3xl text-red-400 drop-shadow-[0_0_12px_rgba(248,113,113,0.5)] transition-colors duration-300 group-hover:text-slate-900" style={{ fontFamily: "'Herr Von Muellerhoff', cursive" }}>Jaya Prasad</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
