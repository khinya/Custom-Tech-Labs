'use client';
import Image from "next/image";
import Link from "next/link";
import { CgAdd } from "react-icons/cg";

export default function AutoMation() {
  return (
    <section className="container-fluid py-5">
      <div className="container">
        {/* Main Wrapper Box */}
        <div 
          className="mx-auto p-4 p-md-5" 
          style={{ 
            backgroundColor: '#D9D9D9', 
            border: '2px solid #eef430',
            maxWidth: '1100px' 
          }}
        >
          {/* Header Description */}
          <h1 className="fs-6 fw-medium mb-4 lh-base text-center text-md-start">
            We build connected commerce ecosystems powered by workflow automation software—so everything works
            <br className="d-none d-md-block" /> together without manual effort.
          </h1>

          <div className="row g-4 align-items-center">
            
            {/* IMAGE COLUMN */}
            <div className="col-12 col-lg-6">
              <div className="position-relative" style={{ height: '300px' }}>
                <Image
                  src="/servicesolimg/viewOur.png"
                  fill
                  alt="Automation workflow"
                  className="object-fit-cover rounded"
                />
              </div>
            </div>

            {/* CONTENT COLUMN */}
            <div className="col-12 col-lg-6 d-flex flex-column gap-3">
              
              <div className="d-flex align-items-center gap-2 fs-6 fw-bold fst-italic">
                <CgAdd className="rounded-circle p-1" style={{ backgroundColor: '#eef430', fontSize: '24px' }} />
                Inventory stays aligned
              </div>

              <div className="d-flex align-items-center gap-2 fs-6 fw-bold fst-italic">
                <CgAdd className="rounded-circle p-1" style={{ backgroundColor: '#eef430', fontSize: '24px' }} />
                Orders move seamlessly.
              </div>

              <div className="d-flex align-items-center gap-2 fs-6 fw-bold fst-italic">
                <CgAdd className="rounded-circle p-1" style={{ backgroundColor: '#eef430', fontSize: '24px' }} />
                Updates happen in one place—everywhere
              </div>

              <p className="fs-6 fw-normal lh-relaxed mb-3 mt-2">
                So your team spends less time fixing problems…
                <br className="d-none d-md-block" />
                and more time growing the business.
              </p>

              {/* Action Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Link 
                  href="/" 
                  className="btn fw-bold px-4 py-2 border-0 shadow-sm" 
                  style={{ backgroundColor: '#EEF430', fontSize: '14px' }}
                >
                  View our Portfolio
                </Link>
                <Link 
                  href="/solutionservice" 
                  className="btn fw-bold px-4 py-2 border-0 shadow-sm" 
                  style={{ backgroundColor: '#EEF430', fontSize: '14px' }}
                >
                  Work With Us
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}