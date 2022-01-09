import  { useState } from 'react'

function useCounter(initialCount=0,value=1) {
    const [count, setcount] = useState(initialCount)

    const increment=()=>{
        setcount(count+value)
    }
    const decrement=()=>{
        setcount(count-value)
    }

    const reset=()=>{
        setcount(initialCount)
    }
    
    return [count,increment,decrement,reset]
}

export default useCounter
