// ThirdLevelChild.js
import React from "react";

function ThirdLevelChild(props) {
  return (
    <div>
      <h4>Third-Level Child</h4>
      <p>{props.data}</p>
    </div>
  );
}
export default ThirdLevelChild;
