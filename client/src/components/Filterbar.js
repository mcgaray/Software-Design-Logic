import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import CustomLink from './CustomLink'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const Filterbar = () => {
  const [selectedFlower, setSelectedFlower] = useState(null)
  const [selectedOcassion, setSelectedOcassion] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedPrice, setSelectedPrice] = useState(null)

  const flowers = ['Rose', 'Tulips', 'Sunflower']
  const ocassions = ['Heart Day', 'Condolences']
  const categories = ['Single', 'Vase', 'Boquets']
  const prices = ['0-499', '500-1000', '1000 and above']

  const handleFlowerSelect = (value) => {
    setSelectedFlower(value)
  }
  const handleOcassionSelect = (value) => {
    setSelectedOcassion(value)
  }
  const handleCategorySelect = (value) => {
    setSelectedCategory(value)
  }
  const handlePriceSelect = (value) => {
    setSelectedPrice(value)
  }

  return (
    <form className="">
      <nav className="py-4 rounded shadow-lg flex justify-center gap-5 text-sm items-center h-auto text-black border border-black-500">
        <div className="flex flex-col gap-1 justify-center items-center w-32">
          <label className="font-bold">Flowers</label>
          <DropdownMenu
            title="Select a flower"
            items={flowers}
            selectedValue={selectedFlower}
            onSelect={handleFlowerSelect}
          />
        </div>
        <div className="flex flex-col gap-1 justify-center items-center w-32">
          <label className="font-bold">Ocassion</label>
          <DropdownMenu
            title="Select an ocassion"
            items={ocassions}
            selectedValue={selectedOcassion}
            onSelect={handleOcassionSelect}
          />
        </div>
        <div className="flex flex-col gap-1 justify-center items-center w-32">
          <label className="font-bold">Catergory</label>
          <DropdownMenu
            title="Select a category"
            items={categories}
            selectedValue={selectedCategory}
            onSelect={handleCategorySelect}
          />
        </div>
        <div className="flex flex-col gap-1 justify-center items-center w-32">
          <label className="font-bold">Price</label>
          <DropdownMenu
            title="Select a pice"
            items={prices}
            selectedValue={selectedPrice}
            onSelect={handlePriceSelect}
          />
        </div>
      </nav>
    </form>
  )
}

export default Filterbar

const DropdownMenu = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const toggleDropdownOn = () => {
    setIsDropdownOpen(true)
  }
  const toggleDropdownOff = () => {
    setIsDropdownOpen(false)
  }
  const handleClick = (value) => {
    props.onSelect(value)
  }
  const items = props.items

  return (
    <div
      onMouseEnter={toggleDropdownOn}
      onMouseLeave={toggleDropdownOff}
      className="relative group"
    >
      <CustomLink title={props.selectedValue || props.title} />
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 top-full mt-2 py-2 bg-white text-black border rounded-lg space-y-2 group-hover:block"
          >
            {items.map((item) => (
              <Link
                key={item}
                className={`block px-4 py-2 ${
                  props.selectedValue === item ? 'bg-gray-300' : ''
                }`}
                onClick={() => handleClick(item)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
