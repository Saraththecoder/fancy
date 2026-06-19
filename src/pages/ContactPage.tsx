import React, { useEffect } from 'react'
import { Contact } from '../components/sections/Contact'
import { PageHeader } from '../components/ui/PageHeader'

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-brand-bg dark:bg-dark-bg transition-colors duration-300 min-h-screen">
      <PageHeader
        title="Contact Us"
        subtitle="Let's build your dream birthday setup. Get in touch with our event decorators today."
        currentPage="Contact"
      />
      <Contact />
    </div>
  )
}
