'use client';
import Image from "next/image";
import Link from "next/link";

const philosophyData = [
    {
        img: '/web/a1.png',
        title: "Built for Scale",
        description: "Platforms designed to grow with your business without performance limitations.",
    },
    {
        img: '/web/a2.png',
        title: "User-First Thinking",
        description: "Every interface is structured for clarity, usability and intuitive interaction.",
    },
    {
        img: '/web/a3.png',
        title: "Modern Architecture",
        description: "Flexible systems with clean development standards and future-ready foundations.",
    },
    {
        img: '/web/a4.png',
        title: "Performance Focused",
        description: "Fast-loading experiences optimized across desktop, tablet and mobile devices.",
    },
    {
        img: '/web/a5.png',
        title: "Structured Integrations",
        description: "Connected systems that streamline workflows and reduce operational friction.",
    },
    {
        img: '/web/a6.png',
        title: "Long-Term Reliability",
        description: "Stable platforms engineered for maintainability, security and continuous growth.",
    },
];

export default function WebDevelopmentPhilosophy() {
    return (
        <section className="container-fluid p-0 overflow-hidden" style={{ backgroundColor: '#f3f3f3' }}>
            
            {/* Top Header */}
            <div className="w-100 bg-black py-4 py-md-5 px-4">
                <h1 className="text-white text-center fw-bold mb-0" style={{ fontSize: 'calc(1.5rem + 2vw)' }}>
                    Our Web Development Philosophy
                </h1>
            </div>

            <div className="container py-5 mt-4">
                
                {/* Subtitle */}
                <h2 className="text-center fst-italic text-dark mb-5 px-md-5" style={{ fontSize: 'calc(1.1rem + 1vw)', lineHeight: '1.3' }}>
                    Built on the same principles that guide every platform we develop.
                </h2>

                {/* Grid Cards */}
                <div className="row g-4 mt-2">
                    {philosophyData.map((item, idx) => (
                        <div key={idx} className="col-12 col-md-6">
                            <div className="border border-dark h-100 p-4 p-lg-5 d-flex flex-column transition-hover bg-transparent">
                                
                                {/* Yellow Icon Box */}
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 mb-4" 
                                     style={{ width: '48px', height: '48px', backgroundColor: '#EEF430' }}>
                                    <Image src={item.img} width={30} height={30} alt="icon" style={{ objectFit: 'contain' }} />
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="fw-bold text-black mb-3" style={{ fontSize: '1.5rem' }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-secondary mb-0 lh-lg" style={{ fontSize: '1.1rem' }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-5 pt-4 d-flex flex-column flex-sm-row justify-content-center gap-3">
                    <Link 
                        href="/" 
                        className="btn fw-bold d-flex align-items-center justify-content-center hover-scale border-0 text-black shadow-sm"
                        style={{ backgroundColor: '#EEF430', width: '200px', height: '48px', borderRadius: '6px' }}
                    >
                        View our Portfolio
                    </Link>
                    <Link 
                        href="/solutionservice" 
                        className="btn fw-bold d-flex align-items-center justify-content-center hover-scale border-0 text-black shadow-sm"
                        style={{ backgroundColor: '#EEF430', width: '200px', height: '48px', borderRadius: '6px' }}
                    >
                        Work With Us
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .hover-scale {
                    transition: transform 0.3s ease;
                }
                .hover-scale:hover {
                    transform: scale(1.05);
                }
                .transition-hover {
                    transition: background-color 0.3s ease;
                }
                .transition-hover:hover {
                    background-color: rgba(0,0,0,0.02) !important;
                }
            `}</style>
        </section>
    );
}