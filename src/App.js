import React, { useState, useEffect, Fragment } from 'react';

import './App.scss';
import Row from './Row';
import Workspace from './Workspace';
import Title from './Title';
import requests from './requests';
import './App.scss';

//Component files
import Canvas from './component/Canvas';
import './component/Canvas.scss';
import UserAuth from './auth/authUser';

function App() {
  //sample database inside useState array; sets value to canvas
  const [canvas, setCanvas] = useState([
    {
      name: 'Test1/rename to title!',
      description: 'Yangmingshan Taipei Chinese Pavilion!',
      music_id: '',
      media: [
        {
          mediaUrl:
            'https://p1.pxfuel.com/preview/326/736/1008/people-whimsical-lazy-suit.jpg'
        },
        {
          mediaUrl:
            'https://get.pxhere.com/photo/landscape-nature-grass-branch-light-sky-sun-fog-sunrise-sunset-mist-field-grain-sunlight-morning-dawn-summer-dusk-evening-harvest-autumn-fields-mood-arable-atmospheric-phenomenon-grass-family-642150.jpg'
        },
        {
          mediaUrl:
            'https://static.pexels.com/photos/8486/water-rain-raindrops-drops.jpg'
        }
      ]
    },
    {
      name: 'Test2/rename to title!',
      description: 'Yangmingshan Taipei Chinese Pavilion2!',
      music_id: '',
      media: [
        {
          mediaUrl:
            'https://get.pxhere.com/photo/landscape-nature-grass-branch-light-sky-sun-fog-sunrise-sunset-mist-field-grain-sunlight-morning-dawn-summer-dusk-evening-harvest-autumn-fields-mood-arable-atmospheric-phenomenon-grass-family-642150.jpg'
        },
        {
          mediaUrl:
            'https://c.pxhere.com/photos/81/db/autumn_forest_autumn_forest_trees_leaves_sunbeam_nature_sunlight-967621.jpg!d'
        },
        {
          mediaUrl:
            'https://static.pexels.com/photos/8486/water-rain-raindrops-drops.jpg'
        }
      ]
    },
    {
      name: 'Test3/rename to title!',
      description: 'Yangmingshan Taipei Chinese Pavilion!',
      music_id: '',
      media: [
        {
          mediaUrl:
            'https://p1.pxfuel.com/preview/326/736/1008/people-whimsical-lazy-suit.jpg'
        },
        {
          mediaUrl:
            'https://c.pxhere.com/photos/81/db/autumn_forest_autumn_forest_trees_leaves_sunbeam_nature_sunlight-967621.jpg!d'
        },
        {
          mediaUrl:
            'https://static.pexels.com/photos/8486/water-rain-raindrops-drops.jpg'
        }
      ]
    },
    {
      name: 'Test4/rename to title!',
      description: 'Yangmingshan Taipei Chinese Pavilion2!',
      music_id: '',
      media: [
        {
          mediaUrl:
            'https://get.pxhere.com/photo/landscape-nature-grass-branch-light-sky-sun-fog-sunrise-sunset-mist-field-grain-sunlight-morning-dawn-summer-dusk-evening-harvest-autumn-fields-mood-arable-atmospheric-phenomenon-grass-family-642150.jpg'
        },
        {
          mediaUrl:
            'https://c.pxhere.com/photos/81/db/autumn_forest_autumn_forest_trees_leaves_sunbeam_nature_sunlight-967621.jpg!d'
        },
        {
          mediaUrl:
            'https://static.pexels.com/photos/8486/water-rain-raindrops-drops.jpg'
        }
      ]
    }
  ]);

  return (
    <div className='App'>
      <div className='header'>
        <div>TEST</div>
        <UserAuth />
        <Title text='chiMera' />
      </div>

      <div>
        <Workspace />
      </div>
      <Row title='Suggested Canvi' fetchUrl={requests.fetchTrending} />

      {/* <div className='canvas_canvis'>
        {canvas.map((canva) => (
          <Canvas
            name={canva.name}
            description={canva.description}
            music_id={canva.music_id}
            media={[...canva.media]}
          />
        ))}
        <Workspace />
      </div> */}
    </div>
  );
}

export default App;
