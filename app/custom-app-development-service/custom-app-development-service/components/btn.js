"use client";

import React from 'react';

export default function Btn() {
  return (
    <div className="d-flex flex-wrap gap-3">
      {/* Button 1: View Our Portfolio */}
      <button 
        className="btn text-black fw-bold d-flex align-items-center border-0 rounded"
        style={{ 
          backgroundColor: '#EFFF00', 
          fontSize: '12px', // text-xs
          padding: '0.625rem 1.25rem', // px-5 py-2.5
          transition: 'all 0.2s' 
        }}
      >
        View Our Portfolio <span className="ms-2">→</span>
      </button>

      {/* Button 2: Work With Us */}
      <button 
        className="btn text-black fw-bold d-flex align-items-center border-0 rounded"
        style={{ 
          backgroundColor: '#EFFF00', 
          fontSize: '12px', // text-xs
          padding: '0.625rem 1.25rem', // px-5 py-2.5
          transition: 'all 0.2s' 
        }}

        href="/solutionservice" // Link to solution page 
      >
        Work With Us <span className="ms-2">→</span>
      </button>
    </div>
  );
}