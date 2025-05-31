import React from 'react'

const ColorPicker = ({color,setColor}) => {
  return (
    <div>
        <label > Select a Color:</label>
        <select value={color} onChange={(e)=>setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green"> Green</option>
        </select>
    </div>
  )
}

export default ColorPicker