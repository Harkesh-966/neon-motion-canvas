
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A responsive admin dashboard for e-commerce platforms with analytics and real-time data.",
      longDescription: "This comprehensive dashboard provides e-commerce businesses with powerful analytics tools, inventory management, and customer insights. Built with React and D3.js for data visualization, it includes real-time sales tracking, user behavior analysis, and predictive inventory management features. The responsive design works seamlessly across all devices, allowing business owners to monitor performance metrics anywhere.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3",
      technologies: ["React", "TypeScript", "Tailwind CSS", "D3.js", "Redux"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 2,
      title: "Social Media Application",
      description: "Full-featured social media platform with real-time chat, post sharing, and user connections.",
      longDescription: "A comprehensive social media platform that enables users to connect, share content, and communicate in real-time. Features include post creation with rich media support, interactive comment threads, direct messaging with read receipts, user profile customization, and intelligent content recommendation. The application implements WebSockets for real-time updates and notifications, creating an engaging user experience.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3",
      technologies: ["Angular", "RxJS", "Socket.io", "Express", "MongoDB"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      description: "Mobile-first application for tracking workouts, nutrition, and personal fitness goals.",
      longDescription: "This fitness companion helps users achieve their health goals through comprehensive workout and nutrition tracking. The app features customizable workout plans, exercise libraries with video demonstrations, nutrition logging with barcode scanning, progress visualization with interactive charts, and integration with popular fitness wearables. The progressive web app design ensures a native-like experience across all devices.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3",
      technologies: ["React Native", "Firebase", "Chart.js", "Node.js", "GraphQL"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "Web application that leverages AI to create custom content for blogs, social media, and websites.",
      longDescription: "An innovative tool that harnesses AI to generate high-quality content for various digital platforms. The application offers customizable content templates, tone adjustment, SEO optimization suggestions, plagiarism checking, and automated image recommendation. Built with performance in mind, it delivers rapid results while maintaining a clean, intuitive interface that makes content creation accessible to everyone, regardless of writing experience.",
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3",
      technologies: ["Vue.js", "TensorFlow.js", "FastAPI", "PostgreSQL", "AWS"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description: "Interactive property listing platform with virtual tours and neighborhood analytics.",
      longDescription: "A comprehensive real estate solution that revolutionizes property discovery and evaluation. The platform features interactive map-based search, 3D virtual property tours, neighborhood analytics including crime rates and school quality, mortgage calculators with lender integration, and automated property valuation. The responsive design was built with performance optimization techniques to handle complex map rendering and 3D visualization smoothly.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3",
      technologies: ["React", "Next.js", "Three.js", "Mapbox", "Prisma"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Educational platform with course creation, student tracking, and interactive learning tools.",
      longDescription: "An all-in-one learning platform designed for educators and students. The system includes robust course creation tools with multimedia support, progress tracking with detailed analytics, interactive assessments with automatic grading, discussion forums with moderation tools, and virtual classroom functionality. The application was built with accessibility as a priority, ensuring educational content is available to all users regardless of ability.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3",
      technologies: ["Angular", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com",
      demo: "https://example.com"
    }
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 30 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { 
        duration: 0.2 
      }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Click on a card to learn more about each project.
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-neon-blue/50 transition-all duration-500"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.2)",
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <button 
                  className="w-full py-2 mt-2 rounded-lg bg-gradient-to-r from-neon-blue/20 to-neon-violet/20 text-white hover:from-neon-blue/30 hover:to-neon-violet/30 transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-background border border-white/10 rounded-2xl overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-64 md:h-80 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <button 
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-background/80 transition-colors duration-300"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>
              
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">{selectedProject.title}</h2>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 inline-flex items-center gap-2 text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  
                  <a 
                    href={selectedProject.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-violet inline-flex items-center gap-2 text-white hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
