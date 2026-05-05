import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Custom Websites",
      subtitle: "Performance Focused & Conversion Driven",
      description:
        "Move beyond digital brochures. We build high-converting engines that establish authority and turn visitors into long-term partners.",
      img: "/images/img1.webp",
      btnText: "VIEW WEBSITE SOLUTIONS",
      link: "/websites",
    },
    {
      title: "Custom Applications",
      subtitle: "Workflow-Specific & User-First",
      description:
        "Software should adapt to you, not the other way around. We build tools designed around how your team and customers actually move.",
      img: "/images/img2.webp",
      btnText: "EXPLORE CUSTOM APPS",
      link: "/applications",
    },
    {
      title: "System Integrations",
      subtitle: "Harmonious & Frictionless",
      description:
        "Stop the manual data entry. We make your disparate tools talk to each other so your business can run on autopilot.",
      img: "/images/img3.webp",
      btnText: "LEARN ABOUT INTEGRATIONS",
      link: "/integrations",
    },
    {
      title: "eCommerce Solutions",
      subtitle: "Scalable & Growth-Ready",
      description:
        "Remove the hurdles between your product and your customer. We design buying experiences that simplify the path to purchase.",
      img: "/images/img4.webp",
      btnText: "SEE E-COMMERCE SUCCESS",
      link: "/ecommerce",
    },
  ];

  return (
    <>
      {/* Banner */}
      <div className="banner-container">
        <div className="content-wrapper">
          <h2>
            Big Tech Capability.<br />
            Scaled For Your Growth.
          </h2>
        </div>
        <div className="yellow-border"></div>
      </div>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-6" key={index}>
                <div className="service-card">
                  <div className="card-content">

                    <h3>{service.title}</h3>
                    <p className="subtitle">
                      <em>{service.subtitle}</em>
                    </p>

                    <div className="service-img-container">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <p className="description">
                      {service.description}
                    </p>

                    <Link href={service.link} className="service-btn">
                      {service.btnText} →
                    </Link>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}