import { useState, useContext, createContext } from 'react'
import './App.css'
import ColorDisplay from './components/ColorDisplay'
import ColorPicker from './components/ColorPicker'
import Child1 from './components/Childrens/Child1'

//step1 : Creating Context
const UserContext = createContext();

function App() {
 
    // const [color, setColor] = useState('red')
    const [ name, setName] = useState({name: "Ravi"})


  return (
    <>
      {/* <h2>State Lifting</h2> */}

      {/* <ColorPicker color= {color} setColor= {setColor} /> */}
      {/* <ColorDisplay color={color} /> */}

      <h2> useContext Hook</h2>
      {/* step2 : Providing Context */}
      <UserContext.Provider value={(name)}>
      <Child1/>
      </UserContext.Provider>
    </>
  )
}

export default App;
export {UserContext}