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

import { red, grey, purple, blueGrey } from '@material-ui/core/colors';

import { GridList, GridListTile, Container } from '@material-ui/core';

function PanelMedia(props) {
  const {
    title,
    description,
    music_id,
    time,
    media,
    mediaBox,
    panel_id,
    username,
    id
  } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      maxHeight: 442,
      color: blueGrey[700]
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
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

  return (
    <>
      <Container>
        <GridList cols={20} rows={31} cellHeight={10}>
          {media.map(({ mediaUrl, mediaType, mediaBox_id, length }) =>
            mediaBox.map(({ i, h, w, x, y }) => {
              if (mediaBox_id === i) {
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
      </Container>
    </>
  );
}

export default PanelMedia;
