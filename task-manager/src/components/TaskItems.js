import React from 'react';
import '../../src/TaskManager.css'

class TaskItems extends React.Component {

  constructor(props) {
    super(props);
    this.createItems = this.createItems.bind(this);
  }
   

   createItems(item){
     return <li  key={item.key} onClick={() => this.delete(item.key)}>Task Name: {item.taskName} Time to complete: {item.timeToComplete}mins</li>
   }

   delete(key) {
    this.props.delete(key);
  }

    render() {
      let items = this.props.items;
      let allItems = items.map(this.createItems);
      
      return (
        <ul >
          {allItems}
        </ul>
      )
    }

    
}

export default TaskItems;