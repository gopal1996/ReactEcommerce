import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyClh8W2SxTN1Mp0zAYd3a-Z6vQQ1nxS7K0",
    authDomain: "crwn-db-f9490.firebaseapp.com",
    databaseURL: "https://crwn-db-f9490.firebaseio.com",
    projectId: "crwn-db-f9490",
    storageBucket: "crwn-db-f9490.appspot.com",
    messagingSenderId: "952115496466",
    appId: "1:952115496466:web:90c4ebc1c79273fbba3acb",
    measurementId: "G-X8SJ0D2P5C"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;