<template>
    <div class="modal" :class="{ 'show': show, }">
        <div class="modal_overlay">
            <div class="modal-container" ref="target">
                <div class="modal-header">
                    <button class="btn btn-sm" @click="closeModal()">x</button>
                </div>
                <div class="font-semibold">{{title}}</div>
                <div class="text-xs mt-3">{{content}}</div>
                <div class="mt-8 mb-4">
                    <slot name="action" ></slot>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted, watch, defineEmits } from 'vue'
import { onClickOutside } from '@vueuse/core'
const emit = defineEmits(['closeEmit'])

const props = defineProps(['show', 'title', 'content'])
const target = ref(null);

const closeModal = () => emit('closeEmit');

onClickOutside(target, (event) => {
    if (props.show) {
        emit('closeEmit')
    }
})
</script>