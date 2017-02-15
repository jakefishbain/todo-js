import React, { Component } from 'react';
var uuid = require('node-uuid');

class TodoForm extends Component {
	handleSubmit(event){
		event.preventDefault()
		this.props.onSubmission({text: 'test-item', id: uuid.v1(), completed: false})
	}

	render() {
		return(
			<div>
			  <form onSubmit={this.handleSubmit.bind(this)} className='todoForm'>
			    <label>
			      Item: 
			      <input type="text" name="item"/>
			    </label>
			    <input type="submit" value="Add Todo"/>
			  </form>
			</div>
		)
	}
}
export default TodoForm;