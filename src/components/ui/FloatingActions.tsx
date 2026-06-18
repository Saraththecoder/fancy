import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { useSound } from '../providers/SoundProvider'

export const FloatingActions: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showButtons, setShowButtons] = useState(false)
  const { playHover, playClick } = useSound()

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100)
      }

      // Show floating buttons after scrolling down 300px
      setShowButtons(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappUrl = 'https://wa.me/9948102259?text=Hi%20Raju%20Events,%20I%20would%20like%20to%20inquire%20about%20birthday%20decorations.'

  return (
    <>
      {/* Scroll Progress Bar at the top */}
      <div className="fixed top-0 left-0 w-full h-1 z-[1000] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Action Buttons */}
      <AnimatePresence>
        {showButtons && (
          <div className="fixed bottom-6 right-6 z-[90] flex flex-col gap-3">
            
            {/* Phone Button */}
            <motion.a
              href="tel:9948102259"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onMouseEnter={playHover}
              onClick={playClick}
              className="w-12 h-12 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all cursor-none interactive-card"
              title="Call Raju Events"
            >
              <Phone className="w-5 h-5" />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={playHover}
              onClick={playClick}
              className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all cursor-none interactive-card"
              title="WhatsApp Raju Events"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
            </motion.a>

          </div>
        )}
      </AnimatePresence>
    </>
  )
}
