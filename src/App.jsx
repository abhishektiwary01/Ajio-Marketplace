import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './assets/pages/Home';
import HomeLuxe from './assets/pages/HomeLuxe'; // Assuming you have this component
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
