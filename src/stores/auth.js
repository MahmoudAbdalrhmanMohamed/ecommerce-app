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
    async login(formData) {
      await signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user
          this.user.uid = user.uid
          return true
        })
        .catch((error) => {
          this.user.message = error.message
          return false
        })
    },
    async registerUser(formData) {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user
          this.user.uid = user.uid
          this.login(formData)
        })
        .catch((error) => {
          this.user.message = error.message
          return false
        })
    },
    async logout() {
      await signOut(auth)
        .then(() => {
          return true
        })
        .catch((error) => {
          this.user.message = error.message
          return false
        })
    }
  }
})
