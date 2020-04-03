import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDNgLWyGTBiTMdH9MOHBBBSmPgX0rpl9wU",
    authDomain: "crwn-db-43af7.firebaseapp.com",
    databaseURL: "https://crwn-db-43af7.firebaseio.com",
    projectId: "crwn-db-43af7",
    storageBucket: "crwn-db-43af7.appspot.com",
    messagingSenderId: "28852941387",
    appId: "1:28852941387:web:e5362e36e30a6f38ebd3ce"

}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase