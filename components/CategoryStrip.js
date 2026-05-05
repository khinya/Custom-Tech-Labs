'use client';

import Link from 'next/link';

export default function CategoryStrip() {
  return (
    <section className="category-section">
      {/* Optional decorative divs from your original code */}
      <div className="category-top"></div>

      <div className="category-text">
        <div className="text-center ">
          
          {/* THE SCROLLER START */}
          <div className="scroller-container">
            <div className="scroller-track">
              {/* Set 1 */}
              <Link href="#app-design" className="scroller-link">App Design</Link>
            
              <Link href="#wireframe" className="scroller-link">Wireframe</Link>
             
              <Link href="#website" className="scroller-link">Website Design</Link>
          
              <Link href="#dashboard" className="scroller-link">Dashboard</Link>
             

              {/* Set 2 (Identical for seamless looping) */}
              <Link href="#app-design" className="scroller-link">App Design</Link>
            
              <Link href="#wireframe" className="scroller-link">Wireframe</Link>
             
              <Link href="#website" className="scroller-link">Website Design</Link>
             
              <Link href="#dashboard" className="scroller-link">Dashboard</Link>
             
            </div>
          </div>
          {/* THE SCROLLER END */}

        </div>
      </div>

      <div className="category-bottom"></div>
    </section>
  );
}