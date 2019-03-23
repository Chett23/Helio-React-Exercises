import React from 'react';

export default (props) => {
  return (
  <button 
    style={{ 
      backgroundColor: props.color, 
      color: props.textColor, 
      width: props.width,
      height: props.height,
      margin: props.margin
    }}
    {...props}
    >
      {props.children}
  </button>
)}