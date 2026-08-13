import React from 'react';
import { FileText, Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 md:pt-48 pb-8 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-text-primary leading-tight"
        >
          Hi, I'm <motion.span
            className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] cursor-default"
            whileHover={{
              scale: 1.05,
              backgroundPosition: "200% center",
              textShadow: "0px 0px 20px rgba(79, 70, 229, 0.4)"
            }}
            transition={{ duration: 0.5 }}
          >
            Shreeram
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-text-secondary mb-10 max-w-3xl mx-auto font-medium leading-relaxed"
        >
          Application Developer specializing in scalable{' '}
          <motion.span whileHover={{ scale: 1.1, color: "#4f46e5", textShadow: "0px 0px 15px rgba(79, 70, 229, 0.5)" }} className="inline-block text-indigo-600 font-bold cursor-default transition-colors">React Native</motion.span>{', '}
          <motion.span whileHover={{ scale: 1.1, color: "#3b82f6", textShadow: "0px 0px 15px rgba(59, 130, 246, 0.5)" }} className="inline-block text-blue-500 font-bold cursor-default transition-colors">Flutter</motion.span>{', and '}
          <motion.span whileHover={{ scale: 1.1, color: "#9333ea", textShadow: "0px 0px 15px rgba(147, 51, 234, 0.5)" }} className="inline-block text-purple-600 font-bold cursor-default transition-colors">SAP Backend</motion.span>{' '}ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-5"
        >
          <MagneticButton>
            <a
              href="https://drive.google.com/file/d/1EOxiAT6schRCKG8VIb1EifmimmJAO76Q/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center p-4 sm:px-8 sm:py-3.5 rounded-full font-semibold text-sm bg-text-primary text-white hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-300/50 transition-all duration-300"
            >
              <FileText className="w-5 h-5 sm:w-4 sm:h-4 sm:mr-2" /> <span className="hidden sm:inline">Resume</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="mailto:kedlayashreeram@gmail.com"
              className="inline-flex items-center justify-center p-4 sm:px-8 sm:py-3.5 rounded-full font-semibold text-sm bg-white/70 backdrop-blur-lg border border-white/50 text-text-primary hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 relative group"
            >
              <div className="absolute inset-0 rounded-full border border-indigo-500/0 group-hover:border-indigo-500/30 transition-colors duration-300" />
              <Mail className="w-5 h-5 sm:w-4 sm:h-4 sm:mr-2 text-indigo-600" /> <span className="hidden sm:inline">Email</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="https://linkedin.com/in/shreeramkedlaya"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center p-4 sm:px-8 sm:py-3.5 rounded-full font-semibold text-sm bg-white/70 backdrop-blur-lg border border-white/50 text-text-primary hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 relative group"
            >
              <div className="absolute inset-0 rounded-full border border-indigo-500/0 group-hover:border-indigo-500/30 transition-colors duration-300" />
              <FaLinkedin className="w-5 h-5 sm:w-4 sm:h-4 sm:mr-2 text-indigo-600" /> <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="https://github.com/shreeramkedlaya"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center p-4 sm:px-8 sm:py-3.5 rounded-full font-semibold text-sm bg-white/70 backdrop-blur-lg border border-white/50 text-text-primary hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 relative group"
            >
              <div className="absolute inset-0 rounded-full border border-indigo-500/0 group-hover:border-indigo-500/30 transition-colors duration-300" />
              <FaGithub className="w-5 h-5 sm:w-4 sm:h-4 sm:mr-2 text-slate-800" /> <span className="hidden sm:inline">GitHub</span>
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
