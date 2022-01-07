
import React, { useEffect, useState } from 'react'
   

function ComuseEffect() {
       const [count, setcount] = useState(0)

 //  this Hook call every render and every update    
  useEffect(() =>{       
       document.title=`you are clicked ${count}  `

     })



    return (
          <button onClick={()=>{setcount(count+1)}}>click me {count} </button>
    )
}

export default ComuseEffect
