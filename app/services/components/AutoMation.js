'use client';
import Image from "next/image";
import Link from "next/link";
// Import FaCheck for the icons as seen in image_57659c.png
import { FaCheck } from "react-icons/fa6"; 

export default function AutoMation() {
  return (
    <section className="container-fluid-div ">
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
          <h1 className="fs-6  mb-4 lh-base text-center text-md-start text-uppercase">
            We build connected commerce ecosystems powered by workflow automation software—so everything works
             together without manual effort.
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
              
              {/* List Item 1 */}
              <div className="d-flex align-items-center gap-2 fs-6 fw-bold fst-italic">
                <FaCheck 
                  className="rounded-circle p-1" 
                  style={{ 
                    backgroundColor: '#eef430', 
                    color: '#000', 
                    fontSize: '18px', 
                    display: 'inline-block'
                  }} 
                />
                Inventory stays aligned
              </div>

              {/* List Item 2 */}
              <div className="d-flex align-items-center gap-2 fs-6 fw-bold fst-italic">
                <FaCheck 
                  className="rounded-circle p-1" 
                  style={{ 
                    backgroundColor: '#eef430', 
                    color: '#000', 
                    fontSize: '18px', 
                    display: 'inline-block'
                  }} 
                />
                Orders move seamlessly.
              </div>

              {/* List Item 3 */}
              <div className="d-flex align-items-center gap-2 fs-6 fw-bold fst-italic">
                <FaCheck 
                  className="rounded-circle p-1" 
                  style={{ 
                    backgroundColor: '#eef430', 
                    color: '#000', 
                    fontSize: '18px', 
                    display: 'inline-block'
                  }} 
                />
                Updates happen in one place—everywhere
              </div>

              <p className="mb-0 mt-2">
                So your team spends less time fixing problems… 
                and more time growing the business.
              </p>

              {/* Action Buttons - Matching the gap and style of image_583e97.png */}
              <div className="d-flex flex-column flex-sm-row gap-3 mt-3">
                <Link 
                  href="/" 
                  className="btn fw-bold px-4 py-2 border-0 shadow-sm" 
                  style={{ backgroundColor: '#EEF430', fontSize: '14px', borderRadius: '0' }}
                >
                  View our Portfolio
                </Link>
                <Link 
                  href="/solutionservice" 
                  className="btn fw-bold px-4 py-2 border-0 shadow-sm" 
                  style={{ backgroundColor: '#EEF430', fontSize: '14px', borderRadius: '0' }}
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