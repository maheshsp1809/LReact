// Gallery.js

import React, { useState } from "react";
import { sculptureList } from "./data.jsx";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex(index + 1);
  };

  const sculpture = sculptureList[index];

  return (
    <div className="app-container">
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </div>
  );
}
