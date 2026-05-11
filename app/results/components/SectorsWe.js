'use client';
import Image from "next/image";

export default function SectorsWe() {
    const sectors = [
        { name: "Healthcare", img: "/system/l1.png" },
        { name: "Retail", img: "/system/l2.png" },
        { name: "Education", img: "/system/l3.png" },
        { name: "Construction", img: "/system/l4.png" },
        { name: "Manufacturing", img: "/system/l5.png" }
    ];

    return (
        <section className="container-fluid p-0 d-flex flex-column align-items-center gap-4 mt-5">
            
            {/* Header Badge */}
            <div 
                className="mx-auto d-flex justify-content-center align-items-center mb-2" 
                style={{ backgroundColor: '#eef430', width: '100%', maxWidth: '850px', height: '65px' }}
            >
                <h1 className="fw-bold m-0" style={{ fontSize: 'calc(1.1rem + 0.8vw)' }}>
                    Sectors We Work With
                </h1>
            </div>

            {/* Sub-heading */}
            <h3 className="text-center fs-6 fw-normal px-3">
                <span className="fw-bold">Different industries. Same friction. Same fix.</span> <br className="d-none d-md-block" />
                We connect what should never have been separate in the first place.
            </h3>

            {/* Sector Grid */}
            <div className="container" style={{ maxWidth: '900px' }}>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 justify-content-center">
                    {sectors.map((sector, index) => (
                        <div key={index} className="col d-flex justify-content-center">
                            <div 
                                className="d-flex flex-column justify-content-center align-items-center p-3 shadow-sm"
                                style={{ backgroundColor: '#f5f5f5', width: '100%', minHeight: '120px' }}
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

            {/* Footer text */}
            <h2 className="text-center fs-6 fw-normal px-3 mt-4" style={{ maxWidth: '750px' }}>
                The industries may differ, but the goal stays the same: <br className="d-none d-md-block" />
                Replace fragmented technology with connected digital ecosystems.
            </h2>

            {/* Bottom Accent Bar */}
            <div className="w-100 bg-black mt-4" style={{ height: '35px', borderTop: '14px solid #eef430' }}></div>
        </section>
    );
}