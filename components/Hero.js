export default function Hero() {
  return (
    <section className="hero">
      <div className="container px-5 py-5">
        <div className="hero-box">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h1>
                Technology Built for the <br />
                Way People Actually Work
              </h1>

              <p>
                We bridge the gap between complex engineering and human
                intuition to build tech that users actually enjoy using.
              </p>

              <button
                className="btn btn-warning btn-sm me-2"
                style={{
                  backgroundColor: "#eef430",
                  fontWeight: "500",
                  border: "none",
                  padding: "8px 15px",
                }}
              >
                View Our Portfolio
              </button>

              <button
                className="btn btn-warning btn-sm"
                style={{
                  backgroundColor: "#eef430",
                  fontWeight: "500",
                  border: "none",
                  padding: "8px 15px",
                }}
              >
                Work With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
