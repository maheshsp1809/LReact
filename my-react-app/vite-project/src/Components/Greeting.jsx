import React from 'react';

function Greeting() {
  const currentTime = new Date().getHours();
  const greeting = currentTime < 12 ? 'Good Morning' : 'Good Afternoon';

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}

export default Greeting;
