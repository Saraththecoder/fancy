import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export const CustomCursor: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true)
  const [hoveredEl, setHoveredEl] = useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  // Track mouse coordinates
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Configure smooth spring animations for trailing circle
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 })
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 })

  // Configure smooth spring animations for background glow spotlight (slight delay makes it feel alive)
  const glowX = useSpring(mouseX, { stiffness: 60, damping: 25 })
  const glowY = useSpring(mouseY, { stiffness: 60, damping: 25 })

  useEffect(() => {
    // Check if device is desktop
    const checkDevice = () => {
      const mobile = window.matchMedia('(max-width: 1023px)').matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0)
      setIsMobile(mobile)
      
      if (!mobile) {
        document.body.classList.add('custom-cursor-active')
      } else {
        document.body.classList.remove('custom-cursor-active')
      }
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)

    // Track if body has .dark class initially
    setIsDarkMode(document.body.classList.contains('dark'))

    // Observer to listen for dark mode class updates
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains('dark'))
    })
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    })

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Listen to mouse hovers on interactive components
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target) return

      // Find closest link, button, or element with interactive roles
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, .interactive-card')
      if (interactive) {
        if (interactive.tagName === 'A' || interactive.tagName === 'BUTTON' || interactive.getAttribute('role') === 'button') {
          setHoveredEl('action')
        } else if (interactive.classList.contains('interactive-card')) {
          setHoveredEl('card')
        } else {
          setHoveredEl('input')
        }
      } else {
        setHoveredEl(null)
      }
    }

    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('resize', checkDevice)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.body.classList.remove('custom-cursor-active')
      observer.disconnect()
    }
  }, [mouseX, mouseY])

  if (isMobile) return null

  // Determine styles depending on hovered element type
  let ringSize = 32
  let ringBorderColor = 'rgba(255, 77, 109, 0.6)'
  let ringBg = 'rgba(255, 77, 109, 0)'
  let showLabel = false

  if (hoveredEl === 'action') {
    ringSize = 56
    ringBorderColor = '#7C3AED' // Accent purple
    ringBg = 'rgba(124, 58, 237, 0.1)'
  } else if (hoveredEl === 'card') {
    ringSize = 64
    ringBorderColor = '#FFD166' // Secondary yellow
    ringBg = 'rgba(255, 209, 102, 0.05)'
    showLabel = true
  } else if (hoveredEl === 'input') {
    ringSize = 16
    ringBorderColor = '#FF4D6D' // Primary pink
    ringBg = 'rgba(255, 77, 109, 0.2)'
  }

  return (
    <>
      {/* Background Spotlight Glow - only visible in dark mode to prevent light mode text wash-out */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-[-1] blur-[100px] transition-opacity duration-500"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isDarkMode ? 0.35 : 0,
          background: 'radial-gradient(circle, rgba(255,77,109,0.3) 0%, rgba(124,58,237,0.15) 50%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* Trailing Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center border transition-all duration-300 ease-out"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: ringSize,
          height: ringSize,
          borderColor: ringBorderColor,
          backgroundColor: ringBg,
        }}
      >
        {showLabel && (
          <span className="text-[9px] uppercase tracking-widest font-semibold text-primary dark:text-secondary whitespace-nowrap">
            View
          </span>
        )}
      </motion.div>

      {/* Precise Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[10000]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
