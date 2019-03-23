import React from 'react';

export default (props) => (
  <input 
    style={{
      width: props.width, 
      margin: props.margin, 
      padding: props.padding
    }} 
  {...props}
  />
)