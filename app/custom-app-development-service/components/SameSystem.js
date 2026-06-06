"use client";
import Image from "next/image";
import Link from "next/link";
import Btn from "./btn";

export default function SameSystem() {
  return (
    <section
      className="container px-20 py-5 d-flex flex-column align-items-center align-items-md-start gap-4"
      style={{ padding: "0px 67px" }}
    >
      {/* Main Section Header */}
  <button className="design-spec-cta">
  Two Sides of the Same System  

</button>

      {/* Content Boxes Container */}
      <div className="w-100 d-flex flex-column gap-5">
        {/* For Your Team Box */}
        <div
          className="p-4 p-md-5 rounded-3 d-flex flex-column gap-4"
          style={{
            backgroundColor: "#d9d9d9",
            border: "2px solid black",
            borderRadius: "10px",
          }}
        >
          <h2
            className="fw-bold m-0"
            style={{ color: "#034a27", fontSize: "1.5rem" }}
          >
            For Your Team
          </h2>

          <div className="overflow-hidden rounded">
            <Image
              src="/appsimg/team.jpg"
              width={535}
              height={277}
              alt="Internal Team Operations"
              className="img-fluid"
            />
          </div>

          <p className="fs-6 fw-medium fst-italic mb-0">
            When operations rely on spreadsheets, disconnected tools, or manual
            workarounds, growth slows down. <br />
            <br />
            We build internal applications around how your business actually
            operates, turning technology from daily frustration into <br />{" "}
            operational leverage. <br />
            <br />
            Let’s centralize workflows, connect systems, and give leadership
            real-time visibility without overwhelming your team. 
          </p> 

          <div className="d-flex flex-column flex-sm-row gap-3">
            <Btn/>
          </div>
        </div>

        {/* For Your Customers Box */}
        <div
          className="p-4 p-md-5 rounded-3 d-flex flex-column gap-4"
          style={{
            backgroundColor: "#d9d9d9",
            border: "2px solid black",
            borderRadius: "10px",
          }}
        >
          <h2
            className="fw-bold m-0"
            style={{ color: "#034a27", fontSize: "1.5rem" }}
          >
            For Your Customers
          </h2>

          <div className="overflow-hidden rounded">
            <Image
              src="/appsimg/customer.jpg"
              width={535}
              height={277}
              alt="Customer Experience"
              className="img-fluid"
            />
          </div>

          <p className="fs-6 fw-medium fst-italic  mb-0 w-60">
            Your customers experience your brand through the systems they touch.{" "}
            <br /> <br />
            Client portals. Booking tools. Member platforms. Mobile apps. <br />{" "}
            <br />
            We design customer-facing applications around the customer journey
            to ensure experience feels intuitive from the first click making
            buying and engagement easy so your digital experience builds trust
            instead of confusion. <br /> Because great software doesn’t just
            support operations, it shapes perception.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3">
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
