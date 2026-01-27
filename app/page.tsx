import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DarkFeature from "@/components/DarkFeature";
import TuckSolutions from "@/components/TuckSolutions";
import BusinessImpact from "@/components/BusinessImpact";
import FeatureStack from "@/components/FeatureStack";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <DarkFeature />
            <TuckSolutions />
            <FeatureStack />
            <BusinessImpact />
            <Features />
            <Pricing />
            <Footer />
            {/* <MetricsSection /> */}
        </main>
    );
}
