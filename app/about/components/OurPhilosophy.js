import Image from "next/image";

export default function OurPhilosophy() {
  return (
    <section className="container-fluid py-5 px-3 px-md-5">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-auto">
            {/* Heading */}
            <h1 className="our-philosophy-heading">Our Philosophy</h1>
          </div>
        </div>

        {/* Content Row */}
        <div className="row align-items-center g-5">
          {/* Left Text */}
          <div className="col-12 col-lg-7">
            <div className="pe-lg-4">
              <h2
                className="display-6 fw-bold lh-base mb-0"
                style={{ marginTop: "20px" }}
              >
                Technology should never feel like a burden. It should{" "}
                <span
                  className="fst-italic"
                  style={{ borderBottom: "4px solid #eef430" }}
                >
                  empower, simplify, and strengthen
                </span>{" "}
                human connection.
              </h2>

              <div className="fs-5 lh-lg">
                <p className="mb-0">That’s what we build at CustomTech Labs:</p>
                <p className="fw-bold mb-0 mt-0">Technology with purpose.</p>
                <p className="mb-0" style={{ color: "#a6a6a6" }}>
                  Powered by strategy.
                </p>
                <p className="mb-0" style={{ color: "#a6a6a6" }}>
                  Designed for people.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-12 col-lg-5 text-center">
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "450px" }}
            >
              <Image
                className="img-fluid shadow-sm"
                src="/images/philosophy.webp "
                width={409}
                height={307}
                alt="Our Philosophy"
                priority
                style={{
                  position: "absolute",
                  top: "-173px",
                  left: "0",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
