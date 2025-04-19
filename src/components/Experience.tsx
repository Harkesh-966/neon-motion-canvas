
import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "TechNova Solutions",
      period: "Jan 2023 - Present",
      description: "Lead the development of enterprise SaaS applications using React and TypeScript. Implemented performance optimizations resulting in 40% faster load times. Mentored junior developers and established best practices for the frontend team.",
      skills: ["React", "TypeScript", "Redux", "Jest", "CI/CD"]
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Digital Dynamics",
      period: "Mar 2021 - Dec 2022",
      description: "Developed responsive user interfaces for e-commerce applications. Collaborated with UX designers to implement pixel-perfect designs. Integrated third-party APIs and optimized website performance across devices.",
      skills: ["Angular", "SCSS", "RxJS", "GraphQL", "Webpack"]
    },
    {
      id: 3,
      role: "Web Developer",
      company: "Creative Solutions Agency",
      period: "Jun 2019 - Feb 2021",
      description: "Built interactive websites for clients across various industries. Implemented responsive designs and ensured cross-browser compatibility. Worked closely with design and content teams to deliver engaging user experiences.",
      skills: ["JavaScript", "HTML5", "CSS3", "jQuery", "WordPress"]
    },
    {
      id: 4,
      role: "Frontend Intern",
      company: "Startup Ventures",
      period: "Jan 2019 - May 2019",
      description: "Assisted in developing UI components for web applications. Participated in code reviews and improved coding skills through mentorship. Learned modern development workflows and version control practices.",
      skills: ["HTML", "CSS", "JavaScript", "Git", "Responsive Design"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/20">
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background z-0"></div>
      
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
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            My professional journey in frontend development.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-violet to-neon-purple transform md:translate-x-[-50%]"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-0' : 'md:pl-12 md:ml-0 md:mr-auto'
                } md:w-1/2 pl-10 md:pl-0`}
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className={`absolute ${
                  index % 2 === 0 ? 'md:right-[-8px] left-0 md:left-auto' : 'md:left-[-8px] left-0'
                } top-1.5 w-4 h-4 rounded-full bg-neon-violet border-2 border-background z-10`}></div>
                
                {/* Content */}
                <div className="glass-morphism rounded-xl p-6 md:p-8 border border-white/10 hover:border-neon-blue/30 transition-all duration-300">
                  <div className="flex justify-between items-start flex-col md:flex-row mb-2">
                    <h3 className="text-xl font-semibold text-neon-blue">{exp.role}</h3>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300 mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg text-white mb-4">{exp.company}</h4>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
