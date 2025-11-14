import React, { useEffect, useRef } from 'react';
import BannerImg from "../image/backgroundbanner.png";
import { Row, Col } from "antd";
import { gsap } from "gsap";

function Banner() {
  // Refs to access DOM nodes
  const bannerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Use GSAP context to scope animations and clean up on unmount
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      // Fade and scale the entire banner
      tl.from(bannerRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
      });
      // Slide in the heading from below
      tl.from(
        headingRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      );
      // Slide in the paragraph with slight overlap
      tl.from(
        paragraphRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.5"
      );
    }, bannerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div
        ref={bannerRef}
        className="banner"
        style={{
          backgroundImage: `url(${BannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center", // vertically center content
          justifyContent: "center", // horizontally center content
          padding: "50px 0",
          minHeight: "100vh",
          position: "relative",
          zIndex: 0,
        }}
      >
        <div className="container m-auto">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="flex flex-col items-center justify-center text-center">
                <h2
                  ref={headingRef}
                  className="text-[#fff] text-[60px] font-cinzel"
                >
                  Welcome to a nurturing haven where photographers and
                  sculptors can reignite their sidelined creative passions.
                </h2>
                <p
                  ref={paragraphRef}
                  className="text-[20px] text-[#fff] font-outfit mt-4"
                >
                  We empower diverse artists—especially under‑represented
                  voices—to grow and pursue their passions. Join us to
                  amplify your talents, foster equity, and uplift all.
                  Your passion belongs here!
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Banner;
