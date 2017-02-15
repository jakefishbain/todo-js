import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm'

const removeItem = (id, items) => {
  function removeIt(item) {
    return item.id !== id
  }
  return items.filter(removeIt)
}

const completeItem = (id, items) => {
  function switchStatus(item){
    if(item.id === id){
      item.completed = !item.completed
    }
    return item
  }
  return items.map(switchStatus)
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
      ],
      formInput: ''
    }
  }
  handleDelete(id) {
    this.setState({todoItems: removeItem(id, this.state.todoItems)})
  }

  handleCompleted(id){
   this.setState({todoItems: completeItem(id, this.state.todoItems)}) 
  }

  handleAdding(item){
    this.setState({todoItems: this.state.todoItems.concat([item])})
  }

  handleChangeInput(text){
    this.setState({formInput: text})
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
        <TodoForm onAddItem={this.handleAdding.bind(this)} formInput={this.state.formInput} onChangeInput={this.handleChangeInput.bind(this)}/>
      </div>
      );
  }
}
export default App;
