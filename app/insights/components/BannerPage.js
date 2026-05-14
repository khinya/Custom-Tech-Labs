'use client';
import Image from "next/image";
import Link from "next/link";

export default function BannerPage() {
    return (
        <section
            className="container-fluid max-vh-100 d-flex flex-column justify-content-center py-5"
            style={{
                backgroundImage: "url('/web/main.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
                backgroundSize: 'contain'
            }}
        >
            <div className="container px-4 px-md-5">
                <div className="row">
                    <div className="col-12 col-md-7 col-lg-6 d-flex w-100  flex-column gap-4 text-center text-md-start">

                        {/* Mobile Image Only - Visible on small screens */}
                        <div className="d-block d-md-none mb-3">
                            <div className="position-relative" style={{ height: '250px', width: '100%' }}>
                                <Image
                                    src="/web/main1.png"
                                    fill
                                    priority
                                    alt="Hero Banner"
                                    className="object-fit-contain"
                                />
                            </div>
                        </div>

                        {/* Heading */}
                        <h1 className="fw-black lh-tight m-0 "
                            style={{ fontSize: 'calc(1.7rem + 1.5vw)', fontWeight: 900, }}>
                            Custom Website That Build
                            <br className="d-none d-md-block" />
                            {" "}Authority and Drive Action.
                        </h1>

                        {/* Paragraph */}
                        <p className="fw-semibold text-muted mb-2 mx-auto mx-md-0 "
                            style={{ fontSize: 'calc(1rem + 0.2vw)', maxWidth: '550px', lineHeight: '1.6', }}>
                            High performance website or Strategic digital platforms engineered for clarity, usability and measurable growth.
                        </p>

                        {/* Buttons */}
                        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start align-items-center">
                            <Link
                                href="/"
                                className="btn fw-bold d-flex align-items-center justify-content-center hover-scale border-0 text-black"
                                style={{ backgroundColor: '#EEF430', width: '180px', height: '48px', borderRadius: '6px' }}
                            >
                                View our Portfolio
                            </Link>

                            <Link
                                href="/solutionservice"
                                className="btn fw-bold d-flex align-items-center justify-content-center hover-scale border-0 text-black"
                                style={{ backgroundColor: '#EEF430', width: '180px', height: '48px', borderRadius: '6px' }}
                            >
                                Work With Us
                            </Link>
                        </div>

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
                /* Ensure background image is hidden on mobile if you prefer the manual Image tag */
                @media (max-width: 767px) {
                    section {
                        background-image: none !important;
                    }
                }
            `}</style>
        </section>
    );
}

