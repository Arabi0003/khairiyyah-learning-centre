import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CurriculumContent from './CurriculumContent';

export const metadata = {
  title: 'Curriculum | Khairiyyahh Learning Centre',
  description: 'Explore our comprehensive curriculum blending academic excellence with Islamic education.',
};

export default function CurriculumPage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main><CurriculumContent /></main>
      <Footer />
    </div>
  );
}

