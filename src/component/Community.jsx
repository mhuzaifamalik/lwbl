import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "A supporter from Northern Nevada, inspired by their own journey rediscovering photography after years in the service industry, contributed to LWBL's initial quest grant pool. Their donation helped fund a mini-quest for underrepresented ethnic photographers, enabling 5 participants to challenge their visual arts skills. 'Seeing these creators shine reminded me of my passion—LWBL is uplifting communities one story at a time,' they shared. This gift, processed securely, aligns with our mission without revealing personal details",
    donorId: "DNR-UULB17695",
  },
  {
    id: 2,
    quote:
      "A prolific sculptor & supporter from Southern California, contributed to LWBL's initial sculpture grant pool. Their donation is helping fund a grant for sculptural supplies. Their story was 'I spent many decades in the medical services industry, collecting art books and going to the many galleries in my area. Never thinking I could be an artist. Then, my family and friends began hinting that I should try my hand at sculpting. This is what I see in the LWBL's mission and commitment to inspire people to follow their passions!",
    donorId: "DNR-RPJA4542",
  },
  {
    id: 3,
    quote:
      "A supporter from Northern California, contributed to LWBL's initial quest grant pool. Their donation helped fund the awards for the winners of our Aug 2025 Quest 'Black Light'. Their story was 'LWBL has motivated me to see photographic stories as a way of expressing ourselves. Different image exposure can give you the stark nature of reality or the softer hue of what you hope to be. The quest challenges help create a different perspective for imagining an image's appearance on 'film'. Pushing a photographer's boundaries only enhances the experience you can have with your art.",
    donorId: "DNR-WLNW9700",
  },
  {
    id: 4,
    quote:
      "A supporter from Northern California, contributed to LWBL's initial quest grant pool. Their donation helped fund the awards for the winners of our Aug 2025 Quest 'Black Light'. Their story was 'LWBL has motivated me to see photographic stories as a way of expressing ourselves. Different image exposure can give you the stark nature of reality or the softer hue of what you hope to be. The quest challenges help create a different perspective for imagining an image's appearance on 'film'. Pushing a photographer's boundaries only enhances the experience you can have with your art.",
    donorId: "DNR-WLNW9700",
  },
];

function Community() {
  // Animation variants
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#171717",
      color: "#ffffff",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
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
    <motion.section 
      className="bg-[#f7f5f2] px-6 py-16 md:py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-6xl lg:flex lg:gap-16">
        {/* Left column – cards with new staggered grid */}
        <motion.div 
          className="lg:w-2/3"
          variants={containerVariants}
        >
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.id}
                className="flex h-full flex-col rounded-2xl bg-white p-6 text-[0.72rem] leading-relaxed shadow-md relative overflow-hidden"
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated background element */}
                <motion.div 
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-100 to-sky-200 rounded-full -mr-10 -mt-10 opacity-20"
                  animate={floatingAnimation}
                />
                
                <p className="mb-4 text-[16px] text-start font-outfit relative z-10">
                  {item.quote}
                </p>
                <motion.p 
                  className="mt-auto font-semibold tracking-[0.18em] text-[16px] text-start text-neutral-900 relative z-10"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-bold">DONOR – </span>
                  {item.donorId}
                </motion.p>
                
                {/* Hover effect overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-sky-50 to-cyan-50 opacity-0 rounded-2xl"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Right column – heading + copy */}
        <motion.div 
          className="mt-10 flex flex-col justify-center lg:mt-0 lg:w-1/3"
          variants={containerVariants}
        >
          <motion.p 
            className="mb-5 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-neutral-700"
            variants={textVariants}
          >
            Real Voices, Real Impact
          </motion.p>

          <motion.h2 
            className="mb-6 font-cinzel text-3xl leading-tight text-neutral-900 md:text-4xl lg:text-[2.6rem]"
            variants={textVariants}
          >
            <motion.span 
              className="block"
              whileHover={{ x: 10 }}
            >
              What Our
            </motion.span>
            <motion.span 
              className="block"
              whileHover={{ x: 10 }}
            >
              Community Says
            </motion.span>
          </motion.h2>

          <motion.p 
            className="mb-3 max-w-md text-sm leading-7 font-outfit text-neutral-700"
            variants={textVariants}
          >
            Creativity thrives because of the people who make up our community.
            From aspiring artists to dedicated patrons, everyone finds
            inspiration, support, and growth here.
          </motion.p>
          
          <motion.p 
            className="mb-8 max-w-md text-sm leading-7 text-neutral-700"
            variants={textVariants}
          >
            Hear from those who have walked the journey with us.
          </motion.p>

          <motion.button
            type="button"
            className="inline-flex w-max  mx-auto justify-center items-center rounded-full border border-neutral-900 px-6 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-neutral-900 relative overflow-hidden"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="relative z-10 ">Follow Us On X</span>
            
            {/* Button hover background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div 
        className="absolute left-10 bottom-10 w-4 h-4 bg-cyan-300 rounded-full opacity-40"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      <motion.div 
        className="absolute right-20 top-20 w-6 h-6 bg-sky-300 rounded-full opacity-30"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.section>
  );
}

export default Community;