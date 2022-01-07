


import React, { useState } from 'react'


function ComuseState() {
       const [count, setCount] = useState(0)
    return (
        <div> 
           <button onClick={()=>setCount(count+1)}>Click me {count} </button>
         </div>
    )
}
export default ComuseState


// function ComuseState() {
//        const [count, setCount] = useState(0)
     

//        const countHnadler=()=>{
//               setCount(count+1)
//        }

//     return (
//         <div> 
//            <button onClick={countHnadler}>Click me {count} </button>
//          </div>
//     )
// }
// export default ComuseState
