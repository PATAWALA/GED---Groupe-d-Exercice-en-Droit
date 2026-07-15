import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import FormationsPreviewSection from '@/components/sections/FormationsPreviewSection';
import AboutPreviewSection from '@/components/sections/AboutPreviewSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FormationsPreviewSection />
      <AboutPreviewSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
}