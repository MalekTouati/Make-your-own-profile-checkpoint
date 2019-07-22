import React from 'react';
import './link.css'

function Link(props) {
  return (
    <button 
      id="button" 
      onClick = {props.onSimpleClick} 
      style = {props.styleButton} 
      onMouseOver = {props.onHover} 
      onMouseOut = {props.onOut}>
        {props.label}
    </button>
  );
}

export default Link;