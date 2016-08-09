import React, { Component } from 'react';
import ListeDepenses from './ListeDepenses';
import AddDepenses from './AddDepense';

class Depenses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liste: [
        {
          id: 0,
          categorie: 'Épicerie',
          idCategorie: 10,
          desc: 'IGA',
          montant: 60.50
        },
        {
          id: 3,
          categorie: 'Voiture',
          idCategorie: 20,
          desc: 'Changement huile',
          montant: 45.55
        },
        {
          id: 2,
          categorie: 'Voiture',
          idCategorie: 20,
          desc: 'Frein',
          montant: 85.55
        }
      ]
    };
  }

  handleSaveDepense = (id) => {
    console.log('click' + id);
  }

  render() {
    return (
      <div>
        <h1>Liste des dépenses</h1>
        <ListeDepenses listeDep={this.state.liste}/>
        <AddDepenses onBtnSave={this.handleSaveDepense}/>
      </div>
    );
  }
}

export default Depenses;
