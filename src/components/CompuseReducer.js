import React, { useReducer } from 'react'


const initialState=0
const Reducer=(count, action)=>{
    switch (action) {
        case 'increment':
            return count+1
        case 'decrement':
            return count-1
        case 'reset':
            return initialState
        default:
           return count;
    }

}

function CompuseReducer() {
    const [count, dispatch] = useReducer(Reducer, initialState)
    return (
        <div>
             <p>{count}</p>
            <button onClick={()=>dispatch('increment')}>increment</button>
            <button onClick={()=>dispatch('decrement')}>decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompuseReducer
