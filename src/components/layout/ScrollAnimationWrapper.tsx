import { motion } from 'framer-motion'
import React from 'react'

type ScrollAnimationWrapperProps = {
  className?: string
  children: React.ReactNode
}

const ScrollAnimationWrapper = ({ children, className, ...props }: ScrollAnimationWrapperProps) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimationWrapper
