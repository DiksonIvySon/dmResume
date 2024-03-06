import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'

import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import './index.css'
import HomePage from './pages/HomePage.jsx';
import ResumePage from './pages/ResumePage.jsx'
import TemplatePage from './pages/TemplatePage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/templatesPage",
    element: <TemplatePage />,
  },
  {
    path: "/resumePage",
    element: <ResumePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
