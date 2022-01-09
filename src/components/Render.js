import React, { useState } from 'react'


const initialState=['taoufik','ali']

function Render() {
 const [persons, setperson] = useState(initialState)
console.log(persons);

const handlerPerson=()=>{

 const  newpersons=[...persons]
   newpersons.push('toto')
   newpersons.push('toto2')
   setperson(newpersons)

}


    return (
        <div>
              <button onClick={handlerPerson}>Add Person</button>

              <div> {persons.map((pe,i)=> <h4 key={i}>{pe}</h4>)}</div>
        </div>
    )
}

export default Render
