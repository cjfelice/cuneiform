import React, { useState, useEffect, Fragment } from 'react';

import { db } from '../../config/firebase';
import ReactPlayer from 'react-player';

import Cards from '../Cards';

import './Panels.scss';

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

function Comments(props) {
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

  const [comments, setComments] = useState([]);
  const [remark, setRemark] = useState('');

  useEffect(() => {
    let done;
    if (panel_id) {
      done = db
        .collection('panels')
        .doc(panel_id)
        .collection('comments')
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      done();
    };
  }, [panel_id]);

  const saveRemark = (e) => {};

  const dateConversion = (seconds) => {
    return seconds.toDate().toDateString();
  };

  const renderRemark = (e) => {
    const { comment } = e;

    return (
      <>
        <Typography paragraph>Comments</Typography>

        <Typography paragraph>
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
        </Typography>
      </>
    );
  };
}

export default Comments;
