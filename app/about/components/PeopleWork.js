import Image from "next/image";

export default function PeopleWork() {
  return (
    <>
      <section className="container-fluid p-0 position-relative">
        {/* Header Banner */}
        <div className="banners-containers banner-container">
          <div className="content-wrapper">
            <h2 className="pt-3">The people behind the work</h2>
          </div>
        </div>
        <div className="container py-5">
          <div className="row flex-column gap-5">
            {/* Person 1 - Left Image */}
            <div className="row align-items-center g-4">
              <div className="col-12 col-md-5">
                <div className="position-relative" style={{ height: "300px" }}>
                  <Image
                    className="object-fit-cover"
                    src={"/images/divakar-saini.webp"}
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    fill
                    alt="Divakar Saini"
                  />
                </div>
              </div>
              <div className="col-12 col-md-7 text-center text-md-start">
                <h4 className="fs-6 text-muted fw-normal mb-1">
                  Managing Director, Business Growth & Strategy
                </h4>
                <h2 className="fw-bold mb-3 fontPeopleTitle">Divakar Saini</h2>
                <h6>
                  Divakar leads business growth, partnerships, and strategic
                  direction at CustomTech Labs. He brings a rare combination of
                  business acumen and technical understanding, allowing him to
                  see both the opportunity and the execution behind it. He works
                  closely with clients to identify what’s actually holding their
                  business back and translates that into clear, scalable
                  technology solutions.
                </h6>{" "}
                <h6>
                  {" "}
                  His strength lies in connecting the dots between business
                  goals, user needs, and technical possibilities. From client
                  acquisition to long-term partnerships, Divakar ensures every
                  engagement is rooted in impact, not just delivery.
                </h6>
              </div>
            </div>

            {/* Person 2 - Right Image (Reverse on Desktop) */}
            <div className="row align-items-center g-4 flex-md-row-reverse">
              <div className="col-12 col-md-5">
                <div className="position-relative" style={{ height: "300px" }}>
                  <Image
                    className="object-fit-cover"
                    src={"/images/harvindra-singh.webp"}
                    fill
                    alt="Harvindra Singh"
                    style={{ objectFit: 'cover', }}
                  />
                </div>
              </div>
              <div className="col-12 col-md-7 text-center text-md-end">
                <h4 className="fs-6 text-muted fw-normal mb-1">
                  Managing Director & CTO, Technology & Engineering
                </h4>
                <h2 className="fw-bold mb-3 fontPeopleTitle">Harvindra Singh</h2>
                <h6>
                  Harvindra leads the engineering vision at CustomTech Labs,
                  ensuring every product is built with precision, scalability,
                  and long-term performance in mind. With deep expertise in
                  system architecture and modern technologies, he turns complex
                  business requirements into robust, high-performing solutions.
                </h6>
                <h6>
                  He takes a hands-on approach to development, guiding teams
                  through clean architecture, efficient processes, and
                  enterprise-grade execution. His focus is simple: build
                  technology that not only works today, but continues to perform
                  as the business grows.
                </h6>
              </div>
            </div>

            {/* Person 3 - Left Image */}
            <div className="row align-items-center g-4">
              <div className="col-12 col-md-5">
                <div className="position-relative" style={{ height: "300px" }}>
                  <Image
                    className="object-fit-cover "
                    src={"/images/prati-kaufman.webp"}
                    style={{ objectFit: 'cover', }}
                    fill
                    alt="Prati Kaufmani"
                  />
                </div>
              </div>
              <div className="col-12 col-md-7 text-center text-md-start">
                <h4 className="fs-6 text-muted fw-normal mb-1">
                  Human-Centered Systems Architect
                </h4>
                <h2 className="fw-bold mb-3 fontPeopleTitle">Prati Kaufman</h2>
                <h6>
                  Prati Kaufman leads strategy, user experience, and growth
                  alignment at CustomTech Labs. With a strong foundation in
                  marketing, business growth, and human behavior, she ensures
                  that every product is not just built well but built right.
                </h6>{" "}
                <h6>
                  Her approach starts before the first line of code. She focuses
                  on defining the why behind every build—who it is for, how it
                  will be used, and how it will drive real business outcomes. By
                  bridging strategy, user behavior, and execution, she ensures
                  that technology feels intuitive, converts effectively, and
                  integrates seamlessly into how businesses actually operate.
                </h6>{" "}
                <h6>
                  At her core, Prati believes that technology should simplify
                  decisions, not complicate them and that the best systems are
                  the ones people actually want to use.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
