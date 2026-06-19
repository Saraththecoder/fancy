import React, { useEffect } from 'react'
import { Gallery } from '../components/sections/Gallery'
import { PageHeader } from '../components/ui/PageHeader'

export const GalleryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white dark:bg-dark-bg transition-colors duration-300 min-h-screen">
      <PageHeader
        title="Our Magical Gallery"
        subtitle="A high-definition portfolio showcase of our real-life decoration setups."
        currentPage="Gallery"
      />
      <Gallery />
    </div>
  )
}
