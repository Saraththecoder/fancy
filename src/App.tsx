import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'

// Components
import { SoundProvider } from './components/providers/SoundProvider'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { FloatingActions } from './components/ui/FloatingActions'

// Pages
import { Home } from './pages/Home'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { WhyChooseUsPage } from './pages/WhyChooseUsPage'
import { ProcessPage } from './pages/ProcessPage'
import { GalleryPage } from './pages/GalleryPage'
import { TestimonialsPage } from './pages/TestimonialsPage'
import { FAQPage } from './pages/FAQPage'
import { ContactPage } from './pages/ContactPage'

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
            className="flex flex-col min-h-screen relative overflow-x-hidden w-full"
          >
            {/* Header Navigation */}
            <Navbar />

            {/* Content Pages with Router Routing */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:slug" element={<ServiceDetailPage />} />
                <Route path="/why-us" element={<WhyChooseUsPage />} />
                <Route path="/process" element={<ProcessPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
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
    <Router>
      <SoundProvider>
        <MainContent />
      </SoundProvider>
    </Router>
  )
}

export default App
