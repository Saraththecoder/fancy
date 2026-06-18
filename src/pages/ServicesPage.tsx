import React, { useEffect } from 'react'
import { Services } from '../components/sections/Services'

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 bg-brand-bg dark:bg-dark-bg transition-colors duration-300 min-h-screen">
      <Services />
    </div>
  )
}
