import React, { Component } from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className='App'>
      <Row title='Suggested Canvi' fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
