import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './assets/pages/Home';
import HomeLuxe from './assets/pages/HomeLuxe'; // Assuming you have this component
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TrendingPage from './assets/pages/TrendingPage';
import OfferDetails from './assets/pages/OfferDetails';
import CustomerCare from './assets/pages/CustomerCare';
// import Loginpage from './assets/pages/LoginPage';

// Corrected router definition
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/luxe",
    element: <HomeLuxe />,
  },
  {
    path: "/trendingpage",
    element: <TrendingPage></TrendingPage>
  },

  {
    path: "/offers",
    element: <OfferDetails></OfferDetails>
  },
  {
    path: "/CustomerCare",
    element: <CustomerCare/>
  },

])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
