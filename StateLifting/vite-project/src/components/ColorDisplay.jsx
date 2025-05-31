import React from 'react'

const ColorDisplay = ({color}) => {
  return (
    <>
    <p>Selected Color is: <b>{color}</b> 

    </p>
    <div style={{width:100, height:100, backgroundColor:color }}></div>
    </>
  )
}

export default ColorDisplay;