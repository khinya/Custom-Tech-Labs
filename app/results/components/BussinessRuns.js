'use client';
import Image from "next/image";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa6";

export default function BusinessRuns() {
    return (
        <section className="container py-5">
            {/* Main Heading */}
            <div className="row mb-4">
                <div className="col-12">
                    <h1 
                        className="p-4 fw-bold text-center text-md-start" 
                        style={{ backgroundColor: '#eff430', borderRadius: '12px', fontSize: 'calc(1.3rem + .6vw)' }}
                    >
                        Built Around How Your Business Actually Runs
                    </h1>
                </div>
            </div>

            {/* Sub-heading and Featured Image */}
            <div className="mb-4 text-center text-md-start">
                <h2 className="fw-bold mb-4" style={{ color: '#034a27', fontSize: '24px' }}>For Your Team</h2>
                <div className="text-center text-md-start">
                    <Image
                        src='/system/built.png'
                        width={630}
                        height={349}
                        className="img-fluid"
                        alt="Built Around Your Business"
                    />
                </div>
            </div>

            {/* Comparison Columns */}
            <div className="row g-5 mb-5">
                {/* Column 1: The Problem */}
                <div className="col-12 col-md-6">
                    <div className="d-flex flex-column gap-3">
                        <h3 className="fs-6 fw-bold mb-0">Your systems should talk to each other.</h3>
                        <p className="fs-6 fst-italic text-muted mb-0">
                            If they don’t, your team fills the gaps manually.
                        </p>
                        
                        <div className="d-flex align-items-center gap-3 text-muted">
                            <ImCross className="text-danger flex-shrink-0" size={14} />
                            <span className="small">Copying orders between platforms.</span>
                        </div>
                        <div className="d-flex align-items-center gap-3 text-muted">
                            <ImCross className="text-danger flex-shrink-0" size={14} />
                            <span className="small">Checking inventory across tools.</span>
                        </div>
                        <div className="d-flex align-items-center gap-3 text-muted">
                            <ImCross className="text-danger flex-shrink-0" size={14} />
                            <span className="small">Pulling reports from multiple sources.</span>
                        </div>
                        
                        <p className="fw-bold fst-italic mt-2">That’s not a workflow — it’s friction.</p>
                    </div>
                </div>

                {/* Column 2: The Solution */}
                <div className="col-12 col-md-6">
                    <div className="d-flex flex-column gap-3">
                        <h3 className="fs-6 fw-bold mb-0">
                            Through our consulting and system integration services, we connect your systems so data moves automatically.
                        </h3>
                        
                        <div className="d-flex align-items-center gap-3 text-muted">
                            <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ backgroundColor: '#eef430', width: '20px', height: '20px' }}>
                                <FaCheck className="text-black" size={10} />
                            </div>
                            <span className="small">Orders flow into fulfillment.</span>
                        </div>
                        <div className="d-flex align-items-center gap-3 text-muted">
                            <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ backgroundColor: '#eef430', width: '20px', height: '20px' }}>
                                <FaCheck className="text-black" size={10} />
                            </div>
                            <span className="small">Inventory updates in real time.</span>
                        </div>
                        <div className="d-flex align-items-center gap-3 text-muted">
                            <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ backgroundColor: '#eef430', width: '20px', height: '20px' }}>
                                <FaCheck className="text-black" size={10} />
                            </div>
                            <span className="small">Reports build themselves.</span>
                        </div>
                        
                        <p className="fw-bold fst-italic mt-2">
                            Your team stops doing repetitive tasks… and focuses on work that actually drives growth.
                        </p>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
                <Link 
                    href="/" 
                    className="btn fw-bold px-4 py-2 text-black hover-scale" 
                    style={{ backgroundColor: '#EEF430', fontSize: '15px', borderRadius: '6px', minWidth: '160px' }}
                >
                    View our Portfolio
                </Link>
                <Link 
                    href="/solutionservice" 
                    className="btn fw-bold px-4 py-2 text-black hover-scale" 
                    style={{ backgroundColor: '#EEF430', fontSize: '15px', borderRadius: '6px', minWidth: '160px' }}
                >
                    Work With Us
                </Link>
            </div>

            <style jsx>{`
                .hover-scale { transition: transform 0.3s ease; }
                .hover-scale:hover { transform: scale(1.05); }
            `}</style>
        </section>
    );
}