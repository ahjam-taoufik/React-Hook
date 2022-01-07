
import React, { useEffect, useState } from 'react'
   

function ComuseEffect() {
       const [count1, setcount] = useState(0)
       const [count2, setcount2] = useState(0)

 //  this Hook call every render and every update only count1 
  useEffect(() =>{  
      console.log('use effect rendering');     
       document.title=`you are clicked ${count1}  `

     },[])



    return (
         <>
             
          <button onClick={()=>{setcount(count1+1)}}>click me {count1} </button>
          <button onClick={()=>{setcount2(count2+1)}}>click me2 {count2} </button>
         </>
    )
}

export default ComuseEffect
