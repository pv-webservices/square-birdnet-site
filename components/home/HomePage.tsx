import Hero from "@/components/home/Hero";
import TrustMetrics from "@/components/home/TrustMetrics";
import Services from "@/components/home/Services";
import InvisibleGrillFeature from "@/components/home/InvisibleGrillFeature";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProjectsSection from "@/components/home/ProjectsSection";
import VideoShowcase from "@/components/home/VideoShowcase";
import Process from "@/components/home/Process";
import Materials from "@/components/home/Materials";
import Testimonials from "@/components/home/Testimonials";
import ServiceAreasFaq from "@/components/home/ServiceAreasFaq";
import FinalCta from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustMetrics />
      <Services />
      <InvisibleGrillFeature />
      <BeforeAfterSection />
      <WhyChooseUs />
      <ProjectsSection />
      <VideoShowcase />
      <Process />
      <Materials />
      <Testimonials />
      <ServiceAreasFaq />
      <FinalCta />
    </main>
  );
}
