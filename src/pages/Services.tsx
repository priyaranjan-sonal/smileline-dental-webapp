import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../constants';
import { CheckCircle2, HelpCircle, ArrowRight, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const SERVICE_IMAGES: Record<string, string> = {
  'teeth-whitening': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&h=600&q=80',
  'dental-implants': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&h=600&q=80',
  'orthodontics': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&h=600&q=80',
  'root-canal': 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&h=600&q=80',
  'cosmetic-dentistry': 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=800&h=600&q=80',
  'pediatric-dentistry': 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=800&h=600&q=80',
};

export default function Services() {
  const location = useLocation();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const scrollToService = (id: string) => {
    // Immediate scroll to start moving
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        // Calculate exact Y position, offset by 90px to perfectly align below the navbar
        const y = element.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);

    // Final adjustment after expansion/collapse height animations finish
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 500);
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setExpandedId(id);
      scrollToService(id);
    }
  }, [location.hash]);

  return (
    <div className="pt-32 pb-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-primary-900 font-bold tracking-wider uppercase text-sm mb-4">Our Expertise</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
            Specialized Dental <span className="text-primary-800">Solutions</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We provide a comprehensive range of dental services tailored to meet the unique needs of every patient, from children to seniors.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {SERVICES.map((service, idx) => {
          const isExpanded = expandedId === service.id;

          return (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden scroll-mt-28"
            >
              <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 font-medium">{service.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto bg-primary-800 text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-primary-900 transition-all flex justify-center items-center gap-2"
                  >
                    <Calendar size={18} />
                    Book Appointment
                  </Link>
                  <button
                    onClick={() => {
                      const willExpand = !isExpanded;
                      setExpandedId(willExpand ? service.id : null);
                      if (willExpand) {
                        scrollToService(service.id);
                      }
                    }}
                    className="w-full sm:w-auto bg-slate-100 text-slate-700 px-6 py-3 rounded-full font-bold hover:bg-slate-200 transition-all flex justify-center items-center gap-2"
                  >
                    {isExpanded ? (
                      <>View Less <ChevronUp size={18} /></>
                    ) : (
                      <>View More <ChevronDown size={18} /></>
                    )}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-slate-100 bg-slate-50"
                  >
                    <div className="p-6 md:p-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                      <div className="relative rounded-3xl overflow-hidden shadow-xl">
                        <img
                          src={SERVICE_IMAGES[service.id]}
                          alt={service.title}
                          className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                          <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-primary-900">
                            Premium Treatment
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <p className="text-slate-600 mb-8 leading-relaxed text-lg text-center md:text-left lg:text-left">
                          {service.longDescription}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                          {service.benefits?.map((benefit, i) => (
                            <div key={i} className="flex items-center justify-center md:justify-start lg:justify-start gap-3">
                              <CheckCircle2 size={18} className="text-primary-800 shrink-0" />
                              <span className="text-sm font-medium text-slate-700">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                          <h4 className="font-bold text-slate-900 mb-4 flex items-center justify-center md:justify-start lg:justify-start gap-2">
                            <ArrowRight size={18} className="text-primary-800" />
                            The Procedure
                          </h4>
                          <ul className="space-y-3">
                            {service.procedure?.map((step, i) => (
                              <li key={i} className="text-sm text-slate-600 flex items-center md:items-start lg:items-start justify-center md:justify-start lg:justify-start gap-3 text-center md:text-left lg:text-left">
                                <span className="w-5 h-5 bg-primary-100 text-primary-900 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">
                                  {i + 1}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <section className="bg-slate-900 py-10 mt-14 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-primary-700 font-bold tracking-wider uppercase text-sm mb-4">Common Questions</h2>
            <h3 className="text-4xl font-bold">Service FAQs</h3>
          </div>
          <div className="space-y-6">
            {SERVICES.flatMap(s => s.faqs || []).slice(0, 6).map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="bg-slate-800 p-8 rounded-3xl border border-slate-700"
              >
                <h4 className="text-lg font-bold mb-4 flex items-center justify-center md:justify-start gap-3">
                  <HelpCircle size={20} className="text-primary-700" />
                  {faq.question}
                </h4>
                <p className="text-slate-400 leading-relaxed text-center md:text-left">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
