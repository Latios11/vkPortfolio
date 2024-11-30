import { useState } from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Layout from './Layout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Route>
    )
  )
  return (
      <RouterProvider router={router} />
  )
}

export default App
