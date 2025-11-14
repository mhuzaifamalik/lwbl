import React, { useState } from "react";
import { Row, Col } from "antd";
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
            'Open to everyone! Capture the world through your lens on the theme “Reflections of Humanity.” Multiple entries allowed.',
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
            "An exhibition honoring LWBL guardians and mentors, featuring their work alongside stories of the creators they’ve helped lift up.",
        image: Img3,
    },
];

// for now we just reuse questData sets per tab
const DATA_BY_TAB = {
    quest: questData,
    events: questData1,
    showcases: questData2,
};

function Challenges() {
    const [activeTab, setActiveTab] = useState("quest");

    const currentList = DATA_BY_TAB[activeTab] || [];

    return (
        <section className="main-lwbl bg-[#F9FAFB] py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Heading */}
                <h4 className="font-outfit text-sm md:text-base text-[#555]">
                    Stay connected with events, challenges, and community gatherings
                </h4>
                <h2 className="font-cinzel text-[32px] md:text-[40px] text-[#000] mt-1 mb-3">
                    What’s Happening at LWBL
                </h2>
                <p className="font-outfit text-sm md:text-base text-[#555] ">
                    Creativity is always in motion. Our events calendar keeps you
                    apprised of every opportunity to shine. From quarterly Quests and
                    gallery exhibitions to interactive workshops and inspiring guest
                    speaker sessions, there’s always something happening to spark your
                    imagination.
                </p>

                {/* Tabs */}
                <div className="mt-8 flex justify-center">
                    <div className="inline-flex rounded-full border border-[#D9D9D9] bg-white p-1 gap-1">
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2 rounded-full text-sm font-outfit transition-all duration-200 ${activeTab === tab.id
                                        ? "bg-gradient-to-r from-[#00F0FB] to-[#00D1E5] text-white shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
                                        : "bg-transparent text-[#111] hover:bg-[#F5F5F5]"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards */}
                <div className="mt-10">
                    <Row gutter={[0, 24]}>
                        {currentList.map((item) => (
                            <Col span={24} key={item.title}>
                                <div className="flex flex-col md:flex-row items-stretch rounded-[24px] border border-[#E4E4E4] bg-white shadow-sm overflow-hidden">
                                    {/* Text side */}
                                    <div className="flex-1 px-6 py-6 md:px-8 md:py-8">
                                        <h3 className="font-cinzel text-xl text-start md:text-4xl font-medium tracking-[0.16em] uppercase text-[#111]">
                                            {item.title}
                                        </h3>
                                        <p className="font-outfit text-[20px] font-medium text-start text-[#777] mt-2">
                                            {item.date}
                                        </p>
                                        <p className="font-outfit text-xs md:text-sm text-start  text-[#444] mt-4 max-w-xl leading-relaxed">
                                            {item.description}
                                        </p>

                                        <button
                                            className="flex justify-start items-start mt-[45px] text-black font-outfit font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition duration-300"
                                            style={{
                                                background:
                                                    "linear-gradient(29deg, rgba(0, 240, 251, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 240, 251, 1) 100%)",
                                            }}
                                        >
                                            Unlock
                                        </button>
                                    </div>

                                    {/* Image side */}
                                    <div className="relative w-full md:w-72 h-44 md:h-auto">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover blur-[2px]"
                                        />
                                        {/* Lock overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    <button
                        className="block m-auto mt-[45px] text-black font-outfit font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition duration-300"
                        style={{
                            background:
                                "linear-gradient(29deg, rgba(0, 240, 251, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 240, 251, 1) 100%)",
                        }}
                    >
                        view
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Challenges;
