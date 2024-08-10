<template>
  <div :class="props.classes" v-if="props.mode === 'dark'">
    <img
      loading="lazy"
      class="hover:rotate-45 transition duration-300"
      src="../assets/images/main_page/header/login.svg"
      alt="login img"
      @click="push({name:'login'})"
    />
    <img
      loading="lazy"
      class="hover:rotate-45 transition duration-300"
      src="../assets/images/main_page/header/search.svg"
      alt="search img"
      @click="push({name:'search'})"
    />
    <img
      loading="lazy"
      class="hover:rotate-45 transition duration-300"
      src="../assets/images/main_page/header/liked.svg"
      alt="liked img"
    />
    <img
      loading="lazy"
      class="hover:rotate-45 transition duration-300"
      src="../assets/images/main_page/header/cart.svg"
      alt="cart img"
    />
   
  </div>
  <div :class="props.classes" v-else>
    <img
      loading="lazy"
      class="hover:rotate-45 transition duration-300"
      src="../assets/images/main_page/header/login-white.svg"
      alt="login img"
      @click="push({name:'login'})"
    />
    <img
      loading="lazy"
      class="hover:rotate-45 transition duration-300"
      src="../assets/images/main_page/header/search-white.svg"
      alt="search img"
      @click="push({name:'search'})"
    />
    <img
      loading="lazy"
      class="hover:rotate-45 transition duration-300"
      src="../assets/images/main_page/header/liked-white.svg"
      alt="liked img"
    />
    <img
      loading="lazy"
      class="hover:rotate-45 transition duration-300"
      src="../assets/images/main_page/header/cart-white.svg"
      alt="cart img"
    />
   
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const props = defineProps(['classes', 'mode', 'show'])
const emits = defineEmits(['close'])
const router = useRouter()
const push = (path) => {
  emits('close')
  router.push(path)
}
</script>
