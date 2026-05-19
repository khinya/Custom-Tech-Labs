'use client';

import Link from "next/link";


export default function BannerPage() {
    return (
        // <>
        // <section>
        //     <div
        //         className="hero"
        //         style={{ backgroundImage: "url('/web/main.png')" }}
        //     >
        //         <div className="container px-5 py-5">
        //             <div className="hero-box">
        //                 <div className="row align-items-center">
        //                     <div className="col-lg-6">
        //                         <h1> Custom Website That Build Authority and Drive Action.</h1>

        //                         <p>
        //                         </p>

        //                         <div className="d-flex gap-3">
        //                             <Link href={'/'}><button className="btn-warning-custom">
        //                                 View Our Portfolio
        //                             </button></Link>

        //                             <button className="btn-warning-custom">Work With Us</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         </div>

        //     </section>
        //     <div style={{width:"100%",borderTop:"15px solid #eff430", borderBottom:"15px solid #000"}}></div>

        // </>

        <>
            <section
                className="hero"
                style={{ backgroundImage: "url('/web/main.png')" }}
            >
                <div className="container px-5 py-5">
                    <div className="hero-box">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h1 className="fs-1">Custom Website That Build Authority and Drive Action.</h1>

                                <p>
                                    High performance website or Strategic digital platforms engineered for clarity, usability and measurable growth.

                                </p>

                                <div className="d-flex gap-3">
                                    <button className="btn-warning-custom">
                                        View Our Portfolio
                                    </button>

                                    <button className="btn-warning-custom">Work With Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Rectangle 178 - Yellow Accent Bar */}
            </section>
            <div style={{ width: "100%", borderTop: '20px solid #eff430', borderBottom: '20px solid #000', }}></div>

        </>
    );
}