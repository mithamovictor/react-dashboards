import React from 'react';

const Button = ({ color, bgColor, size, text, borderRadius }) => (
  <button
    type="button"
    style={{ background: bgColor, borderRadius, color }}
    className={`text-${size} p-3 hover:drop-shadow-xl`}
  >
    {text}
  </button>
);

export default Button;
