import React, { useEffect } from 'react'
import { Testimonials } from '../components/sections/Testimonials'
import { PageHeader } from '../components/ui/PageHeader'

export const TestimonialsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-brand-bg dark:bg-dark-bg transition-colors duration-300 min-h-screen">
      <PageHeader
        title="Client Testimonials"
        subtitle="What happy parents and families say about their experience with Raju Events."
        currentPage="Testimonials"
      />
      <Testimonials />
    </div>
  )
}
