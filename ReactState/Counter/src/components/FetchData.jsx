import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = () => {

    const [data, setData] = useState([])

   const getData = async() =>{
  
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/todos")
        console.log(res.json())
        setData(res)
    }
    catch(error){
        console.log(error)
    }
    }

    useEffect(()=>{
      getData()
      console.log("Use Effect Called")
    },[])

    //Type 1
    // useEffect(()=>{
    //   console.log("Runs on every render")
    // })

  //Type 2
    // useEffect(()=>{
    //   console.log("Runs on only First Render")
    // },[])

    //Type 3
    // useEffect(()=>{
    //   console.log("Runs on only everytime when count state is updated")
    // },[count])

     //Type 4
    //  useEffect(()=>{
    //   console.log("Runs on only everytime when count or data state is updated")
    // },[count,data])

    //Type 5
    //  useEffect(()=>{

    //   return()=>{

    //     console.log("Cleanup Function / Unmounting")
    //   }
    // },[])

  return (
    <div>FetchData</div>
  )
}

export default FetchData