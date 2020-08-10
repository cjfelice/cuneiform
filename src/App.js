import React, { useState, useEffect, Fragment } from 'react';
import Headroom from 'react-headroom';

import { db } from './config/firebase';

//Component files
import Panels from './component/Panels';
import MediaStorage from './component/MediaStorage';
import UserAuth from './auth/authUser';
import Navbar from './Navbar';
import Row from './Row';
import Workspace from './Workspace';
import requests from './requests';
import Workarea from './Workarea';
import Landcard from './Landcard';
import Title from './Title';
import ImageRow from './ImageRow';

import './App.scss';
import './component/Panels.scss';

import Cards from './component/Cards';
import { GridList, Box } from '@material-ui/core';

function App() {
  const [mode, setMode] = useState('HOME');

  const [panels, setPanels] = useState([]);

  useEffect(() => {
    db.collection('panels').onSnapshot((snapshot) => {
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
      <Headroom>
        <div className='header'>
          <Navbar setMode={setMode} />
        </div>
      </Headroom>
      {mode === 'NEWCANVAS' && (
        <div>
          <Workarea />
        </div>
      )}
      {mode === 'HOME' && (
        <div>
          <Landcard />
        </div>
      )}
      <Row title='Suggested Canvi' fetchUrl={requests.fetchTrending} />

      <GridList className='row'>
        {panels.map(({ id, panel }) => (
          <Panels
            key={id}
            panel_id={id}
            username={panel.username}
            title={panel.title}
            description={panel.description}
            music_id={panel.music_id}
            media={panel.media}
            mediaBox={panel.mediaBox}
            mediaCounter={panel.mediaCounter}
            time={panel.timestamp}
          />
        ))}
      </GridList>
    </div>
  );
}

export default App;
