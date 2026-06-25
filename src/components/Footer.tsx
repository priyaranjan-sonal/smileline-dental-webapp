import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Clinic Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold tracking-tight text-white">
                Smile<span className="text-primary-800">Line</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Providing world-class dental care in Calicut. Our mission is to deliver professional, modern, and gentle dental treatments to ensure your smile stays healthy and beautiful.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/priyaranjans_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/917777700000" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all">
                <WhatsAppIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-primary-400 transition-colors">Gallery</Link></li>
              <li><Link to="/locations" className="hover:text-primary-400 transition-colors">Locations</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services#teeth-whitening" className="hover:text-primary-400 transition-colors">Teeth Whitening</Link></li>
              <li><Link to="/services#dental-implants" className="hover:text-primary-400 transition-colors">Dental Implants</Link></li>
              <li><Link to="/services#orthodontics" className="hover:text-primary-400 transition-colors">Orthodontics</Link></li>
              <li><Link to="/services#root-canal" className="hover:text-primary-400 transition-colors">Root Canal Treatment</Link></li>
              <li><Link to="/services#cosmetic-dentistry" className="hover:text-primary-400 transition-colors">Cosmetic Dentistry</Link></li>
              <li><Link to="/services#pediatric-dentistry" className="hover:text-primary-400 transition-colors">Pediatric Dentistry</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary-800 shrink-0" />
                <span>SmileLine Dental Clinic, Mavoor Road, Calicut, Kerala 673001</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-primary-800 shrink-0" />
                <a href="tel:+917777700000" className="hover:text-primary-400 transition-colors">+91 7777700000</a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-primary-800 shrink-0" />
                <a href="mailto:prsunani674@gmail.com" className="hover:text-primary-400 transition-colors">prsunani674@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} SmileLine Dental Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
