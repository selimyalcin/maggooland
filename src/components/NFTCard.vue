<template>

    <div class="rounded-2xl h-[500px] sm:h-[250px] sm:rounded-xl  overflow-hidden relative cursor-pointer group">
       <div class="overflow-hidden">
        <img :src="`/samples/${nft.image}`" alt="NFT" class="transition-all duration-300 group-hover:scale-110">
       </div>
        <div class="bg-footer-gray h-full p-4 flex flex-col items-start justify-start group-hover:bg-[#494b54]">
            <div class="font-bold text-sm">{{nft.name}}</div>
            <div class="text-xs">{{nft.description}}</div>

            <div class="mt-3 font-bold text-xs hidden">Price</div>
            <div class="flex mt-2 hidden">
                <img src="@/assets/icons/eth.svg" class="w-4" alt="">
                <span class="text-xl ml-2">{{nft.price}}</span>
            </div>
            
            <div class="text-xs mt-3 text-gray-400">{{nft.ends}}</div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, inject, ref } from 'vue'
const props = defineProps(['nft'])
</script>