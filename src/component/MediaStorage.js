import React, { useState } from 'react';

import firebase from 'firebase';
import { storage } from '../config/firebase';
import './MediaStorage.css';

import Title from '../Title';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';

// NOT WORKING YET, HAVE TO CHANGE SOME PROPS AND OR VALUES
function MediaStorage(props) {
  const user = firebase.auth().currentUser;

  const { panel_id } = props;

  const [progress, setProgress] = useState(0);
  const [media, setMedia] = useState('');
  const [url, setUrl] = useState('');
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [error, setError] = useState('');

  function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    button: {
      margin: theme.spacing(1)
    },
    input: {
      //   display: 'none',
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };
  console.log(media);
  // const handleUpload = (e) => {
  //   e.preventDefault();

  //   const uploadTask = storage.ref(`panels/${media.name}`).put(media);
  //   uploadTask.on(
  //     'state_changed',
  //     (snapshot) => {
  //       const progress = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(progress);
  //     },
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       storage
  //         .ref('panels')
  //         .child(media.name)
  //         .getDownloadUrl()
  //         .then((url) => {
  //           setUrl(url);

  //           setProgress(0);
  //           setMedia(null);
  //         });
  //     }
  //   );
  // };

  const handleUpload = (e) => {
    e.preventDefault();

    if (media) {
      const uploadTask = storage.ref(`panels/${media.name}`).put(media);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          setError(error);
        },
        () => {
          storage
            .ref('panels')
            .child(media.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              setUrl(url);
              setProgress(0);
              setOpen(false);
            });
        }
      );
    } else {
      setError('Error please choose an media to upload');
    }
  };

  console.log('\n\nmedia url:>>>:', url);
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <Title text='chiMera' />
          <>{progress > 0 ? <progress value={progress} max='100' /> : ''}</>
          <form className='chimera__signup'>
            <form>
              <Input type='file' onChange={handleChange} />
              <Input
                placeholder='None'
                type='hidden'
                value={media}
                onChange={(event) => setMedia(event.target.value)}
              />
              <Button type='submit' onClick={handleUpload}>
                SAVE
              </Button>
            </form>
          </form>
        </div>
      </Modal>
      {url ? (
        <a href={url}>{url}</a>
      ) : (
        <Button onClick={() => setOpen(true)}>UPLOAD!</Button>
      )}
    </>
  );
}
export default MediaStorage;

/*
        <div style={modalStyle} className={classes.paper}>
          <form className='chimera__signup'>
            <Title text='chiMera' />

            <Input
              placeholder='Title'
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder='Description'
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button onClick={handleUpload}>Publish!</Button>
          </form>
        </div>
      </Modal>
      <Button onClick={() => setOpen(true)}>SAVE</Button>
    </>
{ */
/* <Input
  placeholder='Load file'
  type='text'
  value={media}
  onChange={(event) => setMedia(event.target.value)}
<Input type='file' onChange={handleChange} />
<Button type='submit' onClick={handleUpload}>
  Load
</Button>
/> 
}

/
/* <input
  <input type='file' onChange={handleChange} />
  type='text'
  placeholder='Load a file...'
  value={media}
  onChange={(event) => setMedia(event.target.value)}
/>
<button type='submit' onClick={handleUpload}>
  Load
</button> */
