import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AfterSchoolContent from './AfterSchoolContent';

export const metadata = {
  title: 'After School Programs | Khairiyyahh Learning Centre',
  description: 'Enrichment and care programs available after regular school hours.',
};

export default function AfterSchoolPage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main><AfterSchoolContent /></main>
      <Footer />
    </div>
  );
}

