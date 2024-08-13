import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyCGN5iWHJqlt7a_GpAF91Kf6TbHTRCkSWM',
  authDomain: 'ecommerce-app-52e13.firebaseapp.com',
  projectId: 'ecommerce-app-52e13',
  storageBucket: 'ecommerce-app-52e13.appspot.com',
  messagingSenderId: '168219335589',
  appId: '1:168219335589:web:43cdc80fb5185c6ddea64c'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

const storage = getStorage()

export { db, auth, storage }
