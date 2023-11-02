import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import GoogleMaps from '../components/GoogleMaps'
import Button from '../components/Button'

const Contact = () => {
  return (
    <div>
      <div>
        <Header title="Contact Us" page="Contact Us" />
      </div>
      <div className="mx-40 py-16 gap-10 flex flex-row justify-center items-center flex-wrap">
        <IconCard title="Call us: +63 123 123 1234" icon={<LocalPhoneIcon />} />
        <IconCard
          title="Open at from: Monday - Sunday, 
7:00 am - 10:00 pm"
          icon={<AccessTimeIcon />}
        />
        <IconCard
          title="Visit us: Stall#3 J. Chanyungco St., Marikina City, 1800 Metro Manila, Marikina City, Philippines"
          icon={<LocationOnIcon />}
        />
        <IconCard
          title="Email us: manilaflowershop@yahoo.com "
          icon={<MailOutlineIcon />}
        />
      </div>
      <div className="flex pb-10 flex-col gap-10 justify-center items-center">
        <h2 className="text-4xl">Our Location</h2>
        <GoogleMaps />
      </div>
      <div className="mx-40 flex pb-10 flex-col gap-10 justify-center items-center w-1/2">
        <h2 className="text-4xl">Lets Talk!</h2>
        <form>
          <div>
            <h4>Full Name</h4>
            <input type="text" id="name" name="name" />
            <h4>Email</h4>
            <input type="text" id="email" name="email" />
          </div>
          <h4>Message</h4>
          <textarea id="message" name="message" rows="4" cols="50" />
          <Button title="Sumbit" />
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact

const IconCard = (props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 h-72 w-72 shadow-xl">
      <div className="scale-[2]">{props.icon}</div>
      <p className="text-center">{props.title}</p>
    </div>
  )
}
