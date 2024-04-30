import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './component/AddCoffee';
import UpdateCoffee from './component/UpdateCoffee';
import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Users from './component/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffee-store-server-pink-alpha.vercel.app/coffee')
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`https://coffee-store-server-pink-alpha.vercel.app/coffee/${params.id}`)
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch('https://coffee-store-server-pink-alpha.vercel.app/user')
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
