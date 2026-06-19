import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Calendar, Compass, Star, Gift, Sparkles } from 'lucide-react'
import confetti from 'canvas-confetti'
import { useSound } from '../providers/SoundProvider'

export const Hero: React.FC = () => {
  const navigate = useNavigate()
  const { playClick, playHover } = useSound()

  // Trigger confetti burst on click
  const triggerConfetti = () => {
    playClick()
    
    // Fire confetti from multiple angles for a premium feel
    const duration = 2.5 * 1000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF4D6D', '#FFD166', '#7C3AED', '#3B82F6']
      })
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF4D6D', '#FFD166', '#7C3AED', '#3B82F6']
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    
    frame()

    // Navigate to Contact Form page
    setTimeout(() => {
      navigate('/contact')
    }, 400)
  }

  // Navigate to services page
  const scrollToServices = () => {
    playClick()
    navigate('/services')
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-brand-bg dark:bg-dark-bg transition-colors duration-300"
    >
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/10 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-accent/20 dark:bg-accent/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-secondary/15 rounded-full blur-[60px] animate-pulse" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,77,109,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,77,109,0.03)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] pointer-events-none" />

      {/* Floating SVG Balloons */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Left Floating Balloon */}
        <motion.div
          className="absolute left-[8%] top-[20%] text-primary/70"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg width="60" height="100" viewBox="0 0 60 100" fill="currentColor">
            <path d="M30,10 C10,10 10,50 30,60 C50,50 50,10 30,10 Z" />
            <path d="M28,60 L32,60 L30,65 Z" />
            <path d="M30,65 Q25,75 30,85 T30,95" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </motion.div>

        {/* Right Floating Balloon (Gold) */}
        <motion.div
          className="absolute right-[10%] top-[15%] text-secondary"
          animate={{
            y: [0, -30, 0],
            x: [0, -15, 0],
            rotate: [0, -8, 8, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <svg width="80" height="130" viewBox="0 0 80 130" fill="currentColor" className="drop-shadow-[0_10px_15px_rgba(255,209,102,0.3)]">
            <path d="M40,12 C12,12 12,65 40,78 C68,65 68,12 40,12 Z" />
            <path d="M37,78 L43,78 L40,84 Z" />
            <path d="M40,84 Q35,95 40,105 T40,120" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Mid-sized Purple Balloon */}
        <motion.div
          className="absolute left-[15%] bottom-[15%] text-accent/60"
          animate={{
            y: [0, -25, 0],
            x: [0, 8, 0],
            rotate: [0, 4, -4, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        >
          <svg width="50" height="85" viewBox="0 0 50 85" fill="currentColor">
            <path d="M25,8 C8,8 8,42 25,50 C42,42 42,8 25,8 Z" />
            <path d="M23,50 L27,50 L25,54 Z" />
            <path d="M25,54 Q20,62 25,70 T25,80" fill="none" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </motion.div>

        {/* Small floating gift */}
        <motion.div
          className="absolute right-[18%] bottom-[20%] text-primary/40"
          animate={{
            y: [0, -18, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          <Gift className="w-10 h-10" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 w-full py-12">
        {/* Interactive Glass Cards / Image Representation */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Main Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/20 flex items-center justify-center gradient-pink-purple/20"
          >
            {/* Central visual placeholder with corporate logo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white/10 dark:bg-black/15 backdrop-blur-md">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/50 bg-white flex items-center justify-center p-2 mb-4 shadow-xl"
              >
                <img src="/logo.png" alt="Raju Events Logo" className="w-full h-full object-contain" />
              </motion.div>
              <span className="font-display font-extrabold text-2xl tracking-wide dark:text-white">Raju Events</span>
              <span className="text-xs uppercase tracking-widest text-primary font-semibold mt-1">Birthday Decoration Specialists</span>
            </div>

            {/* Outer animated ring */}
            <div className="absolute inset-4 rounded-xl border border-white/10 animate-pulse-slow" />
          </motion.div>

          {/* Floating Highlight Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden sm:flex absolute -left-6 top-10 p-4 rounded-2xl glass-card border border-white/30 shadow-lg items-center gap-3 backdrop-blur-lg max-w-[200px]"
          >
            <div className="w-10 h-10 rounded-full gradient-yellow-orange flex items-center justify-center text-white shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-black text-lg leading-none text-slate-800 dark:text-white">10+</div>
              <div className="text-[10px] text-gray-500 font-medium uppercase mt-0.5">Years Experience</div>
            </div>
          </motion.div>

          {/* Floating Highlight Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden sm:flex absolute -right-6 bottom-10 p-4 rounded-2xl glass-card border border-white/30 shadow-lg items-center gap-3 backdrop-blur-lg max-w-[200px]"
          >
            <div className="w-10 h-10 rounded-full gradient-pink-purple flex items-center justify-center text-white shrink-0">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="font-display font-black text-lg leading-none text-slate-800 dark:text-white">500+</div>
              <div className="text-[10px] text-gray-500 font-medium uppercase mt-0.5">Magical Birthdays</div>
            </div>
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-semibold text-primary mb-6 shadow-sm border border-primary/10"
          >
            <Sparkles className="w-4 h-4 text-secondary fill-secondary" />
            <span className="tracking-widest uppercase">AP's Premier Birthday Decorators</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-extrabold text-5xl md:text-6xl xl:text-7xl leading-tight text-slate-900 dark:text-white mb-6"
          >
            Creating Magical <br />
            <span className="text-gradient-pink-purple">Birthday</span> Celebrations
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-10 leading-relaxed font-body"
          >
            Premium birthday decorations crafted with creativity, elegance, and unforgettable memories. Over 10 years of experience making dreams come alive.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* Book Now Button */}
            <button
              onClick={triggerConfetti}
              onMouseEnter={playHover}
              className="w-full sm:w-auto relative px-8 py-4 rounded-full font-bold text-white gradient-pink-purple overflow-hidden shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group flex items-center justify-center gap-2 cursor-none"
            >
              <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Book Now</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* Explore Services Button */}
            <button
              onClick={scrollToServices}
              onMouseEnter={playHover}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-slate-800 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-white/10 dark:hover:bg-white/5 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-none"
            >
              <Compass className="w-5 h-5" />
              <span>Explore Services</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-brand-bg dark:text-dark-bg fill-current transform rotate-180">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.7,188,111,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}
