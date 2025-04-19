
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-0"></div>
      
      {/* Animated background dots */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:20px_20px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-violet/20 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Profile" 
                className="w-full h-full object-cover relative z-10"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-neon-blue/30 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-full h-full border border-neon-violet/30 rounded-2xl -z-10"></div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-semibold mb-4 text-neon-blue"
            >
              Frontend Developer with 4+ Years Experience
            </motion.h3>
            
            <motion.p 
              variants={itemVariants} 
              className="text-gray-300 mb-6"
            >
              Hello! I'm Alex, a passionate frontend developer with a keen eye for creating engaging and responsive user experiences. I specialize in building modern web applications using the latest technologies and frameworks.
            </motion.p>
            
            <motion.p 
              variants={itemVariants} 
              className="text-gray-300 mb-6"
            >
              With over 4 years of experience, I've worked with diverse teams to deliver high-quality products that prioritize user needs while meeting business objectives. I enjoy solving complex problems and continuously learning new skills to stay at the forefront of web development.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              <div>
                <h4 className="text-neon-violet font-medium mb-2">Location</h4>
                <p className="text-gray-300">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="text-neon-violet font-medium mb-2">Experience</h4>
                <p className="text-gray-300">4+ Years</p>
              </div>
              <div>
                <h4 className="text-neon-violet font-medium mb-2">Freelance</h4>
                <p className="text-gray-300">Available</p>
              </div>
              <div>
                <h4 className="text-neon-violet font-medium mb-2">Languages</h4>
                <p className="text-gray-300">English, Spanish</p>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="mt-8"
            >
              <a 
                href="#contact" 
                className="px-6 py-2.5 inline-block bg-gradient-to-r from-neon-blue to-neon-violet rounded-full text-white font-medium hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300"
              >
                Get In Touch
              </a>
              <a 
                href="#" 
                className="px-6 py-2.5 ml-4 inline-block bg-transparent border border-white/20 rounded-full text-white font-medium hover:bg-white/5 transition-all duration-300"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
