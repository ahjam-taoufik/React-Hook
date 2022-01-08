import React, { useCallback, useState } from 'react'
import Button from './Button'
import Display from './Display'
import Title from './Title'


function ParentComponent() {
    const [count, setcount] = useState(0)
    const [age, setAge] = useState(0)



const handlerCount=useCallback(()=>{
    setcount(count+1)
},[count])   

const handlerAge=useCallback(()=>{
    setAge(age+1)
},[age])  

    return (
        <div>
            <Title>useCallBack</Title>
            <Display text='Count' payload={count} />
            <Button HandlerClick={handlerCount}>Increment Count</Button>
            <Display text='Age' payload={age} />
            <Button HandlerClick={handlerAge}>Increment age</Button>
            {/* <h1>useCallBack</h1> */}
            {/* <p> Count: {count} </p> */}
            {/* <button onClick={handlerCount}>Increment Count</button> */}
            {/* <p> Age: {age} </p> */}
            {/* <button onClick={handlerAge}>Increment age</button> */}
        </div>
    )
}

export default ParentComponent
