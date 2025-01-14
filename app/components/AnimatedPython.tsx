'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function AnimatedPython() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="absolute w-24 h-24 pointer-events-none"
      animate={{
        x: mousePosition.x - 50,
        y: mousePosition.y - 50,
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    >
      <motion.path
        d="M27.5,24.6c-1.6,2.1-2.9,4.4-3.9,6.9c-2.1,5.2-2.6,10.9-1.5,16.4c1.1,5.5,3.9,10.6,8,14.5c4.1,3.9,9.3,6.5,14.9,7.4c5.6,0.9,11.3,0.2,16.4-2c5.1-2.2,9.4-5.9,12.4-10.6c3-4.7,4.5-10.2,4.3-15.8c-0.2-5.6-2.1-11-5.4-15.4c-3.3-4.4-7.9-7.7-13.1-9.4c-5.2-1.7-10.8-1.7-16,0c-5.2,1.7-9.8,5-13.1,9.4C29.4,22.1,28.4,23.3,27.5,24.6z"
        fill="#00FFFF"
        stroke="#008080"
        strokeWidth="2"
      />
      <motion.circle cx="35" cy="40" r="5" fill="#008080" />
      <motion.circle cx="65" cy="40" r="5" fill="#008080" />
      <motion.path
        d="M40,60 Q50,70 60,60"
        fill="none"
        stroke="#008080"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </motion.svg>
  )
}

