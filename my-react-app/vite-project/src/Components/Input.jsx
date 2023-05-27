import React, { useState } from 'react';

function Input() {
  const [text, setText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayedText(text);
    setText('');
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <p>{displayedText}</p>
    </div>
  );
}

export default Input;
