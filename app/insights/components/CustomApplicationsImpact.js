'use client';
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

const applicationData = [
    "Conversion-focused  architecture  that turns attention into inquiries.",
    "Integrated systems that reduce  internal friction.",
    "Client portals that strengthen retention and loyalty.",
    "Scalable infrastructure designed for expansion.",
];

export default function CustomApplicationsImpact() {
    return (<>

        <section className="container-fluid p-0 mt-0     bg-light position-relative overflow-hidden py-5" style={{ backgroundColor: '#f3f3f3' }}>

            {/* Top Accent Lines */}


            <div className="container py-0 mt-0">

                {/* Heading Block */}
                <div className="d-inline-block  mb-5" style={{ backgroundColor: 'black', marginLeft: "100px", borderRadius: "5px", marginTop: "-30%" }}>
                    <h1 className="text-white py-3 fw-bold mb-0 " style={{ fontSize: '25px', textAlign: "center", marginLeft: "120px", marginRight: "120px", paddingRight: "80px" }}>
                        Where Custom Websites Deliver the Most Value
                    </h1>
                </div>

                {/* Impact List Cards */}
                <div className="d-flex flex-column gap-3 mb-5 " style={{ marginLeft: "100px" }}>
                    {applicationData.map((item, idx) => (
                        <div
                            key={idx}
                            className="col-12 col-lg-9 d-flex align-items-center gap-3 p-3 p-md-4 border border-2 border-yellow bg-transparent"
                            style={{ borderColor: '#EEF430 !important' }}
                        >
                            {/* Icon Wrapper */}
                            <div className="flex-shrink-0 d-flex justify-content-center align-items-center rounded-circle"
                                style={{ width: '36px', height: '36px', backgroundColor: '#EEF430' }}>
                                <FaCheck className="text-black" size={18} />
                            </div>

                            {/* Text Content */}
                            <h2 className="mb-0 fw-semibold lh-base" style={{ fontSize: 'calc(1rem + 0.3vw)' }}>
                                {item}
                            </h2>
                        </div>
                    ))}
                </div>

                {/* Call to Action Box */}
                <div className="mt-5 p-4 p-md-5 rounded-3 d-flex flex-column align-items-center" style={{ backgroundColor: '#d9d9d9' }}>

                    {/* Inner Black Banner */}
                    <div className="col-12 col-lg-10 bg-black rounded-4 p-2 p-md-3 text-center mb-4">
                        <h2 className="text-white fw-bold mb-0 lh-tight" style={{ fontSize: '32px' }}>
                            If your current tools create more work than they remove –
                            <span style={{ color: '#EEF430' }}> that’s the signal</span>
                        </h2>
                    </div>

                    <p className="fs-5 text-center mb-4 text-dark fw-medium">
                        Let’s build something that moves your business forward
                    </p>

                    {/* Action Buttons */}
                    <div className="d-flex flex-column flex-sm-row gap-3">
                        <Link
                            href="/"
                            className="btn fw-bold d-flex align-items-center justify-content-center hover-scale border-0 text-black"
                            style={{ backgroundColor: '#EEF430', width: '180px', height: '46px' }}
                        >
                            View our Portfolio→
                        </Link>
                        <Link
                            href="/solutionservice"
                            className="btn fw-bold d-flex align-items-center justify-content-center hover-scale border-0 text-black"
                            style={{ backgroundColor: '#EEF430', width: '180px', height: '46px' }}
                        >
                            Work With Us →
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hover-scale {
                    transition: transform 0.3s ease;
                }
                .hover-scale:hover {
                    transform: scale(1.05);
                }
                .border-yellow {
                    border-color: #EEF430 !important;
                }
            `}</style>
        </section>
    </>
    );
}