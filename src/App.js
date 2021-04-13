import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import TrafficContext from './TrafficContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: { color: 'red' },
    };

    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState((prevState) => ({
      cars: {
        ...prevState.cars,
        [car]: side,
      }
    }));
  }

  changeSignal(color) {
    this.setState({
      signal: { color },
    })
  }

  render() {
    const contextValue = {
      cars: this.state.cars,
      signal: this.state.signal,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    };
    return (
      <TrafficContext.Provider value={ contextValue }>
        <div className="container">
          <Cars />
          <TrafficSignal />
        </div>
      </TrafficContext.Provider>
    );
  }
}

export default App;
