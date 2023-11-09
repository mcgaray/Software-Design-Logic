import React from 'react'
import Footer from '../components/Footer'

import TopBanner from '../components/Header/TopBanner';
import LogoBanner from '../components/Header/LogoBanner';
import Navbar from '../components/Header/Navbar';
import SubBanner from '../components/Header/SubBanner';


function Blogs() {
  return (
    <div>
      <div className='sticky top-0 w-full'>
        <TopBanner
          leftContent="+63 123 123 1234"
          centerContent="Open at 7 am to 10 pm"
          rightContent="example@gmail.com"
        />
      </div>  
      <LogoBanner />
      <div className='sticky top-8'>
        <Navbar />
      </div>
      <SubBanner 
        title="Blogs"
        page="blogs"
      />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Blogs
