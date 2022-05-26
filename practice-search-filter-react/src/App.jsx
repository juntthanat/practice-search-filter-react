import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="back-ground">
        <div className="center-container">
          <input className="search-box">
            
          </input>
        </div>
      </div>
    </div>
  )
}

export default App
