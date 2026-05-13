"use client";

import Link from "next/link";

export default function CategoryStrip() {
  return (
    <section className="category-section">
      {/* Optional decorative divs from your original code */}

      <div
        className="category-text  py-2 "
        style={{ backgroundColor: "black" }}
      >
        <div className="text-center ">
          {/* THE SCROLLER START */}
          <div className="scrollers-containers">
            <div className="scrollers-tracks">
              {/* Set 1 */}
              <Link href="#app-design" className="scrollers-links">
                App Design
              </Link>

              <Link href="#wireframe" className="scrollers-links">
                Wireframe
              </Link>

              <Link href="#website" className="scrollers-links">
                Website Design
              </Link>

              <Link href="#dashboard" className="scrollers-links">
                Dashboard
              </Link>

              {/* Set 2 (Identical for seamless looping) */}
              <Link href="#app-design" className="scrollers-links">
                App Design
              </Link>

              <Link href="#wireframe" className="scrollers-links">
                Wireframe
              </Link>

              <Link href="#website" className="scrollers-links">
                Website Design
              </Link>

              <Link href="#dashboard" className="scrollers-links">
                Dashboard
              </Link>
            </div>
          </div>
          {/* THE SCROLLER END */}
        </div>
      </div>

      <div className="category-bottom"></div>
    </section>
  );
}
