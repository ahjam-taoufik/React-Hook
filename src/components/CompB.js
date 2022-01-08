import React from 'react'
import CompC from './CompC'

function CompB() {
    return (
        <div>
              <h2 style={{background:'green'}}>this componentsB</h2> 
            <CompC/>
            <h2 style={{background:'green'}}>this componentsB</h2> 
           </div>
    )
}

export default CompB
