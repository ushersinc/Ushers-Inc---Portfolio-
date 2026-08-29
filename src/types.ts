export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  priceNote: string;
  basePriceGHS: number;
  iconName: 'monitor' | 'smartphone' | 'refresh-cw' | 'layers' | 'sparkles';
  features: string[];
  popular?: boolean;
  idealFor: string;
  whatsappMessage: string;
}

export interface AddOnService {
  id: string;
  title: string;
  price: string;
  priceGHS: number;
  billingNote: string;
  description: string;
  icon: 'shield-check' | 'file-text' | 'palette';
}

export interface ProjectGalleryImage {
  title: string;
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  category: 'Event Website' | 'Business Website' | 'Upcoming Project' | 'E-commerce' | 'Creative & Portfolio' | string;
  subCategories?: string[];
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  deliverables: string[];
  technologies: string[];
  accentColor: string;
  mockupTheme: 'light' | 'dark';
  eventDate?: string;
  stats: { label: string; value: string }[];
  featuredImage: string;
  galleryImages?: ProjectGalleryImage[];
  isPlaceholder?: boolean;
  testimonialSnippet?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface CostEstimateInput {
  serviceType: string;
  pageCount: '1-page' | '3-5-pages' | '6-10-pages' | 'custom';
  needsSocialMedia: boolean;
  needsEcommerce: boolean;
  needsFastTurnaround: boolean;
  clientName: string;
  businessName: string;
  phoneNumber: string;
}
