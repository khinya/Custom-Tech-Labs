"use client";
import Link from "next/link";
import { apperData } from "./approachData";

export default function OurApproach() {
  return (
    <section
      className="container-fluid py-5"
      style={{ fontFamily: "'Albert Sans', sans-serif" }}
    >
      <div className="d-flex flex-column align-items-center">
        {/* 1. Section Badge - Matches image_560b68.png pill shape */}
        <div
          className="mb-4 text-center"
          style={{
            backgroundColor: "#000",
            padding: "10px 40px",
            borderRadius: "12px",
            maxWidth: "fit-content",
          }}
        >
          <h2
            className="m-0"
            style={{
              color: "#EEF430",
              fontSize: "clamp(18px, 4vw, 24px)", // Responsive font size
              fontWeight: "400",
              lineHeight: "100%",
            }}
          >
            Our Approach
          </h2>
        </div>

        {/* 2. Main Title - SemiBold 32px */}
        <h1
          className=" text-center px-3"
          style={{
            fontSize: "clamp(24px, 5vw, 32px)",
            fontWeight: "600",
            lineHeight: "1.1",
            color: "#000",
          }}
        >
          Our Approach to E-Commerce Development
        </h1>

        {/* 3. Subtitle - Italic 16px */}
        <p
          className="mb-5 text-center px-3"
          style={{
            fontSize: "16px",
            fontWeight: "400",
            fontStyle: "italic",
            color: "#000",
          }}
        >
          Our guiding rules behind every e-commerce platform we craft
        </p>

        {/* 4. Approach Grid - Responsive Column Logic */}
        <div className="container">
          <div
            className="row g-4 justify-content-center"
            style={{ width: "90%", margin: "0px auto" }}
          >
            {apperData
              .flatMap((group) => group.items)
              .map((item, idx) => (
                <div key={idx} className="col-12 col-lg-6">
                  <div
                    className="h-100 p-4 bg-white"
                    style={{
                      borderLeft: "clamp(15px, 3vw, 25px) solid #EEF430", // Smaller border on mobile
                      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.06)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      minHeight: "140px",
                    }}
                  >
                    <h3
                      className="mb-2"
                      style={{
                        color: "#034a27",
                        fontSize: "clamp(20px, 4vw, 24px)",
                        fontWeight: "700",
                        lineHeight: "1.1",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="m-0"
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "1.4",
                        color: "#333",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* 5. Call to Action Buttons - Responsive stacking */}
        <div className="d-flex flex-column flex-sm-row gap-3 mt-5">
          <Link
            href="/"
            className="btn border-0 fw-bold px-4 py-2 text-center"
            style={{
              backgroundColor: "#EEF430",
              color: "#000",
              fontSize: "14px",
              borderRadius: "4px",
              minWidth: "180px",
            }}
          >
            View Our Portfolio
          </Link>
          <Link
            href="/solutionservice"
            className="btn border-0 fw-bold px-4 py-2 text-center"
            style={{
              backgroundColor: "#EEF430",
              color: "#000",
              fontSize: "14px",
              borderRadius: "4px",
              minWidth: "180px",
            }}
          >
            Work With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
