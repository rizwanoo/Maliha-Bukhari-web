export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'bridal' | 'nails' | 'spa';
  categoryLabel: string;
  duration?: string;
  description: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'bridal' | 'hair' | 'skin' | 'nails' | 'studio';
  categoryName: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
  caption: string;
}

export const BUSINESS_INFO = {
  name: "Maliha Bukhari",
  tagline: "Luxury Beauty & Bridal Studio",
  category: "Hair • Skin • Nails • Spa",
  motto: "Where Beauty Meets Artistry",
  address: {
    line1: "6th Floor, Mall 2",
    street: "Mohlanwal Road, Eden Canal Villas Commercial Area, Main Canal Road",
    city: "Lahore",
    country: "Pakistan",
    postalCode: "54000",
    full: "6th Floor, Mall 2, Main Canal Road, Lahore, Pakistan 54000"
  },
  whatsapp: "+92 321 0056767",
  whatsappRaw: "923210056767",
  whatsappLink: "https://wa.me/923210056767",
  instagram: {
    handle: "@malihabukhari___",
    url: "https://www.instagram.com/malihabukhari___/?hl=en"
  },
  hours: {
    days: "Monday – Sunday",
    times: "11:00 AM – 8:00 PM",
    note: "By appointment & walk-in availability"
  },
  logo: "/assets/logo.jpg"
};

export const SERVICES_DATA: ServiceItem[] = [
  // BRIDAL & MAKEUP
  {
    id: "signature-bridal",
    name: "Maliha Bukhari Signature Bridal Look",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    description: "Our crowning masterpiece. Flawless porcelain or warm dewy base, custom sculpted eyes with champagne shimmers, bespoke jewelry and dupatta setting, tailored exclusively for Barat & reception brides.",
    highlights: ["Custom skin prep & radiance priming", "Bespoke eye sculpting & lash styling", "Dupatta draping & heritage jewelry setting"]
  },
  {
    id: "nikkah-engagement-glam",
    name: "Nikkah & Engagement Soft Glam",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    description: "Luminous, ethereal radiance created with sheer pastels, soft peach-rose blush, featherlight lashes, and delicate hair styling for daytime or intimate ceremonies.",
    highlights: ["Ethereal glass-skin finish", "Monochromatic soft rose hues", "Intricate floral or crown hair styling"]
  },
  {
    id: "haute-party-makeup",
    name: "Editorial & Red Carpet Party Glam",
    category: "bridal",
    categoryLabel: "Bridal Artistry",
    description: "Dramatic or minimalist couture makeup designed to photograph flawlessly under all lighting conditions, paired with effortless salon waves or a sleek updo.",
    highlights: ["Long-wear camera-ready base", "Bespoke lip and contour design", "Choice of Hollywood waves or textured updo"]
  },

  // HAIR
  {
    id: "luxury-balayage-foilayage",
    name: "Signature Balayage & French Foilayage",
    category: "hair",
    categoryLabel: "Hair Transformation",
    description: "Seamless, hand-painted dimension customized to your undertone. We specialize in lived-in caramel, mocha, champagne blonde, and honey reflections with zero harsh grow-out lines.",
    highlights: ["Bespoke color formulation", "Bond-protecting plex treatment", "Signature bouncy blowout & styling"]
  },
  {
    id: "keratin-gloss-infusion",
    name: "Nanokeratin & Silk Gloss Smoothing",
    category: "hair",
    categoryLabel: "Hair Transformation",
    description: "Deep restorative treatment eliminating frizz, rebuilding hair cuticle integrity, and imparting liquid mirror shine that withstands Lahore's summer humidity.",
    highlights: ["Formaldehyde-free luxury infusion", "Rebuilds damaged hair fiber", "Smooth, manageable silk finish for months"]
  },
  {
    id: "couture-haircut-styling",
    name: "Architectural Haircut & Thermal Blowout",
    category: "hair",
    categoryLabel: "Hair Transformation",
    description: "Precision dry and wet cutting tailored to your facial bone structure and hair movement, finished with our signature voluminous blowout.",
    highlights: ["Face-framing curtain layers & texture", "Scalp clarifying rinse", "Editorial heat styling"]
  },

  // SKIN
  {
    id: "bespoke-hydra-glow",
    name: "Bespoke Hydra-Radiance Facial",
    category: "skin",
    categoryLabel: "Skincare & Glow",
    description: "Multi-step dermal infusion combining gentle ultrasonic exfoliation, vacuum extraction, hyaluronic acid peptide saturation, and cold-hammer soothing.",
    highlights: ["Instant pore decongestion", "High-dose botanical antioxidants", "Zero downtime glass skin glow"]
  },
  {
    id: "bridal-collagen-polish",
    name: "Pre-Bridal Luxury Radiance Polish",
    category: "skin",
    categoryLabel: "Skincare & Glow",
    description: "The ultimate bridal skin ritual. Gentle enzymatic brightening, gold sheet infusion, and lymphatic drainage massage to restore skin elasticity and natural luminosity.",
    highlights: ["Micro-circulation drainage massage", "Gold-infused bio-cellulose mask", "Tailored neck & décolleté treatment"]
  },

  // NAILS
  {
    id: "couture-bridal-nail-art",
    name: "Couture Bridal & Gel Extensions",
    category: "nails",
    categoryLabel: "Nail Art & Care",
    description: "Architectural nail extensions featuring delicate chrome glazing, fine gold foil accents, mother-of-pearl gradients, and hand-painted miniature bridal motifs.",
    highlights: ["Gentle Russian cuticular technique", "Chip-resistant Japanese gel system", "Custom Swarovski or pearl placement"]
  },
  {
    id: "spa-pedicure-manicure",
    name: "Velvet Rose Spa Manicure & Pedicure",
    category: "nails",
    categoryLabel: "Nail Art & Care",
    description: "Therapeutic soak in botanical rose salts, followed by pure sugar exfoliation, deep callus smoothing, warm paraffin mask, and soothing oil massage.",
    highlights: ["Himalayan salt & rose petal soak", "Paraffin warmth deep hydration", "High-gloss protective finish"]
  },

  // SPA & WELLNESS
  {
    id: "aromatherapy-relaxation",
    name: "Aromatherapy Tension Relief Ritual",
    category: "spa",
    categoryLabel: "Spa & Wellness",
    description: "Tailored head, neck, and shoulder acupressure using warm bergamot and jasmine botanical oils to release deep muscle tension and restore quiet calm.",
    highlights: ["Custom essential oil selection", "Acupressure stress point release", "Warm herbal towel finish"]
  },
  {
    id: "bridal-prewedding-sanctuary",
    name: "The Bridal Sanctuary Half-Day Ritual",
    category: "spa",
    categoryLabel: "Spa & Wellness",
    description: "A private, luxurious head-to-toe pre-wedding ceremony combining full body polish, hydra-facial, hair deep conditioning mask, and sensory relaxation.",
    highlights: ["Private styling suite atmosphere", "Complete head-to-toe rejuvenation", "Prepares bride for wedding festivities"]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Haute Couture Bridal Vision",
    category: "bridal",
    categoryName: "Bridal Artistry",
    image: "/src/assets/images/hero_bridal_editorial_1794130917947.jpg",
    aspect: "landscape",
    caption: "Ivory and antique gold bridal styling by Maliha Bukhari with hand-draped dupatta and regal heritage jewelry."
  },
  {
    id: "gal-2",
    title: "Signature Studio Sanctuary",
    category: "studio",
    categoryName: "Studio Ambience",
    image: "/src/assets/images/studio_interior_luxury_1794130918903.jpg",
    aspect: "landscape",
    caption: "The elegant 6th floor studio at Mall 2, Canal Road, featuring arched brass mirrors, blush velvet seating, and soft ambient lighting."
  },
  {
    id: "gal-3",
    title: "Traditional Barat Glamour",
    category: "bridal",
    categoryName: "Bridal Artistry",
    image: "/src/assets/images/service_bridal_glam_1794130919630.jpg",
    aspect: "portrait",
    caption: "Exquisite Barat bridal makeup featuring seamless champagne sculpt, warm rose lips, and traditional bridal ornamentation."
  },
  {
    id: "gal-4",
    title: "Honey Caramel Balayage",
    category: "hair",
    categoryName: "Hair Transformation",
    image: "/src/assets/images/service_hair_balayage_1794130920523.jpg",
    aspect: "portrait",
    caption: "Seamless hand-blended warm honey balayage with voluminous silk waves, styled to perfection."
  },
  {
    id: "gal-5",
    title: "Maliha Bukhari — Founder & Master Artist",
    category: "studio",
    categoryName: "Artisan Profile",
    image: "/src/assets/images/founder_maliha_portrait_1794130920414.jpg",
    aspect: "portrait",
    caption: "Founder Maliha Bukhari at her flagship Canal Road studio in Lahore, dedicated to bespoke beauty craftsmanship."
  }
];

export const VERIFIED_TESTIMONIALS = [
  {
    name: "Aiman Tariq",
    event: "Barat Bride · Lahore",
    text: "Maliha Bukhari and her team created pure magic for my Barat. The makeup didn't budge through six hours of lights and tears, and my skin looked dewy and natural. Walking into the 6th floor studio felt serene and tranquil during wedding chaos.",
    rating: 5
  },
  {
    name: "Dr. Sarah Mansoor",
    event: "Balayage & Hair Care Client",
    text: "Finding a salon in Lahore that understands dimensional balayage without damaging dark Asian hair is rare. Maliha's team formulated a custom caramel gloss that transformed my hair completely. The studio aesthetic is unmatched.",
    rating: 5
  },
  {
    name: "Zainab Raza",
    event: "Valima Bride & Regular Spa Client",
    text: "From my pre-bridal facials to my Valima soft glam, the precision and luxury treatment is world-class. No heavy caked foundations—only pure sophistication and elegance. Truly Lahore's finest beauty sanctuary.",
    rating: 5
  }
];
