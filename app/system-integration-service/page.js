import Header from "../../components/Header";
import BannerPage from "./components/BannerPage";
import BussinessRuns from "./components/BussinessRuns";
import YourCustomer from "./components/YourCustomer";
import OurApproach from "./components/OurApproach";
import CaseStudio from "./components/CaseStudio";
import SectorsWe from "./components/SectorsWe";
import StrongIntegration from "./components/StrongIntegration";
import Footer from "../../components/Footer";

export default function SystemIntegration() {
  return (
    <div className="container-fluid p-0 container-outer">
      
      <div className="container bg-white p-0">
        
        <Header />

        <main>
          
          <section className="p-0">
            <BannerPage />
          </section>

          <section>
            <BussinessRuns />
          </section>

          <section>
            <YourCustomer />
          </section>

          <section>
            <OurApproach />
          </section>

          <section>
            <CaseStudio />
          </section>

          <section>
            <SectorsWe />
          </section>

          <section>
            <StrongIntegration />
          </section>

        </main>

        <Footer />

      </div>
    </div>
  );
}