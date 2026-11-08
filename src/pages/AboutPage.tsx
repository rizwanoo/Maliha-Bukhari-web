import React from 'react';
import { ArrowUpRight, Award, ShieldCheck, Sparkles, MapPin, Heart, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface AboutPageProps {
  onNavigateToBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateToBooking }) => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#201C1B] pt-24 sm:pt-32 pb-24">
      {/* 1. HERO STORY SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="text-xs font-sans uppercase tracking-[0.25em] text-[#B89363] font-semibold flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#B89363]" />
              <span>The Atelier Vision</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-normal text-[#201C1B] tracking-tight leading-[1.1]">
              Elevating South Asian Bridal & Modern Beauty Artistry
            </h1>

            <p className="text-base sm:text-lg text-[#5E5652] font-sans leading-relaxed">
              Maliha Bukhari Luxury Beauty & Bridal Studio was established with a singular commitment: to provide an intimate, unhurried sanctuary in Lahore where artistic integrity, skin-health preservation, and refined luxury converge.
            </p>

            <p className="text-sm text-[#5E5652] font-sans leading-relaxed">
              Perched on the 6th Floor of Mall 2 on Main Canal Road, the studio provides an ethereal retreat filled with warm natural daylight, custom architectural brass and marble styling suites, and a tranquil escape from city congestion. Here, bridal prep is treated as a joyful celebration rather than a rushed assembly line.
            </p>

            <div className="pt-4 flex items-center gap-6">
              <button
                onClick={onNavigateToBooking}
                className="px-8 py-3 bg-[#201C1B] text-white text-xs font-sans font-semibold tracking-widest uppercase hover:bg-[#B89363] transition-colors cursor-pointer"
              >
                Schedule a Visit
              </button>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans uppercase tracking-widest font-semibold text-[#5E5652] hover:text-[#B89363] transition-colors"
              >
                WhatsApp Consultation →
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="luxury-image-frame border border-[#E8E0D6] shadow-2xl">
              <img
                src="/src/assets/images/founder_maliha_portrait_1794130920414.jpg"
                alt="Maliha Bukhari - Founder & Master Artist"
                className="w-full h-[540px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 bg-[#FFFFFF] border-x border-b border-[#E8E0D6] text-center">
              <p className="font-display text-lg text-[#201C1B]">Maliha Bukhari</p>
              <p className="text-xs uppercase tracking-widest text-[#887F79] font-sans">
                Founder, Master Bridal & Aesthetic Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY OF ELEVATION */}
      <section className="bg-[#F3ECE4] py-20 sm:py-28 border-y border-[#E8E0D6] mb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#B89363] font-semibold block mb-3">
              Guiding Principles
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#201C1B]">
              The Core Pillars of Our Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF8F5] p-8 sm:p-10 border border-[#E8E0D6] flex flex-col justify-between">
              <div>
                <span className="font-display text-2xl text-[#B89363] block mb-4">01</span>
                <h3 className="font-display text-2xl text-[#201C1B] mb-3">Individual Harmony</h3>
                <p className="text-sm text-[#5E5652] leading-relaxed font-sans">
                  We reject one-size-fits-all beauty templates. Each bridal look and hair color is custom formulated to complement eye shape, bone structure, and heritage bridal jewelry.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E8E0D6] text-xs font-sans uppercase tracking-wider text-[#887F79]">
                Bespoke Artistry
              </div>
            </div>

            <div className="bg-[#FAF8F5] p-8 sm:p-10 border border-[#E8E0D6] flex flex-col justify-between">
              <div>
                <span className="font-display text-2xl text-[#B89363] block mb-4">02</span>
                <h3 className="font-display text-2xl text-[#201C1B] mb-3">Integrity of Form</h3>
                <p className="text-sm text-[#5E5652] leading-relaxed font-sans">
                  Hair health and skin barrier preservation are non-negotiable. We integrate bond-builders in every color service and clinical hydration in every bridal prep.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E8E0D6] text-xs font-sans uppercase tracking-wider text-[#887F79]">
                Zero Compromise Care
              </div>
            </div>

            <div className="bg-[#FAF8F5] p-8 sm:p-10 border border-[#E8E0D6] flex flex-col justify-between">
              <div>
                <span className="font-display text-2xl text-[#B89363] block mb-4">03</span>
                <h3 className="font-display text-2xl text-[#201C1B] mb-3">Sanctuary Experience</h3>
                <p className="text-sm text-[#5E5652] leading-relaxed font-sans">
                  High above the Canal Road bustle, our 6th-floor studio provides an airy, luminous haven with private consultation zones and attentive hospitality.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E8E0D6] text-xs font-sans uppercase tracking-wider text-[#887F79]">
                6th Floor Mall 2 Retreat
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STUDIO ATMOSPHERE & CRAFTSMANSHIP */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 luxury-image-frame border border-[#E8E0D6]">
            <img
              src="/src/assets/images/studio_interior_luxury_1794130918903.jpg"
              alt="Maliha Bukhari Luxury Studio Interior"
              className="w-full h-[480px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#B89363] font-semibold">
              The Architecture of Comfort
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#201C1B]">
              Designed to Inspire Tranquility
            </h2>
            <p className="text-[#5E5652] font-sans leading-relaxed text-sm sm:text-base">
              Step into an interior finished in warm ivory, champagne beige, and soft blush velvet. Customized vanity stations feature high-CRI editorial daylight rings alongside natural window light, ensuring your makeup and hair look breathtaking both indoors and under direct outdoor wedding lighting.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#B89363] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm text-[#201C1B]">Hospital-Grade Hygiene Standards</p>
                  <p className="text-xs text-[#5E5652]">All brushes, manicure tools, and skin attachments undergo medical-grade UV and autoclaved sanitization between clients.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#B89363] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm text-[#201C1B]">Curated Global Luxury Formulations</p>
                  <p className="text-xs text-[#5E5652]">Featuring authentic high-performance brands including Olaplex, Oribe, Charlotte Tilbury, MAC, and Dior.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE ARTISAN TEAM */}
      <section className="bg-[#FAF8F5] py-20 sm:py-28 border-t border-[#E8E0D6]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#B89363] font-semibold block mb-3">
              Master Artists & Specialists
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#201C1B]">
              The Studio Specialists
            </h2>
            <p className="text-sm text-[#5E5652] font-sans mt-3">
              Trained under Maliha Bukhari’s rigorous artistic philosophy, each specialist brings certified expertise in their respective discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFFFFF] border border-[#E8E0D6] p-6 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-sans uppercase tracking-widest text-[#B89363] mb-2">Master Colorist</p>
                <h3 className="font-display text-xl text-[#201C1B] mb-2">Hair Architecture & Balayage</h3>
                <p className="text-xs text-[#5E5652] leading-relaxed font-sans">
                  Specializing in French balayage, corrective toning, nanokeratin silk infusions, and precision sculpting cuts tailored to client facial movement.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E8E0D6] flex items-center justify-between text-xs text-[#887F79]">
                <span>10+ Yrs Craft Mastery</span>
                <span>Canal Road Studio</span>
              </div>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E8E0D6] p-6 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-sans uppercase tracking-widest text-[#B89363] mb-2">Clinical Esthetician</p>
                <h3 className="font-display text-xl text-[#201C1B] mb-2">Skincare & Hydra Radiance</h3>
                <p className="text-xs text-[#5E5652] leading-relaxed font-sans">
                  Certified in dermal infusion, ultrasonic exfoliation, lymphatic drainage, and customized pre-bridal skin prep protocols.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E8E0D6] flex items-center justify-between text-xs text-[#887F79]">
                <span>Medical-Grade Protocol</span>
                <span>Canal Road Studio</span>
              </div>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E8E0D6] p-6 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-sans uppercase tracking-widest text-[#B89363] mb-2">Couture Nail Artisan</p>
                <h3 className="font-display text-xl text-[#201C1B] mb-2">Nail Artistry & Spa Care</h3>
                <p className="text-xs text-[#5E5652] leading-relaxed font-sans">
                  Expert in Russian cuticle techniques, Japanese gel overlays, sculpted extensions, and bespoke bridal hand-painted ornamentation.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E8E0D6] flex items-center justify-between text-xs text-[#887F79]">
                <span>Japanese Gel Certified</span>
                <span>Canal Road Studio</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
