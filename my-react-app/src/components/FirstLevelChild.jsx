import React from "react";
import SecondLevelChild from "./SecondLevelChild";

function FirstLevelChild(props) {
  return (
    <div>
      <h2>First-Level Child</h2>
      <SecondLevelChild data={props.data} />
    </div>
  );
}
export default FirstLevelChild;
