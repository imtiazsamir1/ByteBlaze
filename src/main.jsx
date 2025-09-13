import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from 'react';
import Home from './pages/Home.jsx'
import Bloges from './pages/Bloges.jsx'
import Bookmark from './pages/Bookmark.jsx'
import MainLayout from './layout/MainLayout.jsx'




const router=createBrowserRouter([
 {
    path:'/',
    element:<MainLayout/>,
    children:[
      {
         path:'/',
    element:<Home/>,
      },
      {
        path:'/blogs',
    element:<Bloges/>,
  },
  {
    path:'/bookmarks',
    element:<Bookmark/>,
  },
    ]
  },
 

])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
