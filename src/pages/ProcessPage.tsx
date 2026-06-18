import React, { useEffect } from 'react'
import { Process } from '../components/sections/Process'

export const ProcessPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 bg-brand-bg dark:bg-dark-bg transition-colors duration-300 min-h-screen">
      <Process />
    </div>
  )
}
