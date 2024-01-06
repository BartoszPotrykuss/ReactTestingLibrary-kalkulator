import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liczba1: 0,
      liczba2: 0,
      wynik: 0,
    };
  }

  handleLiczba1Change = (e) => {
    this.setState({ liczba1: Number(e.target.value) });
  };

  handleLiczba2Change = (e) => {
    this.setState({ liczba2: Number(e.target.value) });
  };

  dodaj = () => {
    this.setState({ wynik: this.state.liczba1 + this.state.liczba2 });
  };

  odejmij = () => {
    this.setState({ wynik: this.state.liczba1 - this.state.liczba2 });
  };

  render() {
    return (
      <div>
        <label htmlFor="liczba1">Liczba 1:</label>
        <input data-testid="liczba1" id="liczba1" type="number" value={this.state.liczba1} onChange={this.handleLiczba1Change} />

        <label htmlFor="liczba2">Liczba 2:</label>
        <input data-testid="liczba2" id="liczba2" type="number" value={this.state.liczba2} onChange={this.handleLiczba2Change} />

        <button data-testid="dodaj" onClick={this.dodaj}>Dodaj</button>
        <button data-testid="odejmij" onClick={this.odejmij}>Odejmij</button>

        <p>Wynik: {this.state.wynik}</p>
      </div>
    );
  }
}

export default App;
