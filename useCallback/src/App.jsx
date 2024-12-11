import { useState,memo, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const inputFunction = useCallback(()=>{
      console.log("Hi There");
  })

  return <div>
      <ButtonComponent inputFunction={inputFunction}/>
      <button onClick = {()=>{
        setCount (count+1);
      }}>Click me{count}</button>
    </div>
  
}

const ButtonComponent = memo((inputFunction)=>{
  // console.log("Child Render")

  return <div>
    <button>Button clicked</button>
  </div>
})

export default App;
