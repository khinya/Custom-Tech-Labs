'use client';
import Image from "next/image";
import Link from "next/link";

export default function BannerPage() {
    return (
        <>
        <section 
            className="container-fluid py-5 ps-3 ps-lg-5 d-flex flex-column justify-content-center position-relative overflow-hidden"
            style={{ 
                minHeight: '80vh',
                backgroundImage: "url('/system/hero.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                
            }}
            
        >
            

            {/* Mobile Image - Visible only on xs/sm */}
            <div className="d-md-none w-100 mb-0 ps-0" style={{ height: '250px', position: 'relative',objectFit:"cover" }}>
                <Image
                    src="/system/hero1.png"
                    fill
                    priority
                    alt="hero Banner"
                    
                />
            </div>

            <div className="container px-md-5 banner-caption">
                <div className="row">
                    <div className="col-12 col-md-7 col-lg-6 text-center text-md-start">
                        
                        {/* Heading */}
                        <h1 className="display-5 fw-extrabold mb-4 lh-tight main-heading">
                            Systems That Work Together — So Your <br className="d-none d-md-block" />
                            Business Can Move Faster
                        </h1>
    
                        {/* Paragraphs */}
                        <p className="fs-5 fw-semibold mb-3 lh-base font-albert">
                            At Custom Labs, we provide system integration services that connect 
                            your tools, remove manual work, and create a single system your 
                            team can rely on.
                        </p>
                        
                        <p className="fs-6  mb-5  font-albert"
                        
                        >
                            Because disconnected systems don’t just slow you down, they create 
                            problems you shouldn’t have to manage.
                        </p>

                        {/* Buttons */}
                          <div className="d-flex flex-column flex-md-row gap-3 ps-1 pt-4 w-100 justify-content-center">

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
                </div>
            </div>

            <style jsx>{`
                .hover-scale:hover {
                    transform: scale(1.05);
                }
                @media (max-width: 767px) {
                    section {
                        background-image: none !important;
                    }
                }
            `}</style>
        </section>
            <div className="yellow"></div>
            <div className="black"></div>
    </>);
}