import React, { useReducer } from 'react'


const initialCount= {
    countValue:0
}
const Reducer=(count, action)=>{
    switch (action.type) {
        case 'increment':
            return {countValue:count.countValue+1}
        case 'decrement':
            return {countValue:count.countValue-1}
        case 'reset':
            return initialCount
        default:
           return count;
    }
}


function CompuseReducer() {
    const [count, action] = useReducer(Reducer, initialCount)
    return (
        <div>
             <p>{count.countValue}</p>
            <button onClick={()=>action({type:'increment'})}>increment</button>
            <button onClick={()=>action({type:'decrement'})}>decrement</button>
            <button onClick={()=>action({type:'reset'})}>Reset</button>
        </div>
    )
}

export default CompuseReducer
