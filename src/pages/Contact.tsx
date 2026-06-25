import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Calendar, Clock } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import AppointmentForm from '../components/AppointmentForm';

export default function Contact() {
  return (
    <div className="pt-32 pb-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-primary-900 font-bold tracking-wider uppercase text-sm mb-4">Get In Touch</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
            Let's Start Your <span className="text-primary-800">Journey</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you have a question or are ready to book an appointment, we're here to help. Reach out to us through any of the channels below.
          </p>
        </motion.div>
      </section>

      <section className="bg-slate-50 border-y border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info Cards */}
            <div className="md:col-span-1 space-y-6">
              {[
                { title: 'Call Us', value: '+91 7777700000', icon: Phone, color: 'primary', link: 'tel:+917777700000' },
                { title: 'Email Us', value: 'prsunani674@gmail.com', icon: Mail, color: 'primary', link: 'mailto:prsunani674@gmail.com' },
                { title: 'Visit Us', value: 'Mavoor Road, Calicut', icon: MapPin, color: 'primary', link: 'https://www.google.com/maps/search/?api=1&query=11%C2%B019\'11.5%22N+75%C2%B056\'12.8%22E' },
                { title: 'WhatsApp', value: '+91 7777700000', icon: WhatsAppIcon, color: 'whatsapp', link: 'https://wa.me/917777700000' },
              ].map((item, idx) => {
                const isExternal = item.title === 'Visit Us' || item.title === 'WhatsApp';
                return (
                  <motion.a
                    href={item.link}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: (idx % 4) * 0.1 }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition-all group flex flex-col items-center text-center lg:items-start lg:text-left hover:shadow-md cursor-pointer block"
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${item.color === 'whatsapp' ? 'bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white' :
                      'bg-primary-50 text-primary-800 group-hover:bg-primary-800 group-hover:text-white'
                      }`}>
                      <item.icon size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm group-hover:text-primary-800 transition-colors">{item.value}</p>
                  </motion.a>
                )
              })}
            </div>

            {/* Appointment Form */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-300 relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 mb-10 text-center lg:text-left">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-800 shrink-0">
                    <Calendar size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Book Your Appointment</h3>
                </div>

                <AppointmentForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
