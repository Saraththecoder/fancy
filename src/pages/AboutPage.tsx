import React, { useEffect } from 'react'
import { About } from '../components/sections/About'
import { PageHeader } from '../components/ui/PageHeader'

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white dark:bg-dark-bg transition-colors duration-300 min-h-screen">
      <PageHeader
        title="About Raju Events"
        subtitle="AP's premier birthday event designers bringing dreams to life for over a decade."
        currentPage="About"
      />
      <About />
    </div>
  )
}
