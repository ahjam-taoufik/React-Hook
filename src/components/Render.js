import React, { useState } from 'react'


const initialState=[ {id:1,Fname:'toto1',Lname:'toto1'} ]
   
  

function Render() {
 const [persons, setperson] = useState(initialState)
 
 console.log(persons);
 
 const handlerPerson=()=>{

const persons2=[...persons,{id:2,Fname:'ttit2',Lname:'titi2'}]
setperson(persons2)
 
}

    return (
        <div>
              <button onClick={handlerPerson}>Add Person</button>
               <ul>
                  {persons.map(person=><li key={person.id}>{person.Fname}</li>)}
               </ul>
            
        </div>
    )
}

export default Render
