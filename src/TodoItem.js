import React, { Component } from 'react';

class TodoItem extends Component {
	commentChange(event){
		this.props.onCommentChange(this.props.id, event.target.value)
	}
	itemEdit(event){
		this.props.onEditItem(this.props.id, event.target.value)
	}

	render() {
		return(
			<li className='item'>
		  	<input type='checkbox' checked={this.props.completed} onChange={() => this.props.onComplete(this.props.id)}/>
		  	{this.props.text} {this.props.comment} {this.props.completed.toString()}
		  	<input onChange={this.commentChange.bind(this)} type='text' name='comment' placeholder='comment'/>
			  {this.props.isEditing?
			  	(<input  onChange={this.itemEdit.bind(this)} type='text' name='editedItem' placeholder={this.props.text}/>)
			  	:(<button className='editBtn' onClick={()=> this.props.onEditClick(this.props.id)}>Edit</button>)}
		  	<button onClick={() => this.props.onDelete(this.props.id)} className='deleteBtn'>🗑</button>
			</li>
		)
	}
}
export default TodoItem;