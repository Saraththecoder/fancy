import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Volume2, VolumeX, Menu, X } from 'lucide-react'
import { useLocation, Link } from 'react-router-dom'
import { useSound } from './providers/SoundProvider'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Process', href: '/process' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const { soundEnabled, setSoundEnabled, playHover, playClick } = useSound()
  const location = useLocation()

  // Track scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Dark Mode toggle handler
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    
    setDarkMode(isDark)
    if (isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    playClick()
    const newMode = !darkMode
    setDarkMode(newMode)
    if (newMode) {
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          isScrolled
            ? 'py-4 glass-effect shadow-md dark:shadow-black/20'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => { playClick(); setMobileMenuOpen(false); }}
            onMouseEnter={playHover}
            className="flex items-center gap-2 group font-display font-extrabold text-2xl tracking-wide dark:text-white"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-9 h-9 rounded-full overflow-hidden border border-primary/20 bg-white flex items-center justify-center"
            >
              <img src="/logo.png" alt="Raju Events Logo" className="w-full h-full object-cover" />
            </motion.div>
            <span>
              Raju <span className="text-primary">Events</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={() => { playClick(); setMobileMenuOpen(false); }}
                      onMouseEnter={playHover}
                      className={`relative font-medium text-sm transition-colors duration-200 py-2 ${
                        isActive
                          ? 'text-primary dark:text-secondary font-semibold'
                          : 'text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeUnderline"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-primary dark:bg-secondary rounded-full"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Separator line */}
            <div className="h-5 w-[1px] bg-gray-300 dark:bg-gray-700" />

            {/* Utility Toggles */}
            <div className="flex items-center gap-4">
              {/* Sound Toggle */}
              <button
                onClick={() => {
                  setSoundEnabled(!soundEnabled)
                  // Delay click to match status
                  setTimeout(() => playClick(), 50)
                }}
                onMouseEnter={playHover}
                className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors"
                title={soundEnabled ? 'Disable sounds' : 'Enable sounds'}
              >
                {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                onMouseEnter={playHover}
                className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors"
                title={darkMode ? 'Light mode' : 'Dark mode'}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Sound Switch */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled)
                setTimeout(() => playClick(), 50)
              }}
              className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-800/50 text-gray-600 dark:text-gray-400"
            >
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>

            {/* Dark Mode Switch */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-800/50 text-gray-600 dark:text-gray-400"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => {
                playClick()
                setMobileMenuOpen(!mobileMenuOpen)
              }}
              className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-800/50 text-gray-600 dark:text-gray-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[998] lg:hidden glass-effect pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 items-center justify-center flex-grow py-6">
              <motion.ul
                variants={{
                  open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
                animate="open"
                initial="closed"
                className="flex flex-col gap-4 text-center"
              >
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href
                  return (
                    <motion.li
                      variants={{
                        open: { y: 0, opacity: 1 },
                        closed: { y: -20, opacity: 0 }
                      }}
                      key={link.href}
                    >
                      <Link
                        to={link.href}
                        onClick={() => { playClick(); setMobileMenuOpen(false); }}
                        className={`text-xl font-display font-bold block py-2 ${
                          isActive
                            ? 'text-primary dark:text-secondary'
                            : 'text-gray-800 dark:text-gray-200'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  )
                })}
              </motion.ul>
            </nav>

            {/* Mobile Menu Prominent CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="px-4 mb-6"
            >
              <Link
                to="/contact"
                onClick={() => { playClick(); setMobileMenuOpen(false); }}
                className="w-full py-3.5 rounded-full font-bold text-white text-center gradient-pink-purple shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                Book Raju Events Now
              </Link>
            </motion.div>

            <div className="text-center text-xs text-gray-400 mt-2">
              © {new Date().getFullYear()} Raju Events. All rights reserved.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
