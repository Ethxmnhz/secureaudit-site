import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import CategoriesGrid from '@/components/CategoriesGrid';
import HowItWorks from '@/components/HowItWorks';
import ScoringSection from '@/components/ScoringSection';
import CompetitiveEdge from '@/components/CompetitiveEdge';
import InvestorsSection from '@/components/InvestorsSection';
import Roadmap from '@/components/Roadmap';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen relative">
      <div className="absolute inset-0 bg-mesh"></div>
      <div className="aurora"></div>
      <div className="noise"></div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <Navbar />
        <main>
          <Hero />
          <ProblemSection />
          <SolutionSection />
          <CategoriesGrid />
          <HowItWorks />
          <ScoringSection />
          <CompetitiveEdge />
          <InvestorsSection />
          <Roadmap />
          <CTASection />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
}
