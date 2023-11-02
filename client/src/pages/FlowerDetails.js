import React from 'react'
import Header from '../components/Header'
import FlowerCard from '../components/FlowerCard'
import flowerImage from '../assets/images/flower.png'
import Button from '../components/Button'
import Footer from '../components/Footer'

const FlowerDetails = (props) => {
  return (
    <div>
      <div>
        <Header title="Flower Details" />
      </div>
      <div className="mx-40 py-10 flex flex-col gap-10">
        <div className="flex flex-row justify-center gap-10">
          <div>
            <img
              className="h-96 w-96 overflow-hidden"
              src={flowerImage}
              alt={props.alt}
            />
          </div>
          <div className="flex flex-col p-1 gap-3">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <h1 className="text-4xl">Roses are Red</h1>
                <p className="text-3xl">₱1900</p>
              </div>
              <p className="text-xl">
                Ut amet voluptate eiusmod ullamco deserunt ex nostrud aute
                consequat sunt. Qui in do reprehenderit enim fugiat eu aute
                ullamco labore.
              </p>
            </div>
            <form>
              <p>
                <label>Schedule Pick Up Date and Time</label>
              </p>
              <p className="">
                <label>Add Custom Message</label>
              </p>
              <textarea id="message" rows="4" name="message" cols="50" />
            </form>
            <Button title="Add to cart" />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3">
          <h2 className="text-3xl">You may also like...</h2>
          <div className="flex flex-row justify-between items-center">
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
      </div>
      <Footer />
    </div>
  )
}

export default FlowerDetails
