import React, { useState } from "react";
import Img from '../image/grow/1.png'
import Img1 from '../image/grow/2.png'
import Img2 from '../image/grow/3.png'
import Img3 from '../image/grow/4.png'

const TABS = [
  { id: "blogs", label: "Blogs" },
  { id: "tutorials", label: "Tutorials" },
  { id: "workshops", label: "Workshops" },
];

// 👉 Replace image paths with your own or import images at the top
const blogsData = [
  {
    title: "How to Spark Creativity Every Day",
    category: "Creativity & Inspiration",
    date: "10 Oct, 2025",
    description:
      "Discover simple habits and practices that can unlock your creative flow and keep your imagination alive.",
    image: Img1,
  },
  {
    title: "Mastering the Art of Learning",
    category: "Learning & Growth",
    date: "10 Oct, 2025",
    description:
      "Explore strategies for lifelong learning and how to turn challenges into opportunities for growth.",
    image: Img2,
  },
  {
    title: "The Power of Creative Communities",
    category: "Community & Collaboration",
    date: "10 Oct, 2025",
    description:
      "Learn why being part of a like-minded community helps fuel inspiration, feedback, and lasting success.",
    image: Img3,
  },
  {
    title: "Productivity with Well-Being",
    category: "Productivity & Balance",
    date: "10 Oct, 2025",
    description:
      "Understand how to stay productive while also taking care of your mental health and creative energy.",
    image: Img,
  },
];

const tutorialsData = [
  {
    title: "Storyboard Your Next Big Idea",
    category: "Visual Storytelling",
    date: "22 Sep, 2025",
    description:
      "Step-by-step guidance on turning scattered thoughts into a clear storyboard for films, comics, or campaigns.",
    image: Img,
  },
  {
    title: "Lighting Techniques for Creators",
    category: "Photo & Video",
    date: "28 Sep, 2025",
    description:
      "Learn simple lighting setups you can use at home or in the studio to instantly upgrade your visuals.",
  image: Img2,
  },
  {
    title: "From Draft to Polished Piece",
    category: "Writing Craft",
    date: "03 Oct, 2025",
    description:
      "A practical breakdown of editing passes that help you refine your writing without losing your voice.",
  image: Img3,
  },
  {
    title: "Building a Cohesive Portfolio",
    category: "Career & Showcase",
    date: "07 Oct, 2025",
    description:
      "Curate your best work, organize themes, and present a portfolio that speaks clearly to your strengths.",
  image: Img2,
  },
];

const workshopsData = [
  {
    title: "Live Feedback Lab: Visual Arts",
    category: "Interactive Workshop",
    date: "16 Oct, 2025",
    description:
      "Submit your artwork for live critique and receive actionable feedback from mentors and peers in real time.",
    image: Img1,
  },
  {
    title: "Story Clinic: Characters & Worlds",
    category: "Writing Workshop",
    date: "23 Oct, 2025",
    description:
      "A guided session focused on character depth, world-building, and making your stories emotionally resonant.",
   image: Img2,
  },
  {
    title: "Creative Routine Reset",
    category: "Productivity Session",
    date: "30 Oct, 2025",
    description:
      "Design a sustainable creative routine with check-ins, prompts, and tools that fit your real life.",
 image: Img3,
  },
  {
    title: "Collab Lab: Cross-Discipline Projects",
    category: "Community Session",
    date: "05 Nov, 2025",
    description:
      "Meet collaborators from different disciplines and sketch out a shared project you can build together.",
 image: Img,
  },
];

const DATA_BY_TAB = {
  blogs: blogsData,
  tutorials: tutorialsData,
  workshops: workshopsData,
};

function Growth() {
  const [activeTab, setActiveTab] = useState("blogs");
  const currentList = DATA_BY_TAB[activeTab] || [];

  return (
    <section className="bg-[#FBEFD8] py-1 pt-[50px] pb-[50px]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="font-outfit text-xs md:text-sm tracking-[0.25em] uppercase text-[#555] mb-3">
          Unlock Knowledge, Creativity, And Connection In One Space
        </p>

        <h2 className="font-cinzel text-[32px] md:text-[44px] leading-tight text-[#000] mb-4">
          Learn, Share &amp; Grow
          <br className="hidden md:block" /> Together
        </h2>

        <p className="font-outfit text-sm md:text-base text-[#555] max-w-3xl mx-auto">
          At Lightweave Beacon Legacy, community is the soul of artistic flourishing. It’s where
          inspiration flows freely between members, where learning happens in real-time through
          workshops, critiques, and direct messages. Collaboration turns solo sparks into shared
          fires, while our tools help you keep the pedal down without burning out. Thrive
          together, create without limits, stay whole – that’s the promise.
        </p>

        {/* Tabs */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-[#D9D9D9] bg-white p-1 gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-outfit transition-all duration-200 ${
                  activeTab === tab.id
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
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentList.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-[24px] shadow-md overflow-hidden flex flex-col h-full text-left"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-5 py-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-[11px] text-[#777] font-outfit mb-3">
                  <span>{item.category}</span>
                  <span>{item.date}</span>
                </div>

                <h3 className="font-cinzel text-base md:text-lg text-[#111] mb-2">
                  {item.title}
                </h3>

                <p className="font-outfit text-xs md:text-sm text-[#555] flex-1">
                  {item.description}
                </p>

                <button
                  className="mt-4 self-start text-black font-outfit text-xs md:text-sm font-semibold px-5 py-2 rounded-full shadow-md hover:opacity-90 transition duration-300"
                  style={{
                    background:
                      "linear-gradient(29deg, rgba(0, 240, 251, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 240, 251, 1) 100%)",
                  }}
                >
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Growth;
