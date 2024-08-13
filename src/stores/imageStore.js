// import { ref } from 'firebase/storage'
// import { storage } from '@/includes/firebase'
import { defineStore } from 'pinia'
export const useImageStore = defineStore('imageStore', {
  state: () => ({
    path: null
  }),

  // actions: {
  //   getBrowseImgaes() {
  //     this.path= ref(storage,'')
  //   }
  // }
})
