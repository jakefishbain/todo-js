import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm'

const removeItem = (id, items) => {
  // TODO omit item where id = id
  function removeIt(item) {
    return item.id !== id
  }
  return items.filter(removeIt)
}

//CREATE COMPLETE-ITEM CONST.
const completeItem = (id, items) => {
  function completeIt(item){
    if(item.id === id){
      item.completed = !item.completed
      return item
    }else {
      return item
    }
  }
  return items.filter(completeIt)
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoItems: [
        {text: 'item1', id: 0, completed: false},
        {text: 'item2', id: 1, completed: false},
        {text: 'item3', id: 2, completed: false},
        {text: 'item4', id: 3, completed: false},
        {text: 'item5', id: 4, completed: false}
      ]
    }
  }
  handleDelete(id) {
    this.setState({todoItems: removeItem(id, this.state.todoItems)})
  }
  //CREATE HANDLE COMPLETED FN
  handleCompleted(id){
   this.setState({todoItems: completeItem(id, this.state.todoItems)}) 
  }

  render() {
    return (
      <div className='todoList'>
        <ul>
          {
            this.state.todoItems.map(listItem => (
              <TodoItem key={listItem.id} text={listItem.text} completed={listItem.completed} id={listItem.id} onDelete={this.handleDelete.bind(this)} onComplete={this.handleCompleted.bind(this)}/>  
              ))
          }
        </ul>
        <TodoForm/>
      </div>
      );
  }
}
export default App;
