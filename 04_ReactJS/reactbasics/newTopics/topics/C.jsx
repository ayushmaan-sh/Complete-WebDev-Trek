import React, { useContext } from 'react'
import { GreetContext } from './A'

export default function C() {

    const context = useContext(GreetContext)
    console.log(context);
    
  return (
    <div>
        <h1>Greet: {context.greet} {context.name}</h1>
    </div>
  )
}
