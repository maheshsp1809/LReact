import React, { useState } from 'react';

const ColorPicker = ({ color }) => {
  const [brightness, setBrightness] = useState(1);

  const incrementBrightness = () => {
    setBrightness(brightness + 0.1);
  };

  const decrementBrightness = () => {
    setBrightness(brightness - 0.1);
  };

  return (
    <div>
      <div style={{ backgroundColor: color }} />
      <button onClick={incrementBrightness}>Increase Brightness</button>
      <button onClick={decrementBrightness}>Decrease Brightness</button>
    </div>
  );
};

export default ColorPicker;
