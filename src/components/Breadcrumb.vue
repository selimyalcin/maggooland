<template>
    <div class="flex flex-row items-center font-semibold select-none mb-4"
        :class="{ 'justify-between': pageName !== 'Homepage', 'justify-end': pageName === 'Homepage' }">
        <button class="btn p-3" v-if="pageName !== 'Homepage'" @click="router.back()">
            <img src="../assets/icons/back-light.svg" v-if="!isDark" alt="Back">
            <img src="../assets/icons/back-dark.svg" v-if="isDark" alt="Back">
        </button>
        <span>{{ pageName }}</span>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
const route = useRoute();
const router = useRouter();
const store = useStore();
const pageName = ref(null)
const isDark = computed(() => store.state.isDark)
onMounted(() => {
    pageName.value = route.name
})
</script>