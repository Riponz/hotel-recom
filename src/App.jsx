import { useState } from 'react'
import './App.css'
import Landing from './Pages/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' w-full h-[100vh] bg-hero bg-cover'>
    <Landing/>
    </div>
    </>
  )
}

export default App
