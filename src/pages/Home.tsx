import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Star } from 'lucide-react'
import { useSound } from '../components/providers/SoundProvider'

// Section Imports
import { Hero } from '../components/sections/Hero'

// Custom Gallery Highlights Teaser (Already a teaser)
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

// Concise About Teaser for Homepage
const AboutTeaser: React.FC = () => {
  const { playHover, playClick } = useSound()
  const navigate = useNavigate()

  return (
    <section className="py-24 bg-white dark:bg-dark-bg/40 overflow-hidden transition-colors duration-300 relative">
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Visual Frame */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-[60px] animate-pulse-slow" />
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-dark-card group">
              <img
                src="/about-showcase.png"
                alt="Raju Events Decoration Showcase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary mb-3">
              About Raju Events
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 dark:text-white mb-6 leading-tight">
              Making Every Birthday <br />
              <span className="text-gradient-pink-purple">Magical</span> & Memorable
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-body text-base">
              For over a decade, Raju Events has been the gold standard for birthday celebrations in Chirala and across Andhra Pradesh. We believe a birthday is not just an event—it's a landmark memory.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-body text-base">
              Our passionate team of decorators, stylists, and creatives craft bespoke themes that capture the unique personality of kids, teens, and adults alike.
            </p>

            <button
              onClick={() => { playClick(); navigate('/about') }}
              onMouseEnter={playHover}
              className="px-6 py-3 rounded-full font-bold text-sm text-white gradient-pink-purple shadow-md hover:shadow-primary/20 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Read Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Concise Services Teaser for Homepage
const ServicesTeaser: React.FC = () => {
  const { playHover, playClick } = useSound()
  const navigate = useNavigate()

  const featuredServices = [
    {
      title: 'Balloon Decorations',
      description: 'Bespoke balloon arches, organic garlands, bouquets, and ceiling balloon drops tailored to your theme colors.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop',
      slug: 'balloon-decorations',
      gradient: 'from-[#FF4D6D] to-[#7C3AED]',
    },
    {
      title: 'Birthday Decorations',
      description: 'Complete celebration setups, cake tables, party signages, lighting, and tablescapes for all ages.',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop',
      slug: 'birthday-decorations',
      gradient: 'from-[#FFD166] to-[#FF8A00]',
    },
    {
      title: '3D Theme Decorations',
      description: 'Immersive 3D cutout backdrops, custom character setups, structures, and stages that bring fantasy worlds to life.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=600&auto=format&fit=crop',
      slug: '3d-theme-decorations',
      gradient: 'from-[#7C3AED] to-[#3B82F6]',
    }
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const maxTilt = 6
    const rotateX = ((centerY - y) / centerY) * maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
  }

  return (
    <section className="py-24 bg-brand-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      <div className="absolute left-1/10 top-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary mb-3 block">
              What We Do
            </span>
            <h2 className="font-display font-extrabold text-4xl text-slate-900 dark:text-white leading-tight">
              Premium Birthday <br />
              <span className="text-gradient-pink-purple">Decoration</span> Services
            </h2>
          </div>
          <button
            onClick={() => { playClick(); navigate('/services') }}
            onMouseEnter={playHover}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-primary-dark group cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Top 3 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={playHover}
              onClick={() => { playClick(); navigate(`/services/${service.slug}`) }}
              style={{ transformStyle: 'preserve-3d', transition: 'transform 0.15s ease-out' }}
              className="gradient-border-container shadow-lg shadow-primary/3 interactive-card cursor-pointer"
            >
              <div
                className="glass-card rounded-2xl flex flex-col h-full items-stretch select-none relative overflow-hidden"
                style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}
              >
                <div className="w-full aspect-[16/10] overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-6 flex flex-col items-start flex-grow relative">
                  <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-primary dark:text-secondary">
                    <span>Learn More</span>
                    <span className="text-sm font-bold">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Concise Featured Testimonial Teaser for Homepage
const TestimonialTeaser: React.FC = () => {
  const { playHover, playClick } = useSound()
  const navigate = useNavigate()

  return (
    <section className="py-24 bg-white dark:bg-dark-bg/40 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute right-1/10 bottom-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest font-extrabold text-primary mb-3">
          Testimonials
        </span>
        <h2 className="font-display font-extrabold text-4xl text-slate-900 dark:text-white mb-10">
          Loved by <span className="text-gradient-pink-purple">Families</span>
        </h2>

        {/* Single featured card */}
        <div className="w-full max-w-3xl p-8 sm:p-12 rounded-3xl glass-card border border-white/30 shadow-xl relative overflow-hidden flex flex-col items-center">
          <div className="flex gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-secondary text-secondary drop-shadow-[0_2px_4px_rgba(255,209,102,0.3)]" />
            ))}
          </div>

          <p className="text-slate-700 dark:text-gray-300 font-body text-base sm:text-lg italic leading-relaxed mb-8">
            "Raju Events turned our daughter’s first birthday into a fairytale! The 3D castle backdrop was breathtaking, and the pastel balloon color scheme was exactly what we envisioned. Very professional crew."
          </p>

          <div className="flex flex-col items-center mb-6">
            <h4 className="font-display font-bold text-lg text-slate-800 dark:text-white leading-tight">
              Srinivas Rao
            </h4>
            <p className="text-xs uppercase tracking-widest font-semibold text-primary dark:text-secondary mt-1">
              Parent, Chirala
            </p>
          </div>

          <button
            onClick={() => { playClick(); navigate('/testimonials') }}
            onMouseEnter={playHover}
            className="px-6 py-2.5 rounded-full border border-primary/20 hover:border-primary/50 text-xs font-bold text-primary dark:text-secondary hover:bg-primary/5 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Read All Reviews</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
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
    window.scrollTo(0, 0)
    
    if (location.state) {
      const stateObj = location.state as any

      if (stateObj.preselectTheme) {
        setTimeout(() => {
          const event = new CustomEvent('select-theme', { detail: stateObj.preselectTheme })
          window.dispatchEvent(event)
        }, 200)
      }

      window.history.replaceState({}, document.title)
    }
  }, [location])

  return (
    <>
      <Hero />
      <AboutTeaser />
      <ServicesTeaser />
      <GalleryTeaser />
      <TestimonialTeaser />

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
