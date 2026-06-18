import React, { createContext, useContext, useState, useEffect } from 'react'

interface SoundContextType {
  soundEnabled: boolean
  setSoundEnabled: (enabled: boolean) => void
  playHover: () => void
  playClick: () => void
}

const SoundContext = createContext<SoundContextType | undefined>(undefined)

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false)

  // Initialize state from localStorage if available
  useEffect(() => {
    const stored = localStorage.getItem('sound_enabled')
    if (stored) {
      setSoundEnabled(stored === 'true')
    }
  }, [])

  const toggleSound = (enabled: boolean) => {
    setSoundEnabled(enabled)
    localStorage.setItem('sound_enabled', String(enabled))
  }

  // Synthesize a soft hover chime (high frequency, very short duration)
  const playHover = () => {
    if (!soundEnabled) return
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
      if (!AudioContextClass) return
      const ctx = new AudioContextClass()
      
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      
      osc.type = 'sine'
      osc.frequency.setValueAtTime(1000, ctx.currentTime) // 1000Hz frequency
      osc.frequency.exponentialRampToValueAtTime(1500, ctx.currentTime + 0.05) // ramp up
      
      gain.gain.setValueAtTime(0.015, ctx.currentTime) // very soft
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06) // fade out fast
      
      osc.connect(gain)
      gain.connect(ctx.destination)
      
      osc.start()
      osc.stop(ctx.currentTime + 0.06)
    } catch (e) {
      console.warn('Audio context blocked or not supported', e)
    }
  }

  // Synthesize a soft click chime (lower frequency, slightly longer duration)
  const playClick = () => {
    if (!soundEnabled) return
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
      if (!AudioContextClass) return
      const ctx = new AudioContextClass()
      
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      
      osc.type = 'sine'
      osc.frequency.setValueAtTime(600, ctx.currentTime) // 600Hz frequency
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1) // ramp down
      
      gain.gain.setValueAtTime(0.04, ctx.currentTime) // moderate volume
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12) // fade out
      
      osc.connect(gain)
      gain.connect(ctx.destination)
      
      osc.start()
      osc.stop(ctx.currentTime + 0.12)
    } catch (e) {
      console.warn('Audio context blocked or not supported', e)
    }
  }

  return (
    <SoundContext.Provider value={{ soundEnabled, setSoundEnabled: toggleSound, playHover, playClick }}>
      {children}
    </SoundContext.Provider>
  )
}

export const useSound = () => {
  const context = useContext(SoundContext)
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider')
  }
  return context
}
