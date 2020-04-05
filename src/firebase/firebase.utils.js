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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`) 

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}


firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase