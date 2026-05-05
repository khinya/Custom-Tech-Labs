export default function ImpactSection() {
  return (
    <section className="impact-section">
      
      {/* Top Strips */}
      <div className="strip yellow-strip" />
      <div className="strip black-strip" />

      {/* Content */}
      <div className="container">

        {/* Title */}
        <div className="title-box">
          <h2>
            Where We Make the <span>Biggest Impact</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="subtitle">
          We combine <b>e-commerce website design development</b> with smart systems
          to create real business results.
        </p>

        {/* Bullet Points */}
        <div className="bullet-wrapper">

          {[
            "Turn traffic into consistent revenue",
            "Reduce operational bottlenecks with workflow automation software",
            "Automate repetitive workflows",
            "Create smooth mobile buying experiences",
          ].map((text, i) => (
            <div className="bullet-item" key={i}>
              <div className="icon">
                <img
                  src="https://www.figma.com/api/mcp/asset/85bff7d5-a620-4e11-8cd2-99cd7e088e92"
                  width={12}
                  alt="icon"
                />
              </div>
              <p>{text}</p>
            </div>
          ))}

        </div>

        {/* Bottom Text */}
        <p className="bottom-text">
          No matter your industry, the goal stays the same:
          <b>
            {" "}
            Build a custom e-commerce system that supports how your business runs today—and how it grows tomorrow.
          </b>
        </p>

        {/* Buttons */}
        <div className="buttons">
          <span className="btn">View Our Portfolio →</span>
          <span className="btn">Work With Us →</span>
        </div>

      </div>
    </section>
  );
}