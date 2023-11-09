import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './client/pages/Home/Home';
import AboutUs from './client/pages/AboutUs';
import Contact from './client/pages/Contact';
import AiFinder from './client/pages/AiFinder';
import MyCart from './client/pages/MyCart';
import Blogs from './client/pages/Blogs';
import FlowerDetails from './client/pages/FlowerDetails';
import QuickFinder from './client/pages/QuickFinder';

import Dashboard from './admin/pages/Dashboard';
import Products from './admin/pages/Products/Products';
import Orders from './admin/pages/Orders'

import { DataProvider } from './context/DataContext'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-finder" element={<AiFinder />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/quick-finder" element={<QuickFinder />} />
            <Route path="/my-cart" element={<MyCart />} />
            <Route path="/product/:identifier" element={<FlowerDetails/>}/>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/products" element={<Products />} />
            {/*<Route path="*" element={} />*/}
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </LocalizationProvider>
    
  )
}
