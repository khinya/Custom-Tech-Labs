export default function Hero() {
  return (
<section
  className="hero"
  style={{ backgroundImage: "url('/images/about-banner.webp')" }}
>

      <div className="container px-5 py-5">

        <div className="hero-box">

          <div className="row align-items-center">

            <div className="col-lg-5">

              <h1>
                Strategic. Human-Centered. Tech That Works for People. 
              </h1>

              <p>
              CustomTech Labs is a joint venture between Laxmaya Technologies, a global technology and enterprise engineering company, and Small Biz Marketing (SBM), a U.S.-based strategy and growth marketing agency.
              </p>

              <p>Together, we combine deep technical expertise with strategic business intelligence to create technology that doesn’t just function—it feels intuitive, efficient, and natural to the people who use it.</p>

              <button className="btn btn-warning btn-sm me-2">
              Download Portfolio
              </button>

            

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}