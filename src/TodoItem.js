import React, { Component } from 'react';

class TodoItem extends Component {
	commentChange(event){
		this.props.onCommentChange(this.props.id, event.target.value)
	}
	itemEdit(event){
		this.props.onEditItem(this.props.id, event.target.value)
	}
	className(){
		if(this.props.completed){
			return 'item completed'
		}else{
			return 'item'
		}
	}

	render() {
		return(
			<li className={this.className()}>
			  {this.props.isEditing?(
			  	<div className='conditionalEdit'>
			  		<label for='editiedItem'>Item:</label>
				  	<input onChange={this.itemEdit.bind(this)} type='text' name='editedItem' placeholder={this.props.text}/>
				  	<label for='comment'>Comment:</label>
				  	<input onChange={this.commentChange.bind(this)} type='text' name='comment' placeholder={this.props.comment}/>
				  	<button onClick={() => this.props.onToggleEdit(this.props.id)}>Save</button>
			  	</div>
			  ):
			  	(<div className='conditionalEdit'>
				  	<input type='checkbox' checked={this.props.completed} onChange={() => this.props.onComplete(this.props.id)}/>
			  		Item: {this.props.text} Comment: {this.props.comment}
			  		<button className='editBtn' onClick={()=> this.props.onToggleEdit(this.props.id)}>Edit</button>
		  		</div>)}
		  	<button onClick={() => this.props.onDelete(this.props.id)} className='deleteBtn'>🗑</button>
			</li>
		)
	}
}
export default TodoItem;