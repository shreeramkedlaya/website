import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { useIsMobile } from '../hooks/useIsMobile';
import { Mail, FileText } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY < 200) {
        setActiveItem(null);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false); // Close mobile menu if open
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Mobile Top Right Menu Button */}
      {isMobile && !menuOpen && (
        <div className="fixed top-6 right-6 z-[60]">
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMenuOpen(true)}
            className="flex items-center justify-center w-14 h-14 bg-white/90 backdrop-blur-md rounded-full shadow-lg shadow-indigo-900/5 border border-slate-200 text-slate-800 hover:text-indigo-600 transition-colors"
          >
            <div className="flex flex-col gap-[4px] items-center">
              <div className="w-5 h-[2px] bg-current rounded-full" />
              <div className="w-5 h-[2px] bg-current rounded-full" />
              <div className="w-5 h-[2px] bg-current rounded-full" />
            </div>
          </motion.button>
        </div>
      )}

      {/* Desktop Floating Header */}
      {!isMobile && (
        <div className="fixed top-0 left-0 right-0 z-[60] flex justify-center pt-6 px-6 pointer-events-none">
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onMouseLeave={() => setHoveredItem(null)}
            className={`pointer-events-auto flex items-center px-2 py-2 rounded-full transition-all duration-300 relative ${
              scrolled && !menuOpen
                ? 'bg-white/40 backdrop-blur-xl shadow-lg shadow-indigo-500/10 border border-white/30'
                : 'bg-transparent'
            }`}
          >
            <div className="flex items-center gap-1 md:gap-2 px-2 py-1">
              {navItems.map((item) => {
                const isActive = activeItem === item.id;
                
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.id)}
                  >
                    <MagneticButton strength={0.2} className="relative z-10">
                      <button
                        onClick={() => scrollTo(item.id)}
                        className={`relative text-sm font-semibold px-4 py-2 rounded-full transition-colors ${
                          isActive ? 'text-indigo-600' : 'text-text-primary hover:text-indigo-500'
                        }`}
                      >
                        {item.label}
                      </button>
                    </MagneticButton>

                    {/* Active Pill (Stays on the current section) */}
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-pill"
                        className="absolute inset-0 bg-indigo-50/80 rounded-full -z-10 shadow-sm border border-indigo-100"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.nav>
        </div>
      )}

      {/* Full Screen Mobile Overlay */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[70] bg-[#fafafa] flex flex-col pt-6 overflow-hidden"
          >

            {/* Stacked Navigation Links */}
            <div className="flex flex-col flex-1 overflow-y-auto custom-scrollbar-light">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center justify-center py-10 border-b border-indigo-100/60 text-lg font-bold tracking-widest text-indigo-900 uppercase hover:bg-indigo-50/50 transition-colors active:bg-indigo-100"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center py-12 text-lg font-bold tracking-widest text-indigo-600 uppercase hover:bg-indigo-50/50 transition-colors mt-auto active:bg-indigo-100"
              >
                Close Menu
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
