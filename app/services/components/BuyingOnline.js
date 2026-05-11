'use client';
import Image from "next/image";
import { CgAdd } from "react-icons/cg";
import { buyData } from './buyOnlineData';
import Link from "next/link";

export default function BuyingOnline() {
    return (
        <section className="py-5 overflow-hidden">
            {/* Dark Header Strip */}
            <div className="bg-black text-white py-5 mb-5">
                <div className="container ps-md-5">
                    <h2 className="fs-4 fw-medium mb-1">For Your Customers</h2>
                    <h1 className="display-6 fw-bold">
                        Buying online should feel <span style={{ color: '#eef430' }}>effortless</span>
                    </h1>
                </div>
            </div>

            {/* Sub-header Content */}
            <div className="container ps-md-5 mb-4">
                <h3 className="fs-6 fw-bold fst-italic">Fast pages. Clear paths. No confusion at checkout.</h3>
                <p className="fs-6 fw-normal">
                    Because when the experience feels hard, customers don’t stay — they leave. <br className="d-none d-md-block" />
                    We focus on ecommerce website design development that guides people naturally from browsing to buying.
                </p>
            </div>

            {/* Horizontal Scroll Gallery */}
            <div className="container-fluid px-md-5">
                <div 
                    className="d-flex flex-nowrap gap-4 overflow-auto pb-4 hide-scrollbar" 
                    style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
                >
                    {buyData.map((data, idx) => (
                        <div 
                            key={idx} 
                            className="flex-shrink-0" 
                            style={{ width: '280px' }}
                        >
                            <Image
                                src={data.img}
                                width={300}
                                height={160}
                                alt="Service Feature"
                                className="img-fluid rounded-4 mb-3 object-fit-cover"
                                style={{ height: '160px', width: '100%' }}
                            />
                            <div className="d-flex align-items-start gap-2">
                                <CgAdd 
                                    className="rounded-circle p-1 flex-shrink-0" 
                                    style={{ backgroundColor: '#eef430', fontSize: '24px' }} 
                                />
                                <h4 className="fs-6 fw-normal mb-0 lh-sm">
                                    {data.first} <br />
                                    {data.last}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer / CTA Section */}
            <div className="container ps-md-5 mt-5">
                <h2 className="fs-6 fw-bold mb-1">The result?</h2>
                <p className="fs-6 fw-bold fst-italic mb-4">A store that feels easy to trust - and even easier to buy from.</p>
                
                <div className="d-flex gap-3">
                    <Link 
                        href="/" 
                        className="btn fw-bold px-3 py-1 text-black d-flex align-items-center justify-content-center" 
                        style={{ backgroundColor: '#EEF430', fontSize: '14px', borderRadius: '3px', minHeight: '34px' }}
                    >
                        View our Portfolio
                    </Link>
                    <Link 
                        href="/solutionservice" 
                        className="btn fw-bold px-3 py-1 text-black d-flex align-items-center justify-content-center" 
                        style={{ backgroundColor: '#EEF430', fontSize: '14px', borderRadius: '3px', minHeight: '34px' }}
                    >
                        Work With Us
                    </Link>
                </div>
            </div>

            {/* Custom CSS for hidden scrollbar if needed */}
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}