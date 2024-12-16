import { useState } from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Layout from './Layout'
import Contact from './components/Contact/Contact'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Projects from './components/Projects/Projects'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='projects' element={<Projects/>}/>
      </Route>
    )
  )
  return (
      <RouterProvider router={router} />
  )
}

export default App
