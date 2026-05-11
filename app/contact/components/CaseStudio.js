'use client';
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function CaseStudio() {
    return (
        <section className="container-fluid p-0 mb-5 pb-5">
            {/* Header Section */}
            <div className="bg-black text-white" style={{ height: '140px' }}>
                <div className="container h-100 d-flex align-items-center">
                    <h1 className="fw-semibold ps-md-5" style={{ fontSize: 'calc(1.3rem + .8vw)' }}>
                        Case Studies
                    </h1>
                </div>
            </div>

            {/* Content Section with Overlap */}
            <div className="container" style={{ marginTop: '-50px' }}>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10 ps-md-5">
                        
                        {/* Image */}
                        <div className="w-100 overflow-hidden">
                            <Image 
                                className="img-fluid w-100" 
                                src="/appsimg/case.jpg" 
                                width={994} 
                                height={388} 
                                alt="Case Studio" 
                                priority
                            />
                        </div>

                        {/* Description Box */}
                        <div 
                            className="p-4 p-md-5 d-flex flex-column gap-3 align-items-start shadow-sm"
                            style={{ backgroundColor: '#d9d9d9' }}
                        >
                            <h2 className="fs-6 fw-bold fst-italic mb-0">Industries We Transform</h2>
                            <p className="fs-6 fw-normal mb-0 lh-base">
                                We’ve built systems for healthcare operations, retail platforms, 
                                educational ecosystems, construction workflows, and manufacturing 
                                environments helping them replace inefficient processes with systems 
                                that reduce errors and improve visibility.
                            </p>
                            
                            <Link 
                                href="/" 
                                className="btn fw-bold px-4 py-2 d-inline-flex align-items-center gap-2 border-0 transition-transform hover-scale"
                                style={{ backgroundColor: '#EEF430', fontSize: '14px', borderRadius: '4px' }}
                            >
                                View our Portfolio <BsArrowRight />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <style jsx>{`
                .hover-scale { transition: transform 0.2s ease; }
                .hover-scale:hover { transform: scale(1.03); }
            `}</style>
        </section>
    );
}