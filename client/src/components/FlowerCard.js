import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

const FlowerCard = (props) => {
  const [isHovered, setIsHovered] = useState(false)

  const controls = useAnimation()

  const handleMouseEnter = () => {
    controls.start({ opacity: 1, y: 0 })
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    controls.start({ opacity: 0, y: 20 })
    setIsHovered(false)
  }

  return (
    <motion.button
      className="p-1 shadow-md"
      whileHover={{ boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.25)' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden">
        <motion.img
          className="h-auto max-w-80 max-h-80"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          src={props.image}
          alt={props.alt}
        />
      </div>
      <div className="flex flex-row justify-evenly items-center">
        <div className="py-3 flex flex-col gap-1 justify-center items-center">
          <h4 className="text-xl font-semibold">{props.title}</h4>
          <p className="tracking-widest">₱ {props.price}</p>
        </div>
        {isHovered && (
          <motion.div
            className="bg-white"
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button>
              <ShoppingCartOutlinedIcon />
            </button>
          </motion.div>
        )}
      </div>
    </motion.button>
  )
}

export default FlowerCard
