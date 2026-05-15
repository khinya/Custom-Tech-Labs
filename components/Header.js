"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark nav-custom">

        <Link href="/" className="navbar-brand">
          <Image
            src="/images/logo.webp"
            alt="CTL Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        <button
          className="navbar-toggler"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">

            <li className="nav-item mx-3">
              <Link href="/about" className="nav-link" onClick={handleClose}>
                About Us
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link href="#" className="nav-link" onClick={handleClose}>
                What we do
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link href="#" className="nav-link" onClick={handleClose}>
                Our Results
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link href="#" className="nav-link" onClick={handleClose}>
                Insight
              </Link>
            </li>

            <li className="ms-lg-3 mt-3 mt-lg-0">
              <Link href="#" className="btn btn-warning-custom">
                Contact Us
              </Link>
            </li>

          </ul>
        </div>

      </nav>
    </div>
  );
}