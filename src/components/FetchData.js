import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function FetchData() {

  const [post, setPost] = useState({});
  const [id, setId] = useState(5);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]); //you must put the id param inside bracket

  return (
        <div>

         <input value={id} type='text' onChange={(e)=>setId(e.target.value)}  />
        <h3>{post.title}</h3>
        </div>
  );
}

export default FetchData;
