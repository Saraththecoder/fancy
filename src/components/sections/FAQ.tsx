import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useSound } from '../providers/SoundProvider'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What locations do you serve for birthday decorations?',
    answer: 'Our main office is in Chirala (K. Paul Colony, Jandrapeta). We offer decoration services across Chirala, Bapatla, Vetapalem, Pandillapalle, and surrounding regions up to 50km. For large theme installations, we can travel further in Andhra Pradesh.',
  },
  {
    question: 'How far in advance should I book my event?',
    answer: 'We recommend booking at least 7 to 14 days in advance to ensure slot availability and allow time for custom 3D structures or custom printing. However, for standard balloon decors, we can accommodate urgent requests booked 2-3 days before.',
  },
  {
    question: 'Can you customize decorations based on specific cartoon or movie themes?',
    answer: 'Absolutely! Customizations are our specialty. We can create custom 3D cutouts, printed panels, custom signboards, and balloon color schemes based on any theme—like Jungle, Cocomelon, Space, Barbies, Avengers, or sophisticated floral themes for adults.',
  },
  {
    question: 'How long does the onsite setup process take?',
    answer: 'Setup duration depends on the complexity. Simple balloon setups take 1 to 2 hours. Immersive 3D backdrop themes require 3 to 5 hours. Our team coordinates to complete everything at least 1-2 hours before your guests arrive.',
  },
  {
    question: 'What is your booking deposit and payment policy?',
    answer: 'To secure your date, we require a 30% advance deposit. The remaining 70% is payable on the day of the event after the setup is complete and you are fully satisfied with the decorations. We accept UPI (Google Pay, PhonePe), cash, and bank transfers.',
  },
]

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { playHover, playClick } = useSound()

  const toggleFAQ = (index: number) => {
    playClick()
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="relative py-24 bg-white dark:bg-dark-bg/40 overflow-hidden transition-colors duration-300"
    >
      {/* Background decoration */}
      <div className="absolute right-0 bottom-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-extrabold text-primary mb-3 block"
          >
            Got Questions?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 dark:text-white mb-6"
          >
            Frequently Asked <span className="text-gradient-pink-purple">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 font-body"
          >
            Everything you need to know about our birthday event decoration services, booking policies, and custom themes.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-2xl glass-card border border-white/20 shadow-sm overflow-hidden"
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  onMouseEnter={playHover}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left cursor-none interactive-card select-none"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-slate-800 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Chevron Icon wrapper */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center shrink-0"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Accordion Expandable Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 sm:p-8 pt-0 sm:pt-0 border-t border-gray-100 dark:border-white/5 text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-body">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
