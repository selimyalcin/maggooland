

<template>
  
  <div class="">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  

</template>

<script setup>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { ref, onMounted, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
import { useTitle } from '@vueuse/core'
import i18n from "./i18n";

let baseTitle = import.meta.env.VITE_BASE_TITLE
const route = useRoute();
const title = useTitle()
const store = useStore();
const isMobile = computed(() => store.state.isMobile)


const {t} = i18n;
const onResize = () => {
  if (window.innerWidth < 600) {
    store.dispatch('setMobile', true)
  } else {
    store.dispatch('setMobile', false)
  }
}
watch(() => route.name, (v) => {
  title.value = `${t(route.meta.title)}`
});

onMounted(() => {
  onResize();

})
window.addEventListener("resize", onResize, { passive: true });
</script>
