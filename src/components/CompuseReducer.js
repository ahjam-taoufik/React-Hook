import React, { useReducer } from 'react'


const initialCount= {
    countValue:0
}
const Reducer=(count, action)=>{
    switch (action.type) {
        case 'increment':
            return {countValue:count.countValue+action.val}
        case 'decrement':
            return {countValue:count.countValue-action.val}
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
            <button onClick={()=>action({type:'increment',val:1})}>increment 1</button>
            <button onClick={()=>action({type:'decrement',val:1})}>decrement 1</button>

            <button onClick={()=>action({type:'increment',val:2})}>increment 2</button>
            <button onClick={()=>action({type:'decrement',val:2})}>decrement 2</button>
            <button onClick={()=>action({type:'reset'})}>Reset</button>
        </div>
    )
}

export default CompuseReducer
