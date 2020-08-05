import React, { useState, useEffect, Fragment } from 'react';

import './App.scss';
import Row from './Row';
import Workspace from './Workspace';
import Title from './Title';
import requests from './requests';
import './App.scss';

//Component files
import Panels from './component/Panels';
import './component/Panels.scss';
import UserAuth from './auth/authUser';
import { db } from './config/firebase';

function App() {
  //sample database inside useState array; sets value to panels
  const [panels, setPanels] = useState([
    // {
    //   user_id: 1,
    //   name: 'Test1/rename to title!',
    //   description: 'Yangmingshan Taipei Chinese Pavilion!',
    //   music_id: '',
    //   media: [
    //     {
    //       mediaUrl:
    //         'https://p1.pxfuel.com/preview/326/736/1008/people-whimsical-lazy-suit.jpg'
    //     },
    //     {
    //       mediaUrl:
    //         'https://get.pxhere.com/photo/landscape-nature-grass-branch-light-sky-sun-fog-sunrise-sunset-mist-field-grain-sunlight-morning-dawn-summer-dusk-evening-harvest-autumn-fields-mood-arable-atmospheric-phenomenon-grass-family-642150.jpg'
    //     },
    //     {
    //       mediaUrl:
    //         'https://static.pexels.com/photos/8486/water-rain-raindrops-drops.jpg'
    //     }
    //   ]
    // },
    // {
    //   user_id: 2,
    //   name: 'Test2/rename to title!',
    //   description: 'Yangmingshan Taipei Chinese Pavilion2!',
    //   music_id: '',
    //   media: [
    //     {
    //       mediaUrl:
    //         'https://get.pxhere.com/photo/landscape-nature-grass-branch-light-sky-sun-fog-sunrise-sunset-mist-field-grain-sunlight-morning-dawn-summer-dusk-evening-harvest-autumn-fields-mood-arable-atmospheric-phenomenon-grass-family-642150.jpg'
    //     },
    //     {
    //       mediaUrl:
    //         'https://c.pxhere.com/photos/81/db/autumn_forest_autumn_forest_trees_leaves_sunbeam_nature_sunlight-967621.jpg!d'
    //     },
    //     {
    //       mediaUrl:
    //         'https://static.pexels.com/photos/8486/water-rain-raindrops-drops.jpg'
    //     }
    //   ]
    // },
    // {
    //   user_id: 3,
    //   name: 'Test3/rename to title!',
    //   description: 'Yangmingshan Taipei Chinese Pavilion!',
    //   music_id: '',
    //   media: [
    //     {
    //       mediaUrl:
    //         'https://p1.pxfuel.com/preview/326/736/1008/people-whimsical-lazy-suit.jpg'
    //     },
    //     {
    //       mediaUrl:
    //         'https://c.pxhere.com/photos/81/db/autumn_forest_autumn_forest_trees_leaves_sunbeam_nature_sunlight-967621.jpg!d'
    //     },
    //     {
    //       mediaUrl:
    //         'https://static.pexels.com/photos/8486/water-rain-raindrops-drops.jpg'
    //     }
    //   ]
    // },
    // {
    //   user_id: 4,
    //   name: 'Test4/rename to title!',
    //   description: 'Yangmingshan Taipei Chinese Pavilion2!',
    //   music_id: '',
    //   media: [
    //     {
    //       mediaUrl:
    //         'https://get.pxhere.com/photo/landscape-nature-grass-branch-light-sky-sun-fog-sunrise-sunset-mist-field-grain-sunlight-morning-dawn-summer-dusk-evening-harvest-autumn-fields-mood-arable-atmospheric-phenomenon-grass-family-642150.jpg'
    //     },
    //     {
    //       mediaUrl:
    //         'https://c.pxhere.com/photos/81/db/autumn_forest_autumn_forest_trees_leaves_sunbeam_nature_sunlight-967621.jpg!d'
    //     },
    //     {
    //       mediaUrl:
    //         'https://static.pexels.com/photos/8486/water-rain-raindrops-drops.jpg'
    //     }
    //   ]
    // }
  ]);

  useEffect(() => {
    db.collection('panels').onSnapshot((snapshot) => {
      //every time onSnapshot fires from a change in 'images' (collection name in firebase), do this
      setPanels(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

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

      <div className='panels_canvis'>
        {panels.map((pane) => (
          <Panels
            name={pane.name}
            description={pane.description}
            music_id={pane.music_id}
            media={[...pane.media]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
