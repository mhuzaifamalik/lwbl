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
                  className="relative flex flex-col justify-center items-center rounded-xl overflow-hidden"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "35vh",
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  <div className="relative z-10 text-center px-4 py-8">
                    <FaLock className="text-white block m-auto text-[20px] mb-3" />
                    <p className="text-white font-outfit text-sm md:text-base">
                      This is just a preview. Become a member to explore full
                      collections, quests, and community favorites.
                    </p>
                  </div>
                </div>
                <h2 className="text-black font-cinzel text-[22px] md:text-[25px] mt-5">
                  {item.title}
                </h2>
              </Col>
            ))}
          </Row>
            <button className=" mt-[45px] text-black font-outfit font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition duration-300" style={{
                    background: "linear-gradient(29deg, rgba(0, 240, 251, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 240, 251, 1) 100%)",
                }}>Unlock Resources \ Become a Member</button>
        </div>
      </div>
    </section>
  );
};

export default Craft;
