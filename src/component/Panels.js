import React, { useState, useEffect, Fragment } from 'react';

import MediaStorage from './MediaStorage';
import Cards from './Cards';
import UserAuth, { currentUser } from '../auth/authUser';

// import Comments from './Comments';
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
  avatar: {
    backgroundColor: purple[900]
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
  // comments state
  const [comments, setComments] = useState([]);
  const [remark, setRemark] = useState('');
  // comment save
  const saveRemark = (event) => {
    event.preventDefault();
    db.collection('panels').doc(panel_id).collection('comments').add({
      remark: remark,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setRemark('');
  };
  //converts server time to people time
  const dateConversion = (seconds) => {
    if (seconds) {
      return seconds.toDate().toDateString();
    }
    return 0;
  };
  //db update when new comment (onSnapshot)
  useEffect(() => {
    let done;
    if (panel_id) {
      done = db
        .collection('panels') //reference to firebase collection name
        .doc(panel_id) //the panel id in firebase
        .collection('comments') //the comments section (collection in firebase speak) in the panels collection
        .onSnapshot((snapshot) => {
          //everytime there is a change in the db, setComments state to the values mapped back locally
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      done(); //run the 'done' function (see done = db above)
    };
  }, [panel_id]); //reset useEffect so it will run again everytime panel_id changes
  console.log(currentUser);
  return (
    <div className='panels'>
      <Card>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>{username[0]}</Avatar>}
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={dateConversion(time)}
        />

        <div className='panels_canvis'>
          {media.map((item) => {
            return (
              <img className='panels_canvi' image={item.mediaUrl} alt='' />
            );
          })}
        </div>

        <CardContent>
          <Typography variant='body2' color='textPrimary' component='p'>
            {description}
          </Typography>
        </CardContent>
        <CardContent>
          <div>
            <div className='panels'>
              <div className='panels_header'>
                <h1 className='panels_title'>{title}</h1>

                <h1 className='panels_user'>{username}</h1>
              </div>
              <div className='panels_canvis'>
                {media.map((item) => {
                  return (
                    <img className='panels_media' src={item.mediaUrl} alt='' />
                  );
                })}
              </div>

              <h4 className='panels_user'>{description}</h4>
              {/* h1 and h4 tags are only placeholders here */}
            </div>
          </div>
          );
        </CardContent>

        <CardActions disableSpacing>
          {/* IconButton Makes Button clickable */}
          <IconButton aria-label='add to favorites'>
            {like ? (
              <FavoriteIcon onClick={(e) => setLike(false)} />
            ) : (
              <FavoriteBorderIcon
                className={classes.like}
                onClick={(e) => setLike(true)}
              />
            )}
          </IconButton>

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
          <CardContent>
            {currentUser ? (
              <UserAuth />
            ) : (
              <>
                <form>
                  <input
                    type='text'
                    placeholder='Add comment'
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                  />

                  <button type='submit' disabled={!remark} onClick={saveRemark}>
                    Add
                  </button>
                </form>
                <form>
                  <MediaStorage username={username} panel_id={panel_id} />
                </form>
              </>
            )}
          </CardContent>
          <CardContent>
            <Typography paragraph>
              {comments.map((comment) => (
                <>
                  <b>{comment.username}</b>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    {comment.remark}
                    <p>{dateConversion(comment.timestamp)}</p>
                  </Typography>
                </>
              ))}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
    /*----------------------------*/
  );
}

export default Panels;
/*

   <div>
      <div className='panels'>
        <div className='panels_header'>
          <h1 className='panels_title'>{title}</h1>

          <h1 className='panels_user'>{username}</h1>
        </div>
        <div className='panels_canvis'>
          {media.map((item) => {
            return <img className='panels_media' src={item.mediaUrl} alt='' />;
          })}
        </div>

        <h4 className='panels_user'>{description}</h4>
         h1 and h4 tags are only placeholders here 
        <form>
          <Typography paragraph>
            <TextareaAutosize
              aria-label='empty textarea'
              placeholder='Add comment'
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
            />
          </Typography>
          <IconButton className='panel__remarkButton'>
            <AddIcon disabled={!remark} type='submit' onClick={saveRemark}>
              Add
            </AddIcon>
          </IconButton>
        </form>
        <div>
          {comments.map((comment) => (
            <>
              <b>{comment.username}</b>
              <Typography variant='body2' color='textSecondary' component='p'>
                {comment.remark}
              </Typography>
            </>
          ))}
        </div>
      </div>
    </div >

          
           */
