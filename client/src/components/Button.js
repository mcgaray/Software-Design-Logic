import React from 'react'
import { motion } from 'framer-motion'

const Button = (props) => {
  return (
    <motion.button
      className="bg-background text-foreground px-5 py-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {props.title}
    </motion.button>
  )
}

export default Button
