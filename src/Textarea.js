import React, { Component } from 'react';

class Input extends Component {

	handleChange = (event) => {
		//console.log(event.target.value);
		this.props.onChange(event.target.id,event.target.value);
	}

	render() {
		return (
		    <textarea type="text" id={this.props.id} className="form-control" onChange={this.handleChange} value={this.props.value} placeholder={this.props.placeholder} />
		);
	}
}

export default Input; 