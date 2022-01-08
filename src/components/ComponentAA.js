import React, { useContext } from 'react'
import { CountContext } from '../App'



function ComponentAA() {
    const context = useContext(CountContext)
    return (
        <div>
             Component AA
            <button onClick={()=> context.dispatch('increment')}>increment</button>
            <button onClick={()=>context.dispatch('decrement')}>increment</button>
            <button onClick={()=>context.dispatch('reset')}>increment</button>
        </div>
    )
}

export default ComponentAA
