import React, { Component } from 'react';

class TodoForm extends Component {
	render() {
		return(
			<div className='todoForm'>
			  <form>
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