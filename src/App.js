import React, { Component } from 'react';

import Box from './Box';
import History from './History';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // Randomly generate 16 buttons, 1 null
    this.state = {
      history: [
        {
          buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]
        },
      ],
      turnNumber: 0,
    }
  }

  handleClick(i) {
    let buttons = this.state.history[this.state.turnNumber].buttons.slice();

    if (this.state.history[this.state.turnNumber].buttons[i - 1] === null) {
      buttons[i - 1] = buttons[i]
      buttons[i] = null;
    } else if (this.state.history[this.state.turnNumber].buttons[i + 1] === null) {
      buttons[i + 1] = buttons[i]
      buttons[i] = null;
    }
    else if (this.state.history[this.state.turnNumber].buttons[i - 4] === null) {
      buttons[i - 4] = buttons[i]
      buttons[i] = null;
    } else if (this.state.history[this.state.turnNumber].buttons[i + 4] === null) {
      buttons[i + 4] = buttons[i]
      buttons[i] = null;
    } else {
      return;
    }
    this.setState({
      history: [{
        buttons: buttons
      }]
    });
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Box buttons={this.state.history[this.state.turnNumber].buttons} onClick={(i) => this.handleClick(i)} />
        </div>
      </div>
    );
  }
}

export default App;
