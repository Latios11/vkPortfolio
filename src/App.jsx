import { useState } from 'react'
import Home from './components/Home/Home'
import Layout from './Layout'
import Contact from './components/Contact/Contact'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Projects from './components/Projects/Projects'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
<<<<<<< HEAD
import {UserProvider} from "./components/UserContext"
=======
>>>>>>> 5dc0c6be81e034a5d5b99e12a4bbe5baf79109c7

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='signin' element={<SignIn/>} />
      </Route>
    )
  )
  return (
<<<<<<< HEAD
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
=======
      <RouterProvider router={router} />
>>>>>>> 5dc0c6be81e034a5d5b99e12a4bbe5baf79109c7
  )
}

export default App
