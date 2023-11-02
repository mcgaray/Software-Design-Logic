import React from 'react'
import Header from '../components/Header'
import aboutus from '../assets/images/aboutus.png'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <div>
      <div>
        <Header title="About Us" />
      </div>
      <div className="mx-40 py-10 flex flex-col justify-center items-center gap-10">
        <h1 className="text-5xl">The Lovely & Manila</h1>
        <img src={aboutus} alt="" />
        <p className="text-lg">
          In 1981, Lovely&Manila Flower Shop started doing business, they
          started with just 2 employees, naming the founder Benjamin Arenas and
          his wife Virginia Arenas. The two started by having their shop on
          carts that would be pushed all around Marikina City, as time went on
          they were able to occupy a small space near Freedom Park in Marikina,
          until today where they are now located near Marikina City jail were
          their shop is now managed by their youngest daughter Lovely Arenas and
          has now 7 employees working for them. 
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default AboutUs
