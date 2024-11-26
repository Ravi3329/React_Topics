import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  function Addvalue(){
    setCount(count+1)
    console.log(count);
  }

  function Removevalue(){
    setCount(count-1)
    console.log(count)
  }

  return (
    <>

      <div>
        <h1>React Counter</h1>
        <h2>Counter Value:{count}</h2>
        <button onClick={Addvalue}>Add value</button>
        {"     "}
        <button onClick={Removevalue}>Remove Value</button>
        <p>Footer:{count}</p>
      </div>
    </>
  )
}

export default App
