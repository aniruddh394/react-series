import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const arr = [1, 2, 3]

  return (
    <>
      <Card userName="aniruddh" age="15" array={arr} />
      <Card />
    </>
  )
}

export default App
