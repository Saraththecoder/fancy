import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Calendar, Users, Award, CheckCircle } from 'lucide-react'
import { useSound } from '../providers/SoundProvider'

interface StatCard {
  icon: React.ReactNode
  value: string
  label: string
  color: string
}

const stats: StatCard[] = [
  {
    icon: <Trophy className="w-6 h-6" />,
    value: '10+',
    label: 'Years Experience',
    color: 'gradient-yellow-orange',
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    value: '500+',
    label: 'Birthday Events',
    color: 'gradient-pink-purple',
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: '1000+',
    label: 'Happy Clients',
    color: 'gradient-purple-blue',
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: '100%',
    label: 'Satisfaction',
    color: 'bg-gradient-to-r from-emerald-400 to-teal-500',
  },
]

export const About: React.FC = () => {
  const { playHover } = useSound()

  return (
    <section
      id="about"
      className="relative py-24 bg-white dark:bg-dark-bg/40 overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Blur Blobs */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute left-0 bottom-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Brand History & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Section Badge */}
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary mb-3">
              About Raju Events
            </span>
            
            {/* Section Title */}
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 dark:text-white mb-6 leading-tight">
              Making Every Birthday <br />
              <span className="text-gradient-pink-purple">Magical</span> & Memorable
            </h2>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-body text-base">
              For over a decade, Raju Events has been the gold standard for birthday celebrations in Chirala and across Andhra Pradesh. We believe a birthday is not just an event—it's a landmark memory. Our passionate team of decorators, stylists, and creatives craft bespoke themes that capture the unique personality of kids, teens, and adults alike.
            </p>

            {/* Mission Statement */}
            <div className="p-6 rounded-2xl glass-card border border-white/20 mb-10 flex gap-4 items-start shadow-sm">
              <div className="w-10 h-10 rounded-full gradient-pink-purple flex items-center justify-center text-white shrink-0 shadow-md">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white mb-1">
                  Our Mission
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  To transform every birthday into a memorable experience through creative decoration, premium themes, and outstanding customer service.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onMouseEnter={playHover}
                  className="p-5 rounded-2xl glass-card border border-white/20 shadow-sm flex flex-col gap-2 relative overflow-hidden group interactive-card cursor-none"
                >
                  {/* Glowing background card element */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon with colored bg */}
                  <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center text-white shadow-sm`}>
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <div className="font-display font-black text-2xl md:text-3xl text-slate-800 dark:text-white mt-2">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-xs uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Layered Image Panels */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
          >
            {/* Background glowing circle behind image */}
            <div className="absolute w-80 h-80 bg-primary/20 rounded-full blur-[60px] animate-pulse-slow" />

            {/* Main Image Frame */}
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-dark-card group">
              <img
                src="/about-showcase.png"
                alt="Raju Events Decoration Showcase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-35 transition-opacity" />
            </div>

            {/* Layered Decorative Stamp */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-6 -left-6 w-24 h-24 hidden sm:block pointer-events-none"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-none stroke-[1.5]">
                <circle cx="50" cy="50" r="40" strokeDasharray="5, 5" />
                <path d="M50,10 L50,90 M10,50 L90,50" className="opacity-30" />
              </svg>
            </motion.div>

            {/* Float Highlight Badge */}
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute bottom-6 -left-6 hidden sm:flex items-center gap-3 px-5 py-3 rounded-2xl glass-card border border-white/40 shadow-xl backdrop-blur-md"
            >
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">
                Booking Open for 2026
              </span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
