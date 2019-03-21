import firebase from 'firebase'
import 'firebase/firestore'
import { user, authState, idToken } from 'rxfire/auth'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyA7iHfY6FaI4HptBHdBJN7aBlMpeVk8w_g',
  authDomain: 'geobump-app.firebaseapp.com',
  databaseURL: 'https://geobump-app.firebaseio.com',
  projectId: 'geobump-app',
  storageBucket: 'geobump-app.appspot.com',
  messagingSenderId: '224309728249',
}

export const firebaseApp = firebase.initializeApp(config)

export const db = firebaseApp.firestore()

export const auth = firebaseApp.auth()

export const $user = user(auth)

export const $authState = authState(auth)

export const $idToken = idToken(auth)

export default {
  firebaseApp,
  db,
  auth,
  $user,
  $authState,
  $idToken,
}
