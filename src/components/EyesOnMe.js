// src/components/EyesOnMe.js

import React from 'react';

function EyesOnMe() {
  // Event handler for focus
  const handleFocus = () => {
    console.log('Good!');
  };

  // Event handler for blur
  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <button 
      onFocus={handleFocus}  // Event listener for focus
      onBlur={handleBlur}    // Event listener for blur
    >
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
