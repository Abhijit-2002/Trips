import React from 'react';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import ContactUs from './Components/contactUs.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Hero from './Components/Hero.jsx';
import ReactDOM from 'react-dom/client';
import "./index.css"

// Create the router with routes
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Hero />
        <App />
        <Footer />
      </>
    ),
  },
  {
    path: '/create-trip',
    element: <App />,
  },
  {
    path: '/contact-us',
    element: <ContactUs />,
  },
  // Uncomment and add other routes as needed
  // {
  //   path: '/create-trip',
  //   element: <Create />,
  // },
  // {
  //   path: '/view-trip/:tripId',
  //   element: <ViewTrip />,
  // },
  // {
  //   path: '/my-trips',
  //   element: <MyTrips />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
      
  </StrictMode>
);
