import { useState } from 'react'
import Navbar from "./components/navbar"
import Passinput from "./components/manegar"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className='container w-screen h-screen'>
        <Navbar/>
        <Passinput/>
      
      </div></div>
      </>
  )
}

export default App
