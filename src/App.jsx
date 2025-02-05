import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
  <h1 class="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    Vocapraya website!
  </h1>
    </>
  )
}

export default App
