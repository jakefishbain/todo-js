import React, { Component } from 'react';
var uuid = require('node-uuid');

class TodoForm extends Component {
	handleSubmit(event){
		event.preventDefault()
		this.props.onAddItem({text: this.props.formInput, id: uuid.v4(), completed: false})
	}

	handleChange(event){
		this.props.onChangeInput(event.target.value)
	}

	render() {
		return(
			<div>
				<p>{this.props.formInput}</p>
			  <form onSubmit={this.handleSubmit.bind(this)} className='todoForm'>
			    <label>
			      Item: 
			      <input onChange={this.handleChange.bind(this)} type="text" name="item" value={this.props.formInput}/>
			    </label>
			    <input type="submit" value="Add Todo"/>
			  </form>
			</div>
		)
	}
}
export default TodoForm;