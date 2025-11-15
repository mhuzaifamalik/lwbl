import React from "react";
import { Row, Col } from "antd";
import { FaLock } from "react-icons/fa";
import Img1 from "../image/craft/1.png";
import Img2 from "../image/craft/2.png";
import Img3 from "../image/craft/3.png";

const CraftForm = () => {
  const crafts = [
    { img: Img1, title: "Technical Skills" },
    { img: Img2, title: "Business & Career Tips" },
    { img: Img3, title: "Workshops & Seminars" },
  ];

  return (
    <section className="bg-[#5D260E80] pt-20 pb-20">
      <div className="container m-auto text-center">


        {/* ---------------- Gradient Hover Button ---------------- */}
     

        {/* ---------------- Quest Submission Form ---------------- */}
        <div className="mt-16 bg-white rounded-2xl p-8 max-w-4xl m-auto text-left">
          <h2 className="font-cinzel text-3xl md:text-4xl uppercase text-gray-900 text-center mb-6">
            Quest Submissions
          </h2>

         <div className="space-y-4 text-gray-800 font-outfit">
  <p>
    Our challenging Quests are the heartbeat of artistic visionary growth. Every few months, we unveil a new provocative theme designed to spark creativity, encourage exploration, and inspire bold voices. Whether you’re submitting a photograph that tells a story, or sculpting a vision that reflects the human spirit, each provocation is an invitation to refine your skills and share your unique perspective.
  </p>

  <p className="font-cinzel text-[14px] tracking-[0.18em] uppercase">
    Sacred Earth – A Sacred Natural Site That Honors Gaia's Divinity
  </p>

  <p>
    Our challenging Quests are the heartbeat of artistic visionary growth. Every few months, we unveil a new provocative theme designed to spark creativity, encourage exploration, and inspire bold voices. Whether you’re submitting a photograph that tells a story, or sculpting a vision that reflects the human spirit, each provocation is an invitation to refine your skills and share your unique perspective.
  </p>

  <p className="font-cinzel text-[14px] tracking-[0.18em] uppercase">
    Sacred Earth – A Sacred Natural Site That Honors Gaia's Divinity
  </p>

  <p className="font-semibold uppercase tracking-[0.18em] text-[11px]">
    Submission Ends:
  </p>
  <p className="text-[12px]">08 / 11 / 2025</p>

  <button
    type="button"
    className="mt-1 text-[11px] uppercase tracking-[0.18em] underline underline-offset-4"
  >
    Open to Full Membership
  </button>

  <p>
    Photograph natural sites or features that evoke spiritual reverence - ancient trees, sacred mountains, or serene groves - highlighting Gaia's role as a nurturing, divine entity
  </p>

  <p className="font-semibold uppercase tracking-[0.18em] text-[11px]">
    Submission Tips:
  </p>
  <p className="text-[11px] text-gray-600">
    Research cultural significance; aim for reverent compositions.
  </p>
</div>

          <form className="space-y-6">
            {/* Upload */}
            <div>
              <label className="block text-xs font-semibold uppercase mb-2">
                Upload Profile Picture
              </label>
              <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50/40 px-6 py-10 flex flex-col items-center justify-center text-center">
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 bg-white text-2xl leading-none shadow-sm"
                >
                  +
                </button>
                <p className="mt-3 text-xs text-gray-500">
                  upload your profile picture
                </p>
              </div>
            </div>

            {/* Title of Work */}
            <div>
              <label className="block text-xs font-semibold uppercase mb-2">
                Title of Work
              </label>
              <input
                type="text"
                className="w-full rounded-full border border-gray-300 px-4 py-3 text-sm font-outfit text-gray-700 focus:outline-none focus:ring-1 focus:ring-sky-400"
                placeholder="Enter the title of your piece"
              />
            </div>

            {/* Describe Theme Fit */}
            <div>
              <label className="block text-xs font-semibold uppercase mb-2">
                Describe Theme Fit
              </label>
              <textarea
                rows={5}
                className="w-full rounded-3xl border border-gray-300 px-4 py-3 text-sm font-outfit text-gray-700 resize-none focus:outline-none focus:ring-1 focus:ring-sky-400"
                placeholder="Share how your work connects to the theme..."
              />
            </div>

            {/* Member Bio */}
            <div>
              <label className="block text-xs font-semibold uppercase mb-2">
                Member Bio
              </label>
              <input
                type="text"
                className="w-full rounded-full border border-gray-300 px-4 py-3 text-sm font-outfit text-gray-700 focus:outline-none focus:ring-1 focus:ring-sky-400"
                placeholder="(Optional)"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-500 px-10 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:brightness-110 transition"
              >
                Submit Entry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CraftForm;
