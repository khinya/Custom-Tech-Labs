"use client";
import Image from "next/image";

export default function SectorsSupport() {
  return (
    <section className="container-fluid py-5 d-flex flex-column align-items-center gap-4">
      {/* Header Highlight */}
      <div
        className=" d-flex justify-content-center align-items-center py-3"
        style={{ backgroundColor: "#eef430", maxWidth: "881px", width: "69%" }}
      >
        <h1
          className="fw-bold m-0 text-center"
          style={{ fontSize: "calc(1.2rem + 1vw)" }}
        >
          Sectors We Support
        </h1>
      </div>

      <h3 className="fs-6 fw-normal text-center px-3">
        From startups to established brands, we’ve created e-commerce systems
        for
      </h3>

      {/* Sectors Grid */}
      <div className="container-div" style={{ maxWidth: "900px" }}>
        <div className="row g-4 justify-content-center">
          {[
            { src: "support11.png", title: "Retail and Fashion" },
            { src: "support1.png", title: "Beauty and Personal Care" },
            { src: "support2.png", title: "Electronics" },
            { src: "support3.png", title: "Grocery" },
            { src: "support4.png", title: "Healthcare" },
            { src: "support5.png", title: "Marketplaces" },
          ].map((sector, index) => (
            <div
              key={index}
              className="col-6 col-md-4 d-flex justify-content-center"
            >
              <div
                className="w-100 d-flex flex-column justify-content-center align-items-center p-3 text-center"
                style={{ backgroundColor: "#f5f5f5", minHeight: "120px" }}
              >
                <Image
                  className="mb-2"
                  src={`/servicesolimg/${sector.src}`}
                  width={152}
                  height={80}
                  alt={sector.title}
                  style={{ width: "100px", height: "auto" }}
                />
                <h1 className="fw-semibold m-0" style={{ fontSize: "18px" }}>
                  {sector.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Statement */}
      <h2
        className="fs-6 fw-normal text-center px-4 mt-3 mx-auto"
        style={{ maxWidth: "700px" }}
      >
        No matter the sector, our mission is consistent:{" "}
        <span className="fw-bold">
          Turn fragmented online operations into unified, scalable commerce
          ecosystems.
        </span>
      </h2>

      {/* Decorative Footer Bar */}
      <div
        className="w-100 mt-4"
        style={{
          backgroundColor: "black",
          height: "35px",
          borderTop: "14px solid #eef430",
        }}
      ></div>
    </section>
  );
}
