import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <div className="login-container">
        <div>
          <img src='https://kite.zerodha.com/static/images/kite-logo.svg'></img>
        </div>
        <div>
          <h3>Login to Kite</h3>
        </div>
        <div>
          <input placeholder='Phone or User ID'></input>
        </div>
        <div>
          <input type='password' placeholder='Password'></input>
        </div>
        <div>
          <button className='login'>Login</button>
        </div>
        <div>
          <p>Forgot user ID or Password?</p>
        </div>

      </div>
    </>
  )
}

export default App
