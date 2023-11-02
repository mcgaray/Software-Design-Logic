import React from 'react'

const TopBanner = (props) => {
  return (
    <div className="sticky top-0 w-full flex flex-row justify-between items-center bg-topbanner p-1 px-4">
      <div>
        <p>{props.leftContent}</p>
      </div>
      <div>
        <p>{props.centerContent}</p>
      </div>
      <div>
        <p>{props.rightContent}</p>
      </div>
    </div>
  )
}

export default TopBanner
