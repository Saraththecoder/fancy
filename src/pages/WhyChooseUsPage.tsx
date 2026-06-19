import React, { useEffect } from 'react'
import { WhyChooseUs } from '../components/sections/WhyChooseUs'
import { PageHeader } from '../components/ui/PageHeader'

export const WhyChooseUsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white dark:bg-dark-bg transition-colors duration-300 min-h-screen">
      <PageHeader
        title="Why Choose Us"
        subtitle="Crafting flawless birthday celebrations with premium quality, transparency, and punctuality."
        currentPage="Why Us"
      />
      <WhyChooseUs />
    </div>
  )
}
