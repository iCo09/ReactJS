import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, RahulCounter] = useState(9)
  
  //let counter = 15;

  const addValue = () => {
    //console.log("clicked", counter);
    if(counter == 20){
      RahulCounter = 20
    }
    else{
      RahulCounter(counter + 1);
    }
    //counter = counter + 1; 
  }

  const removeValue = () => {
    if(counter == 0){
      RahulCounter = 0
    }
    else{
      RahulCounter(counter - 1);
    }
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}
    >Add Value</button>
    <br />
    <button
    onClick={removeValue}
    >Decrease Value</button>
    </>
  )
}

export default App
