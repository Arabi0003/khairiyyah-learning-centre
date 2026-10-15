import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AdmissionsContent from './AdmissionsContent';

export const metadata = {
  title: 'Admissions | Khairiyyah Learning Centre',
  description: 'Apply to Khairiyyah Learning Centre. Learn about our admissions process, requirements, and tuition.',
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

