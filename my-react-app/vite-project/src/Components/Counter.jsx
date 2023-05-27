import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState('OFF');

  function handleClick() {
    if(count==='OFF')
       setCount('ON');
    else setCount('OFF');   
  }

  return (
    <>
      <button onClick={handleClick}>{count}</button>
    </>
  );
}

export default Counter;
