import React, { useMemo, useState } from 'react'


function CompuseMemo() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)


const handlerCount1=()=>{
    setCount1(count1+1)
}
    

const handlerCount2=()=>{
    setCount2(count2+1)
}
    
const Even=useMemo(() =>{
    let i=0
    while (i<900000000)i++
    return count1 % 2 ===0
}, [count1]) 



    return (
        <div>
             <p>{count1}</p>
             <p>{Even?'Even':'Odd'}</p>
             <button onClick={handlerCount1}>count1</button>
             <p>{count2}</p>
             <button onClick={handlerCount2}>count2</button>
        </div>
    )
}

export default CompuseMemo
