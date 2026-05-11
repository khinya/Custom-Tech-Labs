'use client';
import Image from "next/image";

const sectors = [
    { name: "Healthcare", img: "/appsimg/d1.png" },
    { name: "Retail", img: "/appsimg/d2.png" },
    { name: "Education", img: "/appsimg/d3.png" },
    { name: "Construction", img: "/appsimg/d4.png" },
    { name: "Manufacturing", img: "/appsimg/d5.png" },
];

export default function SectorsWeBuild() {
    return (
        <section className="container-fluid p-0 pt-5 d-flex flex-column align-items-center gap-4">
            
            {/* Header Title Bar */}
            <div className="container d-flex justify-content-center">
                <div className="col-12 col-md-8 col-lg-7 bg-yellow py-3 d-flex justify-content-center align-items-center" 
                     style={{ backgroundColor: '#eef430' }}>
                    <h1 className="fw-bold mb-0 text-center" style={{ fontSize: 'calc(1.1rem + 1vw)' }}>
                        Sectors We Build For
                    </h1>
                </div>
            </div>

            {/* Subheading */}
            <div className="container text-center px-3">
                <h3 className="fw-normal mb-0" style={{ fontSize: 'calc(0.9rem + 0.2vw)' }}>
                    <span className="fw-bold">Different industries. Same friction. Same fix.</span>
                    <span className="d-none d-md-inline"><br /></span>
                    {" "}We connect what should never have been separate in the first place.
                </h3>
            </div>

            {/* Sector Grid */}
            <div className="container my-4">
                <div className="row g-4 justify-content-center">
                    {sectors.map((sector, index) => (
                        <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <div className="d-flex flex-column justify-content-center align-items-center py-4 px-2 h-100 shadow-sm transition-hover" 
                                 style={{ backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
                                <div className="mb-2" style={{ width: '100%', maxWidth: '120px' }}>
                                    <Image 
                                        className="img-fluid" 
                                        src={sector.img} 
                                        width={152} 
                                        height={80} 
                                        alt={sector.name} 
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                                <h4 className="fw-semibold mb-0 text-center" style={{ fontSize: '1rem' }}>
                                    {sector.name}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Statement */}
            <div className="container text-center px-3 mb-5">
                <h2 className="fw-normal mx-auto" style={{ fontSize: 'calc(0.9rem + 0.3vw)', maxWidth: '700px' }}>
                    The industries may differ, but the goal stays the same: 
                    <span className="d-none d-md-inline"><br /></span>
                    {" "}Replace fragmented technology with connected digital ecosystems.
                </h2>
            </div>

            {/* Bottom Accent Bar */}
            <div className="w-100 mt-auto">
                <div className="w-100" style={{ height: '14px', backgroundColor: '#eef430' }}></div>
                <div className="w-100 bg-black" style={{ height: '35px' }}></div>
            </div>

            <style jsx>{`
                .transition-hover {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .transition-hover:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
                }
            `}</style>
        </section>
    );
}