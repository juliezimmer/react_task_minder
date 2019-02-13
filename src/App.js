import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import uuid from 'uuid';

import './App.css'; // brings in the global CSS

class App extends Component {
   state = {
      tasks: [
         {
            id: uuid.v4(),
            title: "take out trash",
            completed: false
         },
         {
            id: uuid.v4(),
            title: "shovel driveway",
            completed: true  
         },
         {
            id: uuid.v4(),
            title: "clean out cat boxes", 
            completed: false
         }
      ]
   }
   // markComplete Toggle
   markComplete = (id) => {
      console.log(id);
      this.setState({ tasks: this.state.tasks.map(task => {
         if (task.id === id) { // if the current task.id matches the id passed into the markComplete function, change the completed boolean to the opposite
            task.completed = !task.completed
         } 
         return task;
      })})
   }

   deleteTask = (id) => {
      console.log(id); 
      // the spread operator is being use so we don't have to compose the entire tasks array that is being filtered. 
      this.setState({ tasks: [...this.state.tasks.filter(task => task.id !== id)]});
   }

   // addTask method takes the title (name of the task entered by the user) as a parameter.
   // the new task has to be added to the app level state object. 
   // In order to add this task to the state, a copy of the state object is needed
   addTask = (title) => {
      console.log(title);
      const newTask = {
         id: uuid.v4(),
         title,
         completed: false
      }
      this.setState({ tasks: [...this.state.tasks, newTask]});   
   }
   
   render() {
      return (
         <Router>
            <div className="App"> 
               <div className="container">
                  <Header />
                  <AddTask addTask={this.addTask}/>
                  <Tasks 
                     tasks={this.state.tasks} 
                     markComplete={this.markComplete} 
                     deleteTask = {this.deleteTask} /> 
               </div>
            </div>
         </Router>
      );
   }
}

export default App;
