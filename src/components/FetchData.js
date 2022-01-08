import axios from 'axios'
import React, { useEffect, useState } from 'react'




function FetchData() {
     const [isLoading, setisLoading] = useState(true)
     const [error, seterror] = useState('')
     const [post, setpost] = useState({})





useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            setisLoading(false)
            setpost(res.data)
            seterror('')
        })
        .catch(error=>{
           setisLoading(false)
           setpost({})
           seterror('Something went wrong')
        })

}, [])


    return (
        <div>
            {isLoading?'Loading .....':post.title}
            {error?error:null}
        </div>
    )
}

export default FetchData
