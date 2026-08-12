import React, { useRef, useState } from 'react';
import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import RevealText from './RevealText';

const SkillCard: React.FC<{ category: any, isDimmed: boolean, onHover: () => void, onLeave: () => void }> = ({ category, isDimmed, onHover, onLeave }) => {
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
      className={`h-full transition-opacity duration-300 ${isDimmed ? 'opacity-40' : 'opacity-100'}`}
      onMouseEnter={() => { setIsHovering(true); onHover(); }}
      onMouseLeave={() => { setIsHovering(false); onLeave(); }}
      onMouseMove={handleMouseMove}
    >
      <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.03} transitionSpeed={2000} className="h-full">
        <div 
          ref={ref}
          className="relative h-full bg-white/60 backdrop-blur-lg border border-white/60 shadow-xl shadow-slate-200/40 rounded-2xl p-6 overflow-hidden group"
        >
          {/* Spotlight Gradient */}
          <div 
            className="pointer-events-none absolute -inset-px rounded-2xl transition duration-300"
            style={{
              opacity: isHovering ? 1 : 0,
              background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.15), transparent 40%)`
            }}
          />
          <h3 className="relative z-10 text-lg font-semibold mb-5 text-indigo-950">{category.title}</h3>
          <div className="relative z-10 flex flex-wrap gap-2">
            {category.skills.map((skill: string, i: number) => (
              <motion.span 
                key={i} 
                whileHover={{ scale: 1.1, y: -2, boxShadow: "0 4px 6px -1px rgba(99,102,241, 0.2)" }}
                className="bg-indigo-50/80 border border-indigo-100 text-indigo-700 font-medium text-sm px-3.5 py-1.5 rounded-lg cursor-default transition-shadow"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Skills: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const skillCategories = [
    {
      title: "Enterprise & SAP",
      skills: ["SAP ADT", "SAP BTP", "ABAP CDS Views", "Data Dictionary", "OData APIs", "O2C Workflows"]
    },
    {
      title: "Mobile Dev",
      skills: ["React Native", "Flutter", "Expo", "Android Studio", "Play Store"]
    },
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Context API"]
    },
    {
      title: "Backend & APIs",
      skills: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "REST", "JWT", "Firebase", "CDN"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-12">
          <motion.div 
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }} 
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }} 
            transition={{ duration: 0.6, type: "spring" }} 
            viewport={{ once: true }}
          >
            <Code2 className="w-8 h-8 text-indigo-600" />
          </motion.div>
          <RevealText text="Technical Arsenal" className="text-3xl font-bold text-center text-text-primary tracking-tight" />
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <SkillCard 
                category={category}
                isDimmed={hoveredIndex !== null && hoveredIndex !== idx}
                onHover={() => setHoveredIndex(idx)}
                onLeave={() => setHoveredIndex(null)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
