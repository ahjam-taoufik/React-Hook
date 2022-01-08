import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function FetchData() {

  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setidFromButton] = useState(id);

  const clickHandler=()=>{
    setidFromButton(id)
  }
  
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idFromButton]); //you must put the id param inside bracket

  return (
        <div>

         <input value={id} type='text' onChange={(e)=>setId(e.target.value)}  />
         <button onClick={clickHandler}>click me</button>
        <h3>{post.title}</h3>
        </div>
  );
}

export default FetchData;
