
import React from "react";
import { motion } from "framer-motion";
import TechIcon from "./TechIcon";

const Hero = () => {
  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.4
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.6
      }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.8
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0"></div>
      
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-neon-blue/10 filter blur-3xl animate-pulse-glow z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-neon-violet/10 filter blur-3xl animate-pulse-glow z-0"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <motion.h2 
          className="text-neon-blue font-semibold tracking-wider mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi there, I'm
        </motion.h2>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 text-white text-glow"
          variants={nameVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-violet">
            Alex Johnson
          </span>
        </motion.h1>
        
        <motion.h3
          className="text-xl md:text-2xl mb-8 text-gray-300"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Frontend Developer
        </motion.h3>
        
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
        >
          <a 
            href="#about" 
            className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full inline-flex items-center gap-2 text-white hover:bg-white/10 transition-all duration-300 neon-blue-glow"
          >
            Explore My Work
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </a>
        </motion.div>
      </div>
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <TechIcon 
          name="react" 
          position={{ top: "20%", left: "15%" }}
          size="lg"
          delay={1}
        />
        <TechIcon 
          name="angular" 
          position={{ top: "65%", left: "20%" }}
          size="md"
          delay={1.5}
        />
        <TechIcon 
          name="typescript" 
          position={{ top: "35%", right: "18%" }}
          size="md"
          delay={2}
        />
        <TechIcon 
          name="javascript" 
          position={{ top: "72%", right: "22%" }}
          size="sm"
          delay={2.5}
        />
        <TechIcon 
          name="html" 
          position={{ top: "28%", left: "28%" }}
          size="sm"
          delay={3}
        />
      </div>
    </section>
  );
};

export default Hero;
