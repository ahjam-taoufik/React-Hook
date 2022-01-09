
import React, { useState } from 'react'
import useInput from '../Hooks/useInput'




function UserForm() {
  //const [FirstName, setFirstName] = useState('')
  //const [LastName, setLastName] = useState('')
  const [FirstName,bindFirstName,resetFirstName]=useInput('')
  const [LastName,bindLastName,resetLastName]=useInput('')

const HandlerForm=(e)=>{
    e.preventDefault()
    alert(`firstName ${FirstName} lastName ${LastName}`)
    resetFirstName()
    resetLastName()
}
    return (
        <form onSubmit={HandlerForm}>
            <label>First Name</label>
            <input type='text' {...bindFirstName} ></input> <br></br>
            <label>Last Name</label>
            <input type='text' {...bindLastName} ></input> <br></br>
            <button>submit</button>
        </form>

        // <form onSubmit={HandlerForm}>
        //     <label>First Name</label>
        //     <input type='text' value={FirstName} onChange={e=>setFirstName(e.target.value)} ></input> <br></br>
        //     <label>Last Name</label>
        //     <input type='text' value={LastName} onChange={e=>setLastName(e.target.value) } ></input> <br></br>
        //     <button>submit</button>
        // </form>
    )
}

export default UserForm
