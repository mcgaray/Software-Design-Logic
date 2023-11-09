import React, { useState } from 'react'

import Footer from '../components/Footer';
import Filterbar from '../components/Filterbar';
import FlowerCard from '../components/FlowerCard';
import flowerImage from '../assets/images/flower.png';

import TopBanner from '../components/Header/TopBanner';
import LogoBanner from '../components/Header/LogoBanner';
import Navbar from '../components/Header/Navbar';
import SubBanner from '../components/Header/SubBanner';

function AiFinder() {
  const [isPhoto, setIsPhoto] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setIsPhoto(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

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
        title="AI Finder"
        page="ai-finder"
      />
      <div className="mx-40 py-16 flex flex-col items-center gap-10">
        <div className="flex flex-col gap-5">
          <h2 className="text-5xl text-center">AI Finder</h2>
          <p className="text-center">
            Try uploading a picture below and wait for the Artificial
            Intelligence to choose the right flower for you.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-10 w-3/6">
          <label htmlFor="dropzone-file" className="overflow-hidden flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover-bg-gray-100 dark-border-gray-600 dark:hover-border-gray-500 dark:hover-bg-gray-600">
            <div
              className={ isPhoto
                  ? 'hidden'
                  : 'flex flex-col items-center justify-center pt-5 pb-6'
              }
            >
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16" >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400"> SVG, PNG, JPG, or GIF (MAX. 800x400px)</p>
            </div>
            {isPhoto && (
              <div>
                <img
                  src={isPhoto}
                  alt="Preview"
                  className="w-full h-full object-fill"
                />
              </div>
            )}
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
          {isPhoto && (
            <div className="px-10">
              <h4 className="text-2xl">Your photo is most likely a...</h4>
              <ul>
                <li>Rose</li>
                <li>Tulips</li>
              </ul>
            </div>
          )}
        </div>
        {isPhoto && (
          <div className="flex flex-col gap-10 items-center justify-center">
            <h2 className="text-5xl">Suggested Flowers</h2>
            <div className="w-1/2 flex flex-col items-center justify-center">
              <Filterbar />
            </div>
            <div className="flex justify-items-center">
              <FlowerCard
                image={flowerImage}
                title="Roses are Red"
                price="1900"
              />
              <FlowerCard
                image={flowerImage}
                title="Blue are blue"
                price="1900"
              />
              <FlowerCard
                image={flowerImage}
                title="Blue are blue"
                price="1900"
              />
            </div>
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default AiFinder
