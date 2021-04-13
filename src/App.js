import React from 'react';
import './App.css';
import Cars from './Cars';
import CarsContext from './CarsContext'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState((prevState) => ({
      cars: {
        ...prevState.cars,
        [car]: side,
      }
    }));
  }

  render() {
    const contextValue = {
      cars: this.state.cars,
      moveCar: this.moveCar,
    }
    return (
      <CarsContext.Provider value={ contextValue } >
        <Cars />
      </CarsContext.Provider>
    );
  }
}

export default App;
