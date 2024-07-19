<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <header class="grid grid-cols-12 items-center mt-4 mb-12 ml-12 pr-8">
    <div class="logo w-16 flex items-center col-span-11 md:col-span-3">
      <img src="../../public/logo.png" alt="logo img" />
      <p class="capitalize text-lg font-bold">funniro</p>
    </div>
    <nav class="hidden md:col-span-4 lg:col-span-6 md:gap-8 lg:gap-12 justify-self-center md:flex">
      <RouterLink aria-label="home router" to="/">Home</RouterLink>
      <RouterLink aria-label="home router" to="/shop">Shop</RouterLink>
      <RouterLink aria-label="about router" to="/about">About</RouterLink>
      <RouterLink aria-label="about router" to="/contact">Contact</RouterLink>
    </nav>
    <div
      class="hidden md:flex items-center md:col-span-5 lg:col-span-3 md:gap-8 lg:gap-12 justify-self-end *:w-8"
    >
      <img src="../assets/images/main_page/header/login.svg" alt="login img" />
      <img src="../assets/images/main_page/header/search.svg" alt="search img" />
      <img src="../assets/images/main_page/header/liked.svg" alt="liked img" />
      <img src="../assets/images/main_page/header/cart.svg" alt="cart img" />
    </div>
    <div class="toggle-menu cursor-pointer col-span-1 md:hidden relative *:w-8 *:h-[0.125rem] *:bg-black *:absolute">
      <span class="top-0"></span>
      <span class="top-2"></span>
      <span class="top-4"></span>
    </div>
  </header>
</template>
