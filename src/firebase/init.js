import firebase from 'firebase'
import firestore from 'firebase/firestore'

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

const db = firebaseApp.firestore()

export default db
