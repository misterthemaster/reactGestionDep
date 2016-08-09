import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info : {
        prenom : 'Olivier',
        nom : 'Lemaitre'
      }
    };
  }
  render() {
    return (
      <div className="App">
        <Header info={this.state.info}/>
        <div className="container">{this.props.children}</div>
        <Footer/>
      </div>
    );
  }
}

export default App;
