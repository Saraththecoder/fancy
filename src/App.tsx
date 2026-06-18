import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'

// Components
import { SoundProvider } from './components/providers/SoundProvider'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { WhyChooseUs } from './components/sections/WhyChooseUs'
import { Process } from './components/sections/Process'
import { Gallery } from './components/sections/Gallery'
import { Testimonials } from './components/sections/Testimonials'
import { FAQ } from './components/sections/FAQ'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/Footer'
import { FloatingActions } from './components/ui/FloatingActions'

// CSS Imports
import './App.css'

const MainContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  // Configure Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Pause scroll when loading
    if (isLoading) {
      lenis.stop()
    } else {
      lenis.start()
    }

    return () => {
      lenis.destroy()
    }
  }, [isLoading])

  return (
    <>
      {/* Programmatic Noise overlay */}
      <div className="noise-overlay" />

      {/* Preloader */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* Main Site Container */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen relative"
          >
            {/* Header Navigation */}
            <Navbar />

            {/* Content Sections */}
            <main className="flex-grow">
              <Hero />
              <About />
              <Services />
              <WhyChooseUs />
              <Process />
              <Gallery />
              <Testimonials />
              <FAQ />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating Contact Channels & Progress Indicator */}
            <FloatingActions />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function App() {
  return (
    <SoundProvider>
      <MainContent />
    </SoundProvider>
  )
}

export default App
