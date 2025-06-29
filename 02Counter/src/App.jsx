import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter + 1 > 20) {
      console.log("Value cannot go beyond 20.")
    }
    else{
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter - 1 < 0) {
      console.log("Value must be positive.")
    }
    else{
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
