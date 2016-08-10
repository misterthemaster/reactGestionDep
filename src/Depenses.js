import React, { Component } from 'react';
import ListeDepenses from './ListeDepenses';
import AddDepenses from './AddDepense';

class Depenses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liste: [
        {
          id: 1,
          categorie: 'Épicerie',
          desc: 'IGA',
          montant: 60.50
        },
        {
          id: 2,
          categorie: 'Voiture',
          desc: 'Changement huile',
          montant: 45.55
        },
        {
          id: 3,
          categorie: 'Voiture',
          desc: 'Frein',
          montant: 85.55
        }
      ],
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
