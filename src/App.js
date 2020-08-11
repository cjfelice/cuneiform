import React, { useState, useEffect, Fragment } from 'react';
import Headroom from 'react-headroom';
import PresentCanvas from './PresentCanvas';
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import GitHubIcon from '@material-ui/icons/GitHub';
import { db } from './config/firebase';

//Component files
import Panels from './component/Panels';
import Footer from 'rc-footer';
import Toolbar from './Toolbar';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import MediaStorage from './component/MediaStorage';
import UserAuth from './auth/authUser';
import Navbar from './Navbar';
import GalleryCanvas from './GalleryCanvas';
import Row from './Row';
import Workspace from './Workspace';
import requests from './requests';
import Workarea from './Workarea';
import Landcard from './Landcard';
import Title from './Title';
import ImageRow from './ImageRow';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './Workspace.scss';

import './App.scss';
import './component/Panels.scss';

import Cards from './component/Cards';
import { GridList, Box, IconButton } from '@material-ui/core';
import { getThemeProps } from '@material-ui/styles';

function App() {
  const [mode, setMode] = useState('HOME');
  const [panels, setPanels] = useState([]);
  const [media, setMedia] = useState();
  const [title, setTitle] = useState();
  const [mediaBox, setMediaBox] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [trigger, setTrigger] = useState(false);

  /*
  - for the time being, panels and cards will be used interchangeably; cards use material ui, panels were created initially for setup and testing. can now use the functional elements of panels and apply them to cards.
  - hardcoded data set is in dummyData.js if required
*/

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

  // useEffect(() => {
  //   if (trigger === true) {
  //     setMode("CREATEDCANVAS");
  //   }
  // }, [trigger]);

  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Raleway'
    },
    overrides: {
      MuiButton: {
        raisedPrimary: {
          color: 'white'
        }
      }
    }
  });

  const createModal = (media, mediaBox, title) => {
    setMedia(media);
    setMediaBox(mediaBox);
    setTitle(title);
    setOpenModal(true);
  };
  const createGallery = (media, mediaBox, title) => {
    setMedia(media);
    setMediaBox(mediaBox);
    setTitle(title);
    setMode('CREATEDCANVAS');
  };
  console.log('panels:', panels);
  return (
    <div className='App'>
      <MuiThemeProvider theme={theme}>
        <Headroom>
          <div className='header'>
            <Navbar setMode={setMode} userName={userName} />
          </div>
        </Headroom>
        {mode === 'NEWCANVAS' && (
          <div>
            <Workarea createGallery={createGallery} />
          </div>
        )}
        {mode === 'CREATEDCANVAS' && (
          <>
            <Toolbar canvasName={title} />
            <div className='workspace'>
              <GalleryCanvas media={media} mediaBox={mediaBox} />
            </div>
          </>
        )}
        {mode === 'HOME' && (
          <div>
            <Landcard getStarted={() => setMode('NEWCANVAS')} />
          </div>
        )}
        <PresentCanvas
          media={media}
          mediaBox={mediaBox}
          openModal={openModal}
          closeModal={setOpenModal}
        />
        {mode !== 'NEWCANVAS' && (
          <Row
            title='Suggested Canvi'
            fetchUrl={requests.fetchTrending}
            panels={panels}
            openModal={createModal}
          />
        )}
        <div style={{ height: 100 }}></div>
        <Footer
          style={{ fontFamily: 'Varela Round' }}
          backgroundColor='transparent'
          columns={[
            {
              icon: (
                <IconButton style={{ color: 'white' }}>
                  <GitHubIcon />
                </IconButton>
              ),
              url: 'https://github.com/cjfelice/cuneiform',
              openExternal: true
            }
          ]}
          bottom={`Made for the Lighthouse Bootcamp by Rubin Jhand & Christopher Smith`}
        />
        ,
      </MuiThemeProvider>
    </div>
  );
}

export default App;
