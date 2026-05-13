
export default function Hero() {
  return (
<section
  className="hero"
  style={{ backgroundImage: "url('/appsimg/main.png')" }}
>

      <div className="container px-5 py-5">

        <div className="hero-box">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h1>
               
               Custom Apps That Teams Adopt  And Customers Love Using
               
              </h1> 

              <p>
              Tech that removes friction, simplifies decisions, and 
                            becomes a natural extension of how people work and engage.
                
              </p>

             

             <div className="d-flex gap-3">
  <button className="btn-warning-custom">
    View Our Portfolio
  </button>

  <button className="btn-warning-custom">
    Work With Us
  </button>
</div>

            

            </div>

          </div>

        </div>

      </div>
   {/* Rectangle 178 - Yellow Accent Bar */}
      <div className="hero-accent-bar"></div>
    </section>

    
  );
}