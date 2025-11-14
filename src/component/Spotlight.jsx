import React from "react";
import { motion } from "framer-motion";
import Img from '../image/background-spotlight.png';

function Spotlight() {
  // Enhanced Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1.2,
      x: -50,
      rotate: -2
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.08,
      rotate: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: 50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const borderGlowVariants = {
    hidden: { 
      opacity: 0, 
      boxShadow: "0 0 0px rgba(59, 130, 246, 0)",
      scale: 0.95
    },
    visible: {
      opacity: 1,
      scale: 1,
      boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)",
      transition: {
        duration: 1.2,
        ease: "easeOut",
        scale: {
          duration: 0.8,
          ease: "backOut"
        }
      }
    },
    hover: {
      boxShadow: [
        "0 0 30px rgba(59, 130, 246, 0.2)",
        "0 0 50px rgba(59, 130, 246, 0.4)",
        "0 0 30px rgba(59, 130, 246, 0.2)"
      ],
      scale: 1.005,
      transition: {
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.3
        }
      }
    }
  };

  const buttonHover = {
    scale: 1.05,
    background: "linear-gradient(45deg, #22d3ee, #0ea5e9, #22d3ee)",
    boxShadow: "0 15px 35px -5px rgba(14, 165, 233, 0.5)",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
      background: {
        duration: 0.3
      }
    }
  };

  const buttonTap = {
    scale: 0.95,
    boxShadow: "0 5px 15px -3px rgba(14, 165, 233, 0.3)",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15
    }
  };

  const inputContainerHover = {
    scale: 1.02,
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    borderColor: "#22d3ee",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  const inputFocus = {
    scale: 1.01,
    backgroundColor: "rgba(248, 250, 252, 0.8)",
    transition: {
      duration: 0.2
    }
  };

  const textGlow = {
    hidden: { 
      textShadow: "0 0 0px rgba(0, 0, 0, 0)" 
    },
    visible: {
      textShadow: [
        "0 0 0px rgba(0, 0, 0, 0)",
        "0 0 10px rgba(0, 0, 0, 0.1)",
        "0 0 0px rgba(0, 0, 0, 0)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div 
      className="main-spotlight py-10 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-10 left-10 w-6 h-6 bg-cyan-300 rounded-full opacity-20"
        animate={floatingAnimation}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-8 h-8 bg-sky-400 rounded-full opacity-15"
        animate={{
          ...floatingAnimation,
          y: [0, 15, 0]
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Animated border with glow */}
        <motion.div 
          className="rounded-xl border-2 border-black/10 relative"
          variants={borderGlowVariants}
          whileHover="hover"
        >
          {/* Gradient overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-sky-500/5 rounded-xl pointer-events-none"
            animate={{
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* inner card */}
          <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden relative">
            {/* left image */}
            <motion.div 
              className="md:w-1/2 h-52 md:h-auto overflow-hidden relative"
              variants={imageVariants}
              whileHover="hover"
            >
              <motion.img
                src={Img}
                alt="Gallery spotlight"
                className="h-full w-full object-cover"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.8 }
                }}
              />
              {/* Image overlay gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* right content */}
            <motion.div 
              className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-white/90 backdrop-blur-sm"
              variants={contentVariants}
            >
              <motion.h2 
                className="text-[22px] md:text-4xl font-semibold tracking-wide font-cinzel text-start text-gray-800 uppercase mb-4"
                variants={itemVariants}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.3 }
                }}
              >
                Stay Inspired With Our Spotlight
              </motion.h2>

              <motion.p 
                className="mt-3 text-xs md:text-sm font-outfit text-start leading-relaxed text-gray-700 max-w-md mb-2"
                variants={itemVariants}
                whileHover={{
                  x: 3,
                  transition: { duration: 0.3 }
                }}
              >
                Every month, our Spotlight newsletter highlights standout
                submissions, shares challenge updates, and delivers inspiring
                stories from across the community.
              </motion.p>

              {/* Enhanced buttons row */}
              <motion.div 
                className="mt-6 w-full max-w-md"
                variants={itemVariants}
              >
                {/* Animated pill container */}
                <motion.div 
                  className="flex items-center rounded-full border-2 border-gray-200 bg-white overflow-hidden shadow-sm relative"
                  whileHover={inputContainerHover}
                  whileFocus={inputContainerHover}
                >
                  <motion.input
                    type="text"
                    placeholder="Become A Member"
                    className="flex-1 px-6 py-3 text-xs md:text-sm text-gray-600 border-0 outline-none focus:ring-0 bg-transparent placeholder-gray-400"
                    whileFocus={inputFocus}
                  />

                  <motion.button
                    className="px-8 py-3 text-xs md:text-sm font-semibold text-gray-900 bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-500 relative overflow-hidden"
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                  >
                    {/* Button shine effect */}
                    <motion.span 
                      className="relative z-10"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      Join Now
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Additional decorative element */}
             
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-40"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </motion.div>
  );
}

export default Spotlight;