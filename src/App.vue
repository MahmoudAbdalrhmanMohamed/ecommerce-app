<script setup>
import { RouterView } from 'vue-router'
import headerComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <headerComponent></headerComponent>

  <RouterView v-slot="{ Component }">
    <transition name="fade" appear mode="out-in">
      <component :is="Component"></component>
    </transition>
  </RouterView>
</template>
