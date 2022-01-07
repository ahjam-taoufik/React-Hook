


import React, { useState } from 'react'




function ComuseState() {
       const [count, setCount] = useState(0)


       const incrementFive=()=>{
            setCount(count=>count+1)
            setCount(count=>count+1)
            setCount(count=>count+1)

       }

    return (
        <div> 
           <h3>Count : {count}</h3>
           <button onClick={()=>setCount(count+1)}>Click me +1  </button>
           <button onClick={()=>setCount(count-1)}>Click me -1  </button>
           <button onClick={()=>setCount(0)}>Click me initial  </button>

           <button onClick={incrementFive}>Click me  +3  </button>
         </div>
    )
}



export default ComuseState
