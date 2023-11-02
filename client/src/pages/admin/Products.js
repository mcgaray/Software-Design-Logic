import React, { useState } from 'react'
import NavbarAdmin from '../../components/NavbarAdmin'
import OcassionSection from './components/OcassionSection'
import CategorySection from './components/CategorySection'
import FlowerSection from './components/FlowerSection'

const Products = () => {
  return (
    <div>
      <div>
        <NavbarAdmin />
      </div>
      <div>
        <CrudForms />
      </div>
    </div>
  )
}

export default Products

const CrudForms = () => {
  const [isCategorySelected, setIsCategorySelected] = useState(false)
  const [isOcassionSelected, setIsOcassionSelected] = useState(false)
  const [isProductSelected, setIsProductSelected] = useState(true)

  function handleClick(value) {
    if (value === 'category') {
      setIsCategorySelected(true)
      setIsOcassionSelected(false)
      setIsProductSelected(false)
    } else if (value === 'ocassion') {
      setIsCategorySelected(false)
      setIsOcassionSelected(true)
      setIsProductSelected(false)
    } else if (value === 'product') {
      setIsCategorySelected(false)
      setIsOcassionSelected(false)
      setIsProductSelected(true)
    } else {
      setIsCategorySelected(false)
      setIsOcassionSelected(false)
      setIsProductSelected(false)
    }
  }

  return (
    <div>
      <div className="w-full gap-10 flex flex-row h-9 bg-topbanner justify-center items-center ">
        <button onClick={() => handleClick('product')}>Flower</button>
        <button onClick={() => handleClick('ocassion')}>Ocassion</button>       
        <button onClick={() => handleClick('category')}>Category</button>
      </div>
      {isOcassionSelected && (
        <div>
          <OcassionSection 
            pageName='Ocassions'
            api='ocassion'
          />
        </div>
      )}
      {isProductSelected && (
        <div>
          <FlowerSection
            pageName='Flowers'
            api='flower'  
          />
        </div>
      )}
      {isCategorySelected && (
        <div>
          <CategorySection 
            pageName='Categories'
            api='ocassion'  
          />
        </div>
      )}
    </div>
  )
}

