'use client';
import Image from "next/image";
import Link from "next/link";

export default function ForYourCustomers() {
    return (
        <section className="container-fluid py-2">
            <div className="container py-5 px-4 px-md-5 rounded-3" style={{ backgroundColor: '#ebebeb', width: '90%' }}>

                {/* Section Header */}
             <div className="text-center mb-5">
  <h2 className="customers-heading">
    For Your Customers
  </h2>
</div>

                {/* Top Content Row */}
                <div className="row g-4 align-items-start mb-2">
                    {/* Left Image */}
                    <div className="col-12 col-lg-6">
                        <div className="rounded-3 overflow-hidden shadow-sm">
                            <Image
                                src="/web/customer.jpg"
                                width={650}
                                height={450}
                                alt="Customer Experience"
                                className="img-fluid w-100 h-auto object-fit-cover"
                            />
                        </div>
                    </div>

                    {/* Right Text Content */}
                    <div className="col-12 col-lg-6">
                     <h1 className="brand-experience-heading fst-italic">
  Your website is often the first <br />
  experience someone has with your <br />
  brand.
</h1> 

                       <p className="interaction-perception-text">
  Every interaction shapes perception.
</p>
                        {/* Highlight Label */}
                    <div className="speed-badge-container">
  <h3 className="speed-badge-text">
    Speed. Navigation. Structure. Flow.
  </h3>
</div>
                    </div>
                </div>

                {/* Bottom Text Content */}
              <div className="mt-4">
  {/* Core Paragraph Block */}
  <p className="digital-env-text">
    We build custom digital environments that guide users with clarity— whether that means <span className="highlight-bold">custom ecommerce website development</span>, service pages, booking systems, advanced integrations or modern <span className="highlight-bold">AI features in website experiences</span> or integrated portals.
  </p>

  {/* Platform Tagline Header */}
  <h3 className="platform-guide-heading">
    We build platforms that guide users through information and action.
  </h3>

  {/* Confidence Feature Block */}
  <div className="mb-5">
    <h3 className="function-heading">
      Because a well-built website doesn’t just function.
    </h3>
    
    <div className="confidence-badge">
      <h3 className="confidence-badge-text">
        It builds confidence.
      </h3>
    </div>
  </div>


                    {/* Action Buttons */}
 <div class="btn-group-container">
    <button class="btn-action-primary">
        View Our Portfolio →</button>
        <button class="btn-action-primary">Work With Us →</button>
        </div> 


                    
                </div>
            </div>

            <style jsx>{`
                .hover-scale {
                    transition: transform 0.3s ease;
                }
                .hover-scale:hover {
                    transform: scale(1.05);
                }
                .text-yellow {
                    color: #EEF430;
                }
            `}</style>
        </section>
    );
}