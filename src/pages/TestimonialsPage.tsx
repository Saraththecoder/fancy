import React, { useEffect } from 'react'
import { Testimonials } from '../components/sections/Testimonials'

export const TestimonialsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 bg-brand-bg dark:bg-dark-bg transition-colors duration-300 min-h-screen">
      <Testimonials />
    </div>
  )
}
