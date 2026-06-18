import React from 'react'
import { motion } from 'framer-motion'
import { PhoneCall, Palette, Sparkles, PartyPopper, Heart } from 'lucide-react'
import { useSound } from '../providers/SoundProvider'

interface Step {
  number: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We sit down (or connect online) to understand your vision, guest count, venue specs, and budget preferences.',
    icon: <PhoneCall className="w-5 h-5" />,
    color: 'from-[#FF4D6D] to-pink-500',
  },
  {
    number: '02',
    title: 'Theme Planning & 3D Drafting',
    description: 'Our designers compile color palettes, select balloon types, and draft 2D/3D visual concepts for your final approval.',
    icon: <Palette className="w-5 h-5" />,
    color: 'from-amber-400 to-[#FFD166]',
  },
  {
    number: '03',
    title: 'Decoration Setup',
    description: 'On the day of the event, our dedicated onsite team handles all rigging, structures, balloon blowing, and lighting checks.',
    icon: <Sparkles className="w-5 h-5" />,
    color: 'from-accent to-indigo-500',
  },
  {
    number: '04',
    title: 'Celebration Day',
    description: 'Welcome your guests into a breathtaking magical atmosphere. Every detail is primed for a perfect party experience.',
    icon: <PartyPopper className="w-5 h-5" />,
    color: 'from-emerald-400 to-teal-500',
  },
  {
    number: '05',
    title: 'Happy Memories',
    description: 'After the event, we handle the teardown, leaving you with gorgeous photos, happy guests, and lifelong memories.',
    icon: <Heart className="w-5 h-5" />,
    color: 'from-rose-500 to-red-600',
  },
]

export const Process: React.FC = () => {
  const { playHover } = useSound()

  return (
    <section
      id="process"
      className="relative py-24 bg-brand-bg dark:bg-dark-bg transition-colors duration-300 overflow-hidden"
    >
      {/* Background decoration elements */}
      <div className="absolute right-1/10 top-1/3 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute left-1/10 bottom-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-extrabold text-primary mb-3 block"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 dark:text-white mb-6"
          >
            Our Simple <span className="text-gradient-pink-purple">Five-Step</span> Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 font-body text-sm sm:text-base"
          >
            From your very first inquiry to the packing up after the final guest leaves, we ensure a smooth, worry-free execution.
          </motion.p>
        </div>

        {/* Timeline Path container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Connecting vertical line for desktop */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gray-200 dark:bg-gray-800 -translate-x-1/2 pointer-events-none" />

          {/* Steps List */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Card Content */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.7, type: 'spring', bounce: 0.2 }}
                      whileHover={{ scale: 1.02 }}
                      onMouseEnter={playHover}
                      className="p-6 sm:p-8 rounded-2xl glass-card border border-white/20 shadow-md relative overflow-hidden group interactive-card cursor-none"
                    >
                      {/* Background number outline */}
                      <span className="absolute -right-4 -bottom-6 font-display font-black text-7xl text-gray-200/20 dark:text-white/[0.02] select-none pointer-events-none">
                        {step.number}
                      </span>

                      {/* Header block */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-md`}>
                          {step.icon}
                        </div>
                        <span className="text-xs uppercase font-extrabold tracking-wider text-primary dark:text-secondary">
                          Step {step.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-lg sm:text-xl text-slate-800 dark:text-white mb-2">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed font-body">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Connecting Node Dot */}
                  <div className="absolute left-4 md:left-1/2 top-8 md:top-auto -translate-x-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} border-4 border-brand-bg dark:border-dark-bg flex items-center justify-center text-[10px] font-black text-white shadow-md`}
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
