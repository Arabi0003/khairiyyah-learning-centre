import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MiddleSchoolContent from './MiddleSchoolContent';

export const metadata = {
  title: 'Middle School | Khairiyyahh Learning Centre',
  description: 'Our middle school program for grades 6-8 preparing students for academic and spiritual excellence.',
};

export default function MiddleSchoolPage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main><MiddleSchoolContent /></main>
      <Footer />
    </div>
  );
}

