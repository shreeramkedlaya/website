import React from 'react';
import { User, Smartphone, Server, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
      title: "Mobile Focus",
      desc: "React Native & Flutter expert, shipping directly to Google Play."
    },
    {
      icon: <Server className="w-6 h-6 text-indigo-600" />,
      title: "Enterprise SAP",
      desc: "O2C Workflows, OData APIs, and robust ABAP integrations."
    },
    {
      icon: <Trophy className="w-6 h-6 text-indigo-600" />,
      title: "2+ Years Exp",
      desc: "Proven track record of end-to-end architecture and deployment."
    }
  ];

  return (
    <section id="about" className="pt-12 pb-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-indigo-50 rounded-2xl mb-6">
            <User className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight cursor-default">
            Bridging the gap between{' '}
            <motion.span whileHover={{ scale: 1.05, color: "#4f46e5", textShadow: "0px 0px 20px rgba(79, 70, 229, 0.4)" }} className="inline-block transition-colors duration-300">modern frontends</motion.span>{' '}
            and <br className="hidden md:block"/>{' '}
            <motion.span whileHover={{ scale: 1.05, color: "#9333ea", textShadow: "0px 0px 20px rgba(147, 51, 234, 0.4)" }} className="inline-block transition-colors duration-300">robust SAP backends</motion.span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full">
                <div className="h-full bg-white/60 backdrop-blur-xl border border-white/50 shadow-xl shadow-slate-200/40 rounded-3xl p-8 flex flex-col items-center text-center">
                  <div className="mb-5 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
