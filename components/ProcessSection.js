
import "../app/process.css";
export default function ProcessContainer() {
  return (
    <div className="process-container py-0">

  <div className="step-wrapper right">
    <div className="card">
      <div className="accent-bar left-accent"></div>
      <div className="content">
        <span className="step-label">STEP 1:</span>
        <h2 className="title">We Listen for the "Why"</h2>
        <p className="description">
          Before we touch a keyboard, we figure out why you’re building this in the first place.
          We dig for the friction in your current process so we can create a solution that actually clears the path.
        </p>
      </div>
    </div>
  </div>

  <div className="step-wrapper left">
    <div className="card">
      <div className="accent-bar right-accent"></div>
      <div className="content">
        <span className="step-label">STEP 2:</span>
        <h2 className="title">Design for Real People</h2>
        <p className="description">
          We map out an experience that makes sense at a glance.
          We want your team and your customers to actually want to use the tool.
        </p>
      </div>
    </div>
    <div className="line line-1-2"></div>
  </div>

  <div className="step-wrapper right">
    <div className="card">
      <div className="accent-bar left-accent"></div>
      <div className="content">
        <span className="step-label">STEP 3:</span>
        <h2 className="title">The Muscle to Build It Right</h2>
        <p className="description">
          We hand-pick the right technology to build a robust, custom foundation.
          No templates, no shortcuts.
        </p>
      </div>
    </div>
    <div className="line line-2-3"></div>
  </div>

  <div className="step-wrapper left">
    <div className="card">
      <div className="accent-bar right-accent"></div>
      <div className="content">
        <span className="step-label">STEP 4:</span>
        <h2 className="title">Zero-Friction Launch</h2>
        <p className="description">
          We collaborate with you on the rollout so it feels natural from day one.
        </p>
      </div>
    </div>
    <div className="line line-3-4"></div>
  </div>

  <div className="step-wrapper right">
    <div className="card">
      <div className="accent-bar left-accent"></div>
      <div className="content">
        <span className="step-label">STEP 5:</span>
        <h2 className="title">Refining the Reality</h2>
        <p className="description">
          We improve the system using real-world usage data continuously.
        </p>
      </div>
    </div>
    <div className="line line-4-5"></div>
  </div>

</div>
  );
}