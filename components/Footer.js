
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content pb-0">

        <div className="footer-logo">

          <div className="logo-text">
            <Image
              src="/images/logo.webp"
              width={200}
              height={150}
              className="logo1"
            />

          </div>
        </div>

        <div className="  d-flex  flex-column flex-md-row gap-5 pb-0 pb-sm-0">

          <div className="footer-column">
            <h3 className="forRes">About</h3>
            <a href="/">Our Story</a>
            <a href="/">Careers</a>
          </div>

          <div className="footer-column ">
            <h3 className="forRes">Quick Links</h3>
            <a href="/">Home</a>
            <a href="/">Contact</a>
          </div>

          <div className="footer-column">
            <h3 className="forRes">Our Services</h3>
            <a href="/">Services</a>
            <a href="/">Services</a>
          </div>

          <div className="footer-column contact-col">
            <h3 className="forRes">Let's Connect</h3>
            <button className="email-btn">Email Now</button>

            <div className="social-icons pt-2 pb-3 ">

              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>

        </div>
      </div>


      <p className="developer-credit">
        Developed by Custom Tech Labs
      </p>
    </footer>
  )
}
