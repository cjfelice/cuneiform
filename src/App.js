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
import { GridList, Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
}));

function App() {
  const classes = useStyles();
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
    <Paper>
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

        <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5}>
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
        {/* <GridList className='app__panels' cols={2}>
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
        </GridList> */}
      </div>
    </Paper>
  );
}

export default App;
