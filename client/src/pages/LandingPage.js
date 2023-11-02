import React from 'react'
import TopBanner from '../components/TopBanner'
import LogoBanner from '../components/LogoBanner'
import Button from '../components/Button'
import Map from '../components/Map'
import OcassionCard from '../components/OcassionCard'
import FlowerCard from '../components/FlowerCard'
import flowerImage from '../assets/images/flower.png'
import ocassionImage from '../assets/images/ocassion_one.png'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import BlogPostsCard from '../components/BlogPostsCard'
import blogPostImage from '../assets/images/blogpost_one.png'
import Footer from '../components/Footer'

const Hero = () => {
  return (
    <div className="mx-40 w-auto py-32 gap-8 flex flex-col text-white">
      <div className="w-3/5 flex flex-col gap-4">
        <h1 className="text-6xl">
          Unleash the Magic of AI to Discover Your Perfect Flower!
        </h1>
        <p className="text-2xl">
          Simply click the button below to explore a world of blossoms with our
          cutting-edge image recognition technology.
        </p>
      </div>
      <div className="">
        <Button title="Search Flower" />
      </div>
    </div>
  )
}

const Collections = (props) => {
  const ocassions = [
    { title: 'Love & Romance', image: '' },
    { title: 'Boquets', image: '' },
    { title: 'Inagurals', image: '' },
    { title: 'Condolences', image: '' },
    { title: 'Vase', image: '' },
  ]

  const mapped = ocassions.map((ocassion) => (
    <OcassionCard title={ocassion.title} image={ocassionImage} />
  ))

  return (
    <div className="mx-40 flex flex-col justify-center py-16 items-center">
      <div className="text-6xl pb-16">
        <h1 className="text-black">Ocassions</h1>
      </div>
      <div className="mx-40 basis-2/6 flex flex-wrap justify-center gap-3 items-center">
        {mapped}
      </div>
    </div>
  )
}

const OurFlowers = () => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="flex flex-col justify-center py-20 items-center">
      <div className="text-6xl">
        <h1 className="text-black">Our Flowers</h1>
      </div>
      <div className="py-8 justify-center items-center flex flex-row gap-3">
        <button
          onClick={() => {
            setIsClicked(false)
          }}
          className={isClicked ? '' : 'fonst-bold'}
        >
          FEATURED
        </button>
        <p className="text-black">|</p>
        <button
          onClick={() => {
            setIsClicked(true)
          }}
          className={isClicked ? 'font-bold' : ''}
        >
          RECENT
        </button>
      </div>
      {isClicked ? (
        <div className="flex flex-wrap justify-center items-center flex-row gap-3">
          <FlowerCard image={flowerImage} title="Roses are Red" price="1900" />
          <FlowerCard image={flowerImage} title="Blue are blue" price="1900" />
          <FlowerCard image={flowerImage} title="Blue are blue" price="1900" />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center flex-row gap-3">
          <FlowerCard image={flowerImage} title="Blue are blue" price="1900" />
          <FlowerCard image={flowerImage} title="Blue are blue" price="1900" />
          <FlowerCard image={flowerImage} title="Blue are blue" price="1900" />
          <FlowerCard image={flowerImage} title="Blue are blue" price="1900" />
        </div>
      )}
    </div>
  )
}

const More = () => {
  return (
    <div className="mx-40 p-16 flex gap-8 flex-col justify-content items-center">
      <h3 className="text-xl text-center text-white">
        "Brighten your world with the elegance of our flower arrangements; each
        bloom tells a story of beauty and emotion. Let our creations bring a
        touch of nature's wonder into your life."
      </h3>
      <Button title="More Flowers" />
    </div>
  )
}

const RecentBlogs = (props) => {
  return (
    <div className="flex flex-col justify-center py-20 items-center">
      <div className="text-6xl pb-16">
        <h1 className="text-black">Recent Activities</h1>
      </div>
      <div>
        <BlogPostsCard
          image={blogPostImage}
          title="Hello Marikina 2022"
          date="September 20, 2023"
          description="Dolore labore laborum consequat incididunt deserunt. Amet pariatur excepteur veniam nulla."
        />
      </div>
    </div>
  )
}

const LandingPage = () => {
  return (
    <div className="">
      <div className="sticky top-0">
        <TopBanner
          leftContent="+63 123 123 1234"
          centerContent="Open at 7 am to 10 pm"
          rightContent="example@gmail.com"
        />
      </div>
      <div>
        <LogoBanner />
      </div>
      <div className="sticky top-8">
        <Navbar />
      </div>

      <div className="bg-center bg-cover bg-no-repeat bg-hero-img">
        <Hero />
      </div>

      <div>
        <Collections />
      </div>

      <div className="bg-location-img bg-cover bg-no-repeat bg-center">
        <Map />
      </div>

      <div>
        <OurFlowers />
      </div>

      <div className="bg-more-img bg-cover bg-no-repeat bg-center">
        <More />
      </div>

      <div>
        <RecentBlogs />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage
