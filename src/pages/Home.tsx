import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useSound } from '../components/providers/SoundProvider'

// Section Imports
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Services } from '../components/sections/Services'
import { WhyChooseUs } from '../components/sections/WhyChooseUs'
import { Testimonials } from '../components/sections/Testimonials'

// Custom Gallery Highlights Teaser
const GalleryTeaser: React.FC = () => {
  const { playHover, playClick } = useSound()
  const navigate = useNavigate()

  const highlightImages = [
    {
      src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop',
      title: 'Pastel Rainbow Balloon Arch',
      category: 'Balloon Decor'
    },
    {
      src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=600&auto=format&fit=crop',
      title: 'Delicate Pastel Birthday Setup',
      category: 'Theme Decor'
    },
    {
      src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600&auto=format&fit=crop',
      title: 'Golden Luxury 30th Celebration',
      category: 'Milestone Events'
    },
    {
      src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600&auto=format&fit=crop',
      title: 'Magical Disney Princess Concept',
      category: 'Kids Birthday'
    }
  ]

  return (
    <section className="py-24 bg-white dark:bg-dark-bg/60 transition-colors duration-300 relative overflow-hidden border-t border-b border-gray-100 dark:border-white/5">
      {/* Glow Ambient */}
      <div className="absolute top-1/2 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary mb-3 block">
              Our Gallery Highlights
            </span>
            <h2 className="font-display font-extrabold text-4xl text-slate-900 dark:text-white leading-tight">
              A Glimpse of Our <br />
              <span className="text-gradient-pink-purple">Magical Creations</span>
            </h2>
          </div>
          <button
            onClick={() => { playClick(); navigate('/gallery') }}
            onMouseEnter={playHover}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-primary-dark group cursor-pointer"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightImages.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.01 }}
              onMouseEnter={playHover}
              onClick={() => { playClick(); navigate('/gallery') }}
              className="rounded-2xl overflow-hidden glass-card border border-white/20 shadow-md group relative aspect-[4/3] cursor-pointer"
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] uppercase font-bold text-secondary tracking-widest mb-1">{img.category}</span>
                <h4 className="font-display font-bold text-sm leading-snug">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Home: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { playClick, playHover } = useSound()

  useEffect(() => {
    // Standard scroll to top on mount
    window.scrollTo(0, 0)
    
    if (location.state) {
      const stateObj = location.state as any

      // Handle service select pre-population request
      if (stateObj.preselectTheme) {
        setTimeout(() => {
          const event = new CustomEvent('select-theme', { detail: stateObj.preselectTheme })
          window.dispatchEvent(event)
        }, 200)
      }

      // Clear the history state to prevent triggers on page refresh
      window.history.replaceState({}, document.title)
    }
  }, [location])

  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <GalleryTeaser />
      <Testimonials />

      {/* Call to Action Banner */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-white/5">
        {/* Glow Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-secondary fill-secondary" />
            <span>Ready to celebrate?</span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-6 leading-tight">
            Let's Make Your Next Birthday <br />
            <span className="text-gradient-pink-purple">Unbelievably Magical!</span>
          </h2>
          
          <p className="text-gray-400 text-sm md:text-base max-w-xl mb-10 leading-relaxed font-body">
            Get in touch with Raju Events today. Tell us your color preferences, date, and selected themes, and let Chirala's leading decoration specialists handle the rest.
          </p>
          
          <button
            onClick={() => {
              playClick()
              navigate('/contact')
            }}
            onMouseEnter={playHover}
            className="px-8 py-4 rounded-full font-bold text-white gradient-pink-purple shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
          >
            <span>Book Raju Events Now</span>
          </button>
        </div>
      </section>
    </>
  )
}
