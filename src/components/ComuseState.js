


import React, { useState } from 'react'




function ComuseState() {
       const [numbers, setNumber] = useState([])


const addNumber=()=>{
    setNumber([...numbers,{id:numbers.length, items:Math.floor(Math.random()*10)}])
}



    return (
        
        <div> 
               <button onClick={addNumber}>add number</button>
               <ul>
                   {numbers.map((number)=> <li key={number.id}> {number.items}</li>    )}
               </ul>
        </div>
    )
}



export default ComuseState
