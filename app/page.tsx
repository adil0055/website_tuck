import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DarkFeature from "@/components/DarkFeature";
import VisualTryOns from "@/components/VisualTryOns";
import TechMetrics from "@/components/TechMetrics";
import WorksBest from "@/components/WorksBest";
import MetricsSection from "@/components/MetricsSection";
import NumberedFeatures from "@/components/NumberedFeatures";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <DarkFeature />
            <VisualTryOns />
            <TechMetrics />
            <WorksBest />
            <MetricsSection />
            <NumberedFeatures />
            <Pricing />
            <FinalCTA />
            <Footer />
        </main>
    );
}
