import { defineStore } from 'pinia'
import { auth } from '@/includes/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {}
  }),

  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.uid = user.uid
        } else {
          this.user = {}
        }
      })
    },
    login(formData) {
      if (this.user.uid) {
        this.user.message = 'you are already logging in'
        this.router.push({ name: 'home' })
        console.log(this.user.message)
      } else {
        signInWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            const user = userCredential.user
            this.user.uid = user.uid
            this.router.push({ name: 'home' })
          })
          .catch((error) => {
            this.user.message = error.message
            return false
          })
      }
    },
    registerUser(formData) {
      if (this.user.uid) {
        this.user.message = 'you are already signed Up'
        this.router.push({ name: 'home' })
        console.log(this.user.message)
      } else {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            const user = userCredential.user
            this.user.uid = user.uid
            this.login(formData)
          })
          .catch((error) => {
            this.user.message = error.message
            return false
          })
      }
    },
    logout() {
      signOut(auth)
        .then(() => {
          this.router.push({ name: 'home' })
        })
        .catch(() => {
          this.user = {}
          return false
        })
    }
  }
})
