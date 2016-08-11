import React, { Component } from 'react';
import Input from './Input';

class AddDepense extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	categorie:'Voiture',
	      	nomDep: '',
	      	depense: 0,
	      	desc: ''
	    };
	}

	handleClickForm = () => {
		this.props.onBtnSave(5);
	}

	handleChangeState = (id,value) => {
	    this.setState({[id]:value});
	    console.log(this.state.nomDep + '--' +this.state.montant);
	}

	render() {
		return (
		    <div className="col-md-4 col-sm-5 formAjout">
		    	<h3>Ajouter</h3>
		    	<select name="" className="form-control">
					<option value="">Choisir un catégorie...</option>
					{this.props.listeCat.map(({nom,idCat}) =>
				    	<option key={idCat}>{nom}</option>		
					)}
		    	</select>
		    	<Input id="nomDep" value={this.state.nomDep} onChange={this.handleChangeState} placeholder="Nom de la dépense"/>
		    	<Input id="montant" value={this.state.montant} onChange={this.handleChangeState} placeholder="Montant"/>
		    	<textarea className="form-control" placeholder="Note sur la dépense"></textarea>
		    	<button className="btn btn-primary form-control" onClick={this.handleClickForm.bind()}>Ajouter</button>
		    </div>
		);
	}
}

export default AddDepense; 