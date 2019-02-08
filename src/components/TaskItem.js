import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskItem extends Component {
   getStyle = () => {
      return {
         backgroundColor: "#f4f4f4",
         padding: '10px',
         borderBottom:"1px #ccc dotted",
         textDecoration: this.props.task.completed ? "line-through" : "none"
      }
   }
   
   render() {
      const { id, title } = this.props.task; // destructuring the props object
      return(
         <div style={this.getStyle()}>
            <p>
            <input type="checkbox" 
               onChange={this.props.markComplete.bind(this, id)}/> {' '} 
            { title }
            <button onClick={this.props.deleteTask.bind(this, id)} 
               style={btnStyle}> X </button>
            </p> 
         </div>
      )
   }
}
// PropTypes
TaskItem.propTypes = {
   task: PropTypes.object.isRequired
}

const btnStyle = {
   background: "#ff0000",
   color: "#fff",
   border: "none",
   padding: "5px 9px",
   borderRadius: "50%",
   cursor: "pointer",
   float: "right"
}

export default TaskItem;