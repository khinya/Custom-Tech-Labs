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
            <section className="container-fluid sectors-container">

                {/* Main Header Yellow Banner Bar */}
                <div className="sectors-main-banner">
                    <h1 className="sectors-banner-title">
                        Sectors We Build For
                    </h1>
                </div>

                {/* Subheading Group */}
                <div className="sectors-subheading-box">
                    <h2 className="sectors-subtitle-main">
                        Different industries. Same friction. Same fix.
                    </h2>
                    <p className="sectors-subtitle-desc">
                        We connect what should never have been separate in the first place.
                    </p>
                </div>

                {/* Sectors Display Matrix Layout (3 over 2 layout auto handling) */}
                <div className="container sectors-flex-grid">
                    {sectors.map((sector, index) => (
                        <div key={index} className="sector-display-card">
                            
                            <div className="sector-card-image-wrap">
                                <Image
                                    src={sector.img}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    alt={sector.name}
                                    priority={index < 3}
                                />
                            </div>

                            <h4 className="sector-card-title">
                                {sector.name}
                            </h4>
                        </div>
                    ))}
                </div>

                {/* Bottom Ecosystem Statement */}
                <div className=" sectors-footer-box">
                    <p className="sectors-footer-text">
                        The industries may differ, but the goal stays the same:
                        <br />
                        Replace fragmented technology with connected digital ecosystems.
                    </p>
                </div>

            </section>
            
            {/* The absolute base layout color block borders */}
            <div className="sectors-bottom-divider"></div>
        </>
    );
}