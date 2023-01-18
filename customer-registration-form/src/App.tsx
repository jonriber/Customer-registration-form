import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='form'>
        <h2>Registration</h2>
        <br/>
        <h3>Name:</h3>
        <input type={"text"} placeholder='Name'/>
        <br/>
        <h3>Age:</h3>
        <input type={"number"} placeholder='Age'/>
        <br/>
        <h3>CPF:</h3>
        <input type={"number"} placeholder='CPF'/>
        <br/>
        <h3>Country:</h3>
        <input type={"text"} placeholder='Country:'/>
        <br/>
        <h3>CEP:</h3>
        <input type={"number"} placeholder='CEP:'/>
        <br/>
        <h3>Street:</h3>
        <input type={"text"} placeholder='Street:'/>
        <br/>
        <h3>Number:</h3>
        <input type={"number"} placeholder='Number:'/>
        <br/>
        <h3>Complement:</h3>
        <input type={"text"} placeholder='Complement:'/>
        <br/>
        <h3>Email:</h3>
        <input type={"email"} placeholder='Email:'/>
      </div>
    </div>
  )
}

export default App
