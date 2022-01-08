import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const intialData={
isloading:true,
post:{},
error:''
}


const reducer=(state, action)=>{
    switch (action.type) {
        case 'SUCCESS':
          return {
              isloading:false,
              post:action.payload,
              error:''
          }  
          case 'FAILD':
          return {
              isloading:false,
              post:{},
              error:'someting went wrong'
          }  
            
        default:
          return state;
    }}
function FetchingDatauseReducer() {
   const [state, dispatch] = useReducer(reducer, intialData)

useEffect(() => {
   axios.get('https://jsonplaceholder.typicode.com/posts/1')

      .then(res=>{
          dispatch({type:'SUCCESS',payload:res.data})         
         
      })

      .catch(err=>{
          dispatch({type:'FAILD'})   
      }
      )
}, [])

          console.log(state);
    return (
        <div>
            {state.isLoading?'Loading .....':state.post.title}
            {state.error?state.error:null} 
        </div>

    )
}


export default FetchingDatauseReducer
