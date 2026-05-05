"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    role: "Operations Director",
    image: "/images/sarah.webp",
    text: `CustomTech Labs didn't just hand us a platform; they gave us a strategy. 
    They understood that for our business to grow, we needed to stop fighting 
    our own software and start trusting it. 
    <span>The technical execution was flawless,</span> 
    but the human insight was what truly changed our workflow.`
  },
  {
    id: 2,
    name: "John D.",
    role: "Product Manager",
    image: "/images/sarah.webp",
    text: `CustomTech Labs didn't just hand us a platform; they gave us a strategy. 
    They understood that for our business to grow, we needed to stop fighting 
    our own software and start trusting it. 
    <span>The technical execution was flawless,</span> 
    but the human insight was what truly changed our workflow.`
  },
  {
    id: 3,
    name: "Alex M.",
    role: "Lead Designer",
    image: "/images/sarah.webp",
    text: "Incredible attention to detail. They understood our brand identity perfectly from day one."
  },
  {
    id: 4,
    name: "Emily R.",
    role: "CEO",
    image: "/images/sarah.webp",
    text: "The human insight was what truly changed our workflow. Scaling was easy with their help."
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardOneData = testimonials[activeIndex];
  const cardTwoData = testimonials[activeIndex + 1] || testimonials[0];

  return (
    <section className="testimonial-section">

      <div className="carousel-view">

        {/* Left peek */}
        <div className="side-card" />

        {/* Card 1 */}
        <div className="testimonial-card">
          <CardContent item={cardOneData} />
        </div>

        {/* Card 2 */}
        <div className="testimonial-card second-card">
          <CardContent item={cardTwoData} />
        </div>

        {/* Right peek */}
        <div className="side-card" />

      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: testimonials.length - 1 }).map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>

      <style jsx>{`

        .testimonial-section {
          padding: 0px 0;
          background: #fff;
          overflow: hidden;
        }

        .carousel-view {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .testimonial-card {
          flex: 1;
          max-width: 500px;
          background: #a3a3a3;
          border-radius: 12px;
          padding: 40px;
          min-height: 345px;
        }

        .side-card {
          min-width: 100px;
          height: 340px;
          background: #a3a3a3;
          border-radius: 5px;
          opacity: 0.5;
        }

        .pagination {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 40px;
        }

        .dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid #999;
          background: transparent;
          cursor: pointer;
        }

        .dot.active {
          background: #ccc;
        }

        /* =========================
           MOBILE FIX (NO JS ISSUES)
        ========================== */

        @media (max-width: 900px) {

          .carousel-view {
            flex-direction: column;
            gap: 20px;
          }

          .side-card {
            display: none;
          }

          /* ONLY ONE CARD ON MOBILE */
          .second-card {
            display: none;
          }

          .testimonial-card {
            width: 100%;
            max-width: 100%;
          }
        }

      `}</style>

    </section>
  );
}

/* =========================
   CARD COMPONENT
========================= */

function CardContent({ item }) {
  return (
    <div className="content-fade-in">

      <div className="testimonial-header">

        <Image
          src={item.image}
          alt={item.name}
          width={75}
          height={75}
          className="avatar"
        />

        <div>
          <h3>{item.name}</h3>
          <p className="role">{item.role}</p>
        </div>

      </div>

      <div className="stars">★★★★★</div>

      <p
        className="testimonial-text"
        dangerouslySetInnerHTML={{ __html: item.text }}
      />

      <style jsx>{`

        .content-fade-in {
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .testimonial-header {
          display: flex;
          gap: 20px;
          align-items: center;
          margin-bottom: 20px;
        }

        .avatar {
          border-radius: 12px;
          object-fit: cover;
        }

        h3 {
          font-size: 22px;
          font-weight: 700;
        }

        .role {
          font-size: 16px;
          font-style: italic;
        }

        .stars {
          color: #ffb400;
          margin-bottom: 10px;
        }

        .testimonial-text {
          font-size: 16px;
          font-style: italic;
          line-height: 1.5;
        }

        .testimonial-text span {
          font-weight: 700;
        }

      `}</style>

    </div>
  );
}