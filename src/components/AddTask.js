import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTask extends Component {
   // This is considered component state; it only exists within the component
   state = {
      title: ' '
   }

   onSubmit = (e) => {
      e.preventDefault(); 
      // this information needs to be passed up the component tree, so a props method is used, this.props.addTask() and the title (the task name that was entered by the user,m is passed in as an argument.:
      this.props.addTask(this.state.title); 
      
      // title is re-set to an empty string until another task is added.
      this.setState({ title: ' '});  
   }

   // the event parameter, e, can be used to get the value for the state property, title.
   // need to set the state property, title, to whatever the value is (which is what the user entered in the input). 
   // this onChange handler sets the title property to whatever was typed into the input field by the user.
   onChange = (e) => this.setState({ [e.target.name]: e.target.value});

   render() {
      return (
         <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
            <input 
               style={{ flex: "10", padding: "5px" }}
               type="text" 
               name="title" 
               placeholder="Add Task" 
               value={this.state.title} // from state title property
               onChange={this.onChange}
            />
            <input 
               type="submit"
               value="Submit" 
               className="btn"
               style={{ flex: "1" }}
            />
         </form>
      )
   }
}

AddTask.propTypes = {
   addTask: PropTypes.func.isRequired
}

export default AddTask;