import React, { Component } from 'react';

class Select extends Component {

	handleChange = (event) => {
		console.log(event.target.value);
		this.props.onChange(event.target.id,event.target.value);
	}


	render() {
		return (
			<select id={this.props.id} className="form-control" onChange={this.handleChange}>
				<option value="">Choisir un catégorie...</option>
				{this.props.listeCat.map(({nom,idCat}) =>
			    	<option key={idCat} value={nom}>{nom}</option>		
				)}
			</select>
		);
	}
}

export default Select; 