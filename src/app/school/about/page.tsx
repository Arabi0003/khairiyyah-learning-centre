import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutContent from './AboutContent';

export const metadata = {
  title: 'About Us | Khairiyyahh Learning Centre',
  description: 'Learn about Khairiyyahh Learning Centre, our history, values, and commitment to Islamic education excellence.',
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}

