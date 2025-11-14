import React from 'react'
import { Row, Col } from "antd";

function Circle() {
    return (
        <div>
            <section className='circle pt-[80px] pb-[80px]' >
                <div className="container m-auto">
                    <h4 className='text-[#000] font-outfit text-sm md:text-base'>Find the membership tier that matches your journey</h4>
                    <h2 className='text-[#000] font-cinzel text-[60px] sm:text-[80px]'>Join the Circle</h2>
                    <p className='text-[#000] font-outfit text-sm md:text-base'>At Lightweave Beacon Legacy, membership isn’t just about access – it’s about belonging to an inclusive, supporting creative family. Whether you’re starting out, seeking to grow your craft, or looking to give back as a guardian, there’s a place for you. Each tier is designed to unlock new opportunities, foster deeper connections and empower you to shine.</p>
                    <Row gutter={[24, 24]} className='mt-5'>
                        <Col xs={24} sm={24} md={8}>
                            <div className=" w-100 h-100 rounded-2xl p-5"
                                style={{
                                    background: "linear-gradient(29deg, rgba(0, 240, 251, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 240, 251, 1) 100%)",
                                }}>
                                <h2 className='font-cinzel text-[25px] pt-2 pb-2 font-medium'>Free Membership</h2>
                                <ul>
                                    <li className='font-outfit mt-3'>Access public galleries with community artwork</li>
                                    <li className='font-outfit mt-3'>Access public galleries with community artwork</li>
                                    <li className='font-outfit mt-3'>Receive general newsletters with key updates</li>
                                    <li className='font-outfit mt-3'>Explore inspiring community stories and blogs</li>
                                    <li className='font-outfit mt-3'>Upgrade anytime for enhanced features and perks</li>
                                </ul>
                                <button className='bg-black text-white font-outfit  mt-5 p-3 rounded-3xl'>
                                    View More
                                </button>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8}>
                               <div className=" w-100 h-100 rounded-2xl p-5"
                                style={{
                                    background: "linear-gradient(29deg, rgba(0, 240, 251, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 240, 251, 1) 100%)",
                                }}>
                                <h2 className='font-cinzel text-[25px] pt-3 pb-3 font-medium'>Wanderer Membership</h2>
                                <ul>
                                    <li className='font-outfit mt-3'>Access full dashboard with resources and tutorials</li>
                                    <li className='font-outfit mt-3'>Receive personalized newsletters, polls, and curated invitations</li>
                                    <li className='font-outfit mt-3'>Take personalized quizzes to map skills and interests</li>
                                    <li className='font-outfit mt-3'>Connect with peers through member-only interactions</li>
                                    <li className='font-outfit mt-3'>Receive newsletters, polls, and curated invitations</li>
                                </ul>
                                 <button className='bg-black text-white font-outfit  mt-5 p-3 rounded-3xl'>
                                    View More
                                </button>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8}>
                                 <div className=" w-100 h-100 rounded-2xl p-5"
                                style={{
                                    background: "linear-gradient(29deg, rgba(0, 240, 251, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 240, 251, 1) 100%)",
                                }}>
                                <h2 className='font-medium font-cinzel text-[25px] pt-3 pb-3'>Higher Tiered Membership</h2>
                                <ul>
                                    <li className='font-outfit mt-3'>Higher Tiered Membership</li>
                                    <li className='font-outfit mt-3'>Gain early notification to upcoming quests and events</li>
                                    <li className='font-outfit mt-3'>Request/provide feedback on projects, based on tier level </li>
                                    <li className='font-outfit mt-3'>Open up higher levels of learning resources, for faster growth</li>
                                    <li className='font-outfit mt-3'>Unlock higher-engagement quests and patron-only events</li>
                                </ul>
                                 <button className='bg-black text-white font-outfit  mt-5 p-3 rounded-3xl'>
                                    View More
                                </button>
                            </div>
                        </Col>
                    </Row>
                   <button className=" mt-[45px] text-black font-outfit font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition duration-300" style={{
                    background: "linear-gradient(29deg, rgba(0, 240, 251, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 240, 251, 1) 100%)",
                }}>Compare Plans & Join Today</button>
                </div>
            </section>
        </div>
    )
}

export default Circle