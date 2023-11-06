import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(props.val);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p> Count:{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
