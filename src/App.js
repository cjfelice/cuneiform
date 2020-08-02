import React, { Component } from 'react';
import './App.css';
import Row from './Row';
import requests from "./requests";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Row title="Suggested Canvi" fetchUrl={requests.fetchTrending} />
        </div>
    );
  }
}

export default App;
