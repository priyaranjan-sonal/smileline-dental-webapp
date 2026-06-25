import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_IMAGES } from '../constants';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'interior' | 'equipment' | 'treatment' | 'transformation'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === 'all' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <div className="pt-32 pb-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="text-primary-900 font-bold tracking-wider uppercase text-sm mb-4">Our Gallery</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
            A Glimpse Into <span className="text-primary-800">SmileLine</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore our modern facility, advanced equipment, and the beautiful smile transformations we achieve for our patients.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-slate-50 border-y border-slate-100 py-5 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'interior', 'equipment', 'treatment', 'transformation'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${filter === cat
                  ? 'bg-primary-800 text-white shadow-lg shadow-primary-800/30'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="group relative rounded-[2rem] overflow-hidden shadow-sm transition-all cursor-pointer aspect-[4/3]"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-4">
                    <ZoomIn size={24} />
                  </div>
                  <h4 className="text-white font-bold text-lg">{image.title}</h4>
                  <p className="text-white/70 text-xs uppercase tracking-wider font-semibold mt-1">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery Preview"
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
