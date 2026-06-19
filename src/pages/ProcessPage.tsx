import React, { useEffect } from 'react'
import { Process } from '../components/sections/Process'
import { PageHeader } from '../components/ui/PageHeader'

export const ProcessPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-brand-bg dark:bg-dark-bg transition-colors duration-300 min-h-screen">
      <PageHeader
        title="Our Decoration Process"
        subtitle="How we take your ideas from initial concept drafts to breathtaking setup reality."
        currentPage="Process"
      />
      <Process />
    </div>
  )
}
