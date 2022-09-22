import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((ccount)=> ccount + 1);
    setCount((ccount)=> ccount + 1);

  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
