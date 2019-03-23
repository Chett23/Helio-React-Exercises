import React from 'react';


const List = (props) => (
    <ul style={{listStyle: props.listStyle, marginLeft: props.marginLeft}}>
      {props.items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
)

export default List;