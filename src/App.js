import React, { Component } from 'react';
import Tasks from './components/Tasks';

import './App.css'; // brings in the global CSS

class App extends Component {
   state = {
      tasks: [
         {
            id: 1,
            title: "take out trash",
            completed: false
         },
         {
            id: 2,
            title: "shovel driveway",
            completed: false
         },
         {
            id: 3,
            title: "clean out cat boxes", 
            completed: false
         }
      ]
   }
   
   render() {
      console.log(this.state.tasks);
      return (
         <div className="App"> 
            <Tasks tasks={this.state.tasks}  /> 
         </div>
      );
   }
}

export default App;
