import Header from "../../components/Header";
import BannerPage from "./components/BannerPage";
import ForYourTeam from "./components/ForYourTeam";
import ForYourCustomers from "./components/ForYourCustomers";
import WebDevelopmentPhilosophy from "./components/WebDevelopmentPhilosophy";
import CaseStudio from "./components/CaseStudio";
import SectorsWeBuild from "./components/SectorsWeBuild";
import CustomApplicationsImpact from "./components/CustomApplicationsImpact";
import Footer from "../../components/Footer";

export default function CustomWebiste() {
  return (
    <div className="container-fluid p-0 container-outer">
      
      <div className="container bg-white p-0">
        
        <Header />

        <main>
          
          <section className="p-0">
            <BannerPage />
          </section>

          <section style={{ background: '#F5F5F5' }}>
            <ForYourTeam />
          </section>

          <section>
            <ForYourCustomers />
          </section>

          <section>
            <WebDevelopmentPhilosophy />
          </section>

          <section>
            <CaseStudio />
          </section>

          <section>
            <SectorsWeBuild />
          </section>

          <section>
            <CustomApplicationsImpact />
          </section>

        </main>

        <Footer />

      </div>
    </div>
  );
}