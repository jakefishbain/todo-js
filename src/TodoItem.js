import React, { Component } from 'react';
import EditableText from './EditableText'

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

	renderActionBtn(){
		if(this.props.isEditing){
			return <button onClick={() => this.props.onToggleEdit(this.props.id)}>Save</button>
		}else{
			return <button className='editBtn' onClick={()=> this.props.onToggleEdit(this.props.id)}>Edit</button>
		}
	}

	render() {
		return(
			<li className={this.className()}>
				<input type='checkbox' checked={this.props.completed} onChange={() => this.props.onComplete(this.props.id)}/>
				<EditableText label='Item' value={this.props.text} isEditing={this.props.isEditing} onChange={this.itemEdit.bind(this)}/>
				
				<EditableText label='Comment' value={this.props.comment} isEditing={this.props.isEditing} onChange={this.commentChange.bind(this)}/>

				{this.renderActionBtn()}

		  	<button onClick={() => this.props.onDelete(this.props.id)} className='deleteBtn'>🗑</button>

			</li>
		)
	}
}
export default TodoItem;

	  // {this.props.isEditing?(
			//   	<div className='conditionalEdit'>
			//   		<label htmlFor='editiedItem'>Item:</label>
			// 	  	<input onChange={this.itemEdit.bind(this)} type='text' name='editedItem' placeholder={this.props.text}/>
			// 	  	<label htmlFor='comment'>Comment:</label>
			// 	  	<input onChange={this.commentChange.bind(this)} type='text' name='comment' placeholder={this.props.comment}/>
			//   	</div>
			//   ):
			//   	(<div className='conditionalEdit'>
			// 	  	<input type='checkbox' checked={this.props.completed} onChange={() => this.props.onComplete(this.props.id)}/>
			//   		Item: {this.props.text} Comment: {this.props.comment}
			//   		<button className='editBtn' onClick={()=> this.props.onToggleEdit(this.props.id)}>Edit</button>
		 //  		</div>)}

		 // <label htmlFor={`textInput-${this.props.id}`} >Item:</label>
		 // {this.props.isEditing ? (
		 // 	<input 
		 // 		onChange={this.itemEdit.bind(this)} 
		 // 		type='text' 
		 // 		id={`textInput-${this.props.id}`} 
		 // 		placeholder='Item'
		 // 		value={this.props.text}/>
		 // 	)
		 // 	: this.props.text 
		 // }


		 // <label htmlFor={`commentInput-${this.props.id}`} >Comment:</label>
		 // {this.props.isEditing ? (
		 // 	<input 
		 // 		onChange={this.commentChange.bind(this)} 
		 // 		type='text' 
		 // 		id={`commentInput-${this.props.id}`}
		 // 		placeholder='Comment'
		 // 		value={this.props.comment}/>
		 // 	) 
		 // 	: this.props.comment
		 // }