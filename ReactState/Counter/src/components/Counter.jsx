import React, { useEffect, useState } from 'react'

// let count = 0;

const Counter = () => {

let [count, setCount] = useState(0);
let [multiply, setMultiply] = useState(5)

  useEffect(()=>{
    console.log("useEffect executed")
  },[])

  function handleDecrease(){
    console.log(count)
    // return count--;
    setCount(count - 1);
    
  }
  // function handleIncrease(){
  //   console.log(count)
    // return count++;
    
  //   setCount(count + 1);
    
  // }


  return (
    <>

    <div>Counter App</div>
    <button onClick={handleDecrease}>-</button>
    <p>The value of Count is : {count} </p>
    <button onClick={()=>{
      setCount(count+1);
      console.log(count)
    }} >+</button>
    <br />
    <p>Multiplied Value: {multiply}</p>
    <button onClick={()=>{
      setMultiply(2*2);
      console.log(multiply)
    }} >*</button>

    </>
  )
}

export default Counter