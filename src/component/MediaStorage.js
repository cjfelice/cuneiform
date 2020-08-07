import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';
import firebase from 'firebase';
import { db, storage } from '../config/firebase';
import Modal from '@material-ui/core/Modal';

// NOT WORKING YET, HAVE TO CHANGE SOME PROPS AND OR VALUES
function MediaStorage(props) {
  const { username, panel_id } = props;
  console.log(username);
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
    //panels/{median.name} is the filename upload to the panels folder in firebase storage
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
              // title: title,
              media: [{ mediaUrl: url }],
              username: username
            });
            setProgress(0);
            setTitle('');
            setMedia(null);
          });
      }
    );
  };

  return (
    <>
      {/* NEED TO WRAP INPUT AND BUTTON ELEMENTS IN FORM ELEMENT */}
      <Modal>
        <div>
          <progress value={progress} max='100' />
          <form>
            <Input type='file' onChange={handleChange} />
            <Input
              placeholder='Load Image'
              type='text'
              value={media}
              onChange={(event) => setMedia(event.target.value)}
            />
            <Button type='submit' onClick={handleUpload}>
              Signup
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
}
{
  /* <Input
  placeholder='Load file'
  type='text'
  value={media}
  onChange={(event) => setMedia(event.target.value)}
<Input type='file' onChange={handleChange} />
<Button type='submit' onClick={handleUpload}>
  Load
</Button>
/> */
}

/* CONDITION STATEMENT THAT MAY BE USED FOR ALLOWING EDITING/COMMENTING/LIKING
{
  user ? <MediaStorage username={username} /> : <h3>Please Login to Upload</h3>;
}
*/

export default MediaStorage;

{
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
}
