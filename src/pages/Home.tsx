import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Phone, CheckCircle2, Star, ArrowRight, Sparkles, ShieldCheck, Clock, Users, MapPin, Award, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, GALLERY_IMAGES, DOCTORS } from '../constants';
import WhatsAppIcon from '../components/WhatsAppIcon';
import AppointmentForm from '../components/AppointmentForm';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const [activeDoc, setActiveDoc] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const emergencyWhatsAppUrl = `https://wa.me/917777700000?text=${encodeURIComponent(
    'Hello SmileLine, 🚨🚨 I have a dental emergency and need urgent assistance.'
  )}`;

  // Responsive slider logic
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    
    // Initial call
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure activeDoc is within bounds when visibleCards changes
  React.useEffect(() => {
    const maxIndex = Math.max(0, DOCTORS.length - visibleCards);
    if (activeDoc > maxIndex) {
      setActiveDoc(maxIndex);
    }
  }, [visibleCards, activeDoc]);

  const prevDoc = () => setActiveDoc((p) => Math.max(0, p - 1));
  const nextDoc = () => setActiveDoc((p) => Math.min(Math.max(0, DOCTORS.length - visibleCards), p + 1));

  const isPrevDisabled = activeDoc === 0;
  const isNextDisabled = activeDoc >= DOCTORS.length - visibleCards;


  return (
    <div className="overflow-hidden">
      {/* Floating Book Appointment Button (Mobile Only) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="fixed bottom-24 right-6 z-40 md:hidden"
      >
        <Link
          to="/contact"
          className="bg-primary-900 text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
        >
          <Calendar size={24} />
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="relative flex items-start pt-28 pb-10 lg:min-h-[92vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&h=1080&q=80&blur=2"
            alt="Modern Dental Clinic"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-linear-to-b from-primary-50/50 via-white to-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-900 text-sm font-semibold mb-6">
                <Sparkles size={16} />
                <span>Calicut's Most Trusted Dental Clinic</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-4">
                Your Smile, <br />
                <span className="text-primary-800">Our Priority.</span>
              </h1>
              <p className="text-base lg:text-lg text-slate-600 mb-6 max-w-lg leading-relaxed">
                Experience world-class dental care with SmileLine. From routine checkups to advanced cosmetic transformations, we bring you the best in modern dentistry.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full">
                <Link
                  to="/contact"
                  className="bg-primary-800 text-white px-4 sm:px-6 py-4 rounded-full font-bold shadow-xl shadow-primary-800/30 hover:bg-primary-900 transition-all flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base"
                >
                  <Calendar size={18} className="lg:w-5 lg:h-5 shrink-0" />
                  Book Appointment
                </Link>
                <a
                  href="https://wa.me/917777700000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-4 sm:px-6 py-4 rounded-full font-bold shadow-xl shadow-[#25D366]/30 hover:bg-[#20BE5A] transition-all flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base"
                >
                  <WhatsAppIcon size={18} className="lg:w-5 lg:h-5 text-white shrink-0" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-900">4.9/5</span>
                  <span className="text-xs text-slate-500 font-medium">Google Reviews</span>
                </div>
                <p className="text-sm font-medium text-slate-600">
                  <span className="text-slate-900 font-bold">2,500+</span> Happy Patients
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative hidden md:block max-w-md lg:max-w-lg xl:max-w-2xl mx-auto"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
                  alt="Professional Dentist"
                  className="w-full h-[450px] lg:h-[450px] xl:h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />

              <div className="absolute bottom-10 -right-6 bg-white p-6 rounded-2xl shadow-2xl z-20 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-800">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="font-bold text-slate-900">Certified Care</span>
                </div>
                <p className="text-xs text-slate-500">ISO 9001:2015 Certified Dental Facility</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Years Experience', value: '15+', icon: Clock },
              { label: 'Happy Patients', value: '10k+', icon: Users },
              { label: 'Modern Equipment', value: '100%', icon: ShieldCheck },
              { label: 'Certified Dentists', value: '12', icon: CheckCircle2 },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 4) * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-800 mx-auto mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="text-primary-900 font-bold tracking-wider uppercase text-sm mb-4">Our Services</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Care for Every Smile</h3>
            <p className="text-slate-600">We offer a wide range of dental services using the latest technology to ensure the best possible outcomes for our patients.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 3) * 0.1 }}
                className="bg-white p-6 rounded-3xl shadow-sm transition-all group border border-slate-100 flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-800 mb-6 group-hover:bg-primary-800 group-hover:text-white transition-colors">
                  <Sparkles size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-primary-800 font-bold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Doctors Section */}
      <section className="py-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-primary-900 font-bold tracking-wider uppercase text-sm mb-3">Our Team</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-2">Meet Our Expert Specialists</h3>
            <p className="text-slate-500 text-sm">Highly qualified dental professionals committed to exceptional, patient-first care.</p>
          </div>

          {/* Simple Slider */}
          <div className="relative flex items-center gap-4">

            {/* Left Button */}
            <button
              onClick={prevDoc}
              disabled={isPrevDisabled}
              className={`shrink-0 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 transition-all ${
                isPrevDisabled 
                  ? 'opacity-0 pointer-events-none' 
                  : 'hover:bg-primary-800 hover:text-white hover:border-primary-800'
              }`}
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Cards Viewport */}
            <div className="flex-1 overflow-hidden">
              <motion.div
                animate={{ x: `-${activeDoc * (100 / DOCTORS.length)}%` }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="flex"
                style={{ width: `${(DOCTORS.length / visibleCards) * 100}%` }}
              >
                {DOCTORS.map((doctor, idx) => (
                  <div
                    key={doctor.name}
                    className="px-3"
                    style={{ width: `${100 / DOCTORS.length}%` }}
                  >
                    <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col h-full">
                      {/* Doctor Photo */}
                      <div className="relative h-64 overflow-hidden shrink-0">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-full h-full object-cover object-top"
                          draggable={false}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent flex items-end p-5">
                          <span className="text-white text-xs font-semibold bg-primary-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            {doctor.specialty}
                          </span>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 flex flex-col flex-1">
                        <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary-50 text-primary-900 text-xs font-bold uppercase tracking-wider w-fit mb-2">
                          {doctor.role}
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-3">{doctor.name}</h4>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          <div className="flex items-center gap-1 text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full font-medium">
                            <GraduationCap size={11} className="text-primary-800" />
                            <span>BDS, MDS</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full font-medium">
                            <Award size={11} className="text-primary-800" />
                            <span>10+ yrs exp.</span>
                          </div>
                        </div>

                        <div className="mt-auto pt-3 border-t border-slate-100">
                          <Link
                            to="/about"
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-2xl font-bold text-sm bg-primary-800 text-white hover:bg-primary-900 transition-all duration-200"
                          >
                            View Full Profile <ArrowRight size={15} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Button */}
            <button
              onClick={nextDoc}
              disabled={isNextDisabled}
              className={`shrink-0 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 transition-all ${
                isNextDisabled 
                  ? 'opacity-0 pointer-events-none' 
                  : 'hover:bg-primary-800 hover:text-white hover:border-primary-800'
              }`}
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: DOCTORS.length - visibleCards + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveDoc(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeDoc
                    ? 'w-7 h-2.5 bg-primary-800'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="py-8 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <h2 className="text-primary-900 font-bold tracking-wider uppercase text-sm mb-4">Featured Treatments</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Advanced Solutions for Your Dental Health</h3>
              <div className="space-y-6">
                {[
                  { title: 'Digital Smile Design', desc: 'Visualize your new smile before we even start the treatment.' },
                  { title: 'Laser Dentistry', desc: 'Minimally invasive procedures with faster healing times.' },
                  { title: '3D Guided Implants', desc: 'Precision-placed implants for maximum stability and comfort.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-800 shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1 text-center lg:text-left">{item.title}</h4>
                      <p className="text-slate-600 text-sm text-center lg:text-left">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/services"
                className="mt-10 inline-flex bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-all"
              >
                View All Treatments
              </Link>
            </motion.div>
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=400&h=500&q=80", className: "rounded-3xl shadow-lg mt-8" },
                { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400&h=500&q=80", className: "rounded-3xl shadow-lg" },
                { src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&h=500&q=80", className: "rounded-3xl shadow-lg hidden md:block" },
                { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&h=500&q=80", className: "rounded-3xl shadow-lg mt-8 hidden md:block" }
              ].map((img, i) => (
                <motion.img
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  src={img.src}
                  alt="Treatment"
                  className={img.className}
                />
              ))}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-50 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-primary-900 font-bold tracking-wider uppercase text-sm mb-4">Gallery</h2>
              <h3 className="text-4xl font-bold text-slate-900">Our Clinic & Transformations</h3>
            </div>
            <Link
              to="/gallery"
              className="text-primary-800 font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              View Full Gallery <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GALLERY_IMAGES.slice(0, 3).map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="relative rounded-4xl overflow-hidden aspect-4/3 group"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white font-bold">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-primary-900 font-bold tracking-wider uppercase text-sm mb-4">Testimonials</h2>
            <h3 className="text-4xl font-bold text-slate-900">What Our Patients Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 3) * 0.1 }}
                className="bg-slate-50 p-6 rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="flex text-amber-400 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <h2 className="text-primary-900 font-bold tracking-wider uppercase text-sm mb-4">Book Now</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8">Schedule Your Visit</h3>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Fill out the form to request an appointment. Our team will get back to you within 24 hours to confirm your schedule.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary-800 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Call Us</p>
                    <a href="tel:+917777700000" className="font-bold text-slate-900 hover:text-primary-800 transition-colors">+91 7777700000</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary-800 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Visit Us</p>
                    <p className="font-bold text-slate-900">Mavoor Road, Calicut</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-white p-8 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-300"
            >
              <AppointmentForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-primary-900 rounded-[3rem] p-8 md:p-8 lg:p-12 text-center lg:text-left relative overflow-hidden shadow-2xl shadow-primary-900/40 flex flex-col justify-center"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
              </div>
              <div className="relative z-10 max-w-2xl mx-auto lg:mx-0">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to transform your smile?</h2>
                <p className="text-primary-50 mb-12 text-lg">Book your appointment today and take the first step towards a healthier, brighter smile.</p>
                <Link
                  to="/contact"
                  className="inline-flex bg-white text-primary-900 px-6 py-4 md:px-8 rounded-full font-bold hover:bg-primary-50 transition-all w-full md:w-auto justify-center text-center"
                >
                  Book Appointment Now
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="bg-red-50/80 backdrop-blur-sm p-8 md:p-8 lg:p-12 rounded-[3rem] text-slate-900 border-2 border-red-500 shadow-xl shadow-red-500/10 relative overflow-hidden flex flex-col justify-center text-center lg:text-left"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="relative z-10 flex flex-col items-center lg:items-start h-full">
                <h4 className="text-2xl font-bold mb-4 flex items-center justify-center lg:justify-start gap-3 text-red-600">
                  <ShieldCheck size={28} />
                  Emergency Care
                </h4>
                <p className="text-slate-700 mb-8 leading-relaxed font-medium text-lg">
                  Experiencing a dental emergency? We offer priority appointments for urgent cases. Call our hotline 24/7.
                </p>
                <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row gap-4 justify-center lg:justify-start w-full mt-auto">
                  <a
                    href="tel:+917777700000"
                    className="bg-red-600 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-full font-bold shadow-md hover:bg-red-700 transition-all flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto md:w-full xl:w-full text-sm sm:text-base whitespace-nowrap flex-1"
                  >
                    <Phone size={20} className="shrink-0" />
                    +91 7777700000
                  </a>
                  <a
                    href={emergencyWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border-2 border-red-600 text-red-600 px-4 py-3 sm:px-6 sm:py-4 rounded-full font-bold shadow-md hover:bg-red-50 transition-all flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto md:w-full xl:w-full text-sm sm:text-base whitespace-nowrap flex-1"
                  >
                    <WhatsAppIcon size={20} className="text-red-600 shrink-0" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
