import React, { useEffect } from 'react'
import { FAQ } from '../components/sections/FAQ'
import { PageHeader } from '../components/ui/PageHeader'

export const FAQPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white dark:bg-dark-bg transition-colors duration-300 min-h-screen">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about booking, customization options, and event teardown."
        currentPage="FAQ"
      />
      <FAQ />
    </div>
  )
}
