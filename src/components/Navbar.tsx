import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isHeroPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, isHeroPage = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About & Team' },
    { id: 'gallery-booking', label: 'Gallery & Booking' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If on hero page and not scrolled, navbar is cinematic transparent over photography
  const isTransparent = isHeroPage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent text-white pt-6 pb-4'
          : 'bg-[#FAF8F5]/95 backdrop-blur-md text-[#201C1B] shadow-[0_1px_0_0_#E8E0D6] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Official Identity */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <img
            src={BUSINESS_INFO.logo}
            alt="Maliha Bukhari Logo"
            className="w-10 h-10 object-cover border border-[#E8E0D6]/40 shadow-xs"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span
              className={`font-display text-xl sm:text-2xl font-normal tracking-wide transition-colors ${
                isTransparent ? 'text-white' : 'text-[#201C1B]'
              }`}
            >
              Maliha Bukhari
            </span>
            <span
              className={`text-[10px] tracking-[0.2em] uppercase font-sans ${
                isTransparent ? 'text-white/80' : 'text-[#887F79]'
              }`}
            >
              Luxury Studio · Lahore
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Clean Typography, No Pills) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-sans tracking-wide">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors cursor-pointer py-1 relative text-[13px] tracking-wider uppercase font-medium focus:outline-none ${
                  isTransparent
                    ? isActive
                      ? 'text-white border-b-2 border-[#DFC7A7]'
                      : 'text-white/80 hover:text-white'
                    : isActive
                    ? 'text-[#B89363] border-b-2 border-[#B89363]'
                    : 'text-[#5E5652] hover:text-[#201C1B]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary CTA Button */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleNavClick('gallery-booking')}
            className={`px-6 py-2.5 text-xs font-sans font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
              isTransparent
                ? 'bg-white text-[#201C1B] border-white hover:bg-white/90 hover:shadow-lg'
                : 'bg-[#201C1B] text-white border-[#201C1B] hover:bg-[#B89363] hover:border-[#B89363] hover:text-white shadow-xs'
            }`}
          >
            <span>Book Appointment</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          className={`md:hidden p-2 transition-colors cursor-pointer ${
            isTransparent ? 'text-white' : 'text-[#201C1B]'
          }`}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E0D6] px-6 py-6 text-[#201C1B] shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-base font-display py-2 border-b border-[#E8E0D6]/60 cursor-pointer ${
                  currentPage === link.id ? 'text-[#B89363] font-semibold' : 'text-[#201C1B]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('gallery-booking')}
                className="w-full py-3 bg-[#201C1B] text-white text-center text-xs tracking-widest uppercase font-sans font-semibold hover:bg-[#B89363] transition-colors"
              >
                Book Appointment
              </button>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs tracking-widest uppercase font-sans text-[#5E5652] hover:text-[#201C1B]"
              >
                WhatsApp: {BUSINESS_INFO.whatsapp}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
