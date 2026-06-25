export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  longDescription?: string;
  benefits?: string[];
  procedure?: string[];
  faqs?: { question: string; answer: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: 'interior' | 'equipment' | 'treatment' | 'transformation';
  title: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  bio?: string;
  education?: string[];
  certifications?: string[];
}
