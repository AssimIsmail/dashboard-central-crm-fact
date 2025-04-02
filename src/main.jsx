import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { AuthProvider } from './features/auth/context/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from './config/router'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
</React.StrictMode>,
)