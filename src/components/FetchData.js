
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

function FetchData() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(res=>{
            console.log(res.data)
             setPosts(res.data)
        })
        .catch(err=>console.log(err))
    },[])


    return (
        <ul>
             {posts.map((post)=><li key={post.id}>{post.title}</li>)}
        </ul>
    )
}

export default FetchData
