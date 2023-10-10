import React from 'react'
import Home from './pages/Home'
import Gallery from './pages/Gallery/Gallery'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Admin from './pages/Admin/Admin'
import ContactForm from './sections/ContactForm'
import AboutUsSection from './sections/AboutUsSection/AboutUsSection'
import FaqSection from './sections/FaqSection'
import ContactUs from './pages/ContactUs'
import OrderInstruction from './pages/Order/OrderInstruction'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/Fonts.css'
import BeforeAndAfter from './pages/BeforeAndAfter/BeforeAndAfter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/admin',
    element: <Admin />,
    
  },
  {
    path: '/become-our-client',
    element: <OrderInstruction />
  },
  {
    path: '/before-and-after',
    element: <BeforeAndAfter />
  }
])


function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App

