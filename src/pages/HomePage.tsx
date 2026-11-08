import React from 'react';
import { ArrowUpRight, Sparkles, Heart, Star, Check, Instagram, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA, VERIFIED_TESTIMONIALS } from '../data/businessData';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#201C1B]">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen min-h-[640px] max-h-[1080px] w-full flex items-end pb-16 sm:pb-24 overflow-hidden">
        {/* Full-bleed high-resolution photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero_bridal.jpg"
            alt="Maliha Bukhari Luxury Bridal Artistry"
            className="w-full h-full object-cover object-top scale-105 animate-[fadeIn_1.2s_ease-out]"
            referrerPolicy="no-referrer"
          />
          {/* Editorial warm gradient scrim for legibility without darkening into black */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#201C1B]/85 via-[#201C1B]/35 to-black/20" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
          <div className="max-w-3xl flex flex-col gap-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#DFC7A7] font-sans font-semibold">
              <span className="w-8 h-[1px] bg-[#DFC7A7]" />
              <span>Lahore's Haute Bridal & Beauty Sanctuary</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.05] tracking-tight text-balance">
              Where Beauty Meets Artistry.
            </h1>

            <p className="text-base sm:text-lg text-white/90 font-sans max-w-xl leading-relaxed font-light">
              Experience the pinnacle of Pakistani bridal couture makeup, dimensional balayage transformations, and bespoke skin aesthetics at Mall 2, Canal Road.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('gallery-booking')}
                className="px-8 py-3.5 bg-white text-[#201C1B] text-xs font-sans font-semibold tracking-widest uppercase hover:bg-[#B89363] hover:text-white transition-all duration-300 flex items-center gap-3 cursor-pointer shadow-lg"
              >
                <span>Book Your Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-3.5 bg-transparent text-white border border-white/60 text-xs font-sans font-semibold tracking-widest uppercase hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Services</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom subtle detail strip */}
        <div className="absolute bottom-4 right-8 hidden lg:flex items-center gap-6 text-xs text-white/80 font-sans tracking-widest uppercase">
          <span>6th Floor, Mall 2 · Canal Road, Lahore</span>
          <span>·</span>
          <span>Open Daily 11 AM – 8 PM</span>
        </div>
      </section>

      {/* 2. ELEGANT BRAND INTRODUCTION & PHILOSOPHY */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="text-xs font-sans uppercase tracking-[0.25em] text-[#B89363] font-semibold flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#B89363]" />
              <span>The Atelier Standard</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#201C1B] leading-tight text-balance">
              Crafted for brides who demand effortless royalty and modern grace.
            </h2>

            <p className="text-[#5E5652] leading-relaxed font-sans text-base">
              At Maliha Bukhari, beauty is never an assembly line. Rooted in Lahore's rich cultural heritage and elevated by modern global techniques, our studio delivers bespoke bridal and salon experiences where every bride and client receives uncompromising personal attention.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#E8E0D6]">
              <div>
                <p className="font-display text-2xl text-[#201C1B]">100%</p>
                <p className="text-xs uppercase tracking-wider text-[#887F79] font-sans mt-1">Bespoke Consultations</p>
              </div>
              <div>
                <p className="font-display text-2xl text-[#201C1B]">6th Floor</p>
                <p className="text-xs uppercase tracking-wider text-[#887F79] font-sans mt-1">Mall 2 Canal Road Sanctuary</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="text-xs font-sans uppercase tracking-widest font-semibold text-[#201C1B] hover:text-[#B89363] flex items-center gap-2 cursor-pointer group"
              >
                <span>Read the Founder's Story</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image Composition (Asymmetric editorial layout, no rounded pills) */}
          <div className="lg:col-span-6 relative">
            <div className="luxury-image-frame shadow-xl border border-[#E8E0D6]">
              <img
                src="/assets/images/studio_interior.jpg"
                alt="Maliha Bukhari Luxury Studio Interior Mall 2 Lahore"
                className="w-full h-[460px] sm:h-[540px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Small floating editorial caption card */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:left-6 bg-[#FAF8F5] p-5 border border-[#E8E0D6] shadow-md max-w-xs hidden sm:block">
              <p className="text-xs font-sans uppercase tracking-widest text-[#B89363] font-semibold">Flagship Studio</p>
              <p className="text-xs text-[#5E5652] mt-1 font-sans">
                Arched mirrors, champagne finishes, and peaceful natural daylight on Canal Road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE SERVICES EDITORIAL SHOWCASE */}
      <section className="bg-[#F3ECE4] py-24 sm:py-32 border-y border-[#E8E0D6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[#E8E0D6]">
            <div>
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#B89363] font-semibold block mb-3">
                Curated Excellence
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#201C1B] tracking-tight">
                Our Signature Disciplines
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-sans uppercase tracking-widest font-semibold text-[#201C1B] hover:text-[#B89363] flex items-center gap-2 cursor-pointer"
            >
              <span>View Full Service Menu</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Asymmetrical 3-Card Editorial Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {/* Service 1: Bridal */}
            <div className="flex flex-col bg-[#FAF8F5] border border-[#E8E0D6] overflow-hidden group">
              <div className="h-72 overflow-hidden relative">
                <img
                  src="/assets/images/service_bridal.jpg"
                  alt="Bridal Artistry by Maliha Bukhari"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-xs px-3 py-1 text-[11px] font-sans uppercase tracking-widest text-[#201C1B]">
                  Bridal & Makeup
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl font-normal text-[#201C1B] mb-3">
                    Bridal Artistry & Couture
                  </h3>
                  <p className="text-sm text-[#5E5652] leading-relaxed font-sans">
                    Barat, Valima, and Nikkah bespoke transformations tailored to each bride's facial architecture, jewelry, and couture silhouette.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E8E0D6] flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#887F79] font-sans">Bespoke Setting Included</span>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs uppercase tracking-widest font-semibold text-[#B89363] hover:text-[#201C1B] transition-colors cursor-pointer"
                  >
                    Details & Booking →
                  </button>
                </div>
              </div>
            </div>

            {/* Service 2: Hair */}
            <div className="flex flex-col bg-[#FAF8F5] border border-[#E8E0D6] overflow-hidden group">
              <div className="h-72 overflow-hidden relative">
                <img
                  src="/assets/images/service_hair.jpg"
                  alt="Hair Balayage & Colour by Maliha Bukhari"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-xs px-3 py-1 text-[11px] font-sans uppercase tracking-widest text-[#201C1B]">
                  Hair Architecture
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl font-normal text-[#201C1B] mb-3">
                    Dimensional Balayage & Care
                  </h3>
                  <p className="text-sm text-[#5E5652] leading-relaxed font-sans">
                    Hand-painted French balayage, honey caramel highlights, nanokeratin silk infusions, and precision sculpting cuts.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E8E0D6] flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#887F79] font-sans">Bond-Protective Systems</span>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs uppercase tracking-widest font-semibold text-[#B89363] hover:text-[#201C1B] transition-colors cursor-pointer"
                  >
                    Details & Booking →
                  </button>
                </div>
              </div>
            </div>

            {/* Service 3: Skin & Spa */}
            <div className="flex flex-col bg-[#FAF8F5] border border-[#E8E0D6] overflow-hidden group">
              <div className="h-72 overflow-hidden relative">
                <img
                  src="/assets/images/studio_interior.jpg"
                  alt="Skin Glow & Spa by Maliha Bukhari"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-xs px-3 py-1 text-[11px] font-sans uppercase tracking-widest text-[#201C1B]">
                  Skin, Nails & Spa
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl font-normal text-[#201C1B] mb-3">
                    Hydra-Radiance & Body Polish
                  </h3>
                  <p className="text-sm text-[#5E5652] leading-relaxed font-sans">
                    Clinical-grade facials, botanical aromatherapy massages, and Russian couture manicures for lasting radiance.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E8E0D6] flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#887F79] font-sans">Pure Organic Botanicals</span>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs uppercase tracking-widest font-semibold text-[#B89363] hover:text-[#201C1B] transition-colors cursor-pointer"
                  >
                    Details & Booking →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER SPOTLIGHT: MALIHA BUKHARI */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <div className="luxury-image-frame border border-[#E8E0D6] shadow-xl">
              <img
                src="/assets/images/founder_maliha.jpg"
                alt="Maliha Bukhari - Founder and Master Beauty Artist"
                className="w-full h-[520px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Bio & Ethos */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="text-xs font-sans uppercase tracking-[0.25em] text-[#B89363] font-semibold flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#B89363]" />
              <span>Creative Director & Founder</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#201C1B] leading-tight">
              Maliha Bukhari
            </h2>

            <blockquote className="font-editorial text-xl sm:text-2xl text-[#201C1B] italic leading-relaxed pl-4 border-l-2 border-[#B89363]">
              "True beauty in Pakistani bridal artistry is about enhancing individual character—never masking it. Our studio was conceived as a high-altitude haven on Canal Road where brides feel celebrated, relaxed, and utterly confident."
            </blockquote>

            <p className="text-sm sm:text-base text-[#5E5652] leading-relaxed font-sans">
              With years of dedicated artistry catering to Lahore’s most discerning brides and style connoisseurs, Maliha Bukhari has established a reputation for flawless complexion finishes, seamless hair dimensions, and unmatched hospitality. Every bridal appointment is overseen personally with curated lighting and bespoke preparation.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 bg-[#201C1B] text-white text-xs font-sans font-semibold tracking-widest uppercase hover:bg-[#B89363] transition-colors cursor-pointer"
              >
                Meet the Team & Studio
              </button>

              <a
                href={BUSINESS_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-widest uppercase text-[#5E5652] hover:text-[#B89363] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#B89363]" />
                <span>Follow @malihabukhari___</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED CLIENT TESTIMONIALS */}
      <section className="bg-[#FAF8F5] py-24 sm:py-32 border-t border-[#E8E0D6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#B89363] font-semibold block mb-3">
              Client Experiences
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#201C1B]">
              Reflections of Elegance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VERIFIED_TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#FFFFFF] border border-[#E8E0D6] shadow-xs flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-1 text-[#B89363]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#5E5652] leading-relaxed font-sans italic">
                    "{t.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E8E0D6]">
                  <p className="font-display text-base text-[#201C1B]">{t.name}</p>
                  <p className="text-xs text-[#887F79] font-sans mt-0.5">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION / APPOINTMENT PROMPT (DIRECT, ZERO POPUPS) */}
      <section className="bg-[#201C1B] text-white py-24 px-6 sm:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 relative z-10">
          <span className="text-xs font-sans uppercase tracking-[0.3em] text-[#DFC7A7] font-semibold">
            Reserve Your Experience
          </span>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Step into the Atelier of Maliha Bukhari.
          </h2>

          <p className="text-white/80 font-sans text-base max-w-xl leading-relaxed">
            Whether preparing for your wedding day or seeking transformative hair & skin wellness, our team is at your service on the 6th Floor of Mall 2, Canal Road, Lahore.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('gallery-booking')}
              className="px-8 py-3.5 bg-white text-[#201C1B] text-xs font-sans font-semibold tracking-widest uppercase hover:bg-[#B89363] hover:text-white transition-all duration-300 cursor-pointer shadow-lg"
            >
              Book Inline Appointment
            </button>

            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-transparent text-white border border-[#DFC7A7] text-xs font-sans font-semibold tracking-widest uppercase hover:bg-[#DFC7A7] hover:text-[#201C1B] transition-all duration-300"
            >
              Direct WhatsApp (+92 321 0056767)
            </a>
          </div>

          <p className="text-xs text-white/50 font-sans tracking-wide pt-4">
            Open Monday through Sunday · 11:00 AM to 8:00 PM · Direct confirmation
          </p>
        </div>
      </section>
    </div>
  );
};
