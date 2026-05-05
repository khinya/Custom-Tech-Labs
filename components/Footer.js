
export default function Footer(){
return(
<footer className="footer-container">
  <div className="footer-content">
    
    <div className="footer-logo">
      <div className="logo-icon">C</div>
      <div className="logo-text">
        <span className="brand-name">Custom</span>
        <span className="brand-sub">Tech Labs</span>
        <p className="tagline">Human. Simple. Smart.</p>
      </div>
    </div>

    <div className="footer-column">
      <h3>About</h3>
      <a href="#">Our Story</a>
      <a href="#">Careers</a>
    </div>

    <div className="footer-column">
      <h3>Quick Links</h3>
      <a href="#">Home</a>
      <a href="#">Contact</a>
    </div>

    <div className="footer-column">
      <h3>Our Services</h3>
      <a href="#">Services</a>
      <a href="#">Services</a>
    </div>

    <div className="footer-column contact-col">
      <h3>Let's Connect</h3>
      <button className="email-btn">Email Now</button>

      <div className="social-icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
    </div>

  </div>

  <p className="developer-credit">
    Developed by Custom Tech Labs
  </p>
</footer>
)
}
