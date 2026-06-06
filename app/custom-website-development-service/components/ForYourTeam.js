'use client';
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

const points = [
    "No bottlenecks.",
    "No fragmented systems.",
    "No fragile builds that break under growth.",
];

export default function ForYourTeam() {
    return (
        <>

            <section className="container-fluid mb-5 py-1" >
                <div className="container py-lg-5" style={{ width: '90%' }}>

                   <div className="d-flex justify-content-center">
    <h1 className="design-spec-cta mb-5">
        Two Sides of the Same System
    </h1>
</div> 

<div className="text-center">
<h3 className="team-subheading">
  For Your Team
</h3>
</div>

  <div className="website-dependency-banner fst-italic">
  Your website shouldn’t create operational dependency
</div>

                    {/* Main Content Row */}
                    <div className="row g-4 g-lg-5 align-items-start ">

                        <div className="col-12 col-lg-7">
                            <div className="overflow-hidden">
                                <Image
                                    src="/web/same.jpg"
                                    width={818}
                                    height={816}
                                    alt="Team Image"
                                    className="img-fluid w-100 object-fit-cover"
                                  
                                />
                            </div>
                        </div>



                        <div className="col-12 col-lg-5" >
                          <p className="operational-desc-text">
  If every update requires developer support, momentum slows. If systems don’t connect, your team compensates manually.
</p>
                            <h3 className="control-heading">
  Well-structured custom website development restores control.
</h3>

                            <p className="website-features-text fst-italic">
  We build custom websites that integrate your tools, simplify workflows and give your team structured control.
</p>

                            {/* Negative Points List */}
                        <div className="points-list-container mb-3">
  {points.map((item, idx) => (
    <div key={idx} className="points-list-row">
      <RxCross2 className="text-danger list-cross-icon" size={28} />
      <h4 className="points-list-text">
        {item}
      </h4>
    </div>
  ))}
</div>

                           
                   <div className="bg-black p-4 rounded-4">
  <h3 className="result-card-heading">
    The result is simple:
  </h3>
  <p className="result-card-text">
    You’ll gain clarity, efficiency and full autonomy.
  </p>
</div>
                          <div className="btn-group-container">
  <button className="btn-action-primary">
    View Our Portfolio &rarr;
  </button>
  <button className="btn-action-primary">
    Work With Us &rarr;
  </button>
</div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}