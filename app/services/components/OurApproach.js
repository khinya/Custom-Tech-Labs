'use client';
import Link from "next/link";
import { apperData } from "./approachData";

export default function OurApproach() {
  return (
    <section className="container py-5">
      <div className="d-flex flex-column align-items-center gap-4">
        
        {/* Section Badge */}
        <h2 
          className="badge bg-black px-4 py-2 fw-bold" 
          style={{ color: '#eef430', fontSize: '1.25rem', borderRadius: '12px' }}
        >
          Our Approach
        </h2>

        {/* Section Title */}
        <h1 className="fw-bold text-center mb-4 display-6">
          Our Approach to E-Commerce Development
        </h1>

        {/* Approach Cards Mapping */}
        {apperData.map((group, groupIdx) => (
          <div key={groupIdx} className="row w-100 g-4 mt-2">
            {group.items.map((item, itemIdx) => (
              <div key={itemIdx} className="col-12 col-md-6">
                <div 
                  className="h-100 p-4 bg-white shadow-sm"
                  style={{ 
                    borderLeft: '25px solid #eef430',
                    boxShadow: '0 1rem 3rem rgba(0,0,0,.075)' 
                  }}
                >
                  <h3 className="fw-bold mb-2" style={{ color: '#034a27', fontSize: '1.5rem' }}>
                    {item.title}
                  </h3>
                  <p className="mb-0 text-muted lh-relaxed" style={{ fontSize: '16px' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Call to Action Buttons */}
        <div className="d-flex flex-column flex-sm-row gap-3 mt-5">
          <Link 
            href="/" 
            className="btn fw-bold px-3 py-1 text-black d-flex align-items-center justify-content-center" 
            style={{ backgroundColor: '#EEF430', fontSize: '14px', borderRadius: '3px', minWidth: '150px', height: '34px' }}
          >
            View our Portfolio
          </Link>
          <Link 
            href="/solutionservice" 
            className="btn fw-bold px-3 py-1 text-black d-flex align-items-center justify-content-center" 
            style={{ backgroundColor: '#EEF430', fontSize: '14px', borderRadius: '3px', minWidth: '150px', height: '34px' }}
          >
            Work With Us
          </Link>
        </div>

      </div>
    </section>
  );
}