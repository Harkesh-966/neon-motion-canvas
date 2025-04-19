
import React from "react";
import { motion } from "framer-motion";

type TechIconProps = {
  name: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  size: "sm" | "md" | "lg";
  delay: number;
};

const TechIcon: React.FC<TechIconProps> = ({ name, position, size, delay }) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  const getIconPath = (name: string) => {
    switch (name.toLowerCase()) {
      case "react":
        return "/react.svg";
      case "angular":
        return "/angular.svg";
      case "typescript":
        return "/typescript.svg";
      case "javascript":
        return "/javascript.svg";
      case "html":
        return "/html.svg";
      default:
        return "/placeholder.svg";
    }
  };

  const floatVariant = {
    initial: { 
      opacity: 0, 
      scale: 0 
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      y: [0, -10, 0],
      transition: {
        delay: delay,
        duration: 1,
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }
      }
    }
  };

  return (
    <motion.div
      className={`absolute ${sizeClasses[size]} glass-morphism rounded-full flex items-center justify-center backdrop-blur-md overflow-hidden p-2`}
      style={position}
      variants={floatVariant}
      initial="initial"
      animate="animate"
      whileHover={{ 
        rotate: 10, 
        scale: 1.1,
        boxShadow: "0 0 15px rgba(30, 174, 219, 0.7)" 
      }}
    >
      <img 
        src={getIconPath(name)} 
        alt={`${name} logo`} 
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};

export default TechIcon;
