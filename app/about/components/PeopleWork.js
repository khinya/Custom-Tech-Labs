import Image from "next/image";

export default function PeopleWork() {
    return (
        <>
            <section className="container-fluid p-0 position-relative">
                {/* Header Banner */}
      <div className="banner-container">
      <div className="content-wrapper">
        <h2>
          The people behind the work 
        </h2>
      </div>

      
    </div>
    <div className="container py-5">
                    <div className="row flex-column gap-5">
                        
                        {/* Person 1 - Left Image */}
                        <div className="row align-items-center g-4">
                            <div className="col-12 col-md-5">
                                <div className="position-relative" style={{ height: '300px' }}>
                                    <Image 
                                        className="object-fit-cover" 
                                        src={'/images/divakar-saini.webp'} 
                                        fill 
                                        alt='Divakar Saini' 
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-7 text-center text-md-start">
                                <h4 className="fs-6 text-muted fw-normal mb-1">Managing Director, Business Growth & Strategy</h4>
                                <h2 className="fw-bold mb-3">Divakar Saini</h2>
                                <p>
                                    Divakar leads business growth, partnerships, and strategic direction at CustomTech Labs. He brings a rare combination of business acumen and technical understanding, allowing him to see both the opportunity and the execution behind it. He works closely with clients to identify what’s actually holding their business back and translates that into clear, scalable technology solutions.
</p> <p> His strength lies in connecting the dots between business goals, user needs, and technical possibilities. From client acquisition to long-term partnerships, Divakar ensures every engagement is rooted in impact, not just delivery.

                                </p>
                            </div>
                        </div>

                        {/* Person 2 - Right Image (Reverse on Desktop) */}
                        <div className="row align-items-center g-4 flex-md-row-reverse">
                            <div className="col-12 col-md-5">
                                <div className="position-relative" style={{ height: '300px' }}>
                                    <Image 
                                        className="object-fit-cover" 
                                        src={'/images/harvindra-singh.webp'} 
                                        fill 
                                        alt='Harvindra Singh' 
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-7 text-center text-md-end">
                                <h4 className="fs-6 text-muted fw-normal mb-1">Managing Director & CTO, Technology & Engineering</h4>
                                <h2 className="fw-bold mb-3">Harvindra Singh</h2>
                                <p>
                                    Harvindra leads the engineering vision at CustomTech Labs, ensuring every product is built with precision, scalability, and long-term performance in mind. With deep expertise in system architecture and modern technologies, he turns complex business requirements into robust, high-performing solutions.
                                    </p>
                                     <p>
                                    He takes a hands-on approach to development, guiding teams through clean architecture, efficient processes, and enterprise-grade execution. His focus is simple: build technology that not only works today, but continues to perform as the business grows.

                                </p>
                            </div>
                        </div>

                        {/* Person 3 - Left Image */}
                        <div className="row align-items-center g-4">
                            <div className="col-12 col-md-5">
                                <div className="position-relative" style={{ height: '300px' }}>
                                    <Image 
                                        className="object-fit-cover " 
                                        src={'/images/prati-kaufman.webp'} 
                                        fill 
                                        alt='Prati Kaufmani' 
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-7 text-center text-md-start">
                                <h4 className="fs-6 text-muted fw-normal mb-1">Human-Centered Systems Architect</h4>
                                <h2 className="fw-bold mb-3">Prati Kaufman</h2>
                                <p>
                  Prati Kaufman leads strategy, user experience, and growth alignment at CustomTech Labs. With a strong foundation in marketing, business growth, and human behavior, she ensures that every product is not just built well but built right.
 </p> <p>Her approach starts before the first line of code. She focuses on defining the why behind every build—who it is for, how it will be used, and how it will drive real business outcomes. By bridging strategy, user behavior, and execution, she ensures that technology feels intuitive, converts effectively, and integrates seamlessly into how businesses actually operate.
</p> <p>
At her core, Prati believes that technology should simplify decisions, not complicate them and that the best systems are the ones people actually want to use.

                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}