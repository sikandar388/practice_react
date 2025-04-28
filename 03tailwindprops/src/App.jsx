import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from '../components/componenet1'

function App() {
  const [count, setCount] = useState(0)
  const myObj= {
    k: "hola",
    o: 'amigo'
  }

  return (
    <>
      <h1 className='bg-green-400 rounded-xl text-black p-4'>Hello React</h1>
      <Card channel='its my channel' btnText='Visit Us' userName='Nick' object={myObj}/>
      <Card userName='Joans' />

    </>
  )
}

export default App
