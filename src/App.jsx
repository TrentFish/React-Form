import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenitcate'

function App() {

  return (
    <>
      <h1>A Form to Possibly Get a Free Something!!!</h1>
      <SignUpForm/>
      <Authenticate/>
    </>
  )
}

export default App
