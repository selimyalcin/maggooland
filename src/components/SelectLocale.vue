<template>
    <div class="modal transition-opacity duration-300 " :class="{ 'opacity-100 show': showModal }" >
        <div class="modal_overlay" >

            <div class="modal-container" ref="target">
                <div class="modal-header">
                    {{ $t("select_locale") }}
                </div>
                <div class="overflow-y-auto min-h-[100px] max-h-[300px] w-full my-auto">
                    <div class="flex items-center justify-start w-full py-3 px-2 hover:bg-slate-600 mb-2 transition-all duration-500 rounded-md select-none cursor-pointer"
                        v-for="i in langs" @click="setLocale(i.code)">
                        <CountryFlag :iso="i.iso" mode="rounded" title="see" class="w-5 h-5 mr-2" /> {{ i.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button class="flex items-center justify-between w-auto btn btn-secondary btn-sm" @click="toggleModal()">

        
            <div class="flex items-center justify-between">
                <CountryFlag :iso="$t('flag')" mode="rounded" title="see" class="w-5 h-5 mr-2" />
                {{ $t('niceName') }}
            </div>
     
        <span class="material-symbols-outlined">
                expand_more
            </span>
    </button>

</template>

<script setup>

import { onMounted } from '@vue/runtime-core'
import { inject, defineComponent, computed, watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex';
import { onClickOutside } from '@vueuse/core'
const showModal = ref(false);
const target = ref(null);
const store = useStore();
const langs = computed(() => store.state.langs)
const setLocale = (lang) => {
    store.dispatch('setLocale', lang)
    showModal.value = false
}
const toggleModal = () => {
    showModal.value = !showModal.value
}
onClickOutside(target, (event) => {
    showModal.value = false
})

</script>