import Header from "../../components/Header";
// These are located in app/about/components/
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import SetsUsApart from "./components/SetsUsApart";
import PeopleWork from "./components/PeopleWork";
import WhatWeDo from "./components/WhatWeDo";
import WhatDesign from "./components/WhatDesign";
import OurPhilosophy from "./components/OurPhilosophy";

import ImpactSection from "../../components/ImpactSection";
import Footer from "../../components/Footer";
import CategoryStrip from "./components/CategoryStrip";

export default function About() {
  return (
    <div className="container-fluid p-0 container-outer">
      <div className="container bg-white p-0">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="p-0">
            <Hero />
          </section>
          <section>
            <CategoryStrip />
          </section>

          {/* Mission Section */}
          <section className="p-0">
            <Mission />
          </section>
          {/* Mission Section */}
          <section className="p-0">
            <SetsUsApart />
          </section>
          <section className="p-0">
            <PeopleWork />
          </section>

          <section className="p-0">
            <WhatWeDo />
          </section>
          <section className="p-0">
            <WhatDesign />
          </section>

          <section className="p-0">
            <OurPhilosophy />
          </section>

          {/* Impact Section */}
        </main>

        <Footer />
      </div>
    </div>
  );
}
