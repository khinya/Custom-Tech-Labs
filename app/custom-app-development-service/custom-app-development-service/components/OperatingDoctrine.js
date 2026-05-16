"use client";

import React from 'react';
import Btn from './btn';

export default function OperatingDoctrine() {
  return (
    <>
      <div>
        {/* Title Header */}
        <div className="w-100 d-flex justify-content-center align-items-center py-4">
          <p 
            className="fs-2 text-center uppercase tracking-wider bg-dark w-50 p-4 rounded-4"
            style={{ 
              color: '#eef430', 
              fontWeight: '200', // font-thin badlaav
              letterSpacing: '0.05em' 
            }}
          >
            Our Operating Doctrine
          </p>
        </div>

        {/* Subtitle Section */}
        <div className="d-flex justify-content-center align-items-center flex-column mb-5 px-3 text-center">
          <p className="fw-bold fs-3">
            We follow the same philosophy outlined across our platform
          </p>
        </div>

        {/* Responsive Cards Grid Container */}
        <div className="container px-3 mb-4" style={{ maxWidth: '1140px' }}>
          <div className="row g-4 justify-content-center">

            {/* Card 1 */}
            <div className="col-12 col-md-6">
              <div 
                className="d-flex shadow-sm bg-white overflow-hidden" 
                style={{ minHeight: '140px', borderTopRightRadius: '0.375rem', borderBottomRightRadius: '0.375rem' }}
              >
                <div className="d-flex flex-column justify-content-center p-4" style={{ maxWidth: '448px' }}>
                  <p 
                    className="fs-5 fw-bold mb-2 px-2 py-1" 
                    style={{ color: '#034a27', backgroundColor: '#eef430', width: 'fit-content' }}
                  >
                    We Start with friction
                  </p>
                  <p className="text-muted small lh-relaxed mb-0">
                    If the workflow isn’t clear, the app won’t fix it.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-6">
              <div 
                className="d-flex shadow-sm bg-white overflow-hidden" 
                style={{ minHeight: '140px', borderTopRightRadius: '0.375rem', borderBottomRightRadius: '0.375rem' }}
              >
                <div className="d-flex flex-column justify-content-center p-4" style={{ maxWidth: '448px' }}>
                  <p 
                    className="fs-5 fw-bold mb-2 px-2 py-1" 
                    style={{ color: '#034a27', backgroundColor: '#eef430', width: 'fit-content' }}
                  >
                    We design for real behavior
                  </p>
                  <p className="text-muted small lh-relaxed mb-0">
                    Not ideal behavior. Not assumed behavior.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-md-6">
              <div 
                className="d-flex shadow-sm bg-white overflow-hidden" 
                style={{ minHeight: '140px', borderTopRightRadius: '0.375rem', borderBottomRightRadius: '0.375rem' }}
              >
                <div className="d-flex flex-column justify-content-center p-4" style={{ maxWidth: '448px' }}>
                  <p 
                    className="fs-5 fw-bold mb-2 px-2 py-1" 
                    style={{ color: '#034a27', backgroundColor: '#eef430', width: 'fit-content' }}
                  >
                    We Build for longevity
                  </p>
                  <p className="text-muted small lh-relaxed mb-0">
                    No shortcuts. No tech debt traps.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-12 col-md-6">
              <div 
                className="d-flex shadow-sm bg-white overflow-hidden" 
                style={{ minHeight: '140px', borderTopRightRadius: '0.375rem', borderBottomRightRadius: '0.375rem' }}
              >
                <div className="d-flex flex-column justify-content-center p-4" style={{ maxWidth: '448px' }}>
                  <p 
                    className="fs-5 fw-bold mb-2 px-2 py-1" 
                    style={{ color: '#034a27', backgroundColor: '#eef430', width: 'fit-content' }}
                  >
                    We launch without chaos
                  </p>
                  <p className="text-muted small lh-relaxed mb-0">
                    If adoption requires force, the system is wrong.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Highlighted Extra Card Section */}
        <div className="d-flex justify-content-center align-items-center gap-3 my-5 px-3">
          <div 
            className="d-flex shadow-sm bg-white overflow-hidden" 
            style={{ minHeight: '140px', borderTopRightRadius: '0.375rem', borderBottomRightRadius: '0.375rem', width: '100%', maxWidth: '540px' }}
          >
            <div className="d-flex flex-column justify-content-center p-4">
              <p 
                className="fs-5 fw-bold mb-2 px-2 py-1" 
                style={{ color: '#034a27', backgroundColor: '#eef430', width: 'fit-content' }}
              >
                We Start with friction
              </p>
              <p className="text-muted small lh-relaxed mb-0">
                If the workflow isn’t clear, the app won’t fix it.
                  </p>
            </div>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="d-flex justify-content-center align-items-center gap-3 my-5">
          <Btn />
        </div>
      </div>
    </>
  );
}