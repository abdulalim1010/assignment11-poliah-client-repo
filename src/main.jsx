import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import router from './rout/Router.jsx'
import { RouterProvider } from 'react-router'
import AuthProveider from './components/navbar/authcontext/AuthProveider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProveider> <RouterProvider router={router} /></AuthProveider>
  </StrictMode>,
)
