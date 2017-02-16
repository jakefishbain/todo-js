import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import TodoActions from './TodoActions'

const removeItem = (id, items) => {
  function removeIt(item) {
    return item.id !== id
  }
  return items.filter(removeIt)
}

const editBtnClick = (id, items) => {
  function switchEditing(item){
    if(item.id === id){
      item.isEditing = true
      console.log(item)
    }
    return item
  }
  return items.map(switchEditing)
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

const changeComment = (id, text, items) => {
  function attachComment(item){
    if(item.id === id){
      item.comment = text
    }
    return item
  }
  return items.map(attachComment)  
}

const toggleComplete = (status, item) => {
  item.completed = status
  return item
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoItems: [
        {text: 'item1', id: 0, completed: false, comment: '', isEditing: false},
        {text: 'item2', id: 1, completed: true, comment: '', isEditing: false},
        {text: 'item3', id: 2, completed: false, comment: '', isEditing: false},
        {text: 'item4', id: 3, completed: true, comment: '', isEditing: false},
        {text: 'item5', id: 4, completed: false, comment: '', isEditing: false}
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
    this.setState({todoItems: this.state.todoItems.concat([item]), formInput: ''})
  }

  handleChangeInput(text){
    this.setState({formInput: text})
  }

  handleCommentChange(id, text){
    this.setState({todoItems: changeComment(id, text, this.state.todoItems)})
  }

  handleCompleteAll(items){
    // this.setState({todoItems: this.state.todoItems.map(markCompleted)})
    this.setState({todoItems: this.state.todoItems.map(item => toggleComplete(true, item))})
  }

  handleUncompleteAll(items){
    // this.setState({todoItems: this.state.todoItems.map(markIncomplete)})
    this.setState({todoItems: this.state.todoItems.map(item => toggleComplete(false, item))})
  }

  handleDeleteAll(items){
    this.setState({todoItems: []})
  }

  handleEditClick(id){
    this.setState({todoItems: editBtnClick(id, this.state.todoItems)})
  }

  render() {
    return (
      <div className='todoApp'>
        <ul>
          {
            this.state.todoItems.map(listItem => (
              <TodoItem key={listItem.id} text={listItem.text} completed={listItem.completed} id={listItem.id} comment={listItem.comment} onDelete={this.handleDelete.bind(this)} onComplete={this.handleCompleted.bind(this)} onCommentChange={this.handleCommentChange.bind(this)} onEditClick={this.handleEditClick.bind(this)}/>  
              ))
          }
        </ul>
        <TodoForm onAddItem={this.handleAdding.bind(this)} formInput={this.state.formInput} onChangeInput={this.handleChangeInput.bind(this)}/>
        <TodoActions items={this.state.todoItems} onCompleteAll={this.handleCompleteAll.bind(this)} onUncompleteAll={this.handleUncompleteAll.bind(this)} onDeleteAll={this.handleDeleteAll.bind(this)}/>
      </div>
      );
  }
}
export default App;
