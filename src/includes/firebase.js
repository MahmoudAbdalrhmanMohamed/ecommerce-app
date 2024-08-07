import { initializeApp } from 'firebase/app'
import { getFirestore, CACHE_SIZE_UNLIMITED } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCGN5iWHJqlt7a_GpAF91Kf6TbHTRCkSWM',
  authDomain: 'ecommerce-app-52e13.firebaseapp.com',
  projectId: 'ecommerce-app-52e13',
  storageBucket: 'ecommerce-app-52e13.appspot.com',
  messagingSenderId: '168219335589',
  appId: '1:168219335589:web:43cdc80fb5185c6ddea64c'
}

const app = initializeApp(firebaseConfig, {
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
})
const db = getFirestore(app)

export { db }
