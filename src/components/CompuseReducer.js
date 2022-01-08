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
    const [count1, action1] = useReducer(Reducer, initialCount)
    const [count2, action2] = useReducer(Reducer, initialCount)
    return (
        <div>
             <p>{count1.countValue}</p>
            <button onClick={()=>action1({type:'increment',val:1})}>increment 1</button>
            <button onClick={()=>action1({type:'decrement',val:1})}>decrement 1</button>
            <button onClick={()=>action1({type:'reset'})}>reset</button>
            <hr/>

            <p>{count2.countValue}</p>
            <button onClick={()=>action2({type:'increment',val:10})}>increment 10</button>
            <button onClick={()=>action2({type:'decrement',val:10})}>decrement 10</button>
            <button onClick={()=>action2({type:'reset'})}>reset</button>
  

        </div>
    )
}

export default CompuseReducer
