import React from 'react';
import Wrapper from './Wrapper';
import Photo from './Photo';
import Link from './Link/Link';
import Info from './Info';

// { 
// photo : "/myprofile.jpg"
// Name : {firstName:"Malek", lastName:"Touati"},
// profileLink :"https://www.facebook.com/profile.php?id=100005656515910" 
// }

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Info 
          style={{
          color : 'red',
          fontSize : '40px', 
          margin : '20px 10px',
          textAlign : 'center'
        }}>Malek Touati</Info>
        <Photo 
          src="myprofile.jpg" 
          imgstyle = {{
          marginLeft : '29%',
        }}></Photo>
        <Info 
          style2 = {{
          textAlign : 'center',
          marginTop : '15px',
          fontSize : '20px',
        }}>8th grade student in pioneer prep school of Sousse, 14 years old, and a level 1 web developer. Here's my Facebook:</Info>
        <Link 
          onSimpleClick = { () => {window.location.href = "https://www.facebook.com/profile.php?id=100005656515910" }} 
          onHover = {() => {document.querySelector("#button").style.borderRadius='20px'}}
          onOut = {() => {document.querySelector("#button").style.borderRadius='7px'}} 
          label = "My Facebook" 
          styleButton = {{
            marginLeft : '47%',
            marginTop : '1%',
            marginBottom : '3%',
            padding : '10px 10px',
            fontSize : '15px',
            borderRadius : '7px',
            outline: '0'
          }}>
        </Link>
      </Wrapper>
    </div>
  );
}

export default App;
