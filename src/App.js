import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/pages/About';
import uuid from 'uuid';
import axios from 'axios';

import './App.css'; // brings in the global CSS


class App extends Component {
   state = {
      tasks: []
   }

   componentDidMount() {
      // ?_limit=10 is a query parameter that limits the number of todos returned to 10
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
         .then((res) => this.setState({tasks: res.data}))
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
                  <Route exact path="/" render={props => (
                     <React.Fragment>
                        <AddTask addTask={this.addTask}/>
                        <Tasks 
                           tasks={this.state.tasks} 
                           markComplete={this.markComplete} 
                           deleteTask = {this.deleteTask} /> 
                     </React.Fragment>
                  )} />
                  <Route path="/about" component={About}

                  />
                  
               </div>
            </div>
         </Router>
      );
   }
}

export default App;
