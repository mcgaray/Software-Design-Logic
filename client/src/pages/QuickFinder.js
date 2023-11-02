import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Filterbar from '../components/Filterbar'

const QuickFinder = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="mx-40 py-16 gap-10 flex flex-col items-center">
        <h1 className="text-5xl">Quick Finder</h1>
        <p className="text-center">
          Quick Finder is your ultimate tool for effortlessly narrowing down our
          vast selection of stunning flower products. Say goodbye to the
          frustration of scrolling through endless options and hello to a
          seamless and tailored floral shopping experience.
        </p>
        <Filterbar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default QuickFinder
