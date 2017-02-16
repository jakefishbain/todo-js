import React, { Component } from 'react';

class EditableText extends Component {
	render(){
		return(
			<span>
				<label htmlFor={'${this.props.label}-${this.props.id}'} >{this.props.label}:</label>
				{this.props.isEditing ? (
					<input 
						onChange={this.props.onChange} 
						type='text' 
						id={'${this.props.label}-${this.props.id}'} 
						placeholder={this.props.label}
						value={this.props.value}/>
					)
					: this.props.value 
				}
			</span>
		)
	}
}
export default EditableText;