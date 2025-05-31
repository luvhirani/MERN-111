import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../App'

const Child3 = () => {
    //step 3 - Use Provided Context
    const user = useContext(UserContext)
    console.log(user)
  return (
    <div>
        My name is : {user.name}
    </div>
  )
}

export default Child3