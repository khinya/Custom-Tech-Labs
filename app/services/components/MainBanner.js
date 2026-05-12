'use client';
import Image from "next/image";
import Link from "next/link";

export default function MainBanner() {
    return (
       <section
  className="hero"
  style={{ backgroundImage: "url('/images/bannerImg.png')" }}
>

      <div className="container px-5 py-5">

        <div className="hero-box">

          <div className="row align-items-center">

          <div className="col-lg-6">
  <h1 className="display-4 fw-bold mb-4">
    E-comerce That Works The Way Your Business Actually Runs
  </h1>

  <p className="lead mb-3">
    At Custom Labs, we deliver e-commerce development services that 
    feel simple to use, easy to manage, and built to grow with you.
  </p>

  <p className="mb-4">
    Your e-commerce system shouldn’t slow you down— it should move 
    your business forward.
  </p>

  <div className="d-flex gap-2">
    <button className="btn btn-custom-yellow fw-bold px-4 py-2">
      View Our Portfolio
    </button>
    <button className="btn btn-custom-yellow fw-bold px-4 py-2">
      Work With Us
    </button>
  </div>
</div>

          </div>

        </div>

      </div>

    </section>

    )
}