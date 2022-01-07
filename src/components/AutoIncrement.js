import React, { useEffect, useState } from "react";

function AutoIncrement() {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(increment, 100);

    // return () => {
    //   clearInterval(interval);
    // };
  });

  return <h1>{count}</h1>;
}

export default AutoIncrement;
