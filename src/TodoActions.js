import React, { Component } from 'react';

class TodoActions extends Component {
	render (){
		return(
			<div>
				<button className='completeAllBtn' onClick={() => this.props.onCompleteAll(this.props.items) }>Complete All</button>
				<button className='uncompleteAllBtn' onClick={() => this.props.onUncompleteAll(this.props.items) }>Uncomplete All</button>
				<button className='deleteAllBtn' onClick={() => this.props.onDeleteAll(this.props.items) }>Delete All</button>
			</div>
		)
	}
}
export default TodoActions;