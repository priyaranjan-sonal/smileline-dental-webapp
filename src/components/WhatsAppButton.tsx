import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { motion } from 'motion/react';

type WhatsAppButtonProps = {
  /**
   * Optional custom message to prefill in WhatsApp.
   * If not provided, a general appointment message is used.
   */
  message?: string;
};

export default function WhatsAppButton({ message }: WhatsAppButtonProps) {
  const phoneNumber = '917777700000';
  const defaultMessage = 'Hello SmileLine, I would like to book a dental appointment.';
  const encodedMessage = encodeURIComponent(message ?? defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/40 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={28} />
      <span className="absolute right-full mr-3 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-sm font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </motion.a>
  );
}
