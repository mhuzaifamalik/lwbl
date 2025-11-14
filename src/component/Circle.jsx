import React from "react";
import { Row, Col } from "antd";

function Circle() {
  return (
    <section className="circle pt-[80px] pb-[80px]">
      <div className="container m-auto">
        <h4 className="text-[#000] font-outfit text-sm md:text-base">
          Find the membership tier that matches your journey
        </h4>

        <h2 className="text-[#000] font-cinzel text-[60px] sm:text-[80px]">
          Join the Circle
        </h2>

        <p className="text-[#000] font-outfit text-sm md:text-base">
          At Lightweave Beacon Legacy, membership isn’t just about access...
        </p>

        <Row gutter={[24, 24]} className="mt-5">
          {[
            "Free Membership",
            "Wanderer Membership",
            "Higher Tiered Membership",
          ].map((title, i) => (
            <Col xs={24} sm={24} md={8} key={i}>
              <div
                className="group relative w-full h-full rounded-2xl p-5 
                           transition-all duration-500 hover:scale-[1.04] 
                           hover:-translate-y-2 hover:shadow-xl"
                style={{
                  background:
                    "linear-gradient(29deg, rgba(0, 240, 251, 1) 0%, rgba(255,255,255,1) 50%, rgba(0, 240, 251, 1) 100%)",
                }}
              >
                <h2
                  className="font-cinzel text-[25px] pt-2 pb-2 font-medium 
                             transition-all duration-500 group-hover:tracking-wide"
                >
                  {title}
                </h2>

                <ul>
                  <li className="font-outfit mt-3 transition-all duration-500 group-hover:translate-x-1">
                    Access public galleries with community artwork
                  </li>
                  <li className="font-outfit mt-3 transition-all duration-500 group-hover:translate-x-1">
                    Receive curated newsletters
                  </li>
                  <li className="font-outfit mt-3 transition-all duration-500 group-hover:translate-x-1">
                    Connect with peers
                  </li>
                </ul>

                <button
                  className="bg-black text-white font-outfit mt-5 p-3 rounded-3xl 
                             transition-all duration-500 group-hover:bg-[#222] 
                             group-hover:shadow-lg group-hover:scale-105"
                >
                  View More
                </button>
              </div>
            </Col>
          ))}
        </Row>

<button
  className="mt-[45px] text-black font-outfit font-semibold px-6 py-3 rounded-full 
             shadow-md transition-all duration-500 bg-gradient-to-r from-[#00F0FB] via-white to-[#00F0FB]
             bg-[length:200%_200%] bg-left hover:bg-right hover:scale-105"
>
  Compare Plans & Join Today
</button>
      </div>
    </section>
  );
}

export default Circle;
