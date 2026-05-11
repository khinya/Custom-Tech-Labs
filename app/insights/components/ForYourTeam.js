'use client';
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

const points = [
    "No bottlenecks.",
    "No fragmented systems.",
    "No fragile builds that break under growth.",
];

export default function ForYourTeam() {
    return (
        <section className="container-fluid py-5" style={{ backgroundColor: '#f3f3f3' }}>
            <div className="container py-lg-5">
                
                {/* Top Heading */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold" style={{ color: '#014421', fontSize: 'calc(1.3rem + 1vw)' }}>
                        For Your Team
                    </h2>
                    <h1 className="mt-3 fw-semibold fst-italic lh-tight text-dark mx-auto" 
                        style={{ fontSize: 'calc(1.2rem + 1.2vw)', maxWidth: '800px' }}>
                        Your website shouldn’t create operational dependency
                    </h1>
                </div>

                {/* Main Content Row */}
                <div className="row g-4 g-lg-5 align-items-start mt-4">
                    
                    {/* Left Image Column */}
                    <div className="col-12 col-lg-7">
                        <div className="rounded-3 overflow-hidden shadow-sm">
                            <Image
                                src="/web/same.jpg"
                                width={700}
                                height={500}
                                alt="Team Image"
                                className="img-fluid w-100 h-auto object-fit-cover"
                            />
                        </div>
                    </div>

                    {/* Right Content Column */}
                    <div className="col-12 col-lg-5">
                        <p className="fs-5 lh-base mb-4" style={{ color: '#1f1f1f' }}>
                            If every update requires developer support,
                            momentum slows. If systems don’t connect, your team
                            compensates manually.
                        </p>

                        <h3 className="fw-bold lh-snug mb-4" style={{ fontSize: 'calc(1.1rem + 0.5vw)' }}>
                            Well-structured custom website development restores control.
                        </h3>

                        <p className="fst-italic lh-lg mb-4" style={{ color: '#8d8d8d', fontSize: '1.1rem' }}>
                            We build custom websites that integrate your tools,
                            simplify workflows and give your team structured control.
                        </p>

                        {/* Negative Points List */}
                        <div className="d-flex flex-column gap-3 mb-5">
                            {points.map((item, idx) => (
                                <div key={idx} className="d-flex align-items-center gap-3">
                                    <RxCross2 className="text-danger flex-shrink-0" size={28} style={{ strokeWidth: '1.5' }} />
                                    <h4 className="mb-0 fw-semibold" style={{ color: '#7a7a7a', fontSize: '1.2rem' }}>
                                        {item}
                                    </h4>
                                </div>
                            ))}
                        </div>

                        {/* Result Box */}
                        <div className="bg-black p-4 rounded-4 shadow">
                            <h3 className="fw-bold mb-2" style={{ color: '#EEF430', fontSize: '1.4rem' }}>
                                The result is simple:
                            </h3>
                            <p className="text-white mb-0 fs-5 lh-relaxed">
                                You’ll gain clarity, efficiency and full autonomy.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}