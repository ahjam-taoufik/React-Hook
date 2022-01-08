import React, { useReducer } from 'react'


const initialCount= {
    countValue1:0,
    countValue2:10

}
const Reducer=(count, action)=>{
    switch (action.type) {
        case 'increment1':
            return {...count,countValue1:count.countValue1+action.val}
        case 'decrement1':
            return {...count,countValue1:count.countValue1-action.val}

        case 'increment2':
            return {...count,countValue2:count.countValue2+action.val}
        case 'decrement2':
            return {...count,countValue2:count.countValue2-action.val}


        case 'reset1':
            return {...count,countValue1:0}
        case 'reset2':
            return {...count,countValue2:0}
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
             <p>{count.countValue1}</p>
            <button onClick={()=>action({type:'increment1',val:1})}>increment 1</button>
            <button onClick={()=>action({type:'decrement1',val:1})}>decrement 1</button>

            <button onClick={()=>action({type:'increment1',val:2})}>increment 2</button>
            <button onClick={()=>action({type:'decrement1',val:2})}>decrement 2</button>
            <button onClick={()=>action({type:'reset1'})}>Reset1</button>
            <hr/>

            <p>{count.countValue2}</p>
            <button onClick={()=>action({type:'increment2',val:10})}>increment 10</button>
            <button onClick={()=>action({type:'decrement2',val:10})}>decrement 10</button>
            <button onClick={()=>action({type:'reset2'})}>Reset2</button>

            <hr/>
            <button onClick={()=>action({type:'reset'})}>Reset All</button>

        </div>
    )
}

export default CompuseReducer
