import React, { useState, useEffect, Fragment } from 'react';
import firebase from 'firebase';

import PanelMedia from './PanelMedia';
import PanelsHeader from './PanelsHeader';
import Comments from './Comments';
import DeletePanel from './DeletePanel';
import Row from '../Row';

import './Panels.scss';
import '../Workspace.scss';

import {
  CardContent,
  GridList,
  Card,
  Container,
  Box,
  CardMedia,
  CardHeader,
  Avatar,
  GridListTile,
  Button,
  Menu,
  CardActions,
  Collapse,
  MenuItem,
  IconButton,
  Typography,
  Paper
} from '@material-ui/core';

import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import clsx from 'clsx';

import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VisibilityIcon from '@material-ui/icons/Visibility';

import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';

function Panels(props) {
  // title = name
  const {
    title,
    description,
    time,
    media,
    mediaBox,
    mediaCounter,
    panel_id,
    username,
    id
  } = props;

  const user = firebase.auth().currentUser;

  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: '345',
      // maxHeight: 442,
      // minHeight: 442,
      // color: "#fff",
      // padding: "10",
      backgroundColor: 'white',
      backgroundImage: `url("https://www.transparenttextures.com/patterns/rice-paper-3.png")`
    },
    media: {
      height: 250,
      width: '100%',
      maxHeight: 250,
      objectFit: 'cover'
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
    avatar: {
      backgroundColor: red[500]
    },
    like: {
      color: '#FC766AFF'
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box container>
      <DeletePanel username={username} panel_id={panel_id} />
      <Card className={classes.root}>
        <div
          onClick={() => {
            user.displayName === username
              ? props.createGallery(media, mediaBox, title)
              : props.openModal(media, mediaBox, title);
          }}
          style={{ cursor: 'pointer' }}
        >
          <PanelsHeader username={username} title={title} time={time} />
        </div>
        <div className='card-grid-display'>
          <PanelMedia
            media={media}
            mediaBox={mediaBox}
            mediaCounter={mediaCounter}
          />
        </div>
        <div style={{ backgroundColor: '#5B84B1FF', color: 'white' }}>
          <CardContent
            style={{
              'padding-left': '16px',
              'padding-top': '10px',
              'padding-bottom': '0px'
            }}
          >
            <Typography>{description}</Typography>
          </CardContent>
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
            <div style={{ color: 'white', marginLeft: 4, fontSize: 20 }}>
              <Button variant='contained' color='primary'>
                {username}
              </Button>
            </div>
            <IconButton
              aria-label='share'
              onClick={() => props.openModal(media, mediaBox)}
            >
              <ShareIcon style={{ color: '#f5ba55' }} />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <CommentIcon style={{ color: '#f5ba55' }} />
            </IconButton>
          </CardActions>
        </div>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {!user ? (
            <h6>Sign In to Join Us!</h6>
          ) : (
            <Comments username={username} panel_id={panel_id} key={id} />
          )}
        </Menu>
      </Card>
    </Box>
    // <GridListTile className="panels">
    //   <Paper>
    //     <GridList
    //       cellHeight="auto"
    //       rows={12}
    //       cols={1}
    //       className={classes.gridlist}
    //     >
    //       <GridListTile rows={2} cols={1}>
    //         <PanelsHeader username={username} title={title} time={time} />
    //       </GridListTile>

    //       <GridListTile rows={4} cols={1}>

    // </GridListTile>

    // <GridListTile rows={3} cols={1}>
    //   <CardContent>
    //     <TextInfoContent
    //       useStyles={useN01TextInfoContentStyles}
    //       overline={""}
    //       heading={title}
    //       body={description}
    //     />
    //   </CardContent>
    // </GridListTile>

    // <GridListTile rows={2} cols={1}>
    //   <CardActions disableSpacing>
    //     {like ? (
    //       <IconButton
    //         aria-label="add to favorites"
    //         onClick={(e) => setLike(false)}
    //       >
    //         <FavoriteIcon />
    //       </IconButton>
    //     ) : (
    //       <IconButton
    //         aria-label="add to favorites"
    //         onClick={(e) => setLike(true)}
    //       >
    //         <FavoriteBorderIcon className={classes.like} />
    //       </IconButton>
    //     )}

    //     <IconButton
    //       className={clsx(classes.expand, {
    //         [classes.expandOpen]: expanded,
    //       })}
    //       onClick={handleExpandClick}
    //       aria-expanded={expanded}
    //       aria-label="show more"
    //     >
    //       <ExpandMoreIcon />
    //     </IconButton>
    //   </CardActions>
    // </GridListTile>

    // <GridListTile rows={1} cols={1}>
    //   <Collapse in={expanded} timeout="auto" unmountOnExit>
    //     {!user ? (
    //       <h6>Sign In to Join Us!</h6>
    //     ) : (
    //       <Comments username={username} panel_id={panel_id} key={id} />
    //           )}
    //         </Collapse>
    //       </GridListTile>
    //     </GridList>
    //   </Paper>
    // </GridListTile>
  );
}

export default Panels;
