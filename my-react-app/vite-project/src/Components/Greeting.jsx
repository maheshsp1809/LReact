import React from 'react';

function Greeting({name}) {
  const currentTime = new Date().getHours();
  const greeting = currentTime < 12 ? 'Good Morning' : 'Good Afternoon';

  return (
    <div>
      {/* <h1>{greeting}</h1> */}
      <p>Hello {name}</p>
    </div>
  );
}

export default Greeting;
