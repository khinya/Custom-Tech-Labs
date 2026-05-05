import Header from "../components/Header";
import Hero from "../components/Hero";
import CategoryStrip from "../components/CategoryStrip";
import BlueprintSection from "../components/BlueprintSection";
import ProcessSection from "../components/ProcessSection";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container-fluid p-0 container-outer">

      <div className="container bg-white p-0">

        <Header />

        <main>

          <section className="p-0">
            <Hero />
          </section>

          <section>
            <CategoryStrip />
          </section>

          <section>
            <BlueprintSection />
          </section>

          <section>
            <ProcessSection />
          </section>

          <section>
            <Services />
          </section>

          <section>
            <Testimonials />
          </section>

          <section>
            <CTASection />
          </section>

        </main>

        <Footer />

      </div>
    </div>
  );
}