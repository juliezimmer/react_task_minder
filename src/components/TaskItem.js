import React, { Component } from 'react';

class TaskItem extends Component {
   render() {
      return(
         <div>
            <p>{this.props.task.title}</p> 
         </div>
      )
   }
}
export default TaskItem;