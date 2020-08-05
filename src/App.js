import React from 'react';
import './App.scss';
// import Row from '.component/Row';
import Canvas from './component/Canvas';
import './component/Canvas.scss';

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
      <div className='canvas_canvis'>
        <Canvas
          name='Test/rename to title!'
          description='Yangmingshan Taipei Chinese Pavilion!'
          music_id=''
          mediaUrl='https://get.pxhere.com/photo/landscape-nature-grass-branch-light-sky-sun-fog-sunrise-sunset-mist-field-grain-sunlight-morning-dawn-summer-dusk-evening-harvest-autumn-fields-mood-arable-atmospheric-phenomenon-grass-family-642150.jpg'
        />
        <Canvas />
        <Canvas />
        <Canvas />
      </div>
      <div className='canvas_canvis'>
        <Canvas />
        <Canvas />
        <Canvas />
        <Canvas />
      </div>
      <div className='canvas_canvis'>
        <Canvas />
        <Canvas />
        <Canvas />
        <Canvas />
      </div>
    </div>
  );
}

export default App;
