'use client';
import Image from "next/image";

const sectors = [
    { name: "Healthcare", img: "/web/d1.png" },
    { name: "Retail", img: "/web/d2.png" },
    { name: "Education", img: "/web/d3.png" },
    { name: "Construction", img: "/web/d4.png" },
    { name: "Manufacturing", img: "/web/d5.png" },
];

export default function SectorsWeBuild() {
    return (
        <section className="container-fluid py-5 d-flex flex-column align-items-center gap-4">
            
            {/* Main Header Bar */}
            <div className="col-12 col-md-8 col-lg-7 bg-yellow d-flex justify-content-center align-items-center py-3" 
                 style={{ backgroundColor: '#eef430' }}>
                <h1 className="fw-bold mb-0 text-center" style={{ fontSize: 'calc(1.1rem + 1vw)' }}>
                    Sectors We Build For
                </h1>
            </div>

            {/* Subheading */}
            <div className="text-center px-3">
                <h3 className="fw-normal mb-0" style={{ fontSize: 'calc(0.9rem + 0.2vw)' }}>
                    <span className="fw-bold">Different industries. Same friction. Same fix.</span>
                    <br className="d-none d-md-block" />
                    We connect what should never have been separate in the first place.
                </h3>
            </div>

            {/* Sectors Grid */}
            <div className="container mt-4">
                <div className="row g-4 justify-content-center">
                    {sectors.map((sector, idx) => (
                        <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
                            <div className="d-flex flex-column justify-content-center align-items-center p-3 rounded shadow-sm w-100 hover-lift" 
                                 style={{ backgroundColor: '#f5f5f5', minHeight: '120px' }}>
                                <div className="mb-2" style={{ width: '80%', maxWidth: '120px' }}>
                                    <Image 
                                        src={sector.img} 
                                        width={152} 
                                        height={80} 
                                        alt={sector.name} 
                                        className="img-fluid"
                                    />
                                </div>
                                <h4 className="fw-semibold mb-0" style={{ fontSize: '1rem' }}>
                                    {sector.name}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Statement */}
            <div className="col-12 col-md-8 col-lg-6 text-center mt-3 px-3">
                <p className="fw-normal mb-0" style={{ fontSize: 'calc(0.9rem + 0.2vw)' }}>
                    The industries may differ, but the goal stays the same: 
                    <br className="d-none d-md-block" />
                    Replace fragmented technology with connected digital ecosystems.
                </p>
            </div>

            <style jsx>{`
                .hover-lift {
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    cursor: default;
                }
                .hover-lift:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.08) !important;
                }
            `}</style>
        </section>
    );
}