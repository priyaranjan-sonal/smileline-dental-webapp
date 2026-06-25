import { Service, Testimonial, GalleryImage, Doctor } from './types';

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-swastik-sahoo',
    name: 'Dr. Swastik Sahoo',
    role: 'Lead Dentist',
    specialty: 'Restorative & Cosmetic Dentistry',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&h=800&q=80',
    bio: 'Dr. Swastik Sahoo is a highly skilled restorative and cosmetic dentist with over 15 years of experience. He is dedicated to creating beautiful, healthy smiles through personalized treatment plans and the latest dental technology.',
    education: ['MDS in Restorative Dentistry', 'BDS from Government Dental College'],
    certifications: ['Certified Invisalign Provider', 'Member of Indian Dental Association', 'Advanced Cosmetic Dentistry Certification']
  },
  {
    id: 'dr-sarah-johnson',
    name: 'Dr. Sarah Johnson',
    role: 'Orthodontist',
    specialty: 'Braces & Invisalign',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=800&q=80',
    bio: 'Dr. Sarah Johnson specializes in correcting misaligned teeth and jaws. She is passionate about helping patients of all ages achieve straighter smiles using both traditional braces and clear aligner therapy.',
    education: ['MDS in Orthodontics', 'BDS from Manipal College of Dental Sciences'],
    certifications: ['Certified Invisalign Provider', 'Fellow of the World Federation of Orthodontists']
  },
  {
    id: 'dr-michael-chen',
    name: 'Dr. Michael Chen',
    role: 'Oral Surgeon',
    specialty: 'Implants & Extractions',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&h=800&q=80',
    bio: 'Dr. Michael Chen is an expert in oral and maxillofacial surgery. His precision and gentle approach make complex procedures like wisdom tooth extractions and dental implants comfortable for patients.',
    education: ['MDS in Oral & Maxillofacial Surgery', 'BDS from King George\'s Medical University'],
    certifications: ['Board Certified Oral Surgeon', 'Member of Association of Oral and Maxillofacial Surgeons of India']
  },
  {
    id: 'dr-emily-davis',
    name: 'Dr. Emily Davis',
    role: 'Pediatric Dentist',
    specialty: "Children's Dentistry",
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&h=800&q=80',
    bio: 'Dr. Emily Davis loves working with children and making their dental visits fun and educational. She focuses on preventive care and building positive dental habits from a young age.',
    education: ['MDS in Pedodontics', 'BDS from Nair Hospital Dental College'],
    certifications: ['Certified in Pediatric Advanced Life Support', 'Member of Indian Society of Pedodontics and Preventive Dentistry']
  },
  {
    id: 'dr-james-wilson',
    name: 'Dr. James Wilson',
    role: 'Endodontist',
    specialty: 'Root Canal Treatments',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&h=800&q=80',
    bio: 'Dr. James Wilson is a specialist in endodontics, focusing on saving natural teeth through root canal therapy. He uses advanced microscopic techniques to ensure precise and painless treatments.',
    education: ['MDS in Conservative Dentistry & Endodontics', 'BDS from Saveetha Dental College'],
    certifications: ['Member of Indian Association of Conservative Dentistry and Endodontics', 'Advanced Micro-Endodontics Certification']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    description: 'Brighten your smile with our professional whitening treatments.',
    icon: 'Sparkles',
    longDescription: 'Our professional teeth whitening services use advanced technology to safely and effectively remove stains and discoloration, giving you a noticeably brighter smile in just one visit.',
    benefits: ['Immediate results', 'Safe and painless', 'Long-lasting brightness', 'Boosts confidence'],
    procedure: ['Consultation and shade matching', 'Protective barrier application', 'Whitening gel application', 'LED light activation'],
    faqs: [
      { question: 'How long does it take?', answer: 'A typical session takes about 45-60 minutes.' },
      { question: 'Is it painful?', answer: 'Most patients experience little to no sensitivity.' }
    ]
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    description: 'Permanent and natural-looking solutions for missing teeth.',
    icon: 'Stethoscope',
    longDescription: 'Dental implants are the gold standard for tooth replacement. They provide a permanent, stable base for replacement teeth that look, feel, and function like natural teeth.',
    benefits: ['Natural appearance', 'Improved speech', 'Easier eating', 'Durability'],
    procedure: ['Initial assessment and imaging', 'Implant placement surgery', 'Healing period (osseointegration)', 'Abutment and crown placement'],
    faqs: [
      { question: 'How long do implants last?', answer: 'With proper care, they can last a lifetime.' }
    ]
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    description: 'Straighten your teeth with modern braces and clear aligners.',
    icon: 'Smile',
    longDescription: 'Whether you prefer traditional braces or discreet clear aligners, we offer customized orthodontic solutions to correct misalignments and improve your bite.',
    benefits: ['Straighter teeth', 'Improved oral health', 'Better bite alignment', 'Enhanced aesthetics'],
    procedure: ['Digital scanning and planning', 'Fitting of braces or aligners', 'Regular adjustments', 'Retention phase'],
    faqs: [
      { question: 'How long is the treatment?', answer: 'Usually between 12 to 24 months depending on the case.' }
    ]
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    description: 'Save your natural teeth with painless root canal procedures.',
    icon: 'Activity',
    longDescription: 'We specialize in painless root canal therapy to save infected or damaged teeth, preventing the need for extraction and maintaining your natural smile.',
    benefits: ['Saves natural tooth', 'Relieves pain', 'Prevents infection spread', 'Restores function'],
    procedure: ['X-ray and diagnosis', 'Local anesthesia', 'Cleaning and shaping of canals', 'Sealing and crowning'],
    faqs: [
      { question: 'Does it hurt?', answer: 'Modern techniques make it as comfortable as a regular filling.' }
    ]
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, bonding, and more.',
    icon: 'Camera',
    longDescription: 'Enhance the beauty of your smile with our range of cosmetic treatments tailored to your unique facial features and aesthetic goals.',
    benefits: ['Customized smile design', 'Corrects chips and gaps', 'Improves tooth shape', 'Youthful appearance'],
    procedure: ['Smile analysis', 'Mock-up and planning', 'Preparation and placement', 'Final polishing'],
    faqs: [
      { question: 'What is a smile makeover?', answer: 'A combination of treatments to achieve your ideal smile.' }
    ]
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    description: 'Gentle and fun dental care for your little ones.',
    icon: 'Baby',
    longDescription: 'We provide a friendly and welcoming environment for children, ensuring their first dental experiences are positive and stress-free.',
    benefits: ['Child-friendly environment', 'Early prevention', 'Habit counseling', 'Gentle care'],
    procedure: ['Fun introduction to tools', 'Gentle cleaning', 'Fluoride application', 'Parent education'],
    faqs: [
      { question: 'When should a child first visit?', answer: 'By their first birthday or when the first tooth appears.' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Anjali Nair',
    role: 'Teacher',
    content: 'The best dental clinic in Calicut! Dr. and the team are so professional and caring. My root canal was completely painless.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: '2',
    name: 'Rahul Das',
    role: 'Software Engineer',
    content: 'I got my dental implants here. The results are amazing, they look just like my natural teeth. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: '3',
    name: 'Sneha K.',
    role: 'Student',
    content: 'Very happy with my orthodontic treatment. The clear aligners were so comfortable and the progress is great.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&h=600&q=80', category: 'interior', title: 'Modern Reception Area' },
  { id: '2', url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&h=600&q=80', category: 'interior', title: 'Comfortable Waiting Lounge' },
  { id: '3', url: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&h=600&q=80', category: 'equipment', title: 'Advanced Digital X-Ray' },
  { id: '4', url: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&w=800&h=600&q=80', category: 'equipment', title: 'Sterilization Unit' },
  { id: '5', url: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&h=600&q=80', category: 'treatment', title: 'Dental Implant Procedure' },
  { id: '6', url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&h=600&q=80', category: 'transformation', title: 'Smile Makeover Result' },
];
