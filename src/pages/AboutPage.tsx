import React, { useEffect } from 'react'
import { About } from '../components/sections/About'

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 bg-white dark:bg-dark-bg transition-colors duration-300 min-h-screen">
      <About />
    </div>
  )
}
