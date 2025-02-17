import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import routes from './routes'
import About from './pages/about'
import Gallery from './pages/gallery'
import Projects from './pages/projects'
import MyAI from './pages/myAI'

function App() {
  const [count, setCount] = useState(0)

  const appRoutes = [
    {path: routes.main.about, element: <About /> },
    {path: routes.main.gallery, element: <Gallery /> },
    {path: routes.main.projects, element: <Projects /> },
    {path: routes.main.myAI, element: <MyAI /> },
  ]

  return (
    <BrowserRouter>
      <Routes>

      </Routes>
    </BrowserRouter>
  )
}

export default App
