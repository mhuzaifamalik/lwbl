import React, { useEffect, useRef } from "react";
import { Row, Col } from "antd";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img from "../image/misson.png";

gsap.registerPlugin(ScrollTrigger);

function Ourmission() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image Animation
            gsap.from(imageRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
            });

            // Text Animation
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
                x: 100,
                opacity: 0,
                duration: 1.4,
                ease: "power3.out",
                delay: 0.2,
            });
        }, sectionRef);

        return () => ctx.revert(); // cleanup on unmount
    }, []);

    return (
        <section ref={sectionRef} className="extra-effort pt-[80px] pb-[80px] ">
            <div className="container m-auto">
                <Row
                    gutter={[24, 24]}
                    align="middle"
                    justify="center"
                    className="overflow-hidden"
                >
                    {/* Left: Image */}
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div ref={imageRef} className="mission-images">
                            <img
                                src={Img}
                                className="w-full h-90 object-cover rounded-lg "
                                alt="img"
                            />
                        </div>
                    </Col>

                    {/* Right: Text */}
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div ref={textRef} className="banner-text">
                            <h2 className="text-[60px] font-cinzel text-start">
                                Our Mission
                            </h2>
                            <p className="pb-5 text-[18px] text-[#000] text-start font-outfit mt-4">
                                We inspire individuals to pursue their creative passions in
                                photography and sculpture by awarding grants & donations,
                                showcasing work in uplifting galleries, and fostering inclusive
                                communities. Together, we shine a light on diverse talents,
                                refine skills with love and learning, and uplift individuals and
                                societies to spark lifelong artistic innovation and joy.
                            </p>
                            <ul>
                                <li className="pb-5 text-[18px] text-[#000] text-start font-outfit">
                                    <span className="font-bold">Breaking Barriers to Creativity</span> – Supporting
                                    artists of every background, age, and skill level.
                                </li>
                                <li className="pb-5 text-[18px] text-[#000] text-start font-outfit">
                                    <span className="font-bold">Shining a Spotlight</span> – From local challenges to
                                    global showcases, giving diverse voices visibility.
                                </li>
                                <li className="pb-5 text-[18px] text-[#000] text-start font-outfit">
                                    <span className="font-bold">Tailored Feedback</span> – Delivering resources to
                                    nurture lifelong skills.
                                </li>
                                <li className="pb-5 text-[18px] text-[#000] text-start font-outfit">
                                    <span className="font-bold">Uplifting Through Community</span> – Fostering
                                    inclusive networks where mentors and creators connect,
                                    co-create, and ignite mutual inspiration.
                                </li>
                                <li className="pb-5 text-[18px] text-[#000] text-start font-outfit">
                                    <span className="font-bold">Freeing Artists to Create</span> – Providing grants
                                    and support to liberate artists from financial barriers.
                                </li>
                            </ul>
                            <button
                                className="flex  text-black font-outfit font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition duration-300 "
                                style={{
                                    background: "linear-gradient(29deg, rgba(0, 240, 251, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 240, 251, 1) 100%)",
                                }}
                            >
                                Learn More About Our Story
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Ourmission;
