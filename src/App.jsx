import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { PlatformOverview } from './pages/PlatformOverview';
import { PlatformDetail } from './pages/PlatformDetail';
import { SolutionsOverview } from './pages/SolutionsOverview';
import { SolutionDetail } from './pages/SolutionDetail';
import { Research } from './pages/Research';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content" style={{ minHeight: '100vh', paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<PlatformOverview />} />
          <Route path="/platform/:id" element={<PlatformDetail />} />
          <Route path="/solutions" element={<SolutionsOverview />} />
          <Route path="/solutions/:id" element={<SolutionDetail />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
