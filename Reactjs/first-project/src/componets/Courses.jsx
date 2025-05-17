import React from 'react'
import './Courses.css'

const Courses = (props) => {

  return (
   
   <div>
     <div className='container'>
    <p className='para'>{props.name}</p>
    <img className='img' src={props.image}   />
    <p>{props.desc} </p>
    
    </div>
    <div>

    </div>
   </div>
  )
}

export default Courses;