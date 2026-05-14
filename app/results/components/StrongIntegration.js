'use client';
import Image from "next/image";
import Link from "next/link";

const integrationData = [
    "Systems that share data instantly—not overnight.",
    "Information that stays consistent across every platform.",
    "Infrastructure that’s ready for whatever comes next.",
    "Workflows that run on their own.",
];

export default function StrongIntegration() {
    return (
        <section className="container-fluid py-5" style={{ backgroundColor: '#f3f3f3' }}>

            {/* Inner Gray Wrapper */}
            <div className="container p-4 p-md-5 position-relative" style={{ backgroundColor: '#e9e9e9' }}>

                {/* Heading */}
                <h1 className="display-6 fw-bold text-black mb-5" style={{ fontSize: 'calc(1.5rem + 1.2vw)' }}>
                    What Strong Integrations Deliver
                </h1>

                {/* Main Content Row */}
                <div className="row align-items-center position-relative z-1">

                    {/* Floating Black Background Element */}
                    <div className="position-absolute start-50 translate-middle-x w-100 d-none d-lg-block black-img"
                        style={{ bottom: '0px', height: '180px', zIndex: -1, position: 'absolute' }}>
                        <Image
                            className="w-100 h-100 object-cover"
                            src='/system/black.png'
                            alt="Background Accent"
                            width={1480}
                            height={180}
                            style={{ height: '180px' }}
                        />
                    </div>

                    {/* Left Image Column */}
                    <div className="col-12 col-lg-5 mb-4 mb-lg-0 text-center">
                        <Image
                            src="/system/strong.png"
                            width={432}
                            height={371}
                            alt="Strong Integration"
                            className="img-fluid shadow-sm"
                            style={{ maxWidth: '100%', height: '371px' }}
                        />
                    </div>

                    {/* Right Cards Column */}
                    <div className="col-12 col-lg-7">
                        <div className="d-flex flex-column gap-3">
                            {integrationData.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-4 shadow-sm fw-bold border-0"
                                    style={{ fontSize: '18px', borderLeft: '5px solid #EEF430' }}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Content */}
                <div className="mt-5 pt-4">
                    <p className="text-secondary fs-5 mb-1">
                        That’s the difference system integration makes.
                    </p>
                    <h2 className="fw-normal mb-4" style={{ maxWidth: '800px', fontSize: 'calc(1.2rem + 0.8vw)' }}>
                        Let’s build the integration layer that powers your growth.
                    </h2>

                    {/* Buttons */}
                    <div className="d-flex flex-column flex-sm-row gap-3">
                        <Link
                            href="/"
                            className="btn fw-bold px-4 py-2 d-flex align-items-center justify-content-center transition-scale"
                            style={{ backgroundColor: '#EEF430', minWidth: '180px', height: '48px', borderRadius: '0' }}
                        >
                            View our Portfolio →
                        </Link>
                        <Link
                            href="/solutionservice"
                            className="btn fw-bold px-4 py-2 d-flex align-items-center justify-content-center transition-scale"
                            style={{ backgroundColor: '#EEF430', minWidth: '180px', height: '48px', borderRadius: '0' }}
                        >
                            Work With Us →
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .transition-scale { transition: all 0.3s ease; }
                .transition-scale:hover { transform: scale(1.05); }
                
                @media (max-width: 991px) {
                    /* On mobile, the black image usually looks messy, so we hide or adjust it */
                    .position-absolute { display: none; }
                }
            `}</style>
        </section>
    );
}