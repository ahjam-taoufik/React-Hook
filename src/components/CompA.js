

import React from 'react'
import CompB from './CompB'

function CompA() {
    return (
        <div>
            <h2 style={{background:'red'}}>this componentsA</h2> 
         
              <CompB/> 
            
            <h2 style={{background:'red'}}>this componentsA</h2> 

        </div>
    )
}

export default CompA
