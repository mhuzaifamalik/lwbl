import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img from '../image/grow/1.png';
import Img1 from '../image/grow/2.png';
import Img2 from '../image/grow/3.png';
import Img3 from '../image/grow/4.png';

const TABS = [
  { id: "blogs", label: "Blogs" },
  { id: "tutorials", label: "Tutorials" },
  { id: "workshops", label: "Workshops" },
];

const blogsData = [
  { title: "How to Spark Creativity Every Day", category: "Creativity & Inspiration", date: "10 Oct, 2025", description: "Discover simple habits and practices that can unlock your creative flow and keep your imagination alive.", image: Img1 },
  { title: "Mastering the Art of Learning", category: "Learning & Growth", date: "10 Oct, 2025", description: "Explore strategies for lifelong learning and how to turn challenges into opportunities for growth.", image: Img2 },
  { title: "The Power of Creative Communities", category: "Community", date: "10 Oct, 2025", description: "Learn why being part of a like-minded community helps fuel inspiration, feedback, and lasting success.", image: Img3 },
  { title: "Productivity with Well-Being", category: "Productivity & Balance", date: "10 Oct, 2025", description: "Understand how to stay productive while also taking care of your mental health and creative energy.", image: Img },
];

const tutorialsData = [
  { title: "Storyboard Your Next Big Idea", category: "Visual Storytelling", date: "22 Sep, 2025", description: "Step-by-step guidance on turning scattered thoughts into a clear storyboard for films, comics, or campaigns.", image: Img },
  { title: "Lighting Techniques for Creators", category: "Photo & Video", date: "28 Sep, 2025", description: "Learn simple lighting setups you can use at home or in the studio to instantly upgrade your visuals.", image: Img2 },
  { title: "From Draft to Polished Piece", category: "Writing Craft", date: "03 Oct, 2025", description: "A practical breakdown of editing passes that help you refine your writing without losing your voice.", image: Img3 },
  { title: "Building a Cohesive Portfolio", category: "Career & Showcase", date: "07 Oct, 2025", description: "Curate your best work, organize themes, and present a portfolio that speaks clearly to your strengths.", image: Img2 },
];

const workshopsData = [
  { title: "Live Feedback Lab: Visual Arts", category: "Interactive Workshop", date: "16 Oct, 2025", description: "Submit your artwork for live critique and receive actionable feedback from mentors and peers in real time.", image: Img1 },
  { title: "Story Clinic: Characters & Worlds", category: "Writing Workshop", date: "23 Oct, 2025", description: "A guided session focused on character depth, world-building, and making your stories emotionally resonant.", image: Img2 },
  { title: "Creative Routine Reset", category: "Productivity Session", date: "30 Oct, 2025", description: "Design a sustainable creative routine with check-ins, prompts, and tools that fit your real life.", image: Img3 },
  { title: "Collab Lab: Cross-Discipline Projects", category: "Community Session", date: "05 Nov, 2025", description: "Meet collaborators from different disciplines and sketch out a shared project you can build together.", image: Img },
];

const DATA_BY_TAB = {
  blogs: blogsData,
  tutorials: tutorialsData,
  workshops: workshopsData,
};

function Growth() {
  const [activeTab, setActiveTab] = useState("blogs");

  // Enhanced Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const textVariants = {
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
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.85,
      rotateY: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      y: -15,
      scale: 1.05,
      rotateY: 5,
      boxShadow: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 1.3, 
      opacity: 0.6,
      rotateZ: -2
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateZ: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.15,
      rotateZ: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.7, opacity: 0, rotateX: 90 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.08,
      background: "linear-gradient(45deg, #00F0FB, #00D1E5, #00F0FB)",
      boxShadow: "0 15px 35px rgba(0, 240, 251, 0.5)",
      y: -2,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.92,
      transition: {
        duration: 0.1
      }
    }
  };

  const tabVariants = {
    hidden: { scale: 0.8, opacity: 0, y: -20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.08,
      y: -2,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const tabContainerVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    x: [0, 10, 0],
    scale: [1, 1.2, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const currentList = DATA_BY_TAB[activeTab] || [];

  return (
    <motion.section 
      className="bg-[#FBEFD8] py-1 pt-[50px] pb-[50px] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Enhanced Background decorative elements */}
      <motion.div 
        className="absolute top-10 left-5 w-6 h-6 bg-amber-400 rounded-full opacity-25"
        animate={floatingAnimation}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-8 h-8 bg-orange-400 rounded-full opacity-20"
        animate={{
          ...floatingAnimation,
          y: [0, 25, 0],
          x: [0, -15, 0],
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/4 w-12 h-12 bg-cyan-300 rounded-full opacity-10"
        animate={pulseAnimation}
      />
      
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.p 
          className="font-outfit text-xs md:text-sm tracking-[0.25em] uppercase text-[#555] mb-3"
          variants={textVariants}
          whileHover={{ scale: 1.02 }}
        >
          Unlock Knowledge, Creativity, And Connection In One Space
        </motion.p>

        <motion.h2 
          className="font-cinzel text-[32px] md:text-[44px] leading-tight text-[#000] mb-4"
          variants={textVariants}
          whileHover={{
            background: "linear-gradient(45deg, #000, #333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transition: { duration: 0.5 }
          }}
        >
          Learn, Share &amp; Grow<br className="hidden md:block" /> Together
        </motion.h2>

        <motion.p 
          className="font-outfit text-sm md:text-base text-[#555] max-w-3xl mx-auto leading-relaxed"
          variants={textVariants}
          whileHover={{ x: 5 }}
        >
          At Lightweave Beacon Legacy, community is the soul of artistic flourishing. It's where inspiration flows freely between members, where learning happens in real-time through workshops, critiques, and direct messages. Collaboration turns solo sparks into shared fires, while our tools help you keep the pedal down without burning out. Thrive together, create without limits, stay whole – that's the promise.
        </motion.p>

        {/* Enhanced Tabs */}
        <motion.div 
          className="mt-8 flex justify-center"
          variants={tabContainerVariants}
          whileHover="hover"
        >
          <div className="inline-flex rounded-full border-2 border-[#E4E4E4] bg-white/80 backdrop-blur-sm p-1 gap-1">
            {TABS.map((tab) => (
              <motion.button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full text-sm font-outfit font-semibold transition-all duration-300 relative overflow-hidden ${
                  activeTab === tab.id
                    ? "text-white shadow-2xl"
                    : "text-[#111] hover:text-[#00F0FB]"
                }`}
                variants={tabVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#00F0FB] to-[#00D1E5] rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Cards with AnimatePresence for tab switching */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            {currentList.map((item, index) => (
              <motion.article
                key={item.title}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col h-full text-left relative group cursor-pointer"
                style={{
                  perspective: "1000px"
                }}
              >
                {/* Enhanced Hover overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-cyan-100/80 to-amber-100/80 opacity-0 group-hover:opacity-100 rounded-3xl z-0"
                  transition={{ duration: 0.4 }}
                />
                
                {/* Animated border */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-300/50"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Image container */}
                <motion.div 
                  className="w-full h-56 overflow-hidden relative z-10"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.8 }}
                  />
                  {/* Enhanced Image overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>

                {/* Content */}
                <div className="px-6 py-5 flex-1 flex flex-col relative z-10 bg-white/90 backdrop-blur-sm">
                  <motion.div 
                    className="flex items-center justify-between text-[11px] text-[#777] font-outfit mb-4"
                    whileHover={{ x: 3 }}
                  >
                    <motion.span 
                      className="px-2 py-1 bg-cyan-100 rounded-full text-cyan-700"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.category}
                    </motion.span>
                    <span className="font-semibold">{item.date}</span>
                  </motion.div>

                  <motion.h3 
                    className="font-cinzel text-lg md:text-xl text-[#111] mb-3 leading-tight"
                    whileHover={{ x: 3 }}
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p 
                    className="font-outfit text-sm text-[#555] flex-1 leading-relaxed"
                    whileHover={{ x: 3 }}
                  >
                    {item.description}
                  </motion.p>

                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="mt-6 self-start text-black font-outfit text-sm font-bold px-6 py-3 rounded-full shadow-lg relative overflow-hidden group/btn"
                    style={{
                      background: "linear-gradient(45deg, rgba(0, 240, 251, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 240, 251, 1) 100%)",
                    }}
                  >
                    <span className="relative z-10">Read More</span>
                    
                    {/* Enhanced Button shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.button>
                </div>

                {/* Enhanced Corner accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-bl-3xl opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Floating particles */}
        <motion.div 
          className="absolute left-20 top-1/3 w-3 h-3 bg-cyan-500 rounded-full opacity-50"
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
        />
        
        <motion.div 
          className="absolute right-32 bottom-1/4 w-4 h-4 bg-amber-500 rounded-full opacity-40"
          animate={{
            y: [0, 30, 0],
            x: [0, -25, 0],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
        />

        {/* New floating element */}
        <motion.div 
          className="absolute left-1/3 bottom-20 w-5 h-5 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full opacity-30"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
      </div>
    </motion.section>
  );
}

export default Growth;