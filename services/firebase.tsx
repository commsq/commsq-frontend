import firebase from 'firebase'

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
} else {
  firebase.app() // if already initialized, use that one
}

export const auth = firebase.auth
export const db = firebase.database()
