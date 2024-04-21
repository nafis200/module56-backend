import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Apps from './Apps';
import AddCoffee from './AddCoffee';
import UpdateCoffee from './UpdateCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Apps></Apps>,
    loader: ()=> fetch('http://localhost:5005/coffee')
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
     path:"/updateCoffee/:id",
     element: <UpdateCoffee></UpdateCoffee>,
     loader : ({params})=> fetch(`http://localhost:5005/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)