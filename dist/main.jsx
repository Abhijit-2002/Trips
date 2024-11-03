import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom';
import Header from './custom/Header.jsx';
import Footer from './custom/Footer.jsx';
import ContactUs from './components/contact/contactUs.jsx';
import Create from './create-trip/Trip.jsx'
import AskAI from './custom/AskAI.jsx';
import Home from './custom/Home.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  // {
  //   path: "/create-trip",
  //   element: <Create />,
  // },
  // // {
  // //   path: "/view-trip/:tripId",
  // //   element: <ViewTrip />,
  // // },
  // {
  //   path: "/contact-us",
  //   element: <ContactUs/>,
  // },
  // {
  //   path: "/my-trips",
  //   element: <MyTrips/>,
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header/>
    <RouterProvider router={router}/>
    <AskAI/>
    <Footer/> */}
    <Home/>
  </React.StrictMode>,
)
