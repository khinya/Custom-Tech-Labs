'use client';
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";


const applicationData = [
    "Operational platforms that replace manual processes.",
    "Customer portals that simplify engagement.",
    "Mobile tools that support service delivery.",
    "Modernized systems that scale with growth."
];

export default function CustomApplicationsImpact() {
    return (
        <section className="container-fluid impact-section">
            <div className="container p-0">

                {/* 100% Match Yellow Header Banner Frame Block */}
                <div className="impact-main-banner">
                    <h1 className="impact-banner-title">
                        Where Custom Applications Make the Greatest Impact
                    </h1>
                </div>

                {/* Exact Bordered Content List Row Array Layout */}
                <div className="impact-list-container">
                    {applicationData.map((item, idx) => (
                        <div key={idx} className="impact-list-row">
                            
                            {/* Icon Wrapper Circle */}
                            <div className="impact-icon-circle">
                                <FaCheck className="text-black" size={12} />
                            </div>

                            {/* Clean Text Component Element Container */}
                            <h2 className="impact-row-text">
                                {item}
                            </h2>
                        </div>
                    ))}
                </div>

                {/* Bottom Call to Action Component Section Wrapper */}
                <div className="impact-cta-wrapper">

                    {/* Dark Announcement Title Badge */}
                    <div className="impact-cta-inner-black">
                        <h2>
                            If your current tools create more work than they <br></br>remove – 
                            <span> that’s the signal</span>
                        </h2>
                    </div>

                    <p className="impact-cta-subtext">
                        Let’s build something that moves your business forward
                    </p>

                    {/* Standard Action Links Area Layout */}
                    <div className="impact-action-buttons-row">
                        <Link href="/" className="impact-btn-link">
                            View our Portfolio →
                        </Link>
                        <Link href="/solutionservice" className="impact-btn-link">
                            Work With Us →
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    );
}  