import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const OcassionCard = (props) => {
  return (
    <div>
      <Link to="/flowers">
        <div className="flex flex-col gap-2 justify-center items-center">
          <motion.div whileHover={{ scale: 1.1 }}>
            <img
              className="overflow-hidden max-w-80 max-h-80"
              src={props.image}
              alt={props.alt}
            />
          </motion.div>
          <div className="text-black">
            <p className="text-xl font-semibold">{props.title}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default OcassionCard
