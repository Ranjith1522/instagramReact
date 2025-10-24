import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <div>
      <div className="login-container">
        <img src='https://kite.zerodha.com/static/images/kite-logo.svg'></img>
        <h3>Login to Kite</h3>
        <input placeholder='Phone or User ID'></input>
        <input type='password' placeholder='Password'></input><br></br>
        <button className='login'>Login</button>
        <p>Forgot user ID or Password?</p>
      </div>
    </div>
  )
}

export default App
