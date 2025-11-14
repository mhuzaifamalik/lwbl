import React from "react";
import { Row, Col } from "antd";
import { FaLock } from "react-icons/fa";
import Img1 from "../image/craft/1.png";
import Img2 from "../image/craft/2.png";
import Img3 from "../image/craft/3.png";

const Craft = () => {
  const crafts = [
    {
      img: Img1,
      title: "Technical Skills",
    },
    {
      img: Img2,
      title: "Business & Career Tips",
    },
    {
      img: Img3,
      title: "Workshops & Seminars",
    },
  ];

  return (
    <section className="main-craft pt-[80px] pb-[80px]">
      <div className="bg-[#5D260E80] pt-[80px] pb-[80px]">
        <div className="container m-auto text-center">
          <h2 className="text-white font-cinzel text-[60px] sm:text-[80px] mb-[50px]">
            Refine Your Craft
          </h2>

          <Row gutter={[24, 24]} align="middle" justify="center">
            {crafts.map((item, index) => (
              <Col key={index} xs={24} sm={24} md={8}>
                <div
                  className="relative group flex flex-col justify-center items-center rounded-xl overflow-hidden 
               transition-all duration-500 ease-out cursor-pointer"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "35vh",
                  }}
                >
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/60"></div>

                  {/* Image Zoom (pseudo using scale on container) */}
                  <div className="absolute inset-0 transition-all duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 text-center px-4 py-8 transition-all duration-500 group-hover:-translate-y-2">
                    <FaLock className="text-white block m-auto text-[20px] mb-3" />
                    <p className="text-white font-outfit text-sm md:text-base">
                      This is just a preview. Become a member to explore full
                      collections, quests, and community favorites.
                    </p>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-black font-cinzel text-[22px] md:text-[25px] mt-5 text-center">
                  {item.title}
                </h2>
              </Col>
            ))}
          </Row>
       <button
  className="mt-[45px] text-black font-outfit font-semibold px-6 py-3 rounded-full 
             shadow-md transition-all duration-500 hover:-translate-y-1 
             hover:shadow-lg hover:text-black"
  style={{
    background: "linear-gradient(29deg, rgba(0,240,251,1) 0%, rgba(255,255,255,1) 50%, rgba(0,240,251,1) 100%)",
    backgroundSize: "200% 200%",
    transition: "all 0.6s ease",
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundPosition = "right center";
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundPosition = "left center";
  }}
>
  Unlock Resources \ Become a Member
</button>
        </div>
      </div>
    </section>
  );
};

export default Craft;
