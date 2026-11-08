/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryBookingPage } from './pages/GalleryBookingPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Handle URL hash changes for true multi-page navigation & deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'services', 'about', 'gallery-booking'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId: string) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToBookingWithService = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    setCurrentPage('gallery-booking');
    window.location.hash = 'gallery-booking';
    
    // Smooth scroll down to inline booking section if on Page 4
    setTimeout(() => {
      const section = document.getElementById('booking-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#201C1B]">
      {/* Top Bar with Cinematic Hero integration */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        isHeroPage={currentPage === 'home'}
      />

      {/* Main Page Render */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={navigateTo} />
        )}

        {currentPage === 'services' && (
          <ServicesPage onNavigateToBooking={handleNavigateToBookingWithService} />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigateToBooking={() => handleNavigateToBookingWithService()} />
        )}

        {currentPage === 'gallery-booking' && (
          <GalleryBookingPage initialService={preselectedService} />
        )}
      </main>

      {/* Unified Luxury Editorial Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
