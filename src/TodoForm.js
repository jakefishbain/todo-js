import React, { Component } from 'react';

class TodoForm extends Component {
	handleSubmit(event){
		event.preventDefault()
		this.props.onSubmission({text: 'test-item', id: 5, completed: false})
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