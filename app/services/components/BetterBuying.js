'use client';
import { BiError } from "react-icons/bi";

export default function BetterBuying() {
    return (
        <section className="container-fluid py-4 d-flex flex-column align-items-center gap-5">
            
            {/* Dark Header Card */}
            <div 
                className="container bg-black text-white p-4 p-sm-4 d-flex flex-column gap-3 rounded-4"
                style={{ minHeight: '250px', justifyContent: 'center' }}
            >
                <h1>
                    The Foundation of a <span style={{ color: '#eef430' }}>Better Buying Experience</span>
                </h1>
                <p className="mb-0">
                    Custom e-commerce solutions designed around real workflows, real customers, and real growth.
                </p>
                <p>
                    Most platforms start with features. <br className="d-none d-md-block" /> 
                    We start with how your business actually operates — and how your customers actually buy.
                </p>
            </div>

            {/* Quote/Highlight Box */}
            <div 
                className="container shadow-sm bg-white p-4 py-3"
                style={{ 
                    borderLeft: '25px solid #eef430',
                    maxWidth: '90%'
                }}
            >
                <h2 className="fs-5 fw-bold" style={{ color: '#034a27' }}>For Your Team</h2>
                <p className="fs-5 fw-normal fst-italic mb-0">
                    E-commerce shouldn’t feel like constant maintenance.
                </p>
            </div>

            {/* Pain Points Section */}
            <div className="container py-1" style={{ maxWidth: '90%' }}>
                <h3 className="fs-6 fw-semibold text-muted mb-3">If you’re:</h3>
                <ul className="list-unstyled d-flex flex-column gap-2">
                    <li className="d-flex align-items-center gap-3 fs-6">
                        <BiError className="fs-4" style={{ color: '#eef430' }} /> 
                        Managing inventory in multiple places
                    </li>
                    <li className="d-flex align-items-center gap-3 fs-6">
                        <BiError className="fs-4" style={{ color: '#eef430' }} /> 
                        Waiting on updates to go live
                    </li>
                    <li className="d-flex align-items-center gap-3 fs-6">
                        <BiError className="fs-4" style={{ color: '#eef430' }} /> 
                        Jumping between tools to track orders and customers
                    </li>
                </ul>
                <h3 className="fs-6 fw-semibold text-muted mt-4">
                    That’s not a system. That’s friction.
                </h3>
            </div>

        </section>
    );
}