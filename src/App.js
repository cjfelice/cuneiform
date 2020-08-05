import React, { useState, useEffect, Fragment } from 'react';

import './App.scss';
import Row from './Row';
import Workspace from './Workspace';
import Title from './Title';
import requests from './requests';
import './App.scss';

//Component files
import Panel from './component/Panel';
import './component/panel.scss';
import UserAuth from './auth/authUser';

function App() {
  //sample database inside useState array; sets value to panel
  const [panel, setPanel] = useState([
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

  const test = {
    name: 'Test5/rename to title!',
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
  };
  /*
  suggestion on how to add a newly created panel to the existing
  const testing = () => {
    const test5 = [...panel, test];
    return test5;
  };

  console.log(panel);

  useEffect(() => {
  event.prevent.default();
    //onSubmit (probably) do this
    setPanel(testing());
  }, []);
*/

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

      {/* <div className='panel_canvis'>
        {panel.map((pane) => (
          <Panel
            name={pane.name}
            description={pane.description}
            music_id={pane.music_id}
            media={[...pane.media]}
          />
        ))}
        <Workspace />
      </div> */}
    </div>
  );
}

export default App;
