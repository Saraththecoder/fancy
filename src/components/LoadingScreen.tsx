import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    const duration = 2000 // 2 seconds loading simulation
    const intervalTime = 30
    const step = 100 / (duration / intervalTime)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step
        if (next >= 100) {
          clearInterval(timer)
          setIsDone(true)
          setTimeout(() => {
            onComplete()
          }, 600) // wait for exit animation
          return 100
        }
        return next
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-brand-bg dark:bg-dark-bg"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] } 
          }}
        >
          {/* Decorative glowing background blobs inside loader */}
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] animate-pulse-slow-delayed" />

          {/* Logo SVG */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-28 h-28 mb-8 rounded-full overflow-hidden border border-primary/20 bg-white flex items-center justify-center p-2 shadow-xl"
            >
              <img src="/logo.png" alt="Raju Events Logo" className="w-full h-full object-contain" />
              {/* Glowing ring around logo */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/10 animate-ping opacity-70" />
            </motion.div>


            {/* Business Name */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display font-extrabold text-3xl tracking-wide dark:text-white"
            >
              Raju <span className="text-primary">Events</span>
            </motion.h1>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mt-2 font-medium"
            >
              Making Every Birthday Magical
            </motion.p>
          </div>

          {/* Progress bar container */}
          <div className="w-64 mt-12 bg-gray-200/50 dark:bg-gray-800/50 h-[3px] rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Progress Percent Text */}
          <motion.div
            className="mt-3 font-display font-bold text-lg text-primary dark:text-secondary tracking-widest"
          >
            {Math.round(progress)}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
