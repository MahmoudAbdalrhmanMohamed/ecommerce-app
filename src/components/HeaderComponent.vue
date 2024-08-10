<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

import { ref } from 'vue'
import LogosComponent from './LogosComponent.vue'
let show = ref(false)

const toggleMenu = () => {
  show.value = !show.value
}
const logoutToggleMenu = () => {
  toggleMenu()
  logout()
}

const router = useRouter()
const gotohome = () => {
  router.push('/')
}

const store = useAuthStore()
const logout = () => {
  store.logout()
}
</script>

<template>
  <header class="grid grid-cols-12 items-center justify-center mt-4 mb-12 ml-12 pr-8">
    <transition appear name="fade">
      <div
        class="logo w-16 flex items-center col-span-11 md:col-span-3 cursor-pointer"
        @click="gotohome"
        :key="router.path"
      >
        <img src="../../public/logo.webp" alt="logo img" />
        <p class="capitalize text-lg font-bold">funniro</p>
      </div>
    </transition>
    <nav
      class="hidden md:col-span-4 lg:col-span-6 md:gap-4 lg:gap-12 justify-self-center md:flex md:items-center"
    >
      <RouterLink class="duration-300 hover:text-main-hover-color" aria-label="home router" to="/"
        >Home</RouterLink
      >
      <RouterLink
        aria-label="home router"
        to="/shop"
        class="duration-300 hover:text-main-hover-color"
        >Shop</RouterLink
      >
      <RouterLink
        aria-label="about router"
        to="/about"
        class="duration-300 hover:text-main-hover-color"
        >About</RouterLink
      >
      <RouterLink
        aria-label="about router"
        to="/contact"
        class="duration-300 hover:text-main-hover-color"
        >Contact</RouterLink
      >
      <button
        v-if="store.user.uid"
        class="active:bg-yellow-600 bg-yellow-400 text-white capitalize rounded-xl shadow-lg transition duration-300 hover:shadow-sm px-2 py-2"
        @click="logout"
        aria-label="logout"
      >
        logout
      </button>
    </nav>

    <LogosComponent
      classes="*:cursor-pointer hidden md:flex items-center md:col-span-5 lg:col-span-3 md:gap-4 lg:gap-8 justify-self-end *:w-8"
      mode="dark"
    />

    <div
      @click="toggleMenu"
      class="toggle-menu z-50 *:transition *:duration-500 cursor-pointer w-8 h-4 col-span-1 md:hidden relative *:w-8 *:h-[0.125rem] *:absolute"
    >
      <span
        :class="{ toggleclass: show, 'rotate-45 translate-y-4': show }"
        class="bg-black top-0"
      ></span>
      <span v-if="!show" class="bg-black top-1/2"></span>
      <span :class="{ toggleclass: show, '-rotate-45': show }" class="bg-black top-full"></span>
    </div>
    <teleport to="#app">
      <transition appear name="menu">
        <div
          v-if="show"
          class="flex justify-center items-center w-screen h-screen absolute gap-24 top-0 bg-black text-white"
        >
          <div
            class="flex flex-col gap-16 z-40 *:font-semibold *:text-xl *:transition *:duration-300"
          >
            <RouterLink
              @click="toggleMenu"
              aria-label="home router"
              class="hover:text-main-hover-color"
              to="/"
              >Home</RouterLink
            >
            <RouterLink
              @click="toggleMenu"
              aria-label="home router"
              class="hover:text-main-hover-color"
              to="/shop"
              >Shop</RouterLink
            >
            <RouterLink
              @click="toggleMenu"
              aria-label="about router"
              class="hover:text-main-hover-color"
              to="/about"
              >About</RouterLink
            >
            <RouterLink
              @click="toggleMenu"
              aria-label="about router"
              class="hover:text-main-hover-color"
              to="/contact"
              >Contact</RouterLink
            >
            <button
              v-if="store.user.uid"
              class="active:bg-yellow-600 bg-yellow-400 text-white capitalize rounded-xl shadow-lg transition duration-300 hover:shadow-sm px-2 py-2"
              @click="logoutToggleMenu"
              aria-label="logout"
            >
              logout
            </button>
          </div>
          <LogosComponent
            @close="toggleMenu"
            :show="show"
            classes="*:cursor-pointer flex items-center flex-col gap-16 *:w-8"
            mode="white"
          />
        </div>
      </transition>
    </teleport>
  </header>
</template>

<style>
.fade-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s;
}
.fade-leave-from,
.fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.menu-enter-from {
  transform: translateX(100%);
}
.menu-enter-active,
.menu-leave-active {
  transition: 0.5s;
}
.menu-leave-from,
.menu-enter-to {
  transform: translateX(0);
}
.menu-leave-to {
  transform: translateX(100%);
}
</style>
