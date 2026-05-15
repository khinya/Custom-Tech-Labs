'use client';
import { SiTradingview } from "react-icons/si";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaCottonBureau } from "react-icons/fa";
import { TbDeviceMobileDollar } from "react-icons/tb";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";

export default function MakeTheBiggest() {
    return (
        /* Removed py-5 to control spacing more precisely with mt and mb */
        <section className="container-fluid pt-1 pb-0 bg-white" style={{ fontFamily: "'Albert Sans', sans-serif" }}>
            
            {/* Main Wrapper: Max-width 850px as per your CSS specs */}
            <div className="mx-auto d-flex flex-column align-items-center" style={{ maxWidth: '850px' }}>
                
                {/* 1. Header Badge (Rectangle 195) */}
                <div 
                    className="bg-black text-white d-flex justify-content-center align-items-center mb-4" 
                    style={{ 
                        width: '100%', 
                        maxWidth: '842px', 
                        height: '68px',
                        borderRadius: '12px' 
                    }}
                >
                    <h1 className="m-0 fw-normal text-center" style={{ fontSize: 'clamp(20px, 4vw, 32px)' }}>
                        Where We Make the <span style={{ color: '#eff430', fontWeight: '700' }}>Biggest Impact</span>
                    </h1>
                </div>

                {/* 2. Main Heading */}
                <h2 
                    className="text-center fw-normal mb-5 px-2" 
                    style={{ 
                        fontSize: '24px', 
                        lineHeight: '29px', 
                        color: '#000000',
                        maxWidth: '849px'
                    }}
                >
                    We combine <span className="fw-bold">e-commerce website design development</span> with smart systems to create real business results.
                </h2>

                {/* 3. Impact List Area */}
                <div className="w-100 d-flex flex-column gap-3 mb-5 px-3 px-md-0">
                    {[
                        { icon: <SiTradingview />, text: "Turn traffic into consistent revenue" },
                        { icon: <MdOutlineSettingsSuggest />, text: "Reduce operational bottlenecks with workflow automation software" },
                        { icon: <FaCottonBureau />, text: "Automate repetitive workflows" },
                        { icon: <TbDeviceMobileDollar />, text: "Create smooth mobile buying experiences" }
                    ].map((item, index) => (
                        <div key={index} className="d-flex align-items-center gap-3">
                            {/* Icon circle matches image_4a323a.png */}
                            <div 
                                className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                style={{ width: '27px', height: '27px', backgroundColor: '#000' }}
                            >
                                <div style={{ color: '#eff430', fontSize: '14px' }}>{item.icon}</div>
                            </div>
                            <span 
                                style={{ 
                                    fontStyle: 'italic', 
                                    fontWeight: '700', 
                                    fontSize: '16px', 
                                    lineHeight: '19px',
                                    color: '#000000'
                                }}
                            >
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>

                {/* 4. Closing Statement */}
                <p 
                    className="text-start fs-6 fw-normal mb-4 px-3 px-md-0" 
                    style={{ width: '100%', maxWidth: '842px' }}
                >
                    No matter your industry, the goal stays the same: 
                    <span className="fw-bold"> Build a custom e-commerce system that supports how your business runs today—and how it grows tomorrow.</span>
                </p>

                {/* 5. Action Buttons with Margin Bottom to prevent overlap with next section */}
                <div className="d-flex flex-wrap gap-3 w-100 justify-content-start px-3 px-md-0 mb-5">
                    <Link 
                        href="/" 
                        className="btn fw-bold text-black d-flex align-items-center justify-content-center gap-1 border-0"
                        style={{ 
                            backgroundColor: '#EEF430', 
                            fontSize: '14px', 
                            borderRadius: '4px', 
                            padding: '10px 20px',
                            minWidth: '160px'
                        }}
                    >
                        View Our Portfolio <BsArrowRightShort size={20} />
                    </Link>
                    <Link 
                        href="/solutionservice" 
                        className="btn fw-bold text-black d-flex align-items-center justify-content-center gap-1 border-0"
                        style={{ 
                            backgroundColor: '#EEF430', 
                            fontSize: '14px', 
                            borderRadius: '4px', 
                            padding: '10px 20px',
                            minWidth: '160px'
                        }}
                    >
                        Work With Us <BsArrowRightShort size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}