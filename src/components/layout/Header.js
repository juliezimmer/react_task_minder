import React from 'react';

//another format for stateless, functional component
function Header() {
   return (
      <header style={headerStyle}>
         <h1>Task List</h1>
      </header>
   )
}

const headerStyle = {
   background: "#333",
   color: "white",
   textAlign: "center",
   padding: "10px"
}

export default Header;