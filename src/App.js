import React, { Component } from 'react';
import Tasks from './components/Tasks';

import './App.css'; // brings in the global CSS

class App extends Component {
   state = {
      tasks:
   }


   render() {
      return (
         <div className="App"> 
            <Tasks /> 
         </div>
      );
   }
}

export default App;
