<script setup>
import { ref, computed } from 'vue'
import Main from './pages/Main.vue'
import PrintView from './pages/PrintView.vue'


const routes = {
  '/': Main,
  '/payment': PrintView
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <component :is="currentView" />
</template>