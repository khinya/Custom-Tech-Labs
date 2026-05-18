"use client";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import Btn from "./btn";

const applicationData = [
  "Operational platforms that replace manual processes.",
  "Customer portals that simplify engagement.",
  "Mobile tools that support service delivery.",
  "Modernized systems that scale with growth.",
];

export default function CustomApplicationsImpact() {
  return (
    <section
      className="container-fluid p-0 py-5 position-relative overflow-hidden"
      style={{ backgroundColor: "#f3f3f3" }}
    >
      <div className="container py-5 mt-0" style={{ width: "90%" }}>
        {/* Heading Badge */}
        <div
          className="d-inline-block px-4 py-3 mb-5"
          style={{ backgroundColor: "#EEF430" }}
        >
          <h1
            className="text-black fw-bold mb-0"
            style={{ fontSize: "calc(1.4rem + 1.2vw)", lineHeight: "1.2" }}
          >
            Where Custom Applications Make the Greatest Impact
          </h1>
        </div>

        {/* Impact List */}
        <div className="row">
          <div className="col-12 col-lg-9">
            <div className="d-flex flex-column gap-3 border-2-yellow">
              {applicationData.map((item, idx) => (
                <div
                  key={idx}
                  className="d-flex align-items-center gap-4 p-4 border border-2"
                  style={{ borderColor: "#EEF430 !important" }}
                >
                  {/* Icon Circle */}
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      backgroundColor: "#EEF430",
                      width: "36px",
                      height: "36px",
                    }}
                  >
                    <FaCheck className="text-black" size={18} />
                  </div>

                  {/* Text */}
                  <h2
                    className="fw-bold mb-0"
                    style={{ fontSize: "calc(1rem + 0.3vw)" }}
                  >
                    {item}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Call to Action Box */}
        <div
          className="mt-5 p-4 p-md-5 rounded-3 d-flex flex-column align-items-center"
          style={{ backgroundColor: "#d9d9d9" }}
        >
          {/* Inner Black Highlight Box */}
          <div className="col-12 col-lg-11 bg-black rounded-4 p-4 p-md-5 text-center shadow-lg">
            <h2
              className="text-white fw-bold mb-0"
              style={{ fontSize: "calc(1.5rem + 1.5vw)", lineHeight: "1.1" }}
            >
              If your current tools create more work than they remove –
              <span style={{ color: "#EEF430" }}> that’s the signal</span>
            </h2>
          </div>

          <p className="mt-4 fs-5 text-center fw-medium text-black">
            Let’s build something that moves your business forward
          </p>

          {/* Action Buttons */}
          <div className="d-flex flex-column flex-sm-row gap-3 mt-3">
            <Btn />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-scale {
          transition: transform 0.3s ease;
          border: none;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
