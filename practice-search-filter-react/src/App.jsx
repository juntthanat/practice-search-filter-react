import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const testing = [
    "num1",
    "num2",
    "num3"
  ];



  return (
    <div className="App">
      <div className="back-ground">
        <div className="center-container">
          <input className="search-box" placeholder='What do you want to search?'></input>
          <div className="result-container">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
