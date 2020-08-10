import React, { useState } from 'react';

import Image from '../Image';
import Video from '../Video';

import './Panels.scss';
import '../Workspace.scss';
import firebase from 'firebase';

import { db } from '../config/firebase';

import ReactPlayer from 'react-player';

import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import { red, grey, purple, blueGrey } from '@material-ui/core/colors';

import {
  GridList,
  GridListTile,
  Container,
  Grid,
  CardContent
} from '@material-ui/core';

function PanelMedia(props) {
  const {
    title,
    description,
    music_id,
    time,
    media,
    mediaBox,
    mediaCounter,
    panel_id,
    username,
    id
  } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      maxHeight: '30%'
    },
    media: {
      // height: 0,
      paddingTop: '1%',
      backgroundColor: '#424242',
      minwidth: '100%'
    },
    description: {
      // height: 0,
      paddingTop: '56.25%'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    like: {
      color: red[500]
    }
  }));

  //Cards material ui
  const [like, setLike] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log('\n\nmedia:>>', media);
  console.log('\n\nmediaBox:>>', mediaBox);

  console.log(mediaCounter);

  return (
    <Box className={classes.root}>
      <GridList cols={20} rows={31} cellHeight={10} className={classes.media}>
        {media.map(({ mediaUrl, mediaType, mediaBox_id, length }) =>
          mediaBox.map(({ i, h, w, x, y }) => {
            if (mediaBox_id === i) {
              // let width = Math.floor((w / 20) * 100);
              // let height = Math.floor((h / 31) * 100);

              return (
                <GridListTile key={mediaBox_id} cols={w} rows={h}>
                  {mediaType === 'TEXT' && <div>{mediaUrl}</div>}
                  {mediaType === 'VIDEO' && <Video content={mediaUrl} />}

                  {mediaType === 'IMAGE' && <Image content={mediaUrl} />}
                  {mediaType === 'AUDIO' && (
                    <ReactPlayer
                      width='100%'
                      height='100%'
                      url={mediaUrl}
                      controls
                      muted
                      config={{
                        youtube: {
                          playerVars: { showinfo: 1 }
                        }
                      }}
                    />
                  )}
                </GridListTile>
              );
            }
          })
        )}
      </GridList>
    </Box>
  );
}

export default PanelMedia;
