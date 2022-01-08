import React, { useContext } from 'react'
import { CountContext } from '../App'
import ComponentAA from './ComponentAA'



function ComponentA() {
    const context = useContext(CountContext)
   
    return (
        <div>Component A 
            <button onClick={()=> context.dispatch('increment')}>increment</button>
           <button onClick={()=>context.dispatch('decrement')}>increment</button>
          <button onClick={()=>context.dispatch('reset')}>increment</button>

          <ComponentAA/>
        </div>
    )
}

export default ComponentA
