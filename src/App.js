import React from 'react';
import './App.scss';
// import Row from '.component/Row';
import Canvas from './component/Canvas';
import Title from './Title';
import UserAuth from './auth/authUser';
// import requests from './requests';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <UserAuth />
        <Title text='chiMera' />
      </div>
      {/* <Row title='Suggested Canvi' fetchUrl={requests.fetchTrending} /> */}
      <Canvas />
    </div>
  );
}

export default App;
