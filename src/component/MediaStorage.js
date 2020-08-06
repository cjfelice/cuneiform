import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import firebase from 'firebase';
import { db, storage } from '../config/firebase';

// NOT WORKING YET, HAVE TO CHANGE SOME PROPS AND OR VALUES
function MediaStorage(props) {
  const { title, description, username, mediaUrl, music_id } = props;
  const [title, setTitle] = useState('');
  const [progress, setProgress] = useState(0);
  const [media, setMedia] = useState('');
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const handleUpload = () => {
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
        console.log(error);
      },
      () => {
        storage
          .ref('panels')
          .child(media.name)
          .getDownloadUrl()
          .then((url) => {
            db.collection('panels').add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              title: title,
              media: [{ mediaUrl: mediaUrl }],
              username: username
            });
            setProgress(0);
            setTitle('');
            setMedia(null);
          });
      }
    );
  };
  console.log(mediaUrl, title);
  return (
    <div>
      {/* NEED TO WRAP INPUT AND BUTTON ELEMENTS IN FORM ELEMENT */}
      <progress value={progress} max='100' />
      {/* <input
        type='text'
        placeholder='Enter a title'
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <input
        type='text'
        placeholder='Enter media url'
        onChange={(event) => setMedia(event.target.value)}
        value={media}
      /> */}
      <Button onClick={handleUpload}>Load</Button>
      {/* <input
        type='url'
        placeholder='Enter media link'
        onChange={(event) => setMedia(event.target.value)}
        value={media}
      />
      <Button onClick={handleUpload}>Add</Button> */}
    </div>
  );
}

/* CONDITION STATEMENT THAT MAY BE USED FOR ALLOWING EDITING/COMMENTING/LIKING
{
  user ? <MediaStorage username={username} /> : <h3>Please Login to Upload</h3>;
}
*/
export default MediaStorage;
