import React from 'react'

function Display({text,payload}) {
    console.log('dispaly',text );
    return (
        <div>
            {text} {payload}
        </div>
    )
}

export default  React.memo(Display)
