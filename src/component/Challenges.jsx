import React, { useState } from "react";
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import Img1 from '../image/craft/1.png';
import Img2 from '../image/craft/2.png';
import Img3 from '../image/craft/3.png';

const TABS = [
    { id: "quest", label: "Quest" },
    { id: "events", label: "Events" },
    { id: "showcases", label: "Showcases" },
];

// ===== TAB 1: QUESTS =====
const questData = [
    {
        title: "Global Photography Quest",
        date: "October 5 – November 20, 2025",
        description:
            'Open to everyone! Capture the world through your lens on the theme "Reflections of Humanity." Multiple entries allowed.',
        image: Img1,
    },
    {
        title: "Youth Architecture Sparks",
        date: "November 1 – December 10, 2025",
        description:
            "For ages 16–22. Share bold architectural concepts that reimagine community spaces. Feedback tailored for young creators.",
        image: Img2,
    },
    {
        title: "Urban Voices: City Sculpture Challenge",
        date: "December 1, 2025 – January 15, 2026",
        description:
            "Open to participants in North America. Sculptures reflecting the heartbeat of modern cities.",
        image: Img3,
    },
];

// ===== TAB 2: EVENTS =====
const questData1 = [
    {
        title: "Beacon Creators Live: Vision & Storytelling",
        date: "September 12, 2025 • Virtual",
        description:
            "A half-day online gathering with live talks, creative prompts, and breakout rooms hosted by LWBL mentors to help you refine your artistic voice.",
        image: Img1,
    },
    {
        title: "Studio Circles: In-Person Craft Sessions",
        date: "October 3, 2025 • Local Chapters",
        description:
            "Small-group meetups in select cities where members share works-in-progress, receive guided feedback, and connect with fellow creators.",
        image: Img2,
    },
    {
        title: "Illuminate Summit: Annual Creative Gathering",
        date: "January 24–26, 2026",
        description:
            "Three days of talks, panels, and collaborative labs focused on storytelling, world-building, and building a sustainable creative practice.",
        image: Img3,
    },
];

// ===== TAB 3: SHOWCASES =====
const questData2 = [
    {
        title: "Lightweave Online Gallery: Winter Edition",
        date: "December 5, 2025 – February 1, 2026",
        description:
            "A curated digital gallery highlighting standout works from LWBL members across photography, illustration, writing, and mixed media.",
        image: Img1,
    },
    {
        title: "Emerging Voices Feature Wall",
        date: "January 10 – March 15, 2026",
        description:
            "Spotlights early-stage creators who are experimenting with bold ideas. Selected artists receive a dedicated feature page and community spotlight.",
        image: Img2,
    },
    {
        title: "Legacy Showcase: Guardians & Mentors",
        date: "April 1 – May 10, 2026",
        description:
            "An exhibition honoring LWBL guardians and mentors, featuring their work alongside stories of the creators they've helped lift up.",
        image: Img3,
    },
];

const DATA_BY_TAB = {
    quest: questData,
    events: questData1,
    showcases: questData2,
};

function Challenges() {
    const [activeTab, setActiveTab] = useState("quest");

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
            y: 60,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        },
        hover: {
            y: -5,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { 
            scale: 1.1, 
            opacity: 0.8,
            filter: "blur(4px)"
        },
        visible: {
            scale: 1,
            opacity: 1,
            filter: "blur(2px)",
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.5,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            background: "linear-gradient(29deg, rgba(0, 240, 251, 1) 0%, rgba(255, 255, 255, 1) 30%, rgba(0, 240, 251, 1) 100%)",
            boxShadow: "0 10px 25px rgba(0, 240, 251, 0.4)",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.95,
            transition: {
                duration: 0.1
            }
        }
    };

    const tabVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const iconVariants = {
        hover: {
            scale: 1.3,
            rotate: 5,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const currentList = DATA_BY_TAB[activeTab] || [];

    return (
        <motion.section 
            className="main-lwbl bg-[#F9FAFB] py-16 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            <div className="max-w-6xl mx-auto px-4">
                {/* Heading */}
                <motion.h4 
                    className="font-outfit text-sm md:text-base text-[#555]"
                    variants={textVariants}
                >
                    Stay connected with events, challenges, and community gatherings
                </motion.h4>
                
                <motion.h2 
                    className="font-cinzel text-[32px] md:text-[40px] text-[#000] mt-1 mb-3"
                    variants={textVariants}
                >
                    What's Happening at LWBL
                </motion.h2>
                
                <motion.p 
                    className="font-outfit text-sm md:text-base text-[#555]"
                    variants={textVariants}
                >
                    Creativity is always in motion. Our events calendar keeps you
                    apprised of every opportunity to shine. From quarterly Quests and
                    gallery exhibitions to interactive workshops and inspiring guest
                    speaker sessions, there's always something happening to spark your
                    imagination.
                </motion.p>

                {/* Tabs */}
                <motion.div 
                    className="mt-8 flex justify-center"
                    variants={textVariants}
                >
                    <div className="inline-flex rounded-full border border-[#D9D9D9] bg-white p-1 gap-1">
                        {TABS.map((tab) => (
                            <motion.button
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2 rounded-full text-sm font-outfit transition-all duration-200 ${activeTab === tab.id
                                        ? "bg-gradient-to-r from-[#00F0FB] to-[#00D1E5] text-white shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
                                        : "bg-transparent text-[#111] hover:bg-[#F5F5F5]"
                                    }`}
                                variants={tabVariants}
                                whileHover="hover"
                            >
                                {tab.label}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Cards */}
                <div className="mt-10">
                    <Row gutter={[0, 24]}>
                        {currentList.map((item, index) => (
                            <Col span={24} key={item.title}>
                                <motion.div
                                    variants={cardVariants}
                                    whileHover="hover"
                                    className="flex flex-col md:flex-row items-stretch rounded-[24px] border border-[#E4E4E4] bg-white shadow-sm overflow-hidden relative"
                                >
                                    {/* Text side */}
                                    <div className="flex-1 px-6 py-6 md:px-8 md:py-8">
                                        <motion.h3 
                                            className="font-cinzel text-xl text-start md:text-4xl font-medium tracking-[0.16em] uppercase text-[#111]"
                                            whileHover={{ x: 5 }}
                                        >
                                            {item.title}
                                        </motion.h3>
                                        
                                        <motion.p 
                                            className="font-outfit text-[20px] font-medium text-start text-[#777] mt-2"
                                            whileHover={{ x: 5 }}
                                        >
                                            {item.date}
                                        </motion.p>
                                        
                                        <motion.p 
                                            className="font-outfit text-xs md:text-sm text-start text-[#444] mt-4 max-w-xl leading-relaxed"
                                            whileHover={{ x: 5 }}
                                        >
                                            {item.description}
                                        </motion.p>

                                        <motion.button
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                            className="flex justify-start items-start mt-[45px] text-black font-outfit font-semibold px-6 py-3 rounded-full shadow-md relative overflow-hidden"
                                            style={{
                                                background: "linear-gradient(29deg, rgba(0, 240, 251, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 240, 251, 1) 100%)",
                                            }}
                                        >
                                            <span className="relative z-10">Unlock</span>
                                            
                                            {/* Button shine effect */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                                                initial={{ x: "-100%" }}
                                                whileHover={{ x: "100%" }}
                                                transition={{ duration: 0.6 }}
                                            />
                                        </motion.button>
                                    </div>

                                    {/* Image side with scale animation */}
                                    <motion.div 
                                        className="relative w-full md:w-48 h-44 md:h-auto overflow-hidden"
                                        variants={imageVariants}
                                        whileHover="hover"
                                    >
                                        <motion.img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.5 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                        
                                        {/* Lock overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                                            <motion.div 
                                                className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm"
                                                whileHover="hover"
                                                variants={iconVariants}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    stroke="#000"
                                                    strokeWidth="1.8"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <rect x="5" y="11" width="14" height="9" rx="2" />
                                                    <path d="M9 11V8a3 3 0 0 1 6 0v3" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>

                    {/* View More Button */}
                    <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="block m-auto mt-[45px] text-black font-outfit font-semibold px-8 py-3 rounded-full shadow-md relative overflow-hidden"
                        style={{
                            background: "linear-gradient(29deg, rgba(0, 240, 251, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 240, 251, 1) 100%)",
                        }}
                    >
                        <span className="relative z-10">View More</span>
                        
                        {/* Button shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                        />
                    </motion.button>
                </div>
            </div>
        </motion.section>
    );
}

export default Challenges;