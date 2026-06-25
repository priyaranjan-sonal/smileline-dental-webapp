import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function AppointmentForm() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [treatment, setTreatment] = useState('Checkup');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = [
      'Hello SmileLine, I would like to book a dental appointment.',
      '',
      `Full Name: ${fullName}`,
      `Phone Number: ${phone}`,
      `Email Address: ${email}`,
      `Preferred Date: ${preferredDate}`,
      `Treatment Type: ${treatment}`,
      `Message: ${message || '-'}`,
      '',
      'Thank you.'
    ].join('\n');

    const clinicNumber = '917777700000';
    const whatsappUrl = `https://wa.me/${clinicNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.location.href = whatsappUrl;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-1 md:space-y-2">
          <label className="text-xs md:text-sm font-bold text-slate-700 ml-1">Full Name</label>
          <input
            required
            type="text"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-primary-800/20 focus:border-primary-800 transition-all"
          />
        </div>
        <div className="space-y-1 md:space-y-2">
          <label className="text-xs md:text-sm font-bold text-slate-700 ml-1">Phone Number</label>
          <input
            required
            type="tel"
            placeholder="+91 7777700000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-primary-800/20 focus:border-primary-800 transition-all"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-1 md:space-y-2">
          <label className="text-xs md:text-sm font-bold text-slate-700 ml-1">Email Address</label>
          <input
            required
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-primary-800/20 focus:border-primary-800 transition-all"
          />
        </div>
        <div className="space-y-1 md:space-y-2">
          <label className="text-xs md:text-sm font-bold text-slate-700 ml-1">Preferred Date</label>
          <input
            required
            type="date"
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-primary-800/20 focus:border-primary-800 transition-all"
          />
        </div>
      </div>

      <div className="space-y-1 md:space-y-2">
        <label className="text-xs md:text-sm font-bold text-slate-700 ml-1">Treatment Type</label>
        <select
          value={treatment}
          onChange={(e) => setTreatment(e.target.value)}
          className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-primary-800/20 focus:border-primary-800 transition-all appearance-none"
        >
          <option>General Checkup</option>
          <option>Teeth Whitening</option>
          <option>Dental Implants</option>
          <option>Orthodontics</option>
          <option>Root Canal</option>
          <option>Cosmetic Dentistry</option>
        </select>
      </div>

      <div className="space-y-1 md:space-y-2">
        <label className="text-xs md:text-sm font-bold text-slate-700 ml-1">Message (Optional)</label>
        <textarea
          rows={4}
          placeholder="Tell us about your dental concerns..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-primary-800/20 focus:border-primary-800 transition-all resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-800 text-white py-4 md:py-5 rounded-full font-bold text-sm md:text-lg shadow-xl shadow-primary-800/30 hover:bg-primary-900 transition-all flex items-center justify-center gap-2 md:gap-3"
      >
        <Send size={18} className="md:w-5 md:h-5" />
        Request Appointment
      </button>
    </form>
  );
}

