<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <header class="grid grid-cols-12 items-center mb-12 pt-2 px-2">
    <div class="logo w-16 flex items-center col-span-3">
      <img src="../../public/logo.png" alt="logo img" />
      <p class="capitalize text-lg font-bold">funniro</p>
    </div>
    <nav class="flex col-span-3">
      <RouterLink aria-label="home router" to="/">Home</RouterLink>
      <RouterLink aria-label="home router" to="/shop">Shop</RouterLink>
      <RouterLink aria-label="about router" to="/about">About</RouterLink>
      <RouterLink aria-label="about router" to="/contact">Contact</RouterLink>
    </nav>
    <div class="flex items-center col-span-6 gap-12 justify-self-end">
      <img src="../assets/images/main_page/header/login.svg" alt="login img" />
      <img src="../assets/images/main_page/header/search.svg" alt="search img" />
      <img src="../assets/images/main_page/header/liked.svg" alt="liked img" />
      <img src="../assets/images/main_page/header/cart.svg" alt="cart img" />
    </div>
  </header>
</template>
