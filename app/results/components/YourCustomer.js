'use client';
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { MdOutlineSecurity } from "react-icons/md";
import { FaBoltLightning } from "react-icons/fa6";
import { IoMdStopwatch } from "react-icons/io";

export default function YourCustomer() {
    return (
        <section className="container-fluid p-0">
            {/* Header Banner */}
            <div className="bg-black py-3 ">
                <h1 className="text-white fw-bold text-center m-0" style={{ fontSize: '1.875rem' }}>
                    For Your Customers
                </h1>
            </div>

            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-md-10">
                        <h2 className="fst-italic fw-medium text-center mb-0" style={{ fontSize: '1.5rem', lineHeight: '1.4' }}>
                            Customers only see the front end. <br className="d-none d-md-block" /> 
                            But their experience depends on everything behind it.
                        </h2>
                    </div>
                </div>

                <div className="row g-4 lg-g-5 align-items-start justify-content-center">
                    {/* Left Column: Image */}
                    <div className="col-12 col-md-5 col-lg-4 text-center">
                        <Image 
                            src='/system/customer.jpg' 
                            alt="Customer Experience" 
                            width={417} 
                            height={626} 
                            className="img-fluid rounded shadow-sm"
                            style={{ height: 'auto', maxWidth: '100%' }}
                        />
                    </div>

                    {/* Right Column: Comparison List */}
                    <div className="col-12 col-md-7 col-lg-5">
                        <div className="d-flex flex-column gap-4">
                            
                            {/* Negative Side */}
                            <div>
                                <p className="text-secondary fw-medium mb-3">When systems aren’t connected, things break:</p>
                                <div className="d-flex flex-column gap-2">
                                    <div className="p-3 d-flex align-items-center gap-3 rounded fw-bold" style={{ backgroundColor: '#fee6e5' }}>
                                        <GoDotFill className="text-danger flex-shrink-0" /> 
                                        <span>Delays</span>
                                    </div>
                                    <div className="p-3 d-flex align-items-center gap-3 rounded fw-bold" style={{ backgroundColor: '#fee6e5' }}>
                                        <GoDotFill className="text-danger flex-shrink-0" /> 
                                        <span>Inaccurate information</span>
                                    </div>
                                    <div className="p-3 d-flex align-items-center gap-3 rounded fw-bold" style={{ backgroundColor: '#fee6e5' }}>
                                        <GoDotFill className="text-danger flex-shrink-0" /> 
                                        <span>Missed expectations</span>
                                    </div>
                                </div>
                            </div>

                            {/* Positive Side */}
                            <div>
                                <p className="text-secondary fw-medium mb-3">With the right system integration, everything stays aligned.</p>
                                <div className="d-flex flex-column gap-2">
                                    <div className="p-3 d-flex align-items-center gap-3 rounded fw-bold" style={{ backgroundColor: '#f7fbce' }}>
                                        <MdOutlineSecurity className="flex-shrink-0" style={{ color: '#757a34' }} /> 
                                        <span>Accurate data</span>
                                    </div>
                                    <div className="p-3 d-flex align-items-center gap-3 rounded fw-bold" style={{ backgroundColor: '#f7fbce' }}>
                                        <FaBoltLightning className="flex-shrink-0" style={{ color: '#757a34' }} /> 
                                        <span>Faster responses</span>
                                    </div>
                                    <div className="p-3 d-flex align-items-center gap-3 rounded fw-bold" style={{ backgroundColor: '#f7fbce' }}>
                                        <IoMdStopwatch className="flex-shrink-0" style={{ color: '#757a34' }} /> 
                                        <span>Consistent service</span>
                                    </div>
                                </div>
                            </div>

                            <p className="fw-bold fs-5 mt-2">
                                The result? An experience your customers <br className="d-none d-md-block" />
                                can trust — every time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}