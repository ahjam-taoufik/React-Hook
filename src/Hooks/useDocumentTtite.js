import { useEffect } from 'react'


function useDocumentTtite(count) {

    useEffect(() => {
        document.title=`count ${count}`
     },[count])
   

}

export default useDocumentTtite
