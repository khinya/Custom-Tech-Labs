import Image from "next/image";

export default function PeopleWork() {
    return (
        <>
            <section className="container-fluid p-0 mb-5 pb-5 position-relative">
                {/* Header Banner */}
                <div className="bg-black text-white position-relative" style={{ height: '200px' }}>
<div 
    className="container h-100 position-relative" 
    style={{
        clipPath: "polygon(0% 0%, 48% 45%, 100% 45%, 100% 100%, 0% 100%)"
    }}
>
   

                        <h1 className="position-absolute bottom-0 mb-4 fw-bold display-6 px-3 px-md-0">
                            The people behind the work
                        </h1>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row flex-column gap-5">
                        
                        {/* Person 1 - Left Image */}
                        <div className="row align-items-center g-4">
                            <div className="col-12 col-md-5">
                                <div className="position-relative" style={{ height: '300px' }}>
                                    <Image 
                                        className="object-fit-cover rounded" 
                                        src={'/images/divakar-saini.webp'} 
                                        fill 
                                        alt='Divakar Saini' 
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-7 text-center text-md-start">
                                <h4 className="fs-6 text-muted fw-normal mb-1">Managing Director, Business Growth & Strategy</h4>
                                <h2 className="fw-bold mb-3">Divakar Saini</h2>
                                <p className="lead fs-6">
                                    Divakar leads business growth, partnerships, and strategic direction at CustomTech Labs. He brings a rare combination of business acumen and technical understanding, allowing him to see both the opportunity and the execution behind it. 
                                    <br /><br />
                                    His strength lies in connecting the dots between business goals, user needs, and technical possibilities.
                                </p>
                            </div>
                        </div>

                        {/* Person 2 - Right Image (Reverse on Desktop) */}
                        <div className="row align-items-center g-4 flex-md-row-reverse">
                            <div className="col-12 col-md-5">
                                <div className="position-relative" style={{ height: '300px' }}>
                                    <Image 
                                        className="object-fit-cover rounded" 
                                        src={'/images/harvindra-singh.webp'} 
                                        fill 
                                        alt='Harvindra Singh' 
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-7 text-center text-md-end">
                                <h4 className="fs-6 text-muted fw-normal mb-1">Managing Director & CTO, Technology & Engineering</h4>
                                <h2 className="fw-bold mb-3">Harvindra Singh</h2>
                                <p className="lead fs-6">
                                    Harvindra leads the engineering vision at CustomTech Labs, ensuring every product is built with precision, scalability, and long-term performance in mind. 
                                    <br /><br />
                                    He takes a hands-on approach to development, guiding teams through clean architecture and enterprise-grade execution.
                                </p>
                            </div>
                        </div>

                        {/* Person 3 - Left Image */}
                        <div className="row align-items-center g-4">
                            <div className="col-12 col-md-5">
                                <div className="position-relative" style={{ height: '300px' }}>
                                    <Image 
                                        className="object-fit-cover rounded" 
                                        src={'/images/prati-kaufman.webp'} 
                                        fill 
                                        alt='Prati Kaufmani' 
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-7 text-center text-md-start">
                                <h4 className="fs-6 text-muted fw-normal mb-1">Human-Centered Systems Architect</h4>
                                <h2 className="fw-bold mb-3">Prati Kaufmani</h2>
                                <p className="lead fs-6">
                                    Prati Kaufman leads strategy, user experience, and growth alignment. She ensures that every product is not just built well but built right.
                                    <br /><br />
                                    By bridging strategy, user behavior, and execution, she ensures that technology feels intuitive, converts effectively, and integrates seamlessly into business operations.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}