import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Loader from './components/Loader';
import './App.css';
import { API_BASE, applyTheme, loadStoredTheme, storeTheme } from './theme';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    applyTheme(loadStoredTheme());
    fetch(`${API_BASE}/theme`, { cache: 'no-store' })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then(storeTheme)
      .catch(() => {});
  }, []);

  return (
    <Router>
      {/* Brand Preloader Overlay */}
      {showLoader && <Loader onFinished={() => setShowLoader(false)} />}

      <div className="flex flex-col min-h-screen bg-white font-sans text-brand-copper">

        {/* Navigation Header */}
        <Navbar />

        {/* Main Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
