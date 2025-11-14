import React from "react";
import { Row, Col } from "antd";
import Img1 from "../image/gallery/1.png";
import Img2 from "../image/gallery/2.png";
import Img3 from "../image/gallery/3.png";
import Img4 from "../image/gallery/4.png";
import Img5 from "../image/gallery/5.png";
import Img6 from "../image/gallery/6.png";

function Gallery() {
    return (
        <section className="main-gallery bg-[#F5F5DB] mt-5 pb-[80px]">
            <div className="container m-auto">
                <h2 className="text-[#000] font-cinzel pt-[15px] pb-[15px] text-[80px] text-center">
                    A Glimpse of the Gallery
                </h2>

                <Row gutter={[24, 24]} align="middle">
                    {/* 1 */}
                    <Col xs={24} sm={24} md={8} lg={8} xl={6}>
                        <a href="/gallery/photography1">
                            <div
                                className="gallery-1 hover:opacity-80 transition-all duration-500"
                                style={{
                                    backgroundImage: `url(${Img1})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: "25px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    minHeight: "50vh",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                }}
                            >
                                <h2 className="text-white font-cinzel text-[28px]">
                                    Photography
                                </h2>
                            </div>
                        </a>
                    </Col>

                    {/* 2 */}
                    <Col xs={24} sm={24} md={8} lg={8} xl={6}>
                        <a href="/gallery/photography2">
                            <div
                                className="gallery-1 hover:opacity-80 transition-all duration-500"
                                style={{
                                    backgroundImage: `url(${Img2})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: "25px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    minHeight: "50vh",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                }}
                            >
                                <h2 className="text-white font-cinzel text-[28px]">
                                   Sculpture
                                </h2>
                            </div>
                        </a>
                    </Col>

                    {/* 3 (Bigger Box) */}
                    <Col xs={24} sm={24} md={10} lg={10} xl={12}>
                        <a href="/gallery/photography3">
                            <div
                                className="gallery-1 hover:opacity-80 transition-all duration-500"
                                style={{
                                    backgroundImage: `url(${Img3})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: "25px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    minHeight: "50vh",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                }}
                            >
                                <h2 className="text-white font-cinzel text-[28px]">
                                    Sculpture
                                </h2>
                            </div>
                        </a>
                    </Col>

                    {/* 4 */}
                    <Col xs={24} sm={24} md={10} lg={10} xl={12}>
                        <a href="/gallery/photography4">
                            <div
                                className="gallery-1 hover:opacity-80 transition-all duration-500"
                                style={{
                                    backgroundImage: `url(${Img4})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: "25px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    minHeight: "50vh",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                }}
                            >
                                <h2 className="text-white font-cinzel text-[28px]">
                                    Photography 2
                                </h2>
                            </div>
                        </a>
                    </Col>

                    {/* 5 */}
                    <Col xs={24} sm={24} md={8} lg={8} xl={6}>
                        <a href="/gallery/photography5">
                            <div
                                className="gallery-1 hover:opacity-80 transition-all duration-500"
                                style={{
                                    backgroundImage: `url(${Img5})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: "25px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    minHeight: "50vh",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                }}
                            >
                                <h2 className="text-white font-cinzel text-[28px]">
                                    Photography
                                </h2>
                            </div>
                        </a>
                    </Col>

                    {/* 6 */}
                    <Col xs={24} sm={24} md={8} lg={8} xl={6}>
                        <a href="/gallery/photography6">
                            <div
                                className="gallery-1 hover:opacity-80 transition-all duration-500"
                                style={{
                                    backgroundImage: `url(${Img6})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: "25px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    minHeight: "50vh",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                }}
                            >
                                <h2 className="text-white font-cinzel text-[28px]">
                                    Photography
                                </h2>
                            </div>
                        </a>
                    </Col>
                </Row>
                <button className=" mt-[45px] text-black font-outfit font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition duration-300" style={{
                    background: "linear-gradient(29deg, rgba(0, 240, 251, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 240, 251, 1) 100%)",
                }}>See More At Higher Member Tiers</button>
            </div>
        </section>
    );
}

export default Gallery;
