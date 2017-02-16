import React, { Component } from 'react';

class TodoItem extends Component {
	commentChange(event){
		this.props.onCommentChange(this.props.id, event.target.value)
	}
	// itemEdit(event){
	// 	this.props.onEdit(this.props.id, event.target.value)
	// }

	render() {
		return(
			<li className='item'>
		  	<input type='checkbox' checked={this.props.completed} onChange={() => this.props.onComplete(this.props.id)}/>
		  	{this.props.text} {this.props.comment} {this.props.completed.toString()}
		  	<input onChange={this.commentChange.bind(this)} type='text' name='comment'/>
		  	<button className='editBtn' onClick={()=> this.props.onEditClick(this.props.id)}>Edit</button>
		  	{/*<input  onChange={this.itemEdit(this.props.bind)} type='text' name='editedItem'/>*/}
		  	<button onClick={() => this.props.onDelete(this.props.id)} className='deleteBtn'>🗑</button>
			</li>
		)
	}
}
export default TodoItem;