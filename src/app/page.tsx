import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { HowItWorks } from "@/components/HowItWorks";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FeatureGrid } from "@/components/FeatureGrid";
import { RealExaminer } from "@/components/RealExaminer";
import { CodeAnalysis } from "@/components/CodeAnalysis";
import { PerformanceReport } from "@/components/PerformanceReport";
import { VoiceViva } from "@/components/VoiceViva";
import { UseCases } from "@/components/UseCases";
import { Differentiation } from "@/components/Differentiation";
import { CtaSection } from "@/components/CtaSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white selection:bg-indigo-500/30 selection:text-indigo-200 font-sans">
      <Navbar />
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <HowItWorks />
      <ProductShowcase />
      <FeatureGrid />
      <RealExaminer />
      <CodeAnalysis />
      <PerformanceReport />
      <VoiceViva />
      <UseCases />
      <Differentiation />
      <CtaSection />
      <FAQ />
      <Footer />
    </main>
  );
}
