import React from 'react';
import { FileText } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 text-center relative mt-10 overflow-hidden min-h-[600px] flex flex-col justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 w-full"
      >
        <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary tracking-tight cursor-default flex flex-wrap justify-center gap-[0.25em]">
              {"Let's engineer the future.".split(" ").map((word, i) => (
                <motion.span 
                  key={i} 
                  whileHover={{ y: -8, color: "#4f46e5", textShadow: "0px 0px 15px rgba(79, 70, 229, 0.4)" }} 
                  className="inline-block transition-colors duration-300"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              I'm always up for a chat, whether it's about scalable app architectures, the nuances of SAP backends, or your next big project. You can reach me at..
            </p>
            <a href="mailto:kedlayashreeram@gmail.com" className="group inline-flex items-center text-lg font-bold text-indigo-600 hover:text-indigo-700 transition-colors tracking-wider relative">
              <span className="mr-3 group-hover:translate-x-1 transition-transform">→</span> 
              <span className="relative">
                KEDLAYASHREERAM@GMAIL.COM
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-indigo-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </span>
            </a>
          </motion.div>
        </div>

        {/* Social Links & Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <a
            href="https://drive.google.com/file/d/1EOxiAT6schRCKG8VIb1EifmimmJAO76Q/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-medium text-sm bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <FileText className="w-4 h-4 mr-2 text-indigo-600" /> Resume
          </a>
          <a
            href="https://linkedin.com/in/shreeramkedlaya"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-medium text-sm bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <FaLinkedin className="w-4 h-4 mr-2 text-indigo-600" /> LinkedIn
          </a>
          <a
            href="https://github.com/shreeramkedlaya"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-medium text-sm bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <FaGithub className="w-4 h-4 mr-2 text-slate-800" /> GitHub
          </a>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-medium tracking-wide uppercase pt-8 border-t border-slate-200/60 mt-16">
          <span>SHREERAM KEDLAYA © {new Date().getFullYear()}</span>
          <span className="mt-4 md:mt-0">ALL RIGHTS RESERVED</span>
        </div>

        <div className="mt-16 mb-4 flex flex-col items-center justify-center px-4">
          <blockquote className="text-3xl md:text-5xl font-serif italic text-slate-800/80 tracking-tight leading-tight mb-4 text-center flex flex-wrap justify-center gap-[0.2em] cursor-default">
            {`"The best way to predict the future is to invent it."`.split(" ").map((word, i) => (
              <motion.span 
                key={i} 
                whileHover={{ y: -5, color: "#4f46e5", textShadow: "0px 0px 15px rgba(79, 70, 229, 0.4)" }} 
                className="inline-block transition-colors duration-300"
              >
                {word}
              </motion.span>
            ))}
          </blockquote>
          <cite className="text-base md:text-lg font-medium text-slate-500 not-italic cursor-default transition-colors hover:text-indigo-500">
            — Alan Kay
          </cite>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
