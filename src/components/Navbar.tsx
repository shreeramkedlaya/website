import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);

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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onMouseLeave={() => setHoveredItem(null)}
        className={`pointer-events-auto flex items-center gap-1 md:gap-2 px-4 py-3 rounded-full transition-all duration-300 relative ${scrolled
          ? 'bg-white/40 backdrop-blur-xl shadow-lg shadow-indigo-500/10 border border-white/30'
          : 'bg-transparent'
          }`}
      >
        {navItems.map((item) => {
          const isActive = activeItem === item.id;
          const isHovered = hoveredItem === item.id;
          
          return (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.id)}
            >
              <MagneticButton strength={0.2} className="relative z-10">
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`relative text-sm font-semibold px-4 py-2 rounded-full transition-colors ${isActive ? 'text-indigo-600' : 'text-text-primary hover:text-indigo-500'
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
          )
        })}
      </motion.nav>
    </div>
  );
};

export default Navbar;
