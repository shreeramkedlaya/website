import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col items-center justify-center">
      {/* Background that fades away */}
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-[#fafafa] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
      />

      {/* Center Layout Container */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-lg gap-8 md:gap-10">

        {/* Top Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
          exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
          className="text-lg md:text-xl font-serif text-slate-800 tracking-wide z-20 text-center w-full"
        >
          To think <span className="font-bold">outside the box</span>,
        </motion.p>

        {/* The Box Container (Fixed size to preserve document flow while box expands) */}
        <div className="relative w-[280px] h-[128px] flex items-center justify-center">
          <motion.div
            initial={{
              width: 280,
              height: 128,
              borderWidth: 64,
              borderColor: "#4f46e5",
              borderStyle: "solid",
              backgroundColor: "#4f46e5",
              borderRadius: 32,
              opacity: 0,
              x: "-50%",
              y: "-50%",
              scale: 1
            }}
            animate={{
              width: 280,
              height: 128,
              borderWidth: 64,
              borderRadius: 32,
              opacity: 1,
              x: "-50%",
              y: "-50%",
              scale: 1,
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            exit={{
              width: "150vw",
              height: "150vh",
              borderWidth: 0,
              backgroundColor: "rgba(79, 70, 229, 0)",
              borderRadius: 100, // Increased radius during expansion to keep it smooth
              opacity: 1,
              x: "-50%",
              y: "-50%",
              scale: 1,
              transition: { duration: 1.5, ease: "easeInOut" }
            }}
            className="absolute top-1/2 left-1/2 z-10 shadow-2xl shadow-indigo-500/20 box-border"
          />
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }}
          exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
          className="text-lg md:text-xl font-serif text-slate-800 tracking-wide z-20 text-center w-full"
        >
          we must <span className="font-bold">see through it.</span>
        </motion.p>
      </div>

      {/* Footer Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.6, delay: 1.0 } }}
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
        className="absolute bottom-12 text-xs font-semibold text-slate-400 tracking-widest uppercase z-20 text-center w-full"
      >
        Crafting Digital Experiences
      </motion.div>
    </div>
  );
};

export default SplashScreen;
