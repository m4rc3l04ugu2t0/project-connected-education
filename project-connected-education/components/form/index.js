import React from 'react'
import { useContext, useEffect, useState } from 'react'

import { TheContextLogin } from '/project-connected-education/src/Contexts/LoginProvider/index.js'

export const Form = () => {
  const { stateUsers, usersDispatch } = useContext(TheContextLogin)
  
  const [ email, setEmail ] = useState('')
  const [ password,  setPassword ] = useState('')
  
  
  return (
    <div>
      <input 
        type="text"
        value={ email }
        onChange={ e => setEmail(e.target.value) }
      />
      
      <input 
        type="text"
        value={ email }
        onChange={ e => setPassword(e.target.value) }
      />
      
    </div>  
  )
}