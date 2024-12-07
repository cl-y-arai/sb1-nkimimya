import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceList } from './components/ServiceList';
import { ServiceDetail } from './components/ServiceDetail';
import { ReservationList } from './components/ReservationList';
import { LanguageProvider } from './contexts/LanguageContext';

function HomePage() {
  return (
    <>
      <Hero />
      <ServiceList />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
              <Route path="/reservations" element={<ReservationList />} />
            </Routes>
          </main>
          <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p>© 2024 Beauty Essence. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;