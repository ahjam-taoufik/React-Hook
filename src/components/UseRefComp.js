import React, { useEffect, useRef, useState } from 'react'

 // ======exercice2 =====================
function UseRefComp() {
   const Ref1 = useRef()

   const [count, setcount] = useState(0)
 

useEffect(() => {
    Ref1.current= setInterval(() => {
        setcount(count+1) 
    }, 1000)
    return()=>{
        clearInterval(Ref1.current)
    }
    
},[count])
    return (
        <div>
            <p>{count}</p>
             <button  onClick={()=> clearInterval(Ref1.current)}>stop timer</button>
        </div>
    )
}

export default UseRefComp



// export default UseRefComp
 // ======exercice1 =====================
// function UseRefComp() {

//     const inputRef1 = useRef()

// useEffect(() => {
//      inputRef1.current.focus()
    
// })
//     return (
//         <div>
//               <input ref={inputRef1}  />
//         </div>
//     )
// }


// export default UseRefComp
