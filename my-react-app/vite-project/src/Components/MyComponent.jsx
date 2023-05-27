// import React, { useState } from 'react';

// function Form() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [age, setAge] = useState(0);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission using the state values (name, email, age)
//     console.log(`Submitted: Name - ${name}, Email - ${email}, Age - ${age}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </div>
//       <div>
//         <label>Age:</label>
//         <input type="number" value={age} onChange={(e) => setAge(parseInt(e.target.value))} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;
import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <p>Time: {time}</p>;
}
