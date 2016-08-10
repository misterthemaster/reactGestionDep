import React, { Component } from 'react';

class AddDepense extends Component {

  testOli = () => {
    this.props.onBtnSave(5);
  }

  render() {
    return (
	    <div className="col-md-4 col-sm-5 formAjout">
	    	<h3>Ajouter</h3>
	    	<select name="" className="form-control">
				<option value="">Choisir un catégorie...</option>
				{this.props.listeCat.map(({nom,id}) =>
			    	<option key={id}>{nom}</option>		
				)}
	    	</select>
	    	<input type="text" className="form-control" placeholder="Nom de la dépense"/>
	    	<input type="text" className="form-control" placeholder="montant"/>
	    	<textarea className="form-control" placeholder="Note sur la dépense"></textarea>
	    	<button className="btn btn-primary form-control" onClick={this.testOli.bind()}>Ajouter</button>
	    </div>
    );
  }
}

export default AddDepense; 