import React, { Component } from 'react';
var uuid = require('node-uuid');

class TodoForm extends Component {
	handleSubmit(event){
		event.preventDefault()
		console.log(this.props.formText)
		console.log(this.props.formComment)
		this.props.onAddItem({text: this.props.formText, comment: this.props.formComment, id: uuid.v4(), completed: false})
	}

	handleChange(field, event){
		this.props.onChangeInput(event.target.value, field)
	}

	render() {
		return(
			<div>
			  <form onSubmit={this.handleSubmit.bind(this)} className='todoForm'>
			    <label>
			      Item: 
			      <input onChange={this.handleChange.bind(this, 'formText')} type="text" name="text" value={this.props.formText}/>
			      Comment:
			      <input onChange={this.handleChange.bind(this, 'formComment')} type="text" name="comment" value={this.props.formComment}/>
			    </label>
			    <input type="submit" value="Add Todo"/>
			  </form>
			</div>
		)
	}
}
export default TodoForm;