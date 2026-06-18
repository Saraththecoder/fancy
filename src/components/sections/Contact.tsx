import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react'
import confetti from 'canvas-confetti'
import { useSound } from '../providers/SoundProvider'

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian phone number'),
  email: z.string().email('Enter a valid email address').or(z.literal('')),
  date: z.string().min(1, 'Please select your event date'),
  theme: z.string().min(1, 'Please select or describe a theme'),
  message: z.string().min(10, 'Details must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { playHover, playClick } = useSound()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      date: '',
      theme: '',
      message: '',
    }
  })

  // Listen for custom "select-theme" event dispatched from Services cards
  React.useEffect(() => {
    const handleSelectTheme = (e: Event) => {
      const customEvent = e as CustomEvent
      const themeValue = customEvent.detail
      if (themeValue) {
        let mappedValue = ""
        if (themeValue.includes("Balloon")) mappedValue = "Balloon Decorations"
        else if (themeValue.includes("Birthday")) mappedValue = "Birthday Decorations"
        else if (themeValue.includes("3D Theme")) mappedValue = "3D Theme Decorations"
        else if (themeValue.includes("2D Theme")) mappedValue = "2D Theme Decorations"
        else if (themeValue.includes("Custom")) mappedValue = "Custom Decorations"
        else if (themeValue.includes("Background") || themeValue.includes("Backdrop") || themeValue.includes("Booth")) {
          mappedValue = "Backdrop/Photo Booth"
        }
        
        if (mappedValue) {
          setValue('theme', mappedValue)
        }
      }
    }
    window.addEventListener('select-theme', handleSelectTheme)
    return () => window.removeEventListener('select-theme', handleSelectTheme)
  }, [setValue])

  const onSubmit = (data: ContactFormData) => {
    playClick()
    console.log('Form Submitted successfully:', data)
    
    // Confetti celebration
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FF4D6D', '#FFD166', '#7C3AED']
    })

    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      reset()
    }, 5000)
  }

  // Pre-fill WhatsApp message link
  const whatsappUrl = 'https://wa.me/9948102259?text=Hi%20Raju%20Events,%20I%20would%20like%20to%20inquire%20about%20birthday%20decorations.'

  return (
    <section
      id="contact"
      className="relative py-24 bg-brand-bg dark:bg-dark-bg transition-colors duration-300 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute right-1/10 top-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute left-1/10 bottom-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest font-extrabold text-primary mb-3 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 dark:text-white mb-6"
          >
            Let’s Plan Your <span className="text-gradient-pink-purple">Magical</span> Birthday
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 font-body text-sm sm:text-base"
          >
            Have a date in mind? Fill out our quick booking inquiry form, or contact us directly via WhatsApp or Call.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Business Info & Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Contact Info Card */}
            <div className="p-8 rounded-2xl glass-card border border-white/20 shadow-md flex flex-col gap-6">
              
              <h3 className="font-display font-bold text-xl text-slate-800 dark:text-white mb-2">
                Business Details
              </h3>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                    Location
                  </h4>
                  <p className="text-sm font-semibold text-slate-700 dark:text-gray-300">
                    K. Paul Colony, Jandrapeta, Chirala - 523165, AP
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                    Phone & WhatsApp
                  </h4>
                  <p className="text-sm font-semibold text-slate-700 dark:text-gray-300">
                    +91 9948102259
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 text-violet-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                    Email Address
                  </h4>
                  <p className="text-sm font-semibold text-slate-700 dark:text-gray-300">
                    valluriraja0@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                    Working Hours
                  </h4>
                  <p className="text-sm font-semibold text-slate-700 dark:text-gray-300">
                    Monday – Sunday (9 AM – 9 PM)
                  </p>
                </div>
              </div>

            </div>

            {/* Quick action buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:9948102259"
                onMouseEnter={playHover}
                onClick={playClick}
                className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/20 shadow-sm flex items-center justify-center gap-2 font-bold text-xs sm:text-sm text-slate-800 dark:text-white hover:border-primary/50 transition-colors cursor-none interactive-card"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call Now</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="p-3.5 sm:p-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm text-white transition-all cursor-none interactive-card"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Real Interactive Google Maps embed */}
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-white/20 aspect-video w-full bg-slate-100 dark:bg-slate-900">
              <iframe
                title="Raju Events Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15349.563816656755!2d80.34757134376378!3d15.823671239247167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a159f8c679a95%3A0xc3cf9b2447ad9ec0!2sJandrapeta%2C%20Chirala%2C%20Andhra%20Pradesh%20523165!5e0!3m2!1sen!2sin!4v1718790000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Side: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/20 shadow-xl relative overflow-hidden h-full">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name input */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs uppercase tracking-wider font-extrabold text-slate-600 dark:text-gray-400">
                          Your Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          {...register('name')}
                          onFocus={playHover}
                          className={`w-full px-4 py-3 rounded-xl border bg-white/30 dark:bg-slate-900/30 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-none ${
                            errors.name ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                          }`}
                          placeholder="Ramesh Kumar"
                        />
                        {errors.name && (
                          <span className="text-[11px] text-red-500 font-semibold">{errors.name.message}</span>
                        )}
                      </div>

                      {/* Phone Input */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-xs uppercase tracking-wider font-extrabold text-slate-600 dark:text-gray-400">
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          {...register('phone')}
                          onFocus={playHover}
                          className={`w-full px-4 py-3 rounded-xl border bg-white/30 dark:bg-slate-900/30 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-none ${
                            errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                          }`}
                          placeholder="9948102259"
                        />
                        {errors.phone && (
                          <span className="text-[11px] text-red-500 font-semibold">{errors.phone.message}</span>
                        )}
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Email input (optional) */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs uppercase tracking-wider font-extrabold text-slate-600 dark:text-gray-400">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          {...register('email')}
                          onFocus={playHover}
                          className={`w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/30 dark:bg-slate-900/30 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-none`}
                          placeholder="valluriraja0@gmail.com"
                        />
                        {errors.email && (
                          <span className="text-[11px] text-red-500 font-semibold">{errors.email.message}</span>
                        )}
                      </div>

                      {/* Event Date input */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="date" className="text-xs uppercase tracking-wider font-extrabold text-slate-600 dark:text-gray-400">
                          Event Date *
                        </label>
                        <input
                          id="date"
                          type="date"
                          {...register('date')}
                          onFocus={playHover}
                          className={`w-full px-4 py-3 rounded-xl border bg-white/30 dark:bg-slate-900/30 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-none ${
                            errors.date ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                          }`}
                        />
                        {errors.date && (
                          <span className="text-[11px] text-red-500 font-semibold">{errors.date.message}</span>
                        )}
                      </div>

                    </div>

                    {/* Theme Select */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="theme" className="text-xs uppercase tracking-wider font-extrabold text-slate-600 dark:text-gray-400">
                        Theme Preference *
                      </label>
                      <select
                        id="theme"
                        {...register('theme')}
                        onFocus={playHover}
                        className={`w-full px-4 py-3 rounded-xl border bg-white/30 dark:bg-slate-900/30 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-none ${
                          errors.theme ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                        }`}
                      >
                        <option value="" className="text-slate-800">Select Theme Type</option>
                        <option value="Balloon Decorations" className="text-slate-800">🎈 Balloon Decorations</option>
                        <option value="Birthday Decorations" className="text-slate-800">🎂 Birthday Decorations</option>
                        <option value="2D Theme Decorations" className="text-slate-800">🎨 2D Character Theme</option>
                        <option value="3D Theme Decorations" className="text-slate-800">🏰 Immersive 3D Theme</option>
                        <option value="Custom Decorations" className="text-slate-800">✨ Custom Celebration Setup</option>
                        <option value="Backdrop/Photo Booth" className="text-slate-800">📸 Theme Background / Booth</option>
                      </select>
                      {errors.theme && (
                        <span className="text-[11px] text-red-500 font-semibold">{errors.theme.message}</span>
                      )}
                    </div>

                    {/* Message input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs uppercase tracking-wider font-extrabold text-slate-600 dark:text-gray-400">
                        Event details / Special requests *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        {...register('message')}
                        onFocus={playHover}
                        className={`w-full px-4 py-3 rounded-xl border bg-white/30 dark:bg-slate-900/30 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-none ${
                          errors.message ? 'border-red-500' : 'border-gray-200 dark:border-white/10'
                        }`}
                        placeholder="Tell us about the venue, favorite colors, age of the birthday person..."
                      />
                      {errors.message && (
                        <span className="text-[11px] text-red-500 font-semibold">{errors.message.message}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      onMouseEnter={playHover}
                      className="w-full mt-2 py-4 rounded-xl font-bold text-white gradient-pink-purple hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-md shadow-primary/10 flex items-center justify-center gap-2 cursor-none interactive-card"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending Request...' : 'Send Booking Request'}</span>
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-slate-800 dark:text-white mb-2">
                      Request Sent Successfully!
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm leading-relaxed mb-6 font-body">
                      Thank you for contacting Raju Events! We will call or WhatsApp you on the provided number shortly to finalize theme details and pricing.
                    </p>
                    <span className="text-[10px] uppercase font-bold text-primary tracking-widest">
                      Ready to create magic
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
