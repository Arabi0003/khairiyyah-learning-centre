import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import VideoBackground from '@/components/sections/VideoBackground';
import HeroSection from '@/components/sections/HeroSection';
import AboutPreview from '@/components/sections/AboutPreview';

export default function Home() {
  return (
    <>
      {/* Fixed video background behind entire page */}
      <VideoBackground />

      {/* Page content layered above video */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navbar />

        <main>
          {/* Hero section - transparent, shows video behind */}
          <HeroSection />

          {/* Content sections with glass-morphism backgrounds */}
          <AboutPreview />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
