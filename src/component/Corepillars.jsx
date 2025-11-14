import React, { useEffect, useRef } from "react";
import { Row, Col } from "antd";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img1 from "../image/core/1.png";
import Img2 from "../image/core/2.png";
import Img3 from "../image/core/3.png";

gsap.registerPlugin(ScrollTrigger);

function Corepillars() {
  const colsRef = useRef([]);

  useEffect(() => {
    colsRef.current.forEach((col, i) => {
      gsap.fromTo(
        col,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: col,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const coreData = [
    {
      img: Img1,
      title: "Shine",
      text: "A glimpse of our quests, experience the creative brilliance behind them.",
    },
    {
      img: Img2,
      title: "Refine",
      text: "Grow your skills with learning resources and mentor guidance.",
    },
    {
      img: Img3,
      title: "Uplift",
      text: "Join a supportive community that celebrates every step of your journey.",
    },
  ];

  return (
    <section className="mainclop pt-[80px] pb-[80px]">
      <div className="container m-auto">
        <h2 className="block text-black text-center font-cinzel text-[85px]">
          Core Pillars
        </h2>
        <Row gutter={[24, 24]} justify="center" align="middle">
          {coreData.map((item, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={8}
              lg={8}
              xl={8}
              ref={(el) => (colsRef.current[index] = el)}
            >
              <div
                className="main-sec-clop group"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "25px",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "start",
                  minHeight: "70vh",
                  padding: "0 0 25px 15px",
                  position: "relative",
                  zIndex: 0,
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <div className="content transition-all duration-500 ease-in-out group-hover:translate-y-[-10px]">
                  <h3 className="block text-white text-start font-cinzel text-[85px]">
                    {item.title}
                  </h3>
                  <p className="text-white font-outfit w-100 text-[20px] text-start">
                    {item.text}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default Corepillars;
