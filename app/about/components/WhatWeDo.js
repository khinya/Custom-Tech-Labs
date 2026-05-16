import { GoArrowUpRight } from "react-icons/go";

export default function WhatWeDo() {
  const services = [
    {
      name: "Custom Websites",
      desc: "Built for performance, clarity, and conversion",
    },
    {
      name: "Custom Applications",
      desc: "Tailored to your workflows and users",
    },
    {
      name: "Enterprise Software",
      desc: "Robust systems for complex business needs",
    },
    {
      name: "UI/UX Strategy",
      desc: "Human-centered design that drives engagement",
    },
  ];

  return (
    <section className="container py-5">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-12 col-lg-10">
          {/* Header Badge */}
          <h1 class="what-we-do-heading fw-bold">What We Do</h1>

          <h3 className="px-md-5 text-start fw-bold  whatFontText">
            We design and build custom enterprise solutions for small to
            mid-sized businesses, combining innovation with real-world
            usability.
            <br />
            <br />
            <span className="fw-normal fst-italic">Our services include:</span>
          </h3>
        </div>
      </div>

      {/* Services Grid */}
      <div className="row g-4 justify-content-center">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="col-12 col-md-6 col-lg-5"
            style={{ backgroundColor: "" }}
          >
            <div
              className="h-100 p-4 shadow-lg d-flex flex-column justify-content-between align-items-start position-relative bg-custome"
              style={{
                borderLeft: "14px solid #eff430",
                minHeight: "160px",
                backgroundColor: "#f5f5f5",
              }}
            >
              <GoArrowUpRight className="ms-auto fs-1" />
              <div>
                <h3 className="fs-6 fw-bold mb-1">{item.name}</h3>
                <h4 className="fs-6 fw-normal mb-0 text-muted">{item.desc}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h3 className="fs-6 fw-normal text-black">
            Every solution is built specifically for your business. No
            templates, No shortcuts.
          </h3>
        </div>
      </div>
    </section>
  );
}
