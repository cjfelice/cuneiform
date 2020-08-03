import firebase from "firebase";
const ENV = process.env;

const firebaseApp = firebase.initializeApp({
  apiKey: ENV["REACT_APP_FIREBASE_KEY"],
  authDomain: ENV["REACT_APP_FIREBASE_AUTH_DOMAIN"],
  databaseURL: ENV["REACT_APP_FIREBASE_DB_URL"],
  projectId: ENV["REACT_APP_FIREBASE_PROJECT_ID"],
  storageBucket: ENV["REACT_APP_FIREBASE_STORAGE_BUCKET"],
  messagingSenderId: ENV["REACT_APP_FIREBASE_MESSAGING_SENDER_ID"],
  appId: ENV["REACT_APP_FIREBASE_APP_ID"],
  measurementId: ENV["REACT_APP_FIREBASE_MEASUREMENT_ID"],
});

const db = firebaseApp.firestore();
const storage = firebase.storage();

export { db, storage };

/*

Add this to the top of page where required

import { db } from './firebase';
--
Example, in case I forget

import Images from './Images';
---

Add code where needed; this is a sample that works

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    db.collection('Images').onSnapshot((snapshot) => {
      //every time onSnapshot fires from a change in 'images' (collection name in firebase), do this
      setImages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div>
      {images.map((image) => (
        <Images imageUrl={image.image_url} />
      ))}
      <Images />
    </div>
  );
}
----
This is test code used to verify connectivity with firebase

import React from 'react';


function Images(props) {
  const { imageUrl } = props;

  return (
    <div className='images-test'>
      <h3>test</h3>
      <img src={imageUrl}></img>
    </div>
  );
}

export default Images;

*/
