import React, { useState } from 'react';

import Image from '../Image';
import Video from '../Video';

import './Panels.scss';
import '../Workspace.scss';

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
      // maxWidth: 345,
      // maxHeight: '30%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden'
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
    },
    gridList: {
      width: 500,
      height: 350,

      transform: 'translateZ(0)',
      backgroundColor: '#424242'
    }
  }));

  //Cards material ui
  const [like, setLike] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //set the height of each cell in grid list
  let cell = 175;

  return (
    <Box className={classes.root}>
      <GridList cellHeight='auto' spacing={0} className={classes.gridList}>
        {media.map(({ mediaUrl, mediaType, mediaBox_id, length }) =>
          mediaBox.map(({ i, h, w, x, y }) => {
            if (mediaBox_id === i) {
              let width = Math.floor((w / 20) * 12);
              // let height = Math.floor((h / 31) * 100);

              let wide = w > h * 1.1 ? 2 : 1;
              let height = h > w ? 2 : 1;

              if (mediaCounter % 2 !== 0) {
                wide = 2;
                height = 2;
              }

              if (mediaCounter === 1) {
                width = 12;
                wide = 2;
              }

              return (
                <GridListTile
                  key={mediaBox_id}
                  xs={width}
                  cols={wide}
                  rows={height}
                >
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

{
  /* <GridListTile key={mediaBox_id} cols={w} rows={h}></GridListTile> */
}
