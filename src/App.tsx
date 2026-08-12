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
import './index.css';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash screen after 2.4 seconds to trigger the zoom animation
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2400);

    // Initialize Lenis for buttery smooth scrolling
    const lenis = new Lenis({
      duration: 2.0, // Increased duration for extra smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 0.9, // Slightly softer wheel
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen />}
      </AnimatePresence>

      <CustomCursor />

      <div className={`min-h-screen bg-[#fafafa] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] selection:bg-indigo-500 selection:text-white relative overflow-hidden ${showSplash ? 'h-screen overflow-hidden' : ''}`}>

        {/* Ultra-Premium Animated Background Layer */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/70 via-white/70 to-slate-50/90" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-300/30 rounded-full blur-[120px] mix-blend-multiply"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-300/30 rounded-full blur-[100px] mix-blend-multiply"
          />
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
