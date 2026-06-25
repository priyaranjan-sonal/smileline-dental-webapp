import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Award, Heart, Users, CheckCircle2, ChevronDown, ChevronUp, Calendar, GraduationCap, FileBadge } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DOCTORS } from '../constants';

export default function About() {
  const [expandedDocId, setExpandedDocId] = useState<string | null>(null);

  const scrollToDoctor = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 500);
  };
  return (
    <div className="pt-32 pb-12 overflow-x-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h2 className="text-primary-900 font-bold tracking-wider uppercase text-sm mb-4">About SmileLine</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-8">
              Excellence in <br />
              <span className="text-primary-800">Modern Dentistry</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              SmileLine Dental Clinic was founded with a simple vision: to provide the highest quality dental care in a comfortable, patient-centric environment. Located in the heart of Calicut, we combine advanced technology with a compassionate approach to help you achieve and maintain a beautiful, healthy smile.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-800 shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <span className="font-semibold text-slate-900">ISO Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-800 shrink-0">
                  <Award size={20} />
                </div>
                <span className="font-semibold text-slate-900">Award Winning</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&h=600&q=80"
              alt="SmileLine Clinic Interior"
              className="rounded-[3rem] shadow-2xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl max-w-[240px] hidden lg:block">
              <div className="text-4xl font-bold text-primary-800 mb-2">15+</div>
              <p className="text-sm font-medium text-slate-600">Years of delivering beautiful smiles across Kerala.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-slate-50 py-10 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-primary-900 font-bold tracking-wider uppercase text-sm mb-4">Our Core Values</h2>
            <h3 className="text-4xl font-bold text-slate-900">What Drives Us Every Day</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Patient-First Approach', desc: 'Your comfort and satisfaction are our top priorities. We listen, understand, and tailor treatments to your needs.', icon: Heart },
              { title: 'Advanced Technology', desc: 'We invest in the latest dental technology to ensure precise diagnoses and minimally invasive treatments.', icon: ShieldCheck },
              { title: 'Professional Integrity', desc: 'We maintain the highest standards of ethics and transparency in all our procedures and pricing.', icon: Award },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 3) * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm transition-all border border-slate-100 flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-800 mb-8">
                  <value.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dentist Profile */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&h=800&q=80"
                alt="Dr. Swastik Sahoo"
                className="rounded-[3rem] shadow-2xl max-w-sm mx-auto w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <h2 className="text-primary-900 font-bold tracking-wider uppercase text-sm mb-4">Meet Our Lead Dentist</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Dr. Swastik Sahoo</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With over 15 years of experience in restorative and cosmetic dentistry, Dr. Swastik Sahoo is committed to providing exceptional dental care. He completed his MDS from a prestigious institution and has since been at the forefront of modern dental practices in Kerala.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'Specialist in Cosmetic Dentistry & Implants',
                  'Member of Indian Dental Association (IDA)',
                  'Certified Invisalign Provider',
                  'Published Researcher in Dental Health',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                    <CheckCircle2 size={20} className="text-primary-800" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center lg:justify-start gap-4">
                <div className="p-4 bg-primary-50 rounded-2xl">
                  <div className="text-2xl font-bold text-primary-900">5000+</div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Surgeries</p>
                </div>
                <div className="p-4 bg-primary-50 rounded-2xl">
                  <div className="text-2xl font-bold text-primary-800">100%</div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Success Rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Doctors Section */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-primary-900 font-bold tracking-wider uppercase text-sm mb-4">Our Team</h2>
            <h3 className="text-4xl font-bold text-slate-900">Meet Our Specialists</h3>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
              Our team of dedicated specialists works together to provide comprehensive dental care for you and your family.
            </p>
          </div>

          <div className="space-y-6">
            {DOCTORS.slice(1).map((doctor) => {
              const isExpanded = expandedDocId === doctor.id;

              return (
                <motion.div
                  key={doctor.id}
                  id={doctor.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden scroll-mt-32"
                >
                  <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-6 items-center justify-between">
                    <div className="flex flex-col md:flex-row items-center gap-6 flex-1 text-center md:text-left">
                      <div className="relative shrink-0 w-24 h-24 flex items-center justify-center">
                        {!isExpanded && (
                          <motion.img 
                            layoutId={`doctor-img-${doctor.id}`}
                            src={doctor.image} 
                            alt={doctor.name} 
                            className="w-24 h-24 rounded-full object-cover border-4 border-slate-50 shadow-md absolute inset-0"
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{doctor.name}</h3>
                        <p className="text-primary-800 font-bold text-lg mb-1">{doctor.role}</p>
                        <p className="text-slate-600 font-medium">{doctor.specialty}</p>
                      </div>
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
                          setExpandedDocId(willExpand ? doctor.id : null);
                          if (willExpand) {
                            scrollToDoctor(doctor.id);
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
                        <div className="p-6 md:p-8 grid lg:grid-cols-3 gap-8 items-start">
                          <div className="relative rounded-3xl overflow-hidden shadow-xl lg:col-span-1">
                            <motion.img
                              layoutId={`doctor-img-${doctor.id}`}
                              src={doctor.image}
                              alt={doctor.name}
                              className="w-full h-auto object-cover aspect-[3/4]"
                            />
                          </div>

                          <div className="flex flex-col lg:col-span-2">
                            <h4 className="text-xl font-bold text-slate-900 mb-4">About {doctor.name}</h4>
                            <p className="text-slate-600 mb-8 leading-relaxed text-lg text-center md:text-left lg:text-left">
                              {doctor.bio}
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                              {doctor.education && (
                                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                  <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2 justify-center md:justify-start">
                                    <GraduationCap size={20} className="text-primary-800" />
                                    Education
                                  </h5>
                                  <ul className="space-y-3">
                                    {doctor.education.map((edu, i) => (
                                      <li key={i} className="text-sm text-slate-600 flex items-start gap-3 justify-center md:justify-start text-center md:text-left">
                                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 shrink-0" />
                                        {edu}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {doctor.certifications && (
                                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                  <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2 justify-center md:justify-start">
                                    <FileBadge size={20} className="text-primary-800" />
                                    Certifications & Memberships
                                  </h5>
                                  <ul className="space-y-3">
                                    {doctor.certifications.map((cert, i) => (
                                      <li key={i} className="text-sm text-slate-600 flex items-start gap-3 justify-center md:justify-start text-center md:text-left">
                                        <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 shrink-0" />
                                        {cert}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
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
        </div>
      </section>
    </div>
  );
}
