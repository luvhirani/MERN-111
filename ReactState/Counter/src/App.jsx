import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Logout from './components/Logout'

function App() {
  
  // let [loggedIn, setLoggedIn] = useState(true)
  
  if (loggedIn) {

    <Login/>
  }
  else{
    // <button>Login</button>
    <Logout/>
  } 
  return (
    <>
  <div>
    {/* { loggedIn && <Logout/> }  */}
  </div>
    {/* {loggedIn ? <Logout/> : <Login/>} */}
    {/* {loggedIn ?  
    <div>
        <button>Logout</button>
    </div> 
    : 
    <div>
        <button>Login</button>
    </div>} */}

    {/* const loggedIn = true; */}

    </>
  )
}

export default App
