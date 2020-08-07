import React, { useState, useEffect, Fragment } from 'react';

import './App.scss';
import Row from './Row';
import Workspace from './Workspace';
import Title from './Title';
import requests from './requests';
import './App.scss';

//Component files
import Panels from './component/Panels';
import Cards from './component/Cards';
// import MediaStorage from './component/doNotUse/MediaStorage';
import './component/Panels.scss';
import UserAuth from './auth/authUser';
import { db } from './config/firebase';

function App() {
  const [panels, setPanels] = useState([]);
  /*
  - for the time being, panels and cards will be used interchangeably; cards use material ui, panels were created initially for setup and testing. can now use the functional elements of panels and apply them to cards.
  - hardcoded data set is in dummyData.js if required
*/

  useEffect(() => {
    db.collection('panels').onSnapshot((snapshot) => {
      //every time onSnapshot fires from a change in 'panels' (collection name in firebase), do this only
      setPanels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          panel: doc.data()
        }))
      );
    });
  }, []);

  return (
    <div className='App'>
      {/* HEADER */}
      <div className='header'>
        <div>TEST</div>
        {/* User Sign-in/Sign-up/Logout */}
        <UserAuth />
        <Title text='chiMera' />
      </div>

      {/* CANVAS CREATING AND EDITING */}
      <div>
        {/* available conditional statement to check if user is signed in or not */}
        <Workspace />
      </div>

      {/* USER COMPLETED PANELS/CARDS OTHER CREATED PANELS */}
      <div>
        <Row title='Suggested Canvi' fetchUrl={requests.fetchTrending} />
      </div>

      <div className='panels_canvis'>{/* <Cards /> */}</div>

      {/* the map function commented out below is for use when not using firebase
      {panels.map((panel) => ( */}
      {/* This map function will convert data from db into individual cards/panels */}
      <div className='panels_canvis'>
        {panels.map(({ id, panel }) => (
          <Panels
            key={id}
            panel_id={id}
            username={panel.username}
            title={panel.title}
            description={panel.description}
            music_id={panel.music_id}
            media={[...panel.media]}
            time={panel.timestamp}
          />
        ))}
      </div>
      <Cards />
    </div>
  );
}

export default App;
