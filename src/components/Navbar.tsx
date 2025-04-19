
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ui/theme-toggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0, 
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const navItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      y: 20, 
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-lg' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">
            Alex<span className="text-neon-blue">Johnson</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className="text-gray-300 hover:text-neon-blue relative group"
                >
                  {link.name}
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-neon-blue transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              ))}
            </nav>
            
            <ThemeToggle />
            
            <a 
              href="#contact"
              className="px-5 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>
          
          <div className="flex items-center md:hidden gap-4">
            <ThemeToggle />
            
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 md:hidden overflow-auto"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="container mx-auto px-4 py-5">
              <div className="flex justify-between items-center mb-10">
                <a href="#" className="text-2xl font-bold text-white">
                  Alex<span className="text-neon-blue">Johnson</span>
                </a>
                
                <button
                  onClick={toggleMobileMenu}
                  className="text-white p-2 focus:outline-none"
                  aria-label="Close mobile menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="flex flex-col space-y-6 items-center mt-20">
                {navLinks.map((link, index) => (
                  <motion.a 
                    key={index} 
                    href={link.href}
                    className="text-xl text-gray-300 hover:text-neon-blue py-2 relative group"
                    variants={navItemVariants}
                    onClick={toggleMobileMenu}
                  >
                    {link.name}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-neon-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </motion.a>
                ))}
                
                <motion.a 
                  href="#contact"
                  className="mt-6 px-8 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
                  variants={navItemVariants}
                  onClick={toggleMobileMenu}
                >
                  Let's Connect
                </motion.a>
              </nav>
              
              <motion.div 
                className="mt-20 flex justify-center space-x-8"
                variants={navItemVariants}
              >
                <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
