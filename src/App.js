import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ExchangeRates from './pages/ExchangeRates';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <Navigation darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange-rates" element={<ExchangeRates />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
