import React, { useState, useEffect, useRef } from 'react';
import { LayoutTemplate, ExternalLink, Hand } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import RevealText from './RevealText';
import { useIsMobile } from '../hooks/useIsMobile';

const projects = [
  {
    title: "EduExpertAI",
    role: "Mobile Learning & Assessment Platform",
    link: "https://play.google.com/store/apps/details?id=com.anonymous.EduExpertAI&pcampaignid=web_share",
    tech: ["React Native", "TypeScript", "Firebase", "Django REST"],
    points: [
      "Architected and shipped a production-grade learning platform to the Play Store from boilerplate to release.",
      "Integrated Django REST APIs with Firebase for secure Google/Email auth, JWT session management, and RBAC.",
      "Built the core learning suite: timed assessments, analytics, personalized test engine, LaTeX math rendering."
    ]
  },
  {
    title: "PrajaPulse",
    role: "Civic Accountability & Citizen Engagement",
    link: "https://play.google.com/store/apps/details?id=com.praja.prajapulse&pcampaignid=web_share",
    tech: ["React Native", "TypeScript", "Django REST", "FCM", "Deep Linking", "i18n"],
    points: [
      "Built end-to-end auth and onboarding flows.",
      "Developed issue reporting, listing, and verification modules with deep linking and geolocation/device caching.",
      "Implemented drawer-based navigation across 7 modules with Firebase Cloud Messaging push notifications."
    ]
  },
  {
    title: "Enterprise O2C Workflow",
    role: "Full-Stack SAP RAP Architecture",
    tech: ["ABAP RAP", "SAP Fiori", "OData V4", "CDS Views"],
    points: [
      "Architected a complete Order-to-Cash (O2C) document chain using ABAP RAP Strict Mode.",
      "Engineered end-to-end entity flows from Master Data down to Sales Orders, Deliveries, Invoices, and Payments.",
      "Built analytical dashboards and UI consumption layers utilizing SAP Fiori Elements V4."
    ]
  }
];

const ProjectCard: React.FC<{ proj: any; isFlipped: boolean; onToggle: () => void }> = ({ proj, isFlipped, onToggle }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useIsMobile();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    setPosition({ x: (e.clientX - left) / width, y: (e.clientY - top) / height });
  };

  const card = (
    <div
      ref={ref}
      className="h-[320px] w-full cursor-pointer group"
      onClick={(e) => { e.stopPropagation(); onToggle(); }}
      onMouseEnter={() => { if (!isMobile) setIsHovering(true); }}
      onMouseLeave={() => { if (!isMobile) setIsHovering(false); }}
      onMouseMove={handleMouseMove}
      style={{
        transformStyle: 'preserve-3d',
        position: 'relative',
      }}
    >
      {/* Flip container: pure CSS transition, no Framer Motion */}
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 bg-white border border-white/50 shadow-xl shadow-slate-200/50 rounded-3xl p-8 flex flex-col justify-center items-center text-center"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg) translateZ(1px)',
            pointerEvents: isFlipped ? 'none' : 'auto',
          }}
        >
          {!isMobile && (
            <div
              className="pointer-events-none absolute inset-0 z-0 rounded-3xl transition-opacity duration-300"
              style={{
                opacity: isHovering && !isFlipped ? 1 : 0,
                background: `radial-gradient(circle at ${position.x * 100}% ${position.y * 100}%, rgba(255,255,255,0.8), transparent 50%)`
              }}
            />
          )}

          <h3 className="relative z-10 text-2xl font-bold mb-3 text-slate-800 group-hover:text-indigo-700 transition-colors">
            {proj.title}
          </h3>
          <span className="relative z-10 block text-sm font-semibold text-indigo-600 mb-8">
            {proj.role}
          </span>

          <div className="relative z-10 flex flex-wrap justify-center gap-2 mb-8">
            {proj.tech.map((t: string, i: number) => (
              <span
                key={i}
                className="bg-indigo-50 border border-indigo-100 text-indigo-700 font-medium text-xs px-3 py-1.5 rounded-lg cursor-default transition-transform hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="relative z-10 mt-auto text-indigo-500 font-bold text-sm flex items-center gap-2 opacity-80 animate-pulse">
            <Hand className="w-4 h-4" /> Tap to explore
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 rounded-3xl p-8 flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg) translateZ(1px)',
            pointerEvents: isFlipped ? 'auto' : 'none',
          }}
        >
          <h3 className="text-lg font-bold mb-4 text-white border-b border-white/20 pb-4 flex justify-between items-center gap-4">
            Key Contributions
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="text-white bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                View <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </h3>
          <ul
            className="space-y-4 overflow-y-auto pr-2 custom-scrollbar-light"
            data-lenis-prevent="true"
            onClick={(e) => e.stopPropagation()}
          >
            {proj.points.map((pt: string, i: number) => (
              <li key={i} className="relative pl-5 text-sm leading-relaxed text-indigo-50">
                <span className="absolute left-0 top-0.5 text-indigo-300 font-bold">•</span>
                {pt}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6 flex justify-center items-center">
            <span className="text-indigo-200 font-semibold text-sm opacity-80 hover:opacity-100 transition-opacity">
              ← Tap to flip back
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div style={{ perspective: '1500px' }} className="h-full">
        {card}
      </div>
    );
  }

  // Outer static div owns `perspective`.
  // Tilt owns the parallax tilt effect.
  // Inner card/div owns the CSS 3D flip transform.
  return (
    <div style={{ perspective: '1500px' }} className="h-full">
      <Tilt
        tiltEnable={!isFlipped}
        tiltMaxAngleX={isFlipped ? 0 : 5}
        tiltMaxAngleY={isFlipped ? 0 : 5}
        scale={isFlipped ? 1 : 1.02}
        transitionSpeed={2000}
        className="h-full"
        style={{ transformStyle: 'preserve-3d' } as React.CSSProperties}
      >
        {card}
      </Tilt>
    </div>
  );
};

const Projects: React.FC = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleOutsideClick = () => setFlippedIndex(null);
    if (flippedIndex !== null) {
      document.addEventListener('click', handleOutsideClick);
    }
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [flippedIndex]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-12">
          <motion.div
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <LayoutTemplate className="w-8 h-8 text-indigo-600" />
          </motion.div>
          <RevealText text="Featured Work" className="text-3xl font-bold text-center text-text-primary tracking-tight" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            // transformStyle:preserve-3d prevents Framer Motion compositing
            // from flattening the card 3D context (backface-visibility fix).
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <ProjectCard
                proj={proj}
                isFlipped={flippedIndex === idx}
                onToggle={() => setFlippedIndex(flippedIndex === idx ? null : idx)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
