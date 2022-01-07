import React, { useState } from 'react'
import ComuseEffect from './ComuseEffect'






function Display() {
      const [display, setdisplay] = useState(false)


    return (
        <div>
                <h3>dispaly :{ JSON.stringify(display) }</h3> 
            <button onClick={()=>setdisplay(!display)}>display</button> <br/>
              { display &&  <ComuseEffect/>}
        </div>
    )
}

export default Display
