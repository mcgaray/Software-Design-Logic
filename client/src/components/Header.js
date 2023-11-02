import React from 'react'
import TopBanner from './TopBanner'
import LogoBanner from './LogoBanner'
import Navbar from './Navbar'

const Header = (props) => {
  return (
    <div>
      <div>
        <TopBanner
          leftContent="+63 123 123 1234"
          centerContent="Open at 7 am to 10 pm"
          rightContent="example@gmail.com"
        />
        <LogoBanner />
        <Navbar />
      </div>
      <div className="bg-center bg-cover bg-no-repeat bg-banner-img">
        <div className="py-10 flex flex-col text-white justify-center items-center gap-3">
          <h2 className="text-4xl">{props.title}</h2>
          <p>Home | {props.page}</p>
        </div>
      </div>
    </div>
  )
}

export default Header
