'use client';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Page Components
import MainBanner from "./components/MainBanner";
import BetterBuying from "./components/BetterBuying";
import AutoMation from "./components/AutoMation";
import BuyingOnline from "./components/BuyingOnline";
import OurApproach from "./components/OurApproach";
import CaseStudies from "./components/CaseStudies";
import SectorsSupport from "./components/SectorsSupport";
import MakeTheBiggest from "./components/MakeTheBiggest";

export default function SolutionService() {
  return (
    <div className="container-fluid p-0 container-outer">
      <div className="container bg-white p-0">
        
        <Header />

        <main>
          {/* Hero / Banner Section */}
          <section className="p-0">
            <MainBanner />
          </section>

          {/* Core Content Sections */}
          <section className="p-0">
            <BetterBuying />
          </section>

          <section className="p-0">
            <AutoMation />
          </section>

          <section className="p-0">
            <BuyingOnline />
          </section>

          <section className="p-0" style={{ backgroundColor: '#F5F5F5' }}>
            <OurApproach />
          </section>

          <section className="p-0">
            <CaseStudies />
          </section>

          <section className="p-0">
            <SectorsSupport />
          </section>

          <section className="p-0">
            <MakeTheBiggest />
          </section>
        </main>

        <Footer />

      </div>
    </div>
  );
}