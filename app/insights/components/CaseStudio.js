'use client';
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function CaseStudio() {
    return (
        <section className="container-fluid p-0 mb-5 pb-5 position-relative overflow-hidden">
            
            {/* Header Background Bar */}
            <div className="bg-black text-white" style={{ height: '160px' }}>
                <div className="container h-100 d-flex align-items-center">
                    <h1 className="fw-bold m-0 px-3 px-md-0" 
                        style={{ fontSize: 'calc(1.3rem + .8vw)', letterSpacing: '-0.5px' }}>
                        Case Studies
                    </h1>
                </div>
            </div>

            {/* Content Container (Card & Text) */}
            <div className="container px-3" style={{ marginTop: '-60px' }}>
                <div className="row justify-content-center justify-content-md-start">
                    <div className="col-12 col-lg-10 col-xl-9">
                        
                        {/* Featured Image */}
                        <div className="shadow-lg overflow-hidden rounded-top">
                            <Image 
                                className="img-fluid w-100" 
                                src={'/web/case.jpg'} 
                                width={994} 
                                height={388} 
                                alt="Case Studies Showcase" 
                                style={{ objectFit: 'cover' }}
                            />
                        </div>

                        {/* Description Box */}
                        <div className="p-4 p-md-5 d-flex flex-column gap-3 rounded-bottom shadow-sm" 
                             style={{ backgroundColor: '#d9d9d9' }}>
                            
                            <h2 className="fs-5 fst-italic fw-bold mb-0">
                                Industries We Transform
                            </h2>
                            
                            <p className="fs-6 fw-normal lh-lg mb-2 text-dark">
                                We’ve built systems for healthcare operations, retail platforms, 
                                educational ecosystems, construction workflows, and manufacturing 
                                environments—helping them replace inefficient processes with systems 
                                that reduce errors and improve visibility.
                            </p>

                            <div>
                                <Link 
                                    href="/" 
                                    className="btn d-inline-flex align-items-center gap-2 fw-bold px-4 py-2 hover-scale border-0"
                                    style={{ backgroundColor: '#EEF430', color: '#000', fontSize: '14px' }}
                                >
                                    View our Portfolio <BsArrowRight size={18} />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hover-scale {
                    transition: all 0.3s ease;
                }
                .hover-scale:hover {
                    transform: translateX(5px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }
            `}</style>
        </section>
    );
}