import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="dashboard-body">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      <h1>Mocca Invitation</h1>
      <div className="card">
        <Link to="/template1" className="button">
          Go to Template 1
        </Link>
        <p>
          This supposed to be the dashboard, but I will make the template first kekw
        </p>
      </div>
      </div>
    </>
  )
}

export default App
