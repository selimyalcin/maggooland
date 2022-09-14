<template>

   <canvas></canvas>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core'
import { BasicScene } from "@/Engine/Scenes/BasicScene.js";

const initFrame = () => {
   const canvas = document.querySelector("canvas");
   new BasicScene(canvas);
}

const onResize = () => {
  // initFrame();
}

onMounted(async () => {
   initFrame();
})

window.addEventListener("resize", onResize, { passive: true });

</script>

<style scoped lang="scss">
canvas {
   width: 100vw;
   height: 100vh;
   border:none;
   touch-action: none;
   &:focus-visible{
      outline: none;
   }
}
</style>