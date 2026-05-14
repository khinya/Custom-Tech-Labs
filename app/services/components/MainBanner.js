export default function Hero() {
  return (
    <>
    <section
      className="hero"
      /* Ensure the parent section is relative so the bar attaches to the bottom */
      style={{ 
        backgroundImage: "url('/images/bannerImg.png')",
        position: 'relative' 
      }}
    >
      <div className="container px-5 py-5">
        <div className="hero-box">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1>
                E-commerce That Works The Way Your Business Actually Runs
              </h1> 
              <p>
                <b>At Custom Labs, we deliver e-commerce development services that feel simple to use, easy to manage, and built to grow with you.</b>
              </p>
              <p>Your e-commerce system shouldn’t slow you down- it should move your business forward.</p>
           <div className="d-flex gap-3">
  <button className="btn-warning-custom">View Our Portfolio</button>
  <button className="btn-warning-custom">Work With Us</button>
</div>
            </div>
          </div>
        </div>
      </div>

      {/* Rectangle 178 - Yellow Accent Bar */}
    </section>
      {/* <div className="hero-accent-bar"></div> */}
    </>
  );
}