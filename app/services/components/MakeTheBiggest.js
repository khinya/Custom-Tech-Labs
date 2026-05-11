'use client';
import { SiTradingview } from "react-icons/si";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaCottonBureau } from "react-icons/fa";
import { TbDeviceMobileDollar } from "react-icons/tb";
import Link from "next/link";

export default function MakeTheBiggest() {
    return (
        <section className="container-fluid py-5">
            {/* Centered Content Wrapper */}
            <div className="mx-auto d-flex flex-column gap-4 align-items-center" style={{ maxWidth: '850px' }}>
                
                {/* Header Badge */}
                <div className="w-100 bg-black text-white d-flex justify-content-center align-items-center py-3 rounded-4">
                    <h1 className="m-0 fw-bold" style={{ fontSize: 'calc(1.1rem + 0.8vw)' }}>
                        Where We Make the <span style={{ color: '#eff430' }}>Biggest Impact</span>
                    </h1>
                </div>

                {/* Main Heading */}
                <h2 className="text-center fw-normal fs-4 lh-base px-2">
                    We combine <span className="fw-bold">e-commerce website design development</span> with smart systems to create real business results.
                </h2>

                {/* Impact List */}
                <div className="w-100 ps-3 ps-md-0 d-flex flex-column gap-3">
                    <div className="d-flex align-items-center gap-3 fs-6 fw-bold fst-italic">
                        <SiTradingview className="fs-4 flex-shrink-0" />
                        <span>Turn traffic into consistent revenue</span>
                    </div>
                    
                    <div className="d-flex align-items-center gap-3 fs-6 fw-bold fst-italic">
                        <MdOutlineSettingsSuggest className="fs-4 flex-shrink-0" />
                        <span>Reduce operational bottlenecks with workflow automation software</span>
                    </div>
                    
                    <div className="d-flex align-items-center gap-3 fs-6 fw-bold fst-italic">
                        <FaCottonBureau className="fs-4 flex-shrink-0" />
                        <span>Automate repetitive workflows</span>
                    </div>
                    
                    <div className="d-flex align-items-center gap-3 fs-6 fw-bold fst-italic">
                        <TbDeviceMobileDollar className="fs-4 flex-shrink-0" />
                        <span>Create smooth mobile buying experiences</span>
                    </div>
                </div>

                {/* Closing Statement */}
                <h2 className="text-center fs-6 fw-normal fst-italic px-2 mt-2">
                    No matter your industry, the goal stays the same: 
                    <span className="fw-bold"> Build a custom e-commerce system that supports how your business runs today—and how it grows tomorrow.</span>
                </h2>

                {/* Action Buttons */}
                <div className="d-flex gap-3 w-100 justify-content-center justify-content-md-start mt-3">
                    <Link 
                        href="/" 
                        className="btn fw-bold px-3 py-1 text-black d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: '#EEF430', fontSize: '14px', borderRadius: '3px', minWidth: '150px', height: '36px' }}
                    >
                        View our Portfolio
                    </Link>
                    <Link 
                        href="/solutionservice" 
                        className="btn fw-bold px-3 py-1 text-black d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: '#EEF430', fontSize: '14px', borderRadius: '3px', minWidth: '150px', height: '36px' }}
                    >
                        Work With Us
                    </Link>
                </div>
            </div>
        </section>
    );
}