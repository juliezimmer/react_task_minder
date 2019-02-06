import React, { Component } from 'react';
import TaskItem from './TaskItem';

class Tasks extends Component {
   render() {
      return this.props.tasks.map((task) => (
         <TaskItem task={task} key={task.id}/> // task is a prop being passed into TaskItem.
      ))
   }
}

export default Tasks;