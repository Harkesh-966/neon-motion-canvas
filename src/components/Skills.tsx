
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML5/CSS3", level: 95, color: "neon-blue" },
    { name: "JavaScript", level: 90, color: "neon-blue" },
    { name: "TypeScript", level: 85, color: "neon-blue" },
    { name: "React.js", level: 92, color: "neon-violet" },
    { name: "Angular", level: 80, color: "neon-violet" },
    { name: "Vue.js", level: 75, color: "neon-violet" },
    { name: "Node.js", level: 78, color: "neon-purple" },
    { name: "TailwindCSS", level: 88, color: "neon-purple" },
    { name: "Framer Motion", level: 82, color: "neon-purple" },
    { name: "GSAP", level: 70, color: "neon-pink" },
    { name: "Figma", level: 75, color: "neon-pink" },
    { name: "CI/CD", level: 72, color: "neon-pink" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/20">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Through years of practice and professional experience, I've developed proficiency in a range of technologies and tools.
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="glass-morphism rounded-xl p-6 hover:border-neon-blue/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: `0 10px 25px -5px rgba(139, 92, 246, 0.2)`,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-white">{skill.name}</h3>
                <span className={`text-${skill.color} font-medium`}>{skill.level}%</span>
              </div>
              
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-20">
          <motion.h3
            className="text-2xl font-semibold mb-8 text-center text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Tools & Technologies
          </motion.h3>
          
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Framer Motion", "Redux", "Node.js", "Git", "Figma"].map((tool, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-neon-blue/50 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <span className="text-gray-200">{tool}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
