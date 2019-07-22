import React from 'react';

function Info(props) {
  return (
    <div style = {props.style}>
      <div style = {props.style2}>
        {props.children}
      </div>
    </div>
  );
}

//<Link page="https://www.facebook.com/profile.php?id=100005656515910"></Link>

export default Info;