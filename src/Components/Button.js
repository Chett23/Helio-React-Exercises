import React from 'react';
import { NONAME } from 'dns';

export default (props) => {
    return (
    <button 
        style={{ 
            backgroundColor: props.color, 
            color: props.textColor, 
            width: props.width
        }}
        {...props}
        >
            {props.children}
    </button>
)}