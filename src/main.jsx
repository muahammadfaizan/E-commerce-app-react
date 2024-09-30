// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import VerifyUser from './pages/VerifyUser.jsx'


const router = createBrowserRouter([
  {
    path : '',
    element : <Layout />,
    children : [
      {
        path : 'home',
        element : <Home />
      },
      {
        path : 'verifyuser',
        element : <VerifyUser />
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <Layout />
  </RouterProvider>
)
