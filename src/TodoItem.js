import React, { Component } from 'react';

class TodoItem extends Component {
	render() {
		return(
			<li className='item'>{this.props.text}
		  	<button onClick={() => this.props.onDelete(this.props.id)} className='deleteBtn'>DELETE</button>
		  	<button onClick={() => this.props.onComplete(this.props.id)} className='completeBtn'>{this.props.completed.toString()}</button>
		  	<input onChange={this.handleCommentChange.bind(this)} type='text' name='comment'/>
			</li>
		)
	}
}
export default TodoItem;