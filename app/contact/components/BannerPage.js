'use client';
import Image from "next/image";
import Link from "next/link";

export default function BannerPage() {
    return (
        <section 
            className="container-fluid py-5 d-flex flex-column justify-content-center position-relative overflow-hidden"
            style={{ 
                minHeight: '85vh',
                backgroundImage: "url('/appsimg/main.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
                backgroundSize: 'contain'
            }}
        >
            {/* Mobile Image - Visible only on small screens */}
            <div className="d-md-none w-100 mb-4" style={{ height: '300px', position: 'relative' }}>
                <Image
                    src="/appsimg/main1.png"
                    fill
                    priority
                    alt="hero Banner"
                    className="object-contain"
                />
            </div>

            <div className="container px-md-5">
                <div className="row">
                    <div className="col-12 col-md-7 col-lg-6 text-center text-md-start">
                        
                        {/* Heading */}
                        <h1 className="display-5 fw-extrabold mb-4 lh-tight">
                            Custom Apps That Teams Adopt <br className="d-none d-md-block" />
                            And Customers Love Using
                        </h1>

                        {/* Paragraph */}
                        <p className="fs-5 fw-semibold mb-5 opacity-90">
                            Tech that removes friction, simplifies decisions, and 
                            becomes a natural extension of how people work and engage.
                        </p>

                        {/* Buttons */}
                        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
                            <Link 
                                href="/" 
                                className="btn fw-bold px-4 py-2 text-black transition-transform hover-scale" 
                                style={{ backgroundColor: '#EEF430', fontSize: '15px', borderRadius: '6px', minWidth: '170px' }}
                            >
                                View our Portfolio
                            </Link>
                            <Link 
                                href="/solutionservice" 
                                className="btn fw-bold px-4 py-2 text-black transition-transform hover-scale" 
                                style={{ backgroundColor: '#EEF430', fontSize: '15px', borderRadius: '6px', minWidth: '170px' }}
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
                /* Hide background image on mobile to use the next/image instead */
                @media (max-width: 767px) {
                    section {
                        background-image: none !important;
                    }
                }
            `}</style>
        </section>
    );
}