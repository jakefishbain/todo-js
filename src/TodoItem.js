import React, { Component } from 'react';

class TodoItem extends Component {
	handleCommentChange(event){
		this.props.onCommentChange(this.props.id, event.target.value)
	}

	render() {
		return(
			<li className='item'>
		  	<input type='checkbox' defaultChecked={this.props.completed} onClick={() => this.props.onComplete(this.props.id)}/>
		  	{this.props.text} {this.props.comment} {this.props.completed.toString()}
		  	<button onClick={() => this.props.onDelete(this.props.id)} className='deleteBtn'>🗑</button>
		  	<input onChange={this.handleCommentChange.bind(this)} type='text' name='comment'/>
			</li>
		)
	}
}
export default TodoItem;