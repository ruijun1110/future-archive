// Import necessary libraries and components
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/About';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

// AnimatedRoutes component handles route transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

// App component sets up the main layout with navigation and footer
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
