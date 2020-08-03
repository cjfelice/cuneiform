import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
});

const db = firebaseApp.firestore();
const storage = firebase.storage();
console.log(db);
export { db, storage };

//Add this to the top of page where required
// import { db } from './firebase';

/* Add this inside Images function

const [images, setImages] = useState;

useEffect(() => {
  db.collection('Images').onSnapshot((snapshot) => {
    //every time onSnapshot fires from a change in 'canvases' (collection name in firebase), do this
    setImages(snapshot.docs.map((doc) => ({ id: doc.id, image: doc.data() })));
  });
}, []);

function Images() {
  return <div className='images-test'>test</div>;
}
*/
