
import React, { useEffect, useState } from 'react'
   

function ComuseEffect() {
       const [X, setX] = useState(0)
       const [Y, setY] = useState(0)

 
const mousePosition=(e)=>{
    console.log('mouse event');
    setX(e.clientX)
    setY(e.clientY)
}      

  useEffect(() =>{  
      console.log('use effect called');
      document.addEventListener('mousemove',mousePosition)   
     return ()=>{
        document.removeEventListener('mousemove',mousePosition)
     }

     },[])




    return (
         <>
             X: {X} <br/> Y: {Y}
         </>
    )
}

export default ComuseEffect
