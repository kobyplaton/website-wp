import React from 'react'
import Home from './pages/Home'
import Gallery from './pages/Gallery/Gallery'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Admin from './pages/Admin/Admin'
import ContactForm from './sections/ContactForm'
import AboutUsSection from './sections/AboutUsSection/AboutUsSection'
import FaqSection from './sections/FaqSection'
import ContactUs from './pages/ContactUs'
import OrderInstruction from './pages/Order/OrderInstruction'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/Fonts.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/home/message-us',
        element: <ContactForm />,
      },
      {
        path: '/home/about-us',
        element: <AboutUsSection />
      },
      {
        path: '/home/faq',
        element: <FaqSection />
      },
      {
        path: '/home/contact-us',
        element: <ContactUs />
      }
    ]
  },
  {
    path: '/gallery',
    element: <Gallery />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/order',
    element: <OrderInstruction />
  }
])


function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App

