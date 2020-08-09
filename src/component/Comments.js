import React, { useState, useEffect, Fragment } from 'react';

import firebase from 'firebase';
import { db } from '../config/firebase';

import MediaStorage from './MediaStorage';
import UserAuth, { currentUser } from '../auth/authUser';

// import Comments from './Comments';
import './Panels.scss';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function Comments(props) {
  const { username, panel_id } = props;
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
      username: username,
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
        <Typography>
          {comments.map((comment) => (
            <>
              <b>{comment.username}</b>
              <Typography variant='body2' color='textSecondary' component='p'>
                {comment.remark}
                <p>{dateConversion(comment.timestamp)}</p>
              </Typography>
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
