
'use client';
import Image from "next/image";

const sectors = [
    { name: "Healthcare", img: "/appsimg/d1.png" },
    { name: "Retail", img: "/appsimg/d2.png" },
    { name: "Education", img: "/appsimg/d3.png" },
    { name: "Construction", img: "/appsimg/d4.png" },
    { name: "Manufacturing", img: "/appsimg/d5.png" },
];

export default function SectorsWeBuild() {
    return (
        <section className="container-fluid p-0  d-flex flex-column align-items-center " style={{marginTop:'-12%'}}>
            
            {/* Header Title Bar */}
            <div className="container d-flex justify-content-center">
                <div className="col-12 col-md-8 col-lg-7 bg-yellow py-3 d-flex justify-content-center align-items-center" 
                     style={{ backgroundColor: '#eef430' }}>
                    <h1 className="fw-bold mb-0 text-center " style={{ fontSize: 'calc(1.1rem + 1vw)' }}>
                        Sectors We Build For
                    </h1>
                </div>
            </div>

            {/* Subheading */}
            <div className="container text-center " style={{marginTop:'-9%'}}>
                <h3 className="fw-normal mb-0" style={{ fontSize: 'calc(0.9rem + 0.2vw)' }}>
                    <span className="fw-bold" style={{fontStyle:'italic'}}>Different industries. Same friction. Same fix.</span>
                    <span className="d-none d-md-inline" style={{fontSize:'3em'}}><br /></span>
                    {" "}We connect what should never have been separate in the first place.
                </h3>
            </div>

           
<div
  className="container-fluid py-4" style={{marginBottom:'5%'}}

>

  {/* Top Row */}
  <div
    className="d-flex justify-content-center"
    style={{ gap: '40px' }}
  >

    {sectors.slice(0, 3).map((sector, index) => (
      <div
        key={index}
        className="d-flex flex-column align-items-center justify-content-center"
        style={{
          width: '215px',
          height: '150px',
          border: '1px solid #EEF430',
          backgroundColor: '#f5f5f5'
        }}
      >

        {/* Icon */}
        <Image
          src={sector.img}
          width={72}
          height={72}
          alt={sector.name}
          className="img-fluid mb-2"
        />

        {/* Title */}
        <h6
          className="fw-bold mb-0 text-center"
          style={{
            fontSize: '0.95rem',
            color: '#222'
          }}
        >
          {sector.name}
        </h6>

      </div>
    ))}

  </div>

  {/* Bottom Row */}
  <div
    className="d-flex justify-content-center mt-4"
    style={{ gap: '40px' ,paddingTop:'2%'}}
  >

    {sectors.slice(3, 5).map((sector, index) => (
      <div
        key={index}
        className="d-flex flex-column align-items-center justify-content-center"
        style={{
          width: '215px',
          height: '150px',
          border: '1px solid #EEF430',
         backgroundColor: '#f5f5f5'
        }}
      >

        {/* Icon */}
        <Image
          src={sector.img}
          width={72}
          height={72}
          alt={sector.name}
          className="img-fluid mb-2"
        />

        {/* Title */}
        <h6
          className="fw-bold mb-0 text-center"
          style={{
            fontSize: '0.95rem',
            color: '#222'
          }}
        >
          {sector.name}
        </h6>

      </div>
    ))}

  </div>

  {/* Bottom Text */}
  <div className="text-center mt-4">

    <p
      className="fw-bold fst-italic mb-0"
      style={{
        fontSize: '1.1rem',
        color: '#222',
        lineHeight: '1.5',
        paddingTop:'3%'
      }}
    >
      The industries may differ, but the goal stays the same:
      <br />
      Replace fragmented technology with connected digital ecosystems.
    </p>

  </div>

</div>
            {/* Bottom Statement */}
           
            {/* Bottom Accent Bar */}
            <div className="w-100 mt-auto">
                <div className="w-100" style={{ height: '14px', backgroundColor: '#eef430' }}></div>
                <div className="w-100 bg-black" style={{ height: '35px' }}></div>
            </div>

            <style jsx>{`
                .transition-hover {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .transition-hover:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1) !important;
                }
            `}</style>
        </section>
    );
}