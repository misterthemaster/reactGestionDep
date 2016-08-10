import React, { Component } from 'react';
import ListeDepenses from './ListeDepenses';
import AddDepenses from './AddDepense';
import $ from 'jquery';


class Depenses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liste: [],
      categorie : [
        {
          idCat: 1,
          nom: 'Voiture'
        },
        {
          idCat: 2,
          nom: 'Épicerie'
        },
      ]
    };
  }

  handleSaveDepense = (id) => {
    var addDep = this.state.liste;
    var idNew = addDep.length + 1;
    
    addDep.push({id:idNew,categorie:'Voiture',idCategorie:20,desc:'Serrure',montant:22.33});
    this.setState({liste:addDep});
  }

  componentDidMount() {
    var _this = this;
    $.getJSON('./src/data/getDepenseMockup.json')
    	.done(function(response) {
	      _this.setState({liste: response.liste})
	    })
	    .fail(function(x,y,err){
	    	console.log('fail!!! ' + err);
	    });
  }

  render() {
    return (
      <div>
        <h1>Liste des dépenses</h1>
        <ListeDepenses listeDep={this.state.liste}/>
        <AddDepenses listeCat={this.state.categorie} onBtnSave={this.handleSaveDepense}/>
      </div>
    );
  }
}

export default Depenses;
