



import React from 'react'

function Button({HandlerClick,children}) {
      console.log('button',children);
    return (
        <button onClick={HandlerClick}>{children}</button>
    )
}

export default React.memo(Button)