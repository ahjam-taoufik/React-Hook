


import React, { useState } from 'react'




function ComuseState() {
       const [person, setperson] = useState({firstName:'',lastName:''})

      
const handlerFirstName=(e)=>{setperson({...person,firstName:e.target.value})}
const handlerLastName=(e)=>{setperson({...person,lastName:e.target.value})}



    return (
        
        <div> 

           <input type='text' value={person.firstName} onChange={handlerFirstName} placeholder='first name'  />
           <input type='text' value={person.lastName} onChange={handlerLastName} placeholder='last name'  />
           <h3>first {person.firstName} </h3>
           <h3>last  {person.lastName} </h3>
         
         </div>
    )
}



export default ComuseState
