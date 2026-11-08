import React, { useState } from 'react';
import { MessageCircle, MapPin, Clock, Instagram, ArrowUpRight, CheckCircle2, Calendar, User, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, GALLERY_ITEMS, SERVICES_DATA } from '../data/businessData';

interface GalleryBookingPageProps {
  initialService?: string;
}

export const GalleryBookingPage: React.FC<GalleryBookingPageProps> = ({ initialService = '' }) => {
  // Gallery Filter State
  const [activeFilter, setActiveFilter] = useState<'all' | 'bridal' | 'hair' | 'studio'>('all');

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    service: initialService || SERVICES_DATA[0].name,
    preferredDate: '',
    preferredTime: '11:00 AM',
    notes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const filteredGallery = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const timeSlots = [
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidationError('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!formData.whatsappNumber.trim()) {
      setValidationError('Please enter your WhatsApp contact number.');
      return;
    }
    if (!formData.preferredDate) {
      setValidationError('Please select a preferred date for your appointment.');
      return;
    }

    // Build the formatted WhatsApp message
    const messageText = `*APPOINTMENT INQUIRY — MALIHA BUKHARI STUDIO*
*Name:* ${formData.fullName.trim()}
*WhatsApp:* ${formData.whatsappNumber.trim()}
*Selected Service:* ${formData.service}
*Preferred Date:* ${formData.preferredDate}
*Preferred Time Slot:* ${formData.preferredTime}
${formData.notes ? `*Special Notes / Requests:* ${formData.notes.trim()}` : ''}

_Sent via Maliha Bukhari Luxury Studio Website_`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/923210056767?text=${encodedMessage}`;

    // Mark as submitted inline (NO MODALS, NO POPUPS)
    setFormSubmitted(true);

    // Open WhatsApp directly
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#201C1B] pt-24 sm:pt-32 pb-24">
      {/* 1. PORTFOLIO & GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E8E0D6]">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#B89363] font-semibold block mb-3">
              Curated Portfolio
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-normal text-[#201C1B] tracking-tight">
              Artistry in Motion
            </h1>
            <p className="text-sm sm:text-base text-[#5E5652] font-sans mt-3 max-w-xl">
              Authentic bridal transformations, dimensional balayage creations, and studio interior captures from our flagship location on Canal Road, Lahore.
            </p>
          </div>

          {/* Gallery Category Filter (Segmented buttons, strictly compliant with zero-pill rule) */}
          <div className="flex items-center gap-2 flex-wrap">
            {[
              { id: 'all', label: 'All Portfolio' },
              { id: 'bridal', label: 'Bridal Artistry' },
              { id: 'hair', label: 'Hair & Balayage' },
              { id: 'studio', label: 'Studio & Interior' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id as any)}
                className={`px-4 py-2 text-xs font-sans uppercase tracking-widest transition-all cursor-pointer border ${
                  activeFilter === filter.id
                    ? 'bg-[#201C1B] text-white border-[#201C1B] font-semibold'
                    : 'bg-transparent text-[#5E5652] border-transparent hover:border-[#E8E0D6] hover:text-[#201C1B]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Image Presentation (No circular frames, no repetitive rounded cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-12 items-start">
          {filteredGallery.map((item, index) => {
            const isWide = index % 3 === 0;
            return (
              <div
                key={item.id}
                className={`${
                  isWide ? 'md:col-span-8' : 'md:col-span-4'
                } bg-[#FFFFFF] border border-[#E8E0D6] overflow-hidden group`}
              >
                <div className="luxury-image-frame overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full ${
                      isWide ? 'h-[440px]' : 'h-[360px]'
                    } object-cover group-hover:scale-103 transition-transform duration-700`}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-[11px] font-sans uppercase tracking-widest text-[#B89363] font-semibold">
                      {item.categoryName}
                    </span>
                    <span className="text-xs text-[#887F79] font-sans">
                      Verified Studio Work
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-normal text-[#201C1B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E5652] font-sans leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. INLINE APPOINTMENT BOOKING SECTION (NO MODALS, NO POPUPS) */}
      <section id="booking-section" className="bg-[#F3ECE4] py-20 sm:py-28 border-y border-[#E8E0D6] mb-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#B89363] font-semibold block mb-3">
              Direct Scheduling
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#201C1B]">
              Reserve Your Studio Time
            </h2>
            <p className="text-sm text-[#5E5652] font-sans mt-3 max-w-lg mx-auto leading-relaxed">
              Complete your appointment details below. Upon submission, your formatted inquiry will route directly to our team via WhatsApp for instant schedule confirmation.
            </p>
          </div>

          {/* Clean Inline Form */}
          <div className="bg-[#FFFFFF] border border-[#E8E0D6] p-8 sm:p-12 shadow-sm">
            {formSubmitted ? (
              <div className="py-8 text-center flex flex-col items-center gap-4">
                <CheckCircle2 className="w-12 h-12 text-[#B89363]" />
                <h3 className="font-display text-2xl text-[#201C1B]">Inquiry Prepared & Routed</h3>
                <p className="text-sm text-[#5E5652] font-sans max-w-md leading-relaxed">
                  Your appointment details have been prepared for WhatsApp. If WhatsApp did not open automatically on your device, tap the button below to connect directly with Maliha Bukhari Studio.
                </p>
                <a
                  href={`https://wa.me/923210056767?text=${encodeURIComponent(
                    `*APPOINTMENT INQUIRY*\nName: ${formData.fullName}\nService: ${formData.service}\nDate: ${formData.preferredDate}\nTime: ${formData.preferredTime}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-8 py-3 bg-[#201C1B] text-white text-xs font-sans uppercase tracking-widest font-semibold hover:bg-[#B89363] transition-colors"
                >
                  Open WhatsApp Directly (+92 321 0056767)
                </a>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs uppercase tracking-wider text-[#887F79] hover:text-[#201C1B] font-sans underline cursor-pointer mt-4"
                >
                  Edit Appointment Details
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {validationError && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-sans">
                    {validationError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-sans uppercase tracking-wider text-[#201C1B] font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Ayesha Khan"
                      required
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E0D6] text-sm text-[#201C1B] focus:outline-none focus:border-[#B89363] font-sans"
                    />
                  </div>

                  {/* WhatsApp Contact */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-sans uppercase tracking-wider text-[#201C1B] font-semibold">
                      WhatsApp Contact *
                    </label>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      placeholder="+92 300 0000000"
                      required
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E0D6] text-sm text-[#201C1B] focus:outline-none focus:border-[#B89363] font-sans"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-sans uppercase tracking-wider text-[#201C1B] font-semibold">
                    Select Atelier Discipline or Service *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E0D6] text-sm text-[#201C1B] focus:outline-none focus:border-[#B89363] font-sans cursor-pointer"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.name}>
                        {srv.categoryLabel}: {srv.name}
                      </option>
                    ))}
                    <option value="Bridal Consultation & Trial">Bespoke Bridal Consultation & Look Trial</option>
                    <option value="Custom Event Package">Custom Event & Hair Package</option>
                  </select>
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-sans uppercase tracking-wider text-[#201C1B] font-semibold">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E0D6] text-sm text-[#201C1B] focus:outline-none focus:border-[#B89363] font-sans"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-sans uppercase tracking-wider text-[#201C1B] font-semibold">
                      Preferred Time Slot (11 AM - 8 PM) *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E0D6] text-sm text-[#201C1B] focus:outline-none focus:border-[#B89363] font-sans cursor-pointer"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Notes / Special Requests */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-sans uppercase tracking-wider text-[#201C1B] font-semibold">
                    Special Notes or Bridal Details (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Tell us about your wedding date, dupatta fabric, hair length, or any specific concerns..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E8E0D6] text-sm text-[#201C1B] focus:outline-none focus:border-[#B89363] font-sans resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#201C1B] text-white text-xs font-sans font-semibold tracking-widest uppercase hover:bg-[#B89363] transition-colors flex items-center justify-center gap-3 cursor-pointer shadow-md"
                  >
                    <span>Confirm & Send to Studio WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-[#887F79] font-sans text-center mt-3">
                    Appointments are confirmed directly by Maliha Bukhari Studio team via WhatsApp: +92 321 0056767. No advance deposit is charged online.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. VERIFIED LOCATION & CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#B89363] font-semibold">
              Find Our Sanctuary
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#201C1B]">
              Canal Road Studio
            </h2>
            <p className="text-sm text-[#5E5652] font-sans leading-relaxed">
              Centrally located with convenient parking at Mall 2, elevated above traffic noise on the 6th floor for complete privacy during your bridal or styling appointments.
            </p>

            <div className="space-y-6 pt-4 border-t border-[#E8E0D6]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B89363] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-semibold text-[#201C1B] font-sans">Physical Address</h4>
                  <p className="text-xs sm:text-sm text-[#5E5652] font-sans mt-0.5 leading-relaxed">
                    6th Floor, Mall 2, Mohlanwal Road, Eden Canal Villas Commercial Area, Main Canal Road, Lahore, Punjab 54000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#B89363] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-semibold text-[#201C1B] font-sans">Verified Studio Hours</h4>
                  <p className="text-xs sm:text-sm text-[#5E5652] font-sans mt-0.5">
                    Monday to Sunday: 11:00 AM – 8:00 PM
                  </p>
                  <p className="text-[11px] text-[#887F79] font-sans">
                    Early morning bridal bookings available upon request
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#B89363] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-semibold text-[#201C1B] font-sans">Official WhatsApp Desk</h4>
                  <p className="text-xs sm:text-sm text-[#5E5652] font-sans mt-0.5">
                    +92 321 0056767
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-[#B89363] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-semibold text-[#201C1B] font-sans">Instagram Official</h4>
                  <a
                    href={BUSINESS_INFO.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-[#B89363] hover:underline font-sans"
                  >
                    @malihabukhari___
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E8E0D6] p-2 overflow-hidden shadow-sm">
            <div className="h-[420px] w-full relative">
              <iframe
                title="Maliha Bukhari Luxury Studio Location Mall 2 Lahore"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=Mall+2+Canal+Road+Eden+Canal+Villas+Lahore&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full filter saturate-90"
              />
            </div>
            <div className="p-4 flex items-center justify-between text-xs font-sans text-[#5E5652]">
              <span>6th Floor, Mall 2 · Main Canal Road</span>
              <a
                href="https://maps.google.com/?q=Mall+2+Canal+Road+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B89363] hover:underline font-semibold flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
