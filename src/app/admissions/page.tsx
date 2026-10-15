import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AdmissionsContent from './AdmissionsContent';

export const metadata = {
  title: 'Admissions | Khairiyyahh Learning Centre',
  description: 'Apply to Khairiyyahh Learning Centre. Learn about our admissions process, requirements, and tuition.',
};

export default function AdmissionsPage() {
  return (
    <div className="relative min-h-screen bg-cream">
      <Navbar />
      <main><AdmissionsContent /></main>
      <Footer />
    </div>
  );
}

