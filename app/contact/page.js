import Header from "../../components/Header";
import BannerPage from "./components/BannerPage";
import SameSystem from "./components/SameSystem";
import OperatingDoctrine from "./components/OperatingDoctrine";
import CaseStudio from "./components/CaseStudio";
import SectorsWeBuild from "./components/SectorsWeBuild";
import CustomApplicationsImpact from "./components/CustomApplicationsImpact";
import Footer from "../../components/Footer";

export default function CustomApp() {
    return (
        <div className="container-fluid p-0 container-outer">
            
            <div className="container bg-white p-0">
                
                {/* Global Header */}
                <Header />

                <main>
                    
                    {/* Hero / Banner Section */}
                    <section className="p-0">
                        <BannerPage />
                    </section>

                    {/* Content Sections */}
                    <section>
                        <SameSystem />
                    </section>

                    <section>
                        <OperatingDoctrine />
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

                {/* Global Footer */}
                <Footer />

            </div>
        </div>
    );
}