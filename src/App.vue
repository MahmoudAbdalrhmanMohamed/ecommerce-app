<template>
  <headerComponent></headerComponent>

  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </RouterView>
</template>

<script setup>
import { RouterView } from 'vue-router'
import headerComponent from '@/components/HeaderComponent.vue'
import { onMounted } from 'vue'
import { useAuthStore } from './stores/auth'

const store = useAuthStore()
onMounted(() => {
  store.init()
})



</script>
