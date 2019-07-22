import React from 'react';

function Photo(props) {
  return (
    <img src={props.src} style = {props.imgstyle}/>
  );
}

export default Photo;