import { Service, Project, AddOnService } from '../types';

export const BUSINESS_INFO = {
  name: 'Ushers Inc',
  owner: 'Arnold',
  tagline: 'Service to All',
  industry: 'Web Design & Digital Services',
  targetAudience: 'Small businesses and creatives in Ghana',
  phone: '0537274710',
  internationalPhone: '+233537274710',
  whatsappNumber: '233543580030',
  displayWhatsApp: '0543580030',
  email: 'ushersincoperated@gmail.com',
  location: 'Ghana',
  domain: 'ushersinc.com',
  socialMedia: {
    facebook: 'https://facebook.com/ushersinc',
    instagram: 'https://instagram.com/ushersinc',
    handles: '@ushersinc',
  },
  colors: {
    primaryDeepBlue: '#1A3A6B',
    accentLightBlue: '#4A90D9',
    darkBg: '#050505',
    darkCard: '#111111',
  },
};

export const getWhatsAppLink = (customMessage?: string) => {
  const defaultText = encodeURIComponent(
    customMessage ||
      `Hello Arnold, I'm reaching out from the Ushers Inc website. I would like to discuss a project for my business!`
  );
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${defaultText}`;
};

export const SERVICES: Service[] = [
  {
    id: 'basic-website',
    title: 'Basic Website',
    shortDesc: '1-page professional site, mobile-friendly',
    fullDesc:
      'A sleek, single-page website built for small businesses and personal brands. Includes essential contact information, social links, and direct WhatsApp lead capture.',
    priceNote: 'Starting at GHS 1,100',
    basePriceGHS: 1100,
    iconName: 'monitor',
    features: [
      '1-Page Clean & Professional Layout',
      '100% Mobile-Friendly & Fast Loading',
      'Interactive Contact Form',
      'Social Media Integration (FB, IG, LinkedIn)',
      'Direct WhatsApp Click-to-Chat Button',
      'Basic On-Page SEO Optimization',
    ],
    popular: true,
    idealFor: 'Solo entrepreneurs, consultants, startups & local businesses needing an instant online presence',
    whatsappMessage:
      'Hi Arnold, I want to get started with the Basic Website package (GHS 1,100) for my business.',
  },
  {
    id: 'standard-website',
    title: 'Standard Website',
    shortDesc: '3–5 pages with custom design & SEO',
    fullDesc:
      'A comprehensive multi-page website tailored to establish credibility and capture qualified leads across Ghana.',
    priceNote: 'Starting at GHS 2,200',
    basePriceGHS: 2200,
    iconName: 'layers',
    features: [
      '3 to 5 Custom-Designed Pages',
      'Custom Layout & Brand Typography',
      'Interactive Contact Form & Lead Routing',
      'Google Maps Location Integration',
      'Search Engine Optimization (SEO Setup)',
      'Fast Performance & Mobile Optimization',
    ],
    popular: false,
    idealFor: 'Growing SMEs, service providers, clinics, restaurants & agencies needing distinct pages',
    whatsappMessage:
      'Hi Arnold, I would like to discuss the Standard Website package (GHS 2,200) for my business.',
  },
  {
    id: 'premium-website',
    title: 'Premium Website',
    shortDesc: '5–10 pages, booking & e-commerce ready',
    fullDesc:
      'An advanced, high-performance digital hub with booking systems, e-commerce storefronts, and deep SEO configurations.',
    priceNote: 'Starting at GHS 4,500+',
    basePriceGHS: 4500,
    iconName: 'sparkles',
    features: [
      '5 to 10 Pages Custom Architecture',
      'Online Booking & Appointment System',
      'E-Commerce Storefront & Payment Ready (MoMo/Cards)',
      'Full SEO Setup & Analytics Tracking',
      'Custom Animations & Brand Styling',
      'Priority Delivery & Dedicated Training',
    ],
    popular: false,
    idealFor: 'E-commerce brands, hotels, medical centers, corporate firms & high-traffic platforms',
    whatsappMessage:
      'Hi Arnold, I am interested in the Premium Website package (GHS 4,500+) with booking/e-commerce.',
  },
  {
    id: 'social-media-setup',
    title: 'Social Media Setup',
    shortDesc: 'Professional profile setup across platforms',
    fullDesc:
      'Elevate your brand presence across major social channels with cohesive graphics, bio optimizations, and direct WhatsApp Business links.',
    priceNote: 'GHS 800',
    basePriceGHS: 800,
    iconName: 'smartphone',
    features: [
      'Facebook Business Page Setup & Branding',
      'Instagram Professional Profile Optimization',
      'LinkedIn Company Page Setup',
      'WhatsApp Business Catalog & Quick Replies',
      'High-Resolution Profile & Header Graphics',
      'Consistent Handle & Bio Copywriting',
    ],
    popular: false,
    idealFor: 'Businesses launching or refreshing their presence across Facebook, IG, and LinkedIn',
    whatsappMessage:
      'Hi Arnold, I want to set up my Social Media profiles (GHS 800) with Ushers Inc.',
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    shortDesc: 'Modern look & improved performance',
    fullDesc:
      'Transform your outdated, slow, or broken website into a modern, lightning-fast digital asset that converts visitors into paying customers.',
    priceNote: 'Starting at GHS 2,000+',
    basePriceGHS: 2000,
    iconName: 'refresh-cw',
    features: [
      'Full Visual & Structural Redesign',
      'Mobile-First Layout Overhaul',
      'Speed & Performance Acceleration',
      'Conversion Rate & Call-to-Action Optimization',
      'Preservation of Existing Content & Links',
      'Enhanced Security & SSL Configuration',
    ],
    popular: false,
    idealFor: 'Established businesses with dated websites that need to stand out from competitors',
    whatsappMessage:
      'Hi Arnold, my current website needs a full redesign (GHS 2,000+) to improve look and performance.',
  },
];

export const ADD_ON_SERVICES: AddOnService[] = [
  {
    id: 'ongoing-maintenance',
    title: 'Ongoing Maintenance',
    price: 'GHS 300 / month',
    priceGHS: 300,
    billingNote: 'per month',
    description: 'Security updates, backups, content updates, and continuous performance checks.',
    icon: 'shield-check',
  },
  {
    id: 'content-writing',
    title: 'Content Writing',
    price: 'GHS 500 / page',
    priceGHS: 500,
    billingNote: 'per page',
    description: 'Engaging, SEO-optimized copy tailored for Ghanaian and international clients.',
    icon: 'file-text',
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    price: 'GHS 400',
    priceGHS: 400,
    billingNote: 'one-time',
    description: 'Unique, high-resolution vector logos delivered in multiple formats for web and print.',
    icon: 'palette',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Affordable Pricing',
    desc: 'Transparent packages starting at just GHS 1,100 with no hidden fees.',
  },
  {
    title: 'Modern, Sleek Designs',
    desc: 'High-end visuals and crisp typography that match international design standards.',
  },
  {
    title: 'Mobile-Responsive Websites',
    desc: 'Engineered to load fast and look flawless on smartphones across Ghanaian 3G/4G networks.',
  },
  {
    title: 'Fast Turnaround Time',
    desc: 'Efficient workflows so your website goes live quickly and starts generating results.',
  },
  {
    title: 'WhatsApp Support for Easy Communication',
    desc: 'Direct, friendly 1-on-1 support on WhatsApp whenever you need assistance.',
  },
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'Understand your business needs, target audience, brand goals, and timeline.',
  },
  {
    step: '02',
    title: 'Design',
    desc: 'Create a custom, modern design layout tailored to your visual identity.',
  },
  {
    step: '03',
    title: 'Develop',
    desc: 'Build the responsive website with clean code, SEO tags, and interactive features.',
  },
  {
    step: '04',
    title: 'Launch',
    desc: 'Go live smoothly, configure your domain, and train you to manage your site.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'christian-event',
    title: 'Christian Event Landing Page',
    client: 'Kingdom Gatherings Ghana',
    location: 'Accra, Ghana',
    category: 'Event Website',
    tagline: 'Modern, inspirational event landing page with countdown timer and registration',
    summary:
      'Built a modern, inspirational landing page for a premier Christian conference. Features included full event details, dynamic speaker bios, embedded attendee registration form, schedule breakdown, and live countdown timer.',
    challenge:
      'The organizers needed a fast, spiritually uplifting web portal to drive pre-registrations, display guest minister schedules, and handle attendee inquiries via WhatsApp.',
    solution:
      'Engineered an elegant landing page featuring a real-time countdown timer to August 15, 2026, interactive speaker modal popups, an embedded registration form, and location directions.',
    results: [
      'Over 1,200 attendee registrations recorded in the first 3 weeks',
      'Zero downtime during peak social media announcement drives',
      'Direct WhatsApp inquiry channel reduced support overhead by 60%',
    ],
    deliverables: [
      'Inspirational Landing Page Design',
      'Live Countdown Timer (August 15, 2026)',
      'Speaker Bios & Topic Breakdown',
      'Attendee Registration Form',
      'Google Maps Venue Integration',
      'Mobile-First Layout for Ghanaian 4G Networks',
    ],
    technologies: ['React', 'Tailwind CSS', 'Countdown Engine', 'WhatsApp Integration', 'SEO Meta Tags'],
    accentColor: '#4A90D9',
    mockupTheme: 'dark',
    eventDate: 'August 15, 2026',
    stats: [
      { label: 'Event Date', value: 'Aug 15, 2026' },
      { label: 'Registrations', value: '1,200+' },
      { label: 'Mobile Speed', value: '0.8s' },
    ],
    featuredImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      {
        title: 'Homepage Hero & Countdown',
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
        caption: 'Inspirational hero section with countdown timer to August 15, 2026',
      },
      {
        title: 'Speaker Bios & Sessions',
        url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop',
        caption: 'Keynote speakers grid with bio cards and session timelines',
      },
      {
        title: 'Attendee Registration Section',
        url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop',
        caption: 'Fast 1-minute registration form with instant WhatsApp ticket confirmation',
      },
      {
        title: 'Mobile Experience View',
        url: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop',
        caption: 'Optimized touch-friendly UI for Ghanaian mobile users',
      },
    ],
    testimonialSnippet: {
      quote:
        'Arnold created an inspirational and polished event website that made our registration process seamless. Attendees praised the sleek design!',
      author: 'Pastor Emmanuel Doe',
      role: 'Event Committee Chair',
    },
  },
  {
    id: 'print-press',
    title: 'Print Press Portfolio Website',
    client: 'Apex Press & Print Ghana',
    location: 'Kumasi / Accra, Ghana',
    category: 'Business Website',
    subCategories: ['Stationery', 'Marketing', 'Apparel', 'Signage'],
    tagline: 'Sleek print portfolio with dynamic quote configurator and category filtering',
    summary:
      'Built a sleek portfolio website for a print press company. Features included a dynamic quote configurator, category filtering (Stationery, Marketing, Apparel, Signage), and instant WhatsApp order submission.',
    challenge:
      'The printing press received dozens of daily pricing inquiries for business cards, flyers, branded shirts, and banners, causing huge delays in manual quote calculations.',
    solution:
      'Developed an interactive print portfolio with category filters for Stationery, Marketing, Apparel, and Signage, paired with an instant quote calculator that exports orders directly to WhatsApp.',
    results: [
      '5x faster quote turnaround with automated WhatsApp order summaries',
      'Category filter tabs (Stationery, Marketing, Apparel, Signage) boosted product exploration by 75%',
      '30% increase in high-volume corporate stationery orders',
    ],
    deliverables: [
      'Clean Grid Portfolio with Instant Category Filters',
      'Dynamic Print Quote Configurator',
      'Stationery, Marketing, Apparel & Signage Showcases',
      'WhatsApp Order Submission Flow',
      'Mobile-Friendly Responsive UI',
    ],
    technologies: ['React', 'Interactive Calculator', 'Tailwind CSS', 'WhatsApp Business API', 'Vite'],
    accentColor: '#1A3A6B',
    mockupTheme: 'light',
    stats: [
      { label: 'Categories', value: '4 Major Lines' },
      { label: 'Quote Speed', value: '< 30 sec' },
      { label: 'Client Rating', value: '5.0 ★' },
    ],
    featuredImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      {
        title: 'Print Press Homepage',
        url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
        caption: 'High-contrast portfolio grid showing professional print craftsmanship',
      },
      {
        title: 'Dynamic Quote Configurator',
        url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
        caption: 'Instant price calculator for stationery, flyers, apparel, and signage',
      },
      {
        title: 'Category Filtering (Apparel & Signage)',
        url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop',
        caption: 'Seamless tab filters for Stationery, Marketing, Apparel, and Signage',
      },
      {
        title: 'Mobile Order View',
        url: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1200&auto=format&fit=crop',
        caption: 'One-tap WhatsApp quote dispatch formatted for instant invoicing',
      },
    ],
    testimonialSnippet: {
      quote:
        'The quote configurator and category filtering completely modernized our printing press. Our clients love sending their orders on WhatsApp!',
      author: 'Samuel K. Adjei',
      role: 'Operations Director, Apex Print',
    },
  },
  {
    id: 'more-projects-coming',
    title: 'More Projects Coming Soon',
    client: 'Your Business Name Here',
    location: 'Ghana & Beyond',
    category: 'Upcoming Project',
    tagline: 'We are currently crafting new websites for ambitious Ghanaian entrepreneurs',
    summary:
      'We are expanding our portfolio with exciting new client projects in hospitality, fashion, real estate, and professional services across Ghana.',
    challenge:
      'Ready to see your brand featured here with a high-converting, modern website?',
    solution:
      'Partner with Arnold at Ushers Inc to build your dream site starting from GHS 1,100.',
    results: [
      'Tailored custom design',
      'Mobile-first performance',
      'Fast 1-2 week turnaround',
    ],
    deliverables: [
      'Custom Strategy & Discovery',
      'Modern UI/UX Design',
      'WhatsApp Integration',
      'Domain & Hosting Setup',
    ],
    technologies: ['WordPress / Custom React', 'SEO Setup', 'WhatsApp Engine'],
    accentColor: '#4A90D9',
    mockupTheme: 'dark',
    isPlaceholder: true,
    stats: [
      { label: 'Starting At', value: 'GHS 1,100' },
      { label: 'Turnaround', value: '5-10 Days' },
      { label: 'Satisfaction', value: '100%' },
    ],
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      {
        title: 'Next Client Spotlight',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        caption: 'Reserved slot for your upcoming website project with Ushers Inc',
      },
    ],
  },
];

export const GHANA_ADVANTAGES = [
  {
    title: 'Affordable GHS Pricing',
    desc: 'Transparent pricing starting at just GHS 1,100 with no hidden international fees.',
  },
  {
    title: 'Mobile-First for Ghana',
    desc: 'Optimized for high-speed mobile browsing and light data consumption across all telecom networks.',
  },
  {
    title: 'Direct WhatsApp Closing',
    desc: 'Leads from your website connect straight to your WhatsApp for instant conversation and payment.',
  },
  {
    title: 'Personal Training & Support',
    desc: 'Arnold personally guides and trains you to manage and update your website with ease.',
  },
];

export const TECHNICAL_SPECIFICATIONS = [
  {
    title: 'Platforms Supported',
    value: 'WordPress (recommended for rich CMS) or Custom React/Vite/Wix',
    desc: 'Flexible foundation tailored to your business needs and ease of management.',
  },
  {
    title: 'Hosting & Domains',
    value: 'Hostinger Ghana, Bluehost, Namecheap (.com / .com.gh)',
    desc: 'Reliable servers with 99.9% uptime and local Ghana payment options.',
  },
  {
    title: 'Mobile Responsiveness',
    value: '100% Mobile & Tablet Optimized',
    desc: 'Looks and performs perfectly across Android, iPhone, tablet, and desktop.',
  },
  {
    title: 'Speed & Optimization',
    value: 'Compressed Assets & Modern Caching',
    desc: 'Built for instant loading even on modest mobile data networks.',
  },
  {
    title: 'SEO & Analytics',
    value: 'Meta Titles, Descriptions & Google Analytics',
    desc: 'Helps potential customers discover your business on Google Search.',
  },
  {
    title: 'WhatsApp Lead Triggers',
    value: 'Floating & In-Page Action Triggers',
    desc: 'Pre-formatted messages sent straight to WhatsApp for immediate closing.',
  },
];
