import React, { createContext } from 'react'
import B from './B'

const GreetContext = createContext()

export default function () {
    const greet = "Hello"
    const name = "Ayushmaan"
  return (
    <div>
        <GreetContext.Provider value={{greet, name}}>
        <B />
        </GreetContext.Provider>
    </div>
  )
}

export {GreetContext}