import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Section Imports
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Services } from '../components/sections/Services'
import { WhyChooseUs } from '../components/sections/WhyChooseUs'
import { Process } from '../components/sections/Process'
import { Gallery } from '../components/sections/Gallery'
import { Testimonials } from '../components/sections/Testimonials'
import { FAQ } from '../components/sections/FAQ'
import { Contact } from '../components/sections/Contact'

export const Home: React.FC = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.state) {
      const stateObj = location.state as any
      
      // Handle page scroll requests
      if (stateObj.scrollTo) {
        setTimeout(() => {
          const element = document.getElementById(stateObj.scrollTo)
          if (element) {
            const offset = 80 // Navbar height
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            
            window.scrollTo({
              top: elementPosition - offset,
              behavior: 'smooth',
            })
          }
        }, 100)
      }

      // Handle service select pre-population request
      if (stateObj.preselectTheme) {
        setTimeout(() => {
          const event = new CustomEvent('select-theme', { detail: stateObj.preselectTheme })
          window.dispatchEvent(event)
        }, 200)
      }

      // Clear the history state to prevent triggers on page refresh
      window.history.replaceState({}, document.title)
    }
  }, [location])

  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
