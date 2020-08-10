import React, { useState, useEffect, Fragment } from 'react';

import MediaStorage from './MediaStorage';
import Cards from './Cards';

import firebase from 'firebase';

import Comments from './Comments';
import Canvas from '../Canvas';
import PanelsHeader from './PanelsHeader';
import PanelMedia from './PanelMedia';
import Row from '../Row';

import './Panels.scss';
import '../Workspace.scss';

import {
  CardContent,
  GridList,
  GridListTile,
  Container
} from '@material-ui/core';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {
  red,
  blue,
  white,
  grey,
  purple,
  blueGrey
} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import GridListTileBar from '@material-ui/core/GridListTileBar';

import StarBorderIcon from '@material-ui/icons/StarBorder';

import Box from '@material-ui/core/Box';

import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';

function Panels(props) {
  // title = name
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

  const user = firebase.auth().currentUser;
  console.log(user);
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      // maxHeight: 442,
      minHeight: 442,
      color: '#fff',
      padding: '10'
    },
    media: {
      height: 0,
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
    root_grid: {
      flexGrow: 1
    },
    paper: {
      color: theme.palette.text.secondary
    },
    gridlist__root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden'
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)'
    },
    gridlist__title: {
      color: theme.palette.primary.light
    },
    gridlist__titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
    }
  }));

  //Cards material ui
  const [like, setLike] = useState(false);

  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <GridListTile className='panels'>
      <Paper>
        <GridList
          cellHeight='auto'
          rows={12}
          cols={1}
          className={classes.gridlist}
        >
          <GridListTile rows={2} cols={1}>
            <PanelsHeader username={username} title={title} time={time} />
          </GridListTile>

          <GridListTile rows={4} cols={1}>
            <PanelMedia
              media={media}
              mediaBox={mediaBox}
              mediaCounter={mediaCounter}
            />
          </GridListTile>

          <GridListTile rows={3} cols={1}>
            <CardContent>
              <TextInfoContent
                useStyles={useN01TextInfoContentStyles}
                overline={''}
                heading={title}
                body={description}
              />
            </CardContent>
          </GridListTile>

          <GridListTile rows={2} cols={1}>
            <CardActions disableSpacing>
              {like ? (
                <IconButton
                  aria-label='add to favorites'
                  onClick={(e) => setLike(false)}
                >
                  <FavoriteIcon />
                </IconButton>
              ) : (
                <IconButton
                  aria-label='add to favorites'
                  onClick={(e) => setLike(true)}
                >
                  <FavoriteBorderIcon className={classes.like} />
                </IconButton>
              )}

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </GridListTile>

          <GridListTile rows={1} cols={1}>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <Comments username={username} panel_id={panel_id} />
            </Collapse>
          </GridListTile>
        </GridList>
      </Paper>
    </GridListTile>
  );
}

export default Panels;
