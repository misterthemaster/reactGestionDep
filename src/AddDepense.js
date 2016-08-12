import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';


class AddDepense extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	categorie:'Voiture',
	      	nomDep: '',
	      	montant: 0,
	      	desc:'',
	    };
	}

	handleClickForm = () => {
		this.props.onBtnSave(this.state.nomDep,this.state.montant,this.state.categorie);
	}

	handleChangeState = (id,value) => {
	    this.setState({[id]:value});
	    console.log(this.state.nomDep + '--' +this.state.montant);
	}

	render() {
		return (
		    <div className="col-md-4 col-sm-5 formAjout">
		    	<h3>Ajouter</h3>
		    	<Select id="categorie" listeCat={this.props.listeCat} onChange={this.handleChangeState}/>
		    	<Input id="nomDep" value={this.state.nomDep} onChange={this.handleChangeState} placeholder="Nom de la dépense"/>
		    	<Input id="montant" value={this.state.montant} onChange={this.handleChangeState} placeholder="Montant"/>
		    	<textarea className="form-control" placeholder="Note sur la dépense"></textarea>
		    	<button className="btn btn-primary form-control" onClick={this.handleClickForm.bind()}>Ajouter</button>
		    </div>
		);
	}
}

export default AddDepense; 