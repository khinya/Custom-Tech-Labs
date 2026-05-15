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

  {/* What We Do Dropdown */}
  <li className="nav-item dropdown mx-3">
    <Link
      href="#"
      className="nav-link dropdown-toggle"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      What we do
    </Link>

    <ul className="dropdown-menu">

      <li>
        <Link
          href="https://custom-tech-labs-eta.vercel.app/custom-website-development-service"
          className="dropdown-item"
          onClick={handleClose}
        >
          Custom Websites
        </Link>
      </li>

      <li>
        <Link
          href="https://custom-tech-labs-eta.vercel.app/custom-app-development-service"
          className="dropdown-item"
          onClick={handleClose}
        >
          Custom Applications
        </Link>
      </li>

      <li>
        <Link
          href="https://custom-tech-labs-eta.vercel.app/system-integration-service"
          className="dropdown-item"
          onClick={handleClose}
        >
          System Integrations
        </Link>
      </li>

      <li>
        <Link
          href="https://custom-tech-labs-eta.vercel.app/ecommerce-solution-service"
          className="dropdown-item"
          onClick={handleClose}
        >
          eCommerce Solutions
        </Link>
      </li>

    </ul>
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