import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import AiFinder from './pages/AiFinder'
import MyCart from './pages/MyCart'
import FlowerDetails from './pages/FlowerDetails'
import Blogs from './pages/Blogs'
import QuickFinder from './pages/QuickFinder'
import Dashboard from './pages/admin/Dashboard'
import Products from './pages/admin/Products'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ai-finder" element={<AiFinder />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/quick-finder" element={<QuickFinder />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/flower-details" element={<FlowerDetails />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/products" element={<Products />} />
        {/*<Route path="*" element={} />*/}
      </Routes>
    </BrowserRouter>
  )
}
