import React from 'react'


function Title({children}) {
      console.log('title')
    return (
        <h1>
            {children}   
        </h1>
    )
}

export default React.memo(Title) 
