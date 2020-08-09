import React, { useState, useEffect, Fragment } from 'react';

import MediaStorage from './MediaStorage';
import Cards from './Cards';
import UserAuth, { currentUser } from '../auth/authUser';

import Comments from './Comments';
import Canvas from '../Canvas';
import PanelsHeader from './PanelsHeader';
import './Panels.scss';
import firebase from 'firebase';

import { db } from '../config/firebase';

import ReactPlayer from 'react-player';

import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, grey, purple, blueGrey } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Box from '@material-ui/core/Box';
import TextInfoContent from '@mui-treasury/components/content/textInfo';

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

function Panels(props) {
  // title = name
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

  const [like, setLike] = useState(false);

  //Cards material ui
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='panels'>
      <PanelsHeader username={username} title={title} time={time} />

      {/* Canvas will go here */}
      <CardContent className='panels_canvis'>
        <Canvas mediaBox={mediaBox} media={media} />
      </CardContent>

      <CardContent>
        <Typography variant='body2' color='textPrimary' component='p'>
          {description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {/* IconButton Makes Button clickable */}
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

        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>

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

      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <Comments username={username} panel_id={panel_id} />
      </Collapse>
    </Card>
  );
}

export default Panels;
