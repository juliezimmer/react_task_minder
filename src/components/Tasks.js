import React, { Component } from 'react';
import TaskItem from './TaskItem';
import PropTypes from 'prop-types';

class Tasks extends Component {
   render() {
      return this.props.tasks.map((task) => (
         <TaskItem 
            task={task} 
            key={task.id}
            markComplete={this.props.markComplete} /> 
      ))
   }
}

// PropTypes
Tasks.propTypes = {
   tasks: PropTypes.array.isRequired
}

export default Tasks;