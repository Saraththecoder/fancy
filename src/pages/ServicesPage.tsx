import React, { useEffect } from 'react'
import { Services } from '../components/sections/Services'
import { PageHeader } from '../components/ui/PageHeader'

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-brand-bg dark:bg-dark-bg transition-colors duration-300 min-h-screen">
      <PageHeader
        title="Our Decoration Services"
        subtitle="From organic balloon garlands to complete custom 3D theme stage setups."
        currentPage="Services"
      />
      <Services />
    </div>
  )
}
