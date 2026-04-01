import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { ReasonsSection } from "@/components/home/reasons-section";
import { ServicesSection } from "@/components/home/services-section";
import { ContactCta } from "@/components/shared/contact-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReasonsSection />
      <ContactSection />
      <ContactCta />
    </>
  );
}
