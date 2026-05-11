'use client';
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function CaseStudies() {
    return (
        <section className="container-fluid p-0 mb-5 pb-5">
            {/* Dark Header Background */}
            <div className="bg-black text-white" style={{ height: '200px' }}>
                <div className="container h-100 d-flex align-items-center">
                    <h1 className="fw-bold display-6 ps-md-5">Case Studies</h1>
                </div>
            </div>

            {/* Overlapping Content Wrapper */}
            <div className="container" style={{ marginTop: '-80px' }}>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10 ps-md-5">
                        
                        {/* Featured Image */}
                        <div className="position-relative w-100">
                            <Image 
                                className="img-fluid w-100 rounded-top" 
                                src="/servicesolimg/caseStudio.png" 
                                width={994} 
                                height={388} 
                                alt="Case Studio" 
                                priority
                            />
                        </div>

                        {/* Content Box */}
                        <div 
                            className="p-4 p-md-5 d-flex flex-column gap-3 align-items-start shadow-sm"
                            style={{ backgroundColor: '#d9d9d9' }}
                        >
                            <h2 className="fs-6 fw-bold fst-italic mb-0">Industries We Transform</h2>
                            <p className="fs-6 fw-normal mb-2 lh-base">
                                We’ve built systems for healthcare operations, retail platforms, 
                                educational ecosystems, construction workflows, and manufacturing 
                                environments helping them replace inefficient processes with systems 
                                that reduce errors and improve visibility.
                            </p>
                            
                            <Link 
                                href="/" 
                                className="btn fw-bold px-4 py-2 d-inline-flex align-items-center gap-2 border-0"
                                style={{ backgroundColor: '#EEF430', fontSize: '14px', borderRadius: '4px' }}
                            >
                                View our Portfolio <BsArrowRight />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}