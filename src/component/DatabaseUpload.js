import React, { useState, useEffect } from 'react';

import firebase from 'firebase';
import { db } from '../config/firebase';

import { Button } from '@material-ui/core';

function DatabaseUpload(props) {
  const { title, description, username, mediaUrl, music_id } = props;

  const handleUpload = () => {
    db.collection('panels').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      title: title,
      media: [...mediaUrl],
      username: username,
      description: description,
      music_id: music_id
    });
  };

  return (
    <div>
      {/* FORM ELEMENT MAY NOT BE NECESSARY FOR BUTTON */}
      <form>
        <Button onClick={handleUpload}>SAVE</Button>
      </form>
    </div>
  );
}

export default DatabaseUpload;
