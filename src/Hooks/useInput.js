import { useState } from "react"


function useInput(initialvalue) {
      const [value, setvalue] = useState(initialvalue)

const bind={
    value   :value,
    onChange:(e)=>{
        setvalue(e.target.value)
    }
}

const reset=()=>{
    setvalue(initialvalue)
}

    
    return [value,bind,reset] 
}

export default useInput
