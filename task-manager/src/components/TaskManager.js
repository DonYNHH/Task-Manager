import React from 'react';
import Clock from './clock';
import TaskItems from './TaskItems';
import '../../src/TaskManager.css'

class TaskManager extends React.Component {
    constructor(props) {
      super(props);
      let rightNow = new Date();
      let time = (rightNow.getHours() * 60) + ':' + rightNow.getMinutes();

      this.state = { items: [],
                     taskName: '',
                     startTime: time,
                     timeToComplete: 0,
                      };
      
      this.createTask = this.createTask.bind(this); 
      this.delete = this.delete.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    
  
    render() {
      return (
        <div className="list">
          <Clock/>
          <div>
          <h1>Task List</h1>        
          <form onSubmit={this.createTask}>
            <label>
              Task Name:
            </label><br/>
            <input type = "text"
                   name = "taskName"
                   onChange = {this.handleChange}
                   value = {this.state.taskName}
            /><br/>
            <label>
              Time to Complete(Minutes):
            </label><br/>
            <input type = "number"
                   name = "timeToComplete"
                   onChange = {this.handleChange}
                   value = {this.state.timeToComplete}
            /><br/><br/>
            <button>
              Add Task
            </button>
          </form>
          <TaskItems items={this.state.items} delete={this.delete}/>
          </div>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ [e.target.name] : e.target.value  });
    }
  
    createTask(e) {
      if (this.state.taskName.length === 0 ){
        return;
      }
      if ((this.state.timeToComplete) <= 0  ){
        return;
      }
      
      let newItem = {
        taskName: this.state.taskName,
        timeToComplete: this.state.timeToComplete,
        key: Date.now()

      };

      this.setState( state => ({items: state.items.concat(newItem)}));

      e.preventDefault();
    }

    delete(key) {
      let filteredItems = this.state.items.filter(function (item) {
        return (item.key !== key);
      });
     
      this.setState({
        items: filteredItems
      });
    }
    
}

export default TaskManager;
