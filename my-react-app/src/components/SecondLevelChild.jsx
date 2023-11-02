import React from "react";
import ThirdLevelChild from "./ThirdLevelChild";

function SecondLevelChild(props) {
  return (
    <div>
      <h3>Second-Level Child</h3>
      <ThirdLevelChild data={props.data} />
    </div>
  );
}
export default SecondLevelChild;
