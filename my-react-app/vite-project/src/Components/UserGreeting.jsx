import React from 'react';

const UserGreeting = () => {
  var isLoggedIn = true;
  return (
    <>
      {isLoggedIn && (
        <button className="btn btn-primary">Please Login</button>
      )}
      <div>UserGreeting</div>
    </>
  );
}

export default UserGreeting;
