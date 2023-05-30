import React from "react";
import "./playButton.css";

const PlayButton = ({ message, children, onClick }) => {
  function handleClick() {
    onClick();
  }
  return (
    <>
      <button className="play-button" onClick={handleClick}>
        <i className="fas fa-play"></i>
        {children}
      </button>
    </>
  );
};

export default PlayButton;
