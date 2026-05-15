"use client";
import Link from "next/link";

export default function OperatingDoctrine() {
  const apperData = [
    {
      items: [
        {
          title: `We Start with friction`,
          desc: `If the workflow isn’t clear, the app won’t fix it.`,
        },
        {
          title: `We design for real behavior`,
          desc: `Not ideal behavior. Not assumed behavior.`,
        },
      ],
    },
    {
      items: [
        {
          title: `We Build for longevity`,
          desc: `No shortcuts. No tech debt traps.`,
        },
        {
          title: `We launch without chaos`,
          desc: `If adoption requires force, the system is wrong.`,
        },
      ],
    },
    {
      items: [
        {
          title: `We refine in reality`,
          desc: `Usage tells the truth. We follow it.`,
        },
      ],
    },
  ];

  return (
    <section className="container py-5 d-flex flex-column align-items-center gap-4 mt-2">
      {/* Badge Heading */}
      <h1
        className="badge rounded-pill   bg-black fw-bold"
        style={{
          color: "#eef430",
          fontSize: "1.1rem",
          whiteSpace: "normal",
          padding: " 20px 90px",
          borderRadius: "10px !important",
          fontWeight: "500 !important",
          fontSize: "21px",
        }}
      >
        Our Operating Doctrine
      </h1>

      {/* Subtitle */}
      <h2
        className="fw-semibold text-center mb-4 px-2"
        style={{ fontSize: "calc(1.3rem + .8vw)" }}
      >
        We follow the same philosophy outlined across our platform
      </h2>

      {/* Grid Mapping */}
      <div className="w-100">
        {apperData.map((group, groupIdx) => (
          <div key={groupIdx} className="row g-6 mb-4 justify-content-center">
            {group.items.map((item, itemIdx) => (
              <div
                key={itemIdx}
                className="col-12 col-md-6 "
                style={{ width: "494px", height: "123px" }}
              >
                <div className="h-100 p-4 shadow-sm border-0 d-flex flex-column justify-content-center bg-white shadow-hover transition-all">
                  {/* Highlighted Title */}
                  <div className="mb-2">
                    <h3
                      className="d-inline-block px-2 fw-bold"
                      style={{
                        backgroundColor: "#eff430",
                        color: "#034a27",
                        fontSize: "1.4rem",
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p
                    className="mb-0 text-muted lh-relaxed"
                    style={{ fontSize: "1rem" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="d-flex flex-column flex-sm-row gap-3 pt-4">
        <Link
          href="/"
          className="btn fw-bold px-4 py-2 text-black hover-scale d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "#EEF430",
            minWidth: "170px",
            height: "45px",
            borderRadius: "6px",
          }}
        >
          View our Portfolio
        </Link>
        <Link
          href="/solutionservice"
          className="btn fw-bold px-4 py-2 text-black hover-scale d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "#EEF430",
            minWidth: "170px",
            height: "45px",
            borderRadius: "6px",
          }}
        >
          Work With Us
        </Link>
      </div>

      <style jsx>{`
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
        .shadow-hover {
          transition: box-shadow 0.3s ease;
        }
        .shadow-hover:hover {
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1) !important;
        }
      `}</style>
    </section>
  );
}
