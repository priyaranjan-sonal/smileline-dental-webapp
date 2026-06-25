import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Navigation, Car, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

export default function Locations() {
  return (
    <div className="pt-32 pb-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-primary-900 font-bold tracking-wider uppercase text-sm mb-4">Find Us</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
            Our <span className="text-primary-800">Locations</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Conveniently located in the heart of Calicut, our clinic is easily accessible from all parts of the city.
          </p>
        </motion.div>
      </section>

      {/* Main Location Content */}
      <section className="bg-slate-50 border-y border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-8"
            >
              <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-8 text-center md:text-left">
                  <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-800 shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">SmileLine Calicut</h3>
                    <p className="text-slate-500 font-medium">Main Branch</p>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 shrink-0">
                      <Navigation size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Address & Landmarks</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        SmileLine Dental Clinic, 2nd Floor, City Center Mall, Mavoor Road, Calicut, Kerala 673001
                      </p>
                      <p className="text-xs text-primary-900 font-semibold mt-2">
                        📍 Landmark: Opposite Focus Mall, Near KSRTC Bus Stand
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 shrink-0">
                      <Clock size={20} />
                    </div>
                    <div className="w-full">
                      <h4 className="font-bold text-slate-900 mb-1">Operating Hours</h4>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-slate-600 max-w-sm mx-auto sm:mx-0">
                        <span>Mon - Sat</span>
                        <span className="font-semibold text-slate-900 text-right sm:text-left">9:00 AM - 8:00 PM</span>
                        <span>Sunday</span>
                        <span className="font-semibold text-slate-900 text-right sm:text-left">10:00 AM - 2:00 PM</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 shrink-0">
                      <Car size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Parking Information</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Ample free basement parking available for patients. Valet parking service also provided.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=11%C2%B019'11.5%22N+75%C2%B056'12.8%22E"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-800 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary-800/20 hover:bg-primary-900 transition-all flex items-center gap-2"
                  >
                    <Navigation size={18} />
                    Get Directions
                  </a>
                  <a
                    href="tel:+917777700000"
                    className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2"
                  >
                    <Phone size={18} className="text-primary-800" />
                    Call Now
                  </a>
                </div>
              </div>

              <div className="bg-red-50/80 backdrop-blur-sm p-10 md:p-10 lg:p-16 rounded-[3rem] text-slate-900 border-2 border-red-500 shadow-xl shadow-red-500/10 relative overflow-hidden text-center md:text-left lg:text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="relative z-10 flex flex-col items-center md:items-start lg:items-start">
                  <h4 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start lg:justify-start gap-2 text-red-600">
                    <ShieldCheck size={24} />
                    Emergency Care
                  </h4>
                  <p className="text-slate-700 mb-6 leading-relaxed font-medium">
                    Experiencing a dental emergency? We offer priority appointments for urgent cases. Call our emergency hotline available 24/7.
                  </p>
                  <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row gap-4 justify-center md:justify-start lg:justify-start w-full mt-2">
                    <a
                      href="tel:+917777700000"
                      className="bg-red-600 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-full font-bold shadow-md hover:bg-red-700 transition-all flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto md:w-full xl:w-auto text-sm sm:text-base whitespace-nowrap"
                    >
                      <Phone size={18} className="shrink-0" />
                      +91 7777700000
                    </a>
                    <a
                      href="https://wa.me/917777700000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent border-2 border-red-600 text-red-600 px-4 py-3 sm:px-6 sm:py-4 rounded-full font-bold shadow-md hover:bg-red-50 transition-all flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto md:w-full xl:w-auto text-sm sm:text-base whitespace-nowrap"
                    >
                      <WhatsAppIcon size={18} className="text-red-600 shrink-0" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Embed Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white sticky top-32"
            >
              <iframe
                src="https://maps.google.com/maps?q=11%C2%B019'11.5%22N+75%C2%B056'12.8%22E&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
