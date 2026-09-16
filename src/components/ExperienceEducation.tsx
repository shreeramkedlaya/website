import React, { useRef, useState } from 'react';
import { Briefcase, GraduationCap, Milestone } from 'lucide-react';
import { motion } from 'framer-motion';
import RevealText from './RevealText';

const SpotlightCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition duration-300 z-0"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.15), transparent 40%)`
        }}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-12">
          <motion.div
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <Milestone className="w-8 h-8 text-indigo-600" />
          </motion.div>
          <RevealText text="My Journey" className="text-3xl font-bold text-center text-text-primary tracking-tight" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard className="bg-gradient-to-br from-indigo-50/50 to-purple-50/50 backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-200/40 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 h-full">
              <h2 className="text-2xl font-bold mb-8 text-text-primary tracking-tight flex items-center gap-3">
                <Briefcase className="w-7 h-7 text-indigo-600" /> Experience
              </h2>
              <div className="group/timeline relative pl-6 border-l-2 border-indigo-200 cursor-default">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-white border-4 border-indigo-500 rounded-full group-hover/timeline:shadow-[0_0_15px_rgba(99,102,241,0.6)] group-hover/timeline:scale-125 transition-all duration-300" />
                <h3 className="text-lg font-bold text-text-primary mb-1">HappyTechnovation</h3>
                <span className="block text-sm font-medium text-indigo-600 mb-3">Associate Software Engineer | May 2025 – Present</span>
                <p className="text-sm text-text-secondary leading-relaxed">Working on scalable application development, integrating modern frontends with backend APIs.</p>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SpotlightCard className="bg-gradient-to-bl from-white/90 to-indigo-50/40 backdrop-blur-xl border border-white/60 shadow-xl shadow-slate-200/40 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 h-full">
              <h2 className="text-2xl font-bold mb-8 text-text-primary tracking-tight flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-indigo-600" /> Education & Certs
              </h2>

              <div className="mb-8 group/timeline relative pl-6 border-l-2 border-indigo-100 cursor-default">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-white border-4 border-indigo-400 rounded-full shadow-sm group-hover/timeline:shadow-[0_0_15px_rgba(99,102,241,0.6)] group-hover/timeline:scale-125 transition-all duration-300" />
                <h3 className="text-lg font-bold text-text-primary mb-1">B.E. Computer Science</h3>
                <span className="block text-sm font-semibold text-indigo-600 mb-1">BNMIT Bengaluru • 2025</span>
              </div>

              <div className="group/timeline relative pl-6 border-l-2 border-transparent cursor-default">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-white border-4 border-indigo-400 rounded-full shadow-sm group-hover/timeline:shadow-[0_0_15px_rgba(99,102,241,0.6)] group-hover/timeline:scale-125 transition-all duration-300" />
                <h3 className="text-lg font-bold text-text-primary mb-3">Certifications</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  <motion.span whileHover={{ scale: 1.1, y: -2, boxShadow: "0 4px 6px -1px rgba(99,102,241, 0.2)" }} className="bg-white border border-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm transition-shadow cursor-default">SAP ABAP on HANA</motion.span>
                  <motion.span whileHover={{ scale: 1.1, y: -2, boxShadow: "0 4px 6px -1px rgba(99,102,241, 0.2)" }} className="bg-white border border-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm transition-shadow cursor-default">Developing SAPUI5</motion.span>
                  <motion.span whileHover={{ scale: 1.1, y: -2, boxShadow: "0 4px 6px -1px rgba(99,102,241, 0.2)" }} className="bg-white border border-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm transition-shadow cursor-default">IBM Skills Build</motion.span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
