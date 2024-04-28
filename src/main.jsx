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
import Signup from './Signup';
import Authprovider from './Authprovider';
import Users from './Users';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import User2 from './User2';


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
  },
  {
    path:'/signup',
    element: <Signup></Signup>
  },
  {
     path:'/user',
     element:<Users></Users>,
     loader: ()=> fetch('http://localhost:5005/user')
  },
  {
     path:'/user2',
     element:<User2></User2>,
     loader: ()=> fetch('http://localhost:5005/user')
  }

]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <Authprovider>
     <RouterProvider router={router} />
     </Authprovider>
    </QueryClientProvider> 
  </React.StrictMode>,
)

