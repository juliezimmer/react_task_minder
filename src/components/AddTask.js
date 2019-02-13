import React, { Component } from 'react';

class AddTask extends Component {
   // This is considered component state; it only exists within the component
   state = {
      title: ' '
   }

   onSubmit = (e) => {
      e.preventDefault(); 
      // this information needs to be passed up the component tree, so we will use a props method:
      this.props.addTask(this.state.title); // the title is passed in as an argument.
      this.setState({ title: ' '}); // title is re-set fo an empty string until a task is added again. 
   }


   // the event parameter, e, can be used to get the value for title.
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

export default AddTask;