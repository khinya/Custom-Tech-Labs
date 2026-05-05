import Header from "../../components/Header";
import ImpactSection from "../../components/ImpactSection";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <main>
      <Header />

      <section className="container-fluid p-0">
        <ImpactSection />
      </section>

      <Footer />
    </main>
  );
}