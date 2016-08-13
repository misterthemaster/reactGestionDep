import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';

class AddDepense extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	categorie:'Voiture',
	      	nomDep: '',
	      	montant: undefined,
	      	desc:'',
	      	dateDep: moment().format('YYYY/MM/D')
	    };
	}

	handleClickForm = () => {
		this.props.onBtnSave(this.state);
	}

	handleChangeState = (id,value) => {
		//console.log(id +'--'+value );
	    this.setState({[id]:value});
	}

	handleChangeStateTime = (ladate) => {
		//console.log( moment(ladate._d).format('YYYY/MM/D') );
		this.setState({dateDep:moment(ladate._d).format('YYYY/MM/D')});
	}

	render() {
		return (
		    <div className="col-md-4 col-sm-5 formAjout">
		    	<h3>Ajouter</h3>
		    	<Select id="categorie" listeCat={this.props.listeCat} onChange={this.handleChangeState}/>
		    	<Input id="nomDep" value={this.state.nomDep} onChange={this.handleChangeState} placeholder="Nom de la dépense"/>
		    	<Input id="montant" value={this.state.montant} onChange={this.handleChangeState} placeholder="Montant"/>
		    	<Datetime id="dateDep" dateFormat="YYYY/MM/D" value={this.state.dateDep} onChange={this.handleChangeStateTime}/>
		    	<Textarea id="desc" value={this.state.desc} onChange={this.handleChangeState} placeholder="Commentaire"/>
		    	<button className="btn btn-primary form-control" onClick={this.handleClickForm.bind()}>Ajouter</button>
		    </div>
		);
	}
}

export default AddDepense; 