import React from 'react';
import { Instagram, MessageCircle, MapPin, Clock, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F3ECE4] text-[#201C1B] border-t border-[#E8E0D6] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E8E0D6]">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img
                src={BUSINESS_INFO.logo}
                alt="Maliha Bukhari"
                className="w-12 h-12 object-cover border border-[#E8E0D6]"
              />
              <div>
                <h3 className="font-display text-2xl font-normal tracking-wide text-[#201C1B]">
                  Maliha Bukhari
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[#887F79] font-sans">
                  Luxury Beauty & Bridal Studio
                </p>
              </div>
            </div>

            <p className="text-sm text-[#5E5652] leading-relaxed max-w-md font-sans">
              Dedicated to bespoke South Asian bridal artistry, dimensional balayage hair transformations, and restorative aesthetic skin therapies in Lahore.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={BUSINESS_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#5E5652] hover:text-[#B89363] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#B89363]" />
                <span>{BUSINESS_INFO.instagram.handle}</span>
              </a>
              <span className="text-[#887F79]">·</span>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#5E5652] hover:text-[#B89363] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#B89363]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-[#887F79] font-semibold">
              Exploration
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm font-sans text-[#5E5652]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#B89363] transition-colors cursor-pointer text-left"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#B89363] transition-colors cursor-pointer text-left"
                >
                  Bespoke Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#B89363] transition-colors cursor-pointer text-left"
                >
                  About Studio & Artistry
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery-booking')}
                  className="hover:text-[#B89363] transition-colors cursor-pointer text-left"
                >
                  Portfolio & Appointments
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-[#887F79] font-semibold">
              Canal Road Studio
            </h4>

            <div className="flex items-start gap-3 text-sm text-[#5E5652]">
              <MapPin className="w-4 h-4 text-[#B89363] shrink-0 mt-1" />
              <div>
                <p className="font-medium text-[#201C1B]">Mall 2, 6th Floor</p>
                <p className="text-xs text-[#5E5652] leading-relaxed">
                  Main Canal Road, Mohlanwal Road, Eden Canal Villas Commercial Area, Lahore, Punjab 54000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm text-[#5E5652]">
              <Clock className="w-4 h-4 text-[#B89363] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-[#201C1B]">{BUSINESS_INFO.hours.days}</p>
                <p className="text-xs text-[#5E5652]">{BUSINESS_INFO.hours.times}</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-5 py-2.5 text-xs font-sans font-semibold tracking-widest uppercase bg-[#201C1B] text-white hover:bg-[#B89363] transition-colors"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#887F79] font-sans">
          <p>© {new Date().getFullYear()} Maliha Bukhari Luxury Beauty & Bridal Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Lahore, Pakistan</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#5E5652] hover:text-[#201C1B] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
