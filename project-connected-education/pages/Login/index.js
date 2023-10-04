import React from 'react'

import { Form } from '/project-connected-education/components/form/index.js'
import { LoginProvider } from '/project-connected-education/src/Contexts/LoginProvider/index.js'

export const Login = () => {
  return (
    <LoginProvider>
      <Form />
    </LoginProvider> 
  )
}