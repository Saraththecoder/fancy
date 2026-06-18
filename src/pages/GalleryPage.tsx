import React, { useEffect } from 'react'
import { Gallery } from '../components/sections/Gallery'

export const GalleryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 bg-white dark:bg-dark-bg transition-colors duration-300 min-h-screen">
      <Gallery />
    </div>
  )
}
