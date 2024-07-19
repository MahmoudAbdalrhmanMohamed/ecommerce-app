<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
let show = ref(false)

const toggleMenu = () => {
  show.value = !show.value
}

const toggleMenuClicked = () => {
  show.value = !show.value
}
</script>

<template>
  <header class="grid grid-cols-12 items-center mt-4 mb-12 ml-12 pr-8">
    <div class="logo w-16 flex items-center col-span-11 md:col-span-3">
      <img src="../../public/logo.png" alt="logo img" />
      <p class="capitalize text-lg font-bold">funniro</p>
    </div>
    <nav class="hidden md:col-span-4 lg:col-span-6 md:gap-8 lg:gap-12 justify-self-center md:flex">
      <RouterLink
        class="duration-300 hover:text-main-hover-color"
        aria-label="home router"
        to="/"
        >Home</RouterLink
      >
      <RouterLink aria-label="home router" to="/shop" class="duration-300 hover:text-main-hover-color">Shop</RouterLink>
      <RouterLink aria-label="about router" to="/about" class="duration-300 hover:text-main-hover-color">About</RouterLink>
      <RouterLink aria-label="about router" to="/contact" class="duration-300 hover:text-main-hover-color">Contact</RouterLink>
    </nav>
    <div
      class="hidden md:flex items-center md:col-span-5 lg:col-span-3 md:gap-8 lg:gap-12 justify-self-end *:w-8"
    >
      <img src="../assets/images/main_page/header/login.svg" alt="login img" />
      <img src="../assets/images/main_page/header/search.svg" alt="search img" />
      <img src="../assets/images/main_page/header/liked.svg" alt="liked img" />
      <img src="../assets/images/main_page/header/cart.svg" alt="cart img" />
    </div>
    <div
      @click="toggleMenu"
      class="toggle-menu z-50 *:transition *:duration-500 cursor-pointer w-8 h-4 col-span-1 md:hidden relative *:w-8 *:h-[0.125rem] *:absolute"
    >
      <span :class="{ toggleclass: show,'rotate-45 translate-y-4':show }" class="bg-black top-0"></span>
      <span v-if="!show" class="bg-black top-1/2"></span>
      <span :class="{ toggleclass: show,'-rotate-45':show }" class="bg-black top-full"></span>
    </div>
    <teleport to="#app">
      <transition appear>
        <div
          v-if="show"
          class="flex justify-center items-center w-screen h-screen absolute top-0 bg-black text-white"
        >
          <div
            class="flex flex-col gap-16 text-center z-40 *:font-semibold *:text-xl *:transition *:duration-300"
          >
            <RouterLink
              @click="toggleMenuClicked"
              aria-label="home router"
              class="hover:text-main-hover-color"
              to="/"
              >Home</RouterLink
            >
            <RouterLink
              @click="toggleMenuClicked"
              aria-label="home router"
              class="hover:text-main-hover-color"
              to="/shop"
              >Shop</RouterLink
            >
            <RouterLink
              @click="toggleMenuClicked"
              aria-label="about router"
              class="hover:text-main-hover-color"
              to="/about"
              >About</RouterLink
            >
            <RouterLink
              @click="toggleMenuClicked"
              aria-label="about router"
              class="hover:text-main-hover-color"
              to="/contact"
              >Contact</RouterLink
            >
          </div>
        </div>
      </transition>
    </teleport>
  </header>
</template>

<style scoped>
.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
}
.v-enter-active,
.v-leave-active {
  transition: 0.5s;
}
</style>
