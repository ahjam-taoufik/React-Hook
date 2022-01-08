import React, { useContext } from 'react'
import { toggleContext, UserContext } from '../App'


function CompC() {
    const user = useContext(UserContext)
    const islogged = useContext(toggleContext)
    return (
        <div>
             <h2 style={{background:'yellow'}}>
               <p>this componentsC</p> 
                   {user.name} <br/>
                   {islogged}
             </h2> 
            
        </div>
    )
}

export default CompC
