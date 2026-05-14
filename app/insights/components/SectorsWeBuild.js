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
        <>
            <section className="container-fluid py-5 d-flex flex-column align-items-center gap-4 ">

                {/* Main Header Bar */}
                <div className="col-12 col-md-8 col-lg-7 bg-yellow d-flex justify-content-center align-items-center py-3 w-60"
                    style={{ backgroundColor: '#eef430', width: '80%', marginTop: "-10%" }}>
                    <h1 className="fw-bold mb-0 text-center" style={{ fontSize: 'calc(1.1rem + 1vw)' }}>
                        Sectors We Build For
                    </h1>
                </div>

                {/* Subheading */}
                <div className="text-center px-3">
                    <h3 className="fw-normal mb-0" style={{ fontSize: '22px', fontStyle: "italic" }}>
                        <span className="fw-bold">Different industries. Same friction. Same fix.</span>
                        <br className="d-none d-md-block" />
                        We connect what should never have been separate in the first place.
                    </h3>
                </div>
                {/* Sectors Grid */}
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className="row row-cols-1 row-cols-md-3  g-5 justify-content-center">

                        {sectors.map((sector, index) => (
                            <div key={index} className="col d-flex justify-content-center">
                                <div
                                    className="d-flex flex-column justify-content-center align-items-center p-3 shadow-sm"
                                    style={{ backgroundColor: '#f5f5f5', width: '237px', minHeight: '163px', border: "3px solid yellow" }}
                                >
                                    <div className="mb-2" style={{ width: '100%', height: '60px', position: 'relative' }}>
                                        <Image
                                            src={sector.img}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            alt={sector.name}
                                        />
                                    </div>
                                    <h4 className="fw-semibold m-0" style={{ fontSize: '15px' }}>{sector.name}</h4>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                {/* Bottom Statement */}
                <div className="col-12 col-md-8 col-lg-6 text-center mt-0 px-3">
                    <p className="fw-normal mb-0" style={{ fontSize: '18px', fontStyle: "italic", marginTop: "-6%" }}>
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
            <div style={{ width: '100%', borderTop: '20px solid #eff430', borderBottom: '20px solid #000' }}></div>
        </>
    );
}