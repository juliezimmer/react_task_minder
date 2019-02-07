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
            completed: true  
         },
         {
            id: 3,
            title: "clean out cat boxes", 
            completed: false
         }
      ]
   }

   markComplete = (id) => {
      console.log(id);
      this.setState({ tasks: this.state.tasks.map(task => {
         if (task.id === id) { // if the current task.id matches the id passed into the markComplete function, change the completed boolean to the opposite
            task.completed = !task.completed
         } 
         return task;
      })})
   }
   
   render() {
      return (
         <div className="App"> 
            <Tasks 
               tasks={this.state.tasks} 
               markComplete={this.markComplete} 
            /> 
         </div>
      );
   }
}

export default App;
