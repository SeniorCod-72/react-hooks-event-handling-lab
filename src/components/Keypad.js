// src/components/Keypad.js

import React from 'react';

function Keypad() {
  // Event handler for change event
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <input
      type="password"  // Ensures the input is of password type (characters are hidden)
      onChange={handleChange}  // Listens for changes to the input field
      placeholder="Enter password"  // Optional: placeholder text for user guidance
    />
  );
}

export default Keypad;
