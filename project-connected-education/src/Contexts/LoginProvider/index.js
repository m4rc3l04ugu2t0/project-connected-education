import React from 'react'
import { createContext, useReducer } from 'react'

import { dataUsers } from '/project-connected-education/dataBase/dataUsers/index.js'
import { reducerUsers } from '/project-connected-education/src/reducers/reducerUsers/index.js'

export const TheContextLogin = createContext()

export const LoginProvider = ({ children }) => {
  const [ stateUsers, usersDispatch ] = useReducer(dataUsers, reducerUsers)
  
  return (
    <TheContextLogin.Provider value={{ stateUsers, usersDispatch }}>
      { children }
    </TheContextLogin.Provider>
  )
}