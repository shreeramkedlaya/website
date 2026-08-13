import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import Footer from './components/Footer';
import { useIsMobile } from './hooks/useIsMobile';
import './index.css';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Hide splash screen after 2.4 seconds to trigger the zoom animation
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2400);

    // Check if we should disable Lenis (on mobile/touch devices)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const isSmallScreen = window.innerWidth < 768;
    
    let lenis: Lenis | null = null;
    let rafId: number;

    if (!isTouch && !isSmallScreen) {
      // Initialize Lenis only on desktop for buttery smooth scrolling without lagging mobile
      lenis = new Lenis({
        duration: 1.2, // Reduced from 2.0 for a snappier, responsive feel
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        wheelMultiplier: 1.0, 
      });

      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    }

    return () => {
      clearTimeout(timer);
      if (lenis) {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      }
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen />}
      </AnimatePresence>
      <AnimatePresence>
        {isMobile && showSplash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.6, delay: 1.0 } }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="fixed top-12 left-0 w-full text-[10px] font-semibold text-slate-400 tracking-widest uppercase z-[1000] text-center px-4 pointer-events-none"
          >
            Best experienced on desktop
          </motion.div>
        )}
      </AnimatePresence>

      <CustomCursor />

      <div className={`min-h-screen bg-[#fafafa] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] selection:bg-indigo-500 selection:text-white relative overflow-hidden ${showSplash ? 'h-screen overflow-hidden' : ''}`}>

        {/* Clean Static Background Layer */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/10 via-white/30 to-slate-50/40" />
        </div>

        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <Footer />
      </div>
    </>
  );
};

export default App;
