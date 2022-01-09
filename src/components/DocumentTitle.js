
import React, { useState } from 'react'
import useDocumentTtite from '../Hooks/useDocumentTtite'

function DocumentTitle() {
  const [count, setcount] = useState(0)


  useDocumentTtite(count)
    return (
        <div>
           <button onClick={()=>setcount(count+1)}>count:{count}</button>  
        </div>
    )
}
export default DocumentTitle
