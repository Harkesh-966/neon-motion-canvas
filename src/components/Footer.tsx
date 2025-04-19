
import React from "react";
import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";
import { ThemeToggle } from "./ui/theme-toggle";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white">Alex<span className="text-neon-blue">Johnson</span></h2>
            </div>
            
            <div className="flex justify-center gap-x-4 md:gap-x-8 mb-8 flex-wrap">
              <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors py-2">About</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors py-2">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors py-2">Projects</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors py-2">Experience</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors py-2">Contact</a>
            </div>
            
            <div className="flex gap-4 mb-10">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:text-neon-blue hover:bg-white/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:text-neon-blue hover:bg-white/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:text-neon-blue hover:bg-white/10 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:text-neon-blue hover:bg-white/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 mb-4 flex items-center justify-center gap-1">
                Made with <Heart size={14} className="text-neon-pink fill-neon-pink" /> and React.js
              </p>
              <div className="flex items-center justify-center gap-3">
                <p className="text-sm text-gray-500">
                  © {currentYear} Alex Johnson. All rights reserved.
                </p>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
