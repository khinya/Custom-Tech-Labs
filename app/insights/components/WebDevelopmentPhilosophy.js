'use client';
import Image from "next/image";
import Link from "next/link";

const philosophyData = [
    {
        img: '/web/a1.png',
        title: "Clarity Before Design",
        description: "We start with clarity.If positioning isn’t sharp, design won’t save it.",
    },
    {
        img: '/web/a2.png',
        title: "Real Behavior Over Assumptions",
        description: "We design for real behavior.Not ideal users. Not assumed patterns.",
    },
    {
        img: '/web/a3.png',
        title: "Structure Before Scale ",
        description: "We build for longevity.Scalable architecture. Clean code. Structured foundations.",
    },
    {
        img: '/web/a4.png',
        title: " Intention Over Launch",
        description: "We launch with intention.No chaos. No forced adoption. No fragile systems. ",
    },
    {
        img: '/web/a5.png',
        title: "Reality Over Theory ",
        description: "We refine based on data.Usage reveals truth. We follow it.",
    },
    {
        img: '/web/a6.png',
        title: "We Optimize In Practice, Not Theory. ",
        description: "User behavior is our compass. Every click and scroll guides us.",
    },
];

export default function WebDevelopmentPhilosophy() {
    return (
        <section className="container-fluid my-5 p-0 overflow-hidden" style={{ backgroundColor: '#f3f3f3' }}>

            {/* Top Header */}
            <div className="w-100 bg-black py-2 py-md-3 px-4">
                <h1 className="text-white text-center fw-bold mb-0" style={{ fontSize: '30px' }}>
                    Our Web Development Philosophy
                </h1>
            </div>

            <div className="container py-5 mt-4" style={{ width: "90%" }}>

                {/* Subtitle */}
                <h2 className="text-center fst-italic text-dark mb-5 px-md-5" style={{ fontSize: '25px', lineHeight: '1.3', marginTop: "-4%" }}>
                    Built on the same principles that guide every platform we develop.
                </h2>

                {/* Grid Cards */}
                <div className="row g-4 " style={{ marginLeft: "30px", marginRight: "30px" }}>
                    {philosophyData.map((item, idx) => (
                        <div key={idx} className="col-12 col-md-6">
                            <div className="border border-dark h-100 p-2 p-lg-2 d-flex flex-column transition-hover bg-transparent">

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
                                    <p className="text-secondary mb-0 lh-lg" style={{ fontSize: '1rem' }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-1 pt-4 d-flex flex-column flex-sm-row justify-content-center gap-3">
                    <Link
                        href="/"
                        className="btn fw-bold d-flex align-items-center justify-content-center hover-scale border-0 text-black shadow-sm"
                        style={{ backgroundColor: '#EEF430', width: '200px', height: '35px', borderRadius: '6px' }}
                    >
                        View our Portfolio →
                    </Link>
                    <Link
                        href="/solutionservice"
                        className="btn fw-bold d-flex align-items-center justify-content-center hover-scale border-0 text-black shadow-sm"
                        style={{ backgroundColor: '#EEF430', width: '200px', height: '35px', borderRadius: '6px' }}
                    >
                        Work With Us →
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