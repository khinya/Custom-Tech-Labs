"use client";
import Image from "next/image";

const sectors = [
  { name: "Healthcare", img: "/appsimg/d1.png" },
  { name: "Retail", img: "/appsimg/d2.png" },
  { name: "Education", img: "/appsimg/d3.png" },
  { name: "Construction", img: "/appsimg/d4.png" },
  { name: "Manufacturing", img: "/appsimg/d5.png" },
];

export default function SectorsWeBuild() {
  return (
    <section className="container-fluid p-0 pt-0 d-flex flex-column align-items-center gap-0">
      {/* Header Title Bar */}
      <div className="container d-flex justify-content-center">
        <div
          className="col-12 col-md-8 col-lg-7 bg-yellow py-3 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#eef430" }}
        >
          <h1
            className="fw-bold mb-0 text-center"
            style={{ fontSize: "calc(1.1rem + 1vw)" }}
          >
            Sectors We Build For
          </h1>
        </div>
      </div>

      {/* Subheading */}
      <div className=" text-center px-3">
        <h3
          className="fw-normal mb-0"
          style={{ fontSize: "calc(0.9rem + 0.2vw)" }}
        >
          <span className="fw-bold">
            Different industries. Same friction. Same fix.
          </span>
          <span className="d-none d-md-inline">
            <br />
          </span>{" "}
          We connect what should never have been separate in the first place.
        </h3>
      </div>

      {/* Sector Grid */}
      <div
        className="container my-0 "
        style={{ width: "70%", maxWidth: "1200px" }}
      >
        <div className="row g-4 justify-content-center">
          {sectors.map((sector, index) => (
            <div key={index} className="col-6 col-md-4">
              <div
                className="d-flex flex-column justify-content-center align-items-center py-0 px-2 h-100 shadow-sm transition-hover"
                style={{
                  backgroundColor: "#f5f5f5",
                  borderRadius: "4px",
                  border: "2px solid #eef430",
                }}
              >
                <div
                  className="mb-2"
                  style={{ width: "100%", maxWidth: "120px" }}
                >
                  <Image
                    className="img-fluid"
                    src={sector.img}
                    width={152}
                    height={80}
                    alt={sector.name}
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <h4
                  className="fw-semibold mb-0 text-center"
                  style={{ fontSize: "1rem" }}
                >
                  {sector.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Statement */}
      <div className="mb-5 text-center px-3">
        <h2
          className="fw-normal mx-auto"
          style={{ fontSize: "calc(0.9rem + 0.3vw)", maxWidth: "700px" }}
        >
          The industries may differ, but the goal stays the same:
          <span className="d-none d-md-inline">
            <br />
          </span>{" "}
          Replace fragmented technology with connected digital ecosystems.
        </h2>
      </div>

      {/* Bottom Accent Bar */}
      <div
        className="w-100 mt-auto"
        style={{
          borderTop: "20px solid #eef430",
          borderBottom: "20px solid #000",
        }}
      ></div>

      <style jsx>{`
        .transition-hover {
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }
        .transition-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
        }
      `}</style>
    </section>
  );
}
