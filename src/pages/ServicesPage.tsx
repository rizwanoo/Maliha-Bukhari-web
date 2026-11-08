import React, { useState } from 'react';
import { ArrowUpRight, Check, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA, ServiceItem } from '../data/businessData';

interface ServicesPageProps {
  onNavigateToBooking: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigateToBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'bridal' | 'hair' | 'skin' | 'nails' | 'spa'>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'bridal', label: 'Bridal & Makeup' },
    { id: 'hair', label: 'Hair & Balayage' },
    { id: 'skin', label: 'Skin & Aesthetics' },
    { id: 'nails', label: 'Couture Nails' },
    { id: 'spa', label: 'Spa & Wellness' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const getCategoryHeroImage = () => {
    switch (activeCategory) {
      case 'bridal':
        return '/assets/images/service_bridal.jpg';
      case 'hair':
        return '/assets/images/service_hair.jpg';
      case 'skin':
      case 'nails':
      case 'spa':
        return '/assets/images/studio_interior.jpg';
      default:
        return '/assets/images/studio_interior.jpg';
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#201C1B] pt-24 sm:pt-32 pb-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#B89363] font-semibold block mb-3">
            Atelier Menu & Rituals
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-normal text-[#201C1B] tracking-tight mb-6">
            Bespoke Services
          </h1>
          <p className="text-base sm:text-lg text-[#5E5652] font-sans leading-relaxed">
            Every service at Maliha Bukhari is an individualized ritual using elite global formulations, meticulous hygienic protocol, and couture artistry. Choose your discipline below or reserve a personal consultation.
          </p>
        </div>

        {/* Interactive Category Segmented Tabs (Compliant with constitution: functional buttons, clean segmented style, no pills) */}
        <div className="flex flex-wrap items-center gap-2 pt-10 border-b border-[#E8E0D6] pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 text-xs font-sans uppercase tracking-widest transition-all cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-[#201C1B] text-white border-[#201C1B] font-semibold'
                  : 'bg-transparent text-[#5E5652] border-transparent hover:border-[#E8E0D6] hover:text-[#201C1B]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid with Editorial Asymmetry */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Services List */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#FFFFFF] border border-[#E8E0D6] p-8 sm:p-10 transition-all hover:border-[#B89363]/60 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#E8E0D6]">
                  <div>
                    <span className="text-[11px] font-sans uppercase tracking-widest text-[#B89363] block mb-1">
                      {service.categoryLabel}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#201C1B]">
                      {service.name}
                    </h2>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#887F79] font-sans">
                    By Bespoke Appointment
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#5E5652] leading-relaxed font-sans my-6">
                  {service.description}
                </p>

                {/* Service Highlights */}
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-wider text-[#887F79] font-sans mb-3 font-semibold">
                    Key Highlights & Formulations:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#5E5652]">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B89363] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Booking Actions (NO POPUPS) */}
                <div className="pt-6 border-t border-[#E8E0D6] flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => onNavigateToBooking(service.name)}
                    className="px-6 py-2.5 bg-[#201C1B] text-white text-xs font-sans font-semibold tracking-widest uppercase hover:bg-[#B89363] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Book This Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/923210056767?text=${encodeURIComponent(`Hello Maliha Bukhari Studio, I would like to inquire about booking: ${service.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#5E5652] hover:text-[#B89363] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#B89363]" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Editorial Sidebar */}
          <div className="lg:col-span-4 sticky top-28 flex flex-col gap-8">
            {/* Visual Preview */}
            <div className="bg-[#FFFFFF] border border-[#E8E0D6] p-4">
              <div className="luxury-image-frame overflow-hidden">
                <img
                  src={getCategoryHeroImage()}
                  alt="Maliha Bukhari Beauty Services"
                  className="w-full h-72 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-4 px-2">
                <p className="text-xs font-sans uppercase tracking-widest text-[#B89363] font-semibold">
                  Studio Standards
                </p>
                <p className="text-xs text-[#5E5652] mt-1 font-sans leading-relaxed">
                  Every product used in our studio—from bond-rebuilding hair therapies to radiant complexion foundations—is 100% genuine and sourced from international luxury cosmetic houses.
                </p>
              </div>
            </div>

            {/* Consultation Note */}
            <div className="bg-[#F3ECE4] border border-[#E8E0D6] p-6 flex flex-col gap-4">
              <h3 className="font-display text-xl font-normal text-[#201C1B]">
                Need Bridal Guidance?
              </h3>
              <p className="text-xs font-sans text-[#5E5652] leading-relaxed">
                We recommend booking bridal appointments at least 4 to 8 weeks in advance to ensure date exclusivity and schedule your preliminary skincare and hair consultations.
              </p>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#201C1B] text-white text-center text-xs font-sans font-semibold tracking-widest uppercase hover:bg-[#B89363] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
