import React from "react";
import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    console.log("My compone nt is mounting...");
  }, []);

  return (
    <div>
      <p>returning from mycomponent</p>
    </div>
  );
}
export default MyComponent;
