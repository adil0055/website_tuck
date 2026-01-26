import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DarkFeature from "@/components/DarkFeature";
import TuckSolutions from "@/components/TuckSolutions";
import MetricsSection from "@/components/MetricsSection";
import UseCases from "@/components/UseCases";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <DarkFeature />
            <TuckSolutions />
            <MetricsSection />
            <UseCases />
        </main>
    );
}
