import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { useSound } from '../providers/SoundProvider'

interface GalleryItem {
  id: number
  src: string
  title: string
  category: 'balloons' | 'themes' | 'kids' | 'adults'
  heightClass: string // simulating masonry height variations
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop',
    title: 'Pastel Rainbow Balloon Arch',
    category: 'balloons',
    heightClass: 'h-64',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop',
    title: 'Elegant Glitter Tablescape',
    category: 'adults',
    heightClass: 'h-80',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop',
    title: 'Safari Wilderness Kids Theme',
    category: 'kids',
    heightClass: 'h-96',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=600&auto=format&fit=crop',
    title: 'Delicate Pastel Birthday setups',
    category: 'themes',
    heightClass: 'h-72',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600&auto=format&fit=crop',
    title: 'Golden Luxury 30th Birthday',
    category: 'adults',
    heightClass: 'h-80',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600&auto=format&fit=crop',
    title: 'Magical Disney Princess Concept',
    category: 'kids',
    heightClass: 'h-96',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop',
    title: 'Neon Light Backdrop Photo Booth',
    category: 'themes',
    heightClass: 'h-64',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=600&auto=format&fit=crop',
    title: 'Organic Balloon Ceiling Canopy',
    category: 'balloons',
    heightClass: 'h-72',
  },
]

type FilterCategory = 'all' | 'balloons' | 'themes' | 'kids' | 'adults'

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<FilterCategory>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const { playHover, playClick } = useSound()

  // Filter items
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  const handleFilterChange = (cat: FilterCategory) => {
    playClick()
    setFilter(cat)
  }

  const openLightbox = (index: number) => {
    playClick()
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    playClick()
    setLightboxIndex(null)
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    playClick()
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
    }
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    playClick()
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length)
    }
  }

  return (
    <section
      id="gallery"
      className="relative py-24 bg-white dark:bg-dark-bg/40 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-extrabold text-primary mb-3 block"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 dark:text-white mb-6"
          >
            Gallery of <span className="text-gradient-pink-purple">Magical</span> setups
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 font-body text-sm sm:text-base"
          >
            Take a look at some of our real-life client decoration setups. Click on any image to open the interactive viewer.
          </motion.p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {(['all', 'balloons', 'themes', 'kids', 'adults'] as FilterCategory[]).map((cat) => {
            const isActive = filter === cat
            return (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                onMouseEnter={playHover}
                className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold border transition-all duration-300 cursor-none ${
                  isActive
                    ? 'bg-primary border-primary text-white shadow-md shadow-primary/20'
                    : 'bg-transparent border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-primary dark:hover:border-white'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Grid Portfolio with uniform aspect ratio to prevent empty columns when filtered */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                onClick={() => openLightbox(index)}
                onMouseEnter={playHover}
                className="rounded-2xl overflow-hidden glass-card border border-white/20 shadow-md group relative cursor-none interactive-card"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover visual details */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center mb-3 self-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                    <h4 className="text-white font-display font-bold text-lg leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75">
                      {item.title}
                    </h4>
                    <span className="text-xs text-secondary font-semibold uppercase tracking-wider mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform delay-100">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Popups */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-black/95 flex items-center justify-center z-[99999] p-4 cursor-none"
            >
              {/* Topbar Details */}
              <div className="absolute top-4 left-6 right-6 flex justify-between items-center z-10 text-white">
                <span className="font-display font-medium text-sm tracking-wider uppercase opacity-80">
                  {filteredItems[lightboxIndex].title} ({lightboxIndex + 1} / {filteredItems.length})
                </span>
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-none"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-none z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image View */}
              <motion.div
                key={lightboxIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl max-h-[80vh] overflow-hidden rounded-xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-w-full max-h-[80vh] object-contain select-none"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-none z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
