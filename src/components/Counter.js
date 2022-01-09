import React from 'react'
import useCounter from '../Hooks/useCounter'


function Counter() {
    const [count,increment,decrement,reset]=useCounter()



    return (
        <div>
             <p>{count}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Counter
