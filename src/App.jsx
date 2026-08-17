import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/shared/ScrollToTop';

// Pages
import Home from './pages/Home';
import PlatformOverview from './pages/PlatformOverview';
import PlatformDetail from './pages/PlatformDetail';
import SolutionsOverview from './pages/SolutionsOverview';
import SolutionDetail from './pages/SolutionDetail';
import ResearchOverview from './pages/ResearchOverview';
import ResearchDetail from './pages/ResearchDetail';
import CompanyOverview from './pages/CompanyOverview';
import CompanyDetail from './pages/CompanyDetail';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isContact = location.pathname === '/contact';

  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-black/20">
      <ScrollToTop />
      {!isHome && <Nav />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<PlatformOverview />} />
          <Route path="/platform/:id" element={<PlatformDetail />} />
          <Route path="/solutions" element={<SolutionsOverview />} />
          <Route path="/solutions/:id" element={<SolutionDetail />} />
          <Route path="/research" element={<ResearchOverview />} />
          <Route path="/research/:id" element={<ResearchDetail />} />
          <Route path="/company" element={<CompanyOverview />} />
          <Route path="/company/:id" element={<CompanyDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {!isContact && <Footer />}
    </div>
  );
}

export default App;
