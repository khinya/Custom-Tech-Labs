"use client";
import Link from "next/link";

export default function OurApproach() {
  const apperData = [
    {
      items: [
        {
          title: `We Start With Your Workflow`,
          desc: `Before we build anything, we understand how your business operates today. Our consulting and system integration services focus on real processes, not assumptions.`,
        },
        {
          title: `We Connect With Purpose`,
          desc: `Every integration is designed to move data securely and reliably between systems.`,
        },
      ],
    },
    {
      items: [
        {
          title: `We Build for What’s Next`,
          desc: `Flexible architecture that supports new tools without needing to start over.`,
        },
        {
          title: `We Prioritize Stability`,
          desc: `No surprises. No downtime. Just systems you can depend on.`,
        },
      ],
    },
    {
      items: [
        {
          title: `We Improve Over Time`,
          desc: `We track how your systems perform in real use, and refine where needed.`,
        },
      ],
    },
  ];

  return (
    <section className="container  py-5" style={{ backgroundColor: "#f5f5f5" }}>
      <div
        className="d-flex flex-column align-items-center gap-4"
        style={{
          width: "86%",
          margin: "0px auto",
        }}
      >
        {/* Section Badge */}
        <h1
          className="badge rounded-pill px-4 py-2 bg-black fw-bold"
          style={{
            color: "#eef430",
            fontSize: "1.2rem",
            whiteSpace: "normal",
            padding: "16px 48px !important",
            borderRadius: "10px !important",
          }}
        >
          Our Approach To Integration
        </h1>

        {/* Main Title */}
        <h2
          className="fw-semibold text-center mb-4"
          style={{ fontSize: "calc(1.4rem + 1vw)" }}
        >
          How We Build Systems That Work Together
        </h2>

        {/* Grid Mapping */}
        <div className="w-100">
          {apperData.map((group, groupIdx) => (
            <div key={groupIdx} className="row g-4 mb-4 justify-content-center">
              {group.items.map((item, itemIdx) => (
                <div key={itemIdx} className="col-12 col-md-6">
                  <div className="h-100 p-4 shadow-sm d-flex flex-column justify-content-center border-approach">
                    <h3
                      className="fw-bold mb-2"
                      style={{ color: "#034a27", fontSize: "1.4rem" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mb-0 text-muted lh-base"
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
         <div className="d-flex flex-column flex-md-row gap-3 ps-4 pt-4 w-100 justify-content-center">

    <Link
        href="/"
        className="btn fw-bold border-0 shadow-sm transition-scale d-flex align-items-center justify-content-center"
        style={{
            backgroundColor: '#EEF430',
            borderRadius: '4px',
            fontSize: '14px',
            height: '52px',
            width: '240px'
        }}
    >
        View our Portfolio
    </Link>

    <Link
        href="/solutionservice"
        className="btn fw-bold border-0 shadow-sm transition-scale d-flex align-items-center justify-content-center"
        style={{
            backgroundColor: '#EEF430',
            borderRadius: '4px',
            fontSize: '14px',
            height: '52px',
            width: '240px'
        }}
    >
        Work With Us
    </Link>

</div>
      </div>

      <style jsx>{`
        .border-approach {
          border-left: 20px solid #eef430;
          background-color: #fff;
        }
        @media (max-width: 768px) {
          .border-approach {
            border-left: 8px solid #eef430;
          }
        }
        .transition-scale {
          transition: transform 0.2s ease;
        }
        .transition-scale:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
