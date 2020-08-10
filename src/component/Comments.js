import React, { useState, useEffect, Fragment } from 'react';

import firebase from 'firebase';
import { db } from '../config/firebase';

import MediaStorage from './MediaStorage';

// import Comments from './Comments';
import './Panels.scss';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { CardActionArea } from '@material-ui/core';

function Comments(props) {
  const user = firebase.auth().currentUser;
  console.log(user);
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }

  const { panel_id } = props;
  // comments state
  const [comments, setComments] = useState([]);
  const [remark, setRemark] = useState('');

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // comment save
  const saveRemark = (event) => {
    event.preventDefault();
    db.collection('panels').doc(panel_id).collection('comments').add({
      remark: remark,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setRemark('');
  };

  //db update when new comment (onSnapshot)
  useEffect(() => {
    let done;
    if (panel_id) {
      done = db
        .collection('panels') //reference to firebase collection name
        .doc(panel_id) //the panel id in firebase
        .collection('comments') //the comments section (collection in firebase speak) in the panels collection
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
          //everytime there is a change in the db, setComments state to the values mapped back locally
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      done(); //run the 'done' function (see done = db above)
    };
  }, [panel_id]); //reset useEffect so it will run again everytime panel_id changes

  //converts server time to people time
  const dateConversion = (seconds) => {
    if (seconds) {
      return seconds.toDate().toDateString();
    }
    return 0;
  };

  return (
    <>
      <CardContent>
        <Divider />
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
      </CardContent>

      <CardContent>
        <MediaStorage />
        <Typography>
          {comments.map((comment) => (
            <>
              <Divider />
              <TextInfoContent
                useStyles={useN01TextInfoContentStyles}
                overline={dateConversion(comment.timestamp)}
                heading={comment.username}
                body={comment.remark}
              />

              {/* <b>{comment.username}</b>
              <Typography variant='body2' color='textSecondary' component='p'>
                {comment.remark}
                <p>{dateConversion(comment.timestamp)}</p>
              </Typography> */}
            </>
          ))}
        </Typography>
      </CardContent>
    </>
  );
}

export default Comments;

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
