'use client';
import Image from "next/image";
import Link from "next/link";

export default function ForYourCustomers() {
    return (
        <section className="container-fluid py-5" style={{ backgroundColor: '#f3f3f3' }}>
            <div className="container py-5 px-4 px-md-5 rounded-5" style={{ backgroundColor: '#ebebeb' }}>
                
                {/* Section Header */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold" style={{ color: '#014421', fontSize: 'calc(1.3rem + 1vw)' }}>
                        For Your Customers
                    </h2>
                </div>

                {/* Top Content Row */}
                <div className="row g-4 align-items-start mb-5">
                    {/* Left Image */}
                    <div className="col-12 col-lg-6">
                        <div className="rounded-3 overflow-hidden shadow-sm">
                            <Image 
                                src="/web/customer.jpg" 
                                width={650} 
                                height={450} 
                                alt="Customer Experience"
                                className="img-fluid w-100 h-auto object-fit-cover"
                            />
                        </div>
                    </div>

                    {/* Right Text Content */}
                    <div className="col-12 col-lg-6">
                        <h1 className="fw-bold fst-italic lh-tight mb-4" style={{ fontSize: 'calc(1.4rem + 1.2vw)' }}>
                            Your website is often the first experience someone has with your brand.
                        </h1>
                        
                        <p className="fs-5 mb-2">
                            Every interaction shapes perception.
                        </p>

                        {/* Highlight Label */}
                        <div className="d-inline-block bg-black px-3 py-1">
                            <h3 className="text-yellow fw-bold mb-0" style={{ color: '#EEF430', fontSize: '1.2rem' }}>
                                Speed. Navigation. Structure. Flow.
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Bottom Text Content */}
                <div className="mt-4">
                    <p className="fs-5 fst-italic lh-lg mb-4 text-dark">
                        We build custom digital environments that guide users with clarity—
                        whether that means <span className="fw-bold fst-normal">custom ecommerce website development</span>, 
                        service pages, booking systems, advanced integrations or modern 
                        <span className="fw-bold fst-normal"> AI features in website experiences</span> or integrated portals.
                    </p>

                    <h3 className="fw-bold fst-italic mb-4" style={{ fontSize: 'calc(1.1rem + 0.5vw)' }}>
                        We build platforms that guide users through information and action.
                    </h3>

                    <div className="mb-5">
                        <h3 className="fw-bold mb-2" style={{ fontSize: 'calc(1.1rem + 0.5vw)' }}>
                            Because a well-built website doesn’t just function.
                        </h3>
                        <div className="d-inline-block bg-black px-3 py-2">
                            <h3 className="fw-bold mb-0" style={{ color: '#EEF430', fontSize: '1.4rem' }}>
                                It builds confidence.
                            </h3>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex flex-column flex-sm-row gap-3">
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

            <style jsx>{`
                .hover-scale {
                    transition: transform 0.3s ease;
                }
                .hover-scale:hover {
                    transform: scale(1.05);
                }
                .text-yellow {
                    color: #EEF430;
                }
            `}</style>
        </section>
    );
}