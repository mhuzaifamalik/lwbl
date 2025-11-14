import React from "react";
import Img from '../image/background-spotlight.png'

function Spotlight() {
  return (
    <div className="main-spotlight py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* blue border / glow */}
        <div className="rounded-xl border border-black">
          {/* inner card */}
          <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden">
            {/* left image */}
            <div className="md:w-1/2 h-52 md:h-auto">
              <img
                src={Img} // <-- replace with your image path
                alt="Gallery spotlight"
                className="h-full w-full object-cover"
              />
            </div>

            {/* right content */}
            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-white/80">
              <h2 className="text-[22px] md:text-4xl font-semibold tracking-wide    font-cinzel text-start text-gray-800 uppercase">
                Stay Inspired With Our Spotlight
              </h2>

              <p className="mt-3 text-xs md:text-sm font-outift text-start leading-relaxed text-gray-700 max-w-md">
                Every month, our Spotlight newsletter highlights standout
                submissions, shares challenge updates, and delivers inspiring
                stories from across the community.
              </p>

              {/* buttons row */}
             <div className="mt-6 w-full max-w-md">
  {/* pill container */}
  <div className="flex items-center rounded-full border border-gray-200 bg-white overflow-hidden shadow-sm">
    <input
      type="text"
      placeholder="Become A Member"
      className="flex-1 px-6 py-2.5 text-xs md:text-sm text-gray-600 border-0 
                 outline-none focus:ring-0"
    />

    <button
      className="px-8 py-2.5 text-xs md:text-sm font-semibold text-gray-900
                 bg-gradient-to-r from-cyan-300 via-sky-400 to-cyan-500
                 h-full rounded-full shadow hover:shadow-lg hover:brightness-105
                 transition"
    >
      Join Now
    </button>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spotlight;
