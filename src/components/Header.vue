<template>

    <div class="bg-header shadow-2xl max-w-[100vw]  top-0 sticky transition-all py-0 sm:py-4 z-[99999999]">
        <div class="w-full mx-auto sm:px-5">

            <div class="grid grid-cols-header-cols sm:flex sm:items-center sm:justify-between">
                <div class="text-2xl font-bold flex items-center pl-10 sm:pl-0">
                    <router-link to="/" class="text-green-500">KEWL</router-link>
                </div>

                <div class="search flex items-center justify-center" :class="{ 'top-0': search_menu }">

                    <div class="relative max-w-3xl w-full flex items-center h-full nset-y-0 ">

                        <img src="@/assets/icons/search.svg" class="w-6 absolute left-2 " alt="" v-if="!isMobile">
                        <img src="@/assets/icons/left.svg" class="w-3 absolute left-2 cursor-pointer"
                            @click="toggleSearch()" alt="" v-else>

                        <input type="text" class="search-input max-w-3xl" :placeholder="$t('search_text')"
                            v-model="searchWord">

                        <img src="@/assets/icons/close.svg" class="w-3 absolute right-4 cursor-pointer" alt=""
                            v-show="searchWord.length > 0" @click="clearSearch()">

                    </div>
                </div>

                <div class="header-nav pr-10 sm:pr-0" :class="{ 'right-0 sm:opacity-100': nav_menu }">

                    <router-link :class="{ 'active': pName === 'Games' || pName === 'Homepage', }" to="/games">
                        <div class="menu">
                            <span class="material-symbols-outlined text-2xl mr-2 hidden sm:block">
                                sports_esports
                            </span>
                            {{$t('games')}}
                        </div>
                        <img src="@/assets/icons/left.svg" class="rotate-180 w-2 hidden sm:block" alt="">
                    </router-link>
                    <router-link :class="{ 'active': pName === 'Marketplace' }" to="/marketplace">
                        <div class="menu">
                            <span class="material-symbols-outlined text-2xl mr-2 hidden sm:block">
                                shopping_basket
                            </span>
                            {{$t('marketplace')}}
                            <div class="submenu">
                                <ul>
                                    <li>
                                        <router-link to="#">
                                            <span class="icon material-symbols-outlined">
                                                shopping_cart
                                            </span> Submenu 1
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="#">Submenu 1</router-link>
                                    </li>
                                    <li>
                                        <router-link to="#">Submenu 1</router-link>
                                    </li>
                                    <li>
                                        <router-link to="#">Submenu 1</router-link>
                                    </li>

                                    <li>
                                        <router-link to="#">
                                            <span class="icon material-symbols-outlined">
                                                shopping_cart
                                            </span> Submenu 1
                                        </router-link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <img src="@/assets/icons/left.svg" class="rotate-180 w-2 hidden sm:block" alt="">
                    </router-link>
                    <router-link to="/data" :class="{ 'active': pName === 'Data' }">
                        <div class="menu">
                            <span class="material-symbols-outlined text-2xl mr-2 hidden sm:block">
                                monitoring
                            </span>
                            {{$t('data')}}
                            <div class="submenu ">
                                <ul>
                                    <li>
                                        <router-link to="#">
                                            <span class="icon material-symbols-outlined">
                                                shopping_cart
                                            </span> Submenu 1
                                        </router-link>
                                    </li>

                                </ul>

                            </div>
                        </div>
                        <img src="@/assets/icons/left.svg" class="rotate-180 w-2 hidden sm:block" alt="">
                    </router-link>

                    <router-link to="/account" class="group pl-16 sm:pl-3" :class="{ 'active': pName === 'Data' }">
                        <div class="menu">
                            <span class="material-symbols-outlined text-2xl mr-2 hidden sm:block">
                                person
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" v-if="!isMobile">
                                <path id="account"
                                    d="M8.615,24.313a18.718,18.718,0,0,1,4.063-2.194A12.094,12.094,0,0,1,17,21.355a12.226,12.226,0,0,1,4.339.764,18.569,18.569,0,0,1,4.079,2.194,11.409,11.409,0,0,0,2.031-3.543,11.746,11.746,0,0,0,.6-3.77A10.827,10.827,0,0,0,17,5.95,10.827,10.827,0,0,0,5.95,17a11.464,11.464,0,0,0,.617,3.77A11.7,11.7,0,0,0,8.615,24.313ZM17,17.975a4.385,4.385,0,0,1-4.453-4.453A4.385,4.385,0,0,1,17,9.07a4.385,4.385,0,0,1,4.453,4.453A4.385,4.385,0,0,1,17,17.975ZM17,30a12.579,12.579,0,0,1-5.037-1.024,13.1,13.1,0,0,1-6.939-6.939,12.946,12.946,0,0,1,0-10.091,13.142,13.142,0,0,1,6.939-6.923,12.946,12.946,0,0,1,10.091,0,13.186,13.186,0,0,1,6.922,6.923,12.946,12.946,0,0,1,0,10.091,13.142,13.142,0,0,1-6.922,6.939A12.543,12.543,0,0,1,17,30Zm0-1.95a11.919,11.919,0,0,0,3.494-.52,10.382,10.382,0,0,0,3.364-1.82,14.145,14.145,0,0,0-3.38-1.788,10.1,10.1,0,0,0-6.955,0,14.145,14.145,0,0,0-3.38,1.788,10.382,10.382,0,0,0,3.364,1.82A11.919,11.919,0,0,0,17,28.05Zm0-12.025a2.394,2.394,0,0,0,2.5-2.5,2.5,2.5,0,1,0-5.005,0,2.394,2.394,0,0,0,2.5,2.5ZM17,13.523ZM17,25.677Z"
                                    transform="translate(-4 -4)" fill="#747474"
                                    class="transition-all duration-300 group-hover:fill-green-500" />
                            </svg>
                            <span v-else>Profile</span>
                            <div class="submenu ">
                                <ul>
                                    <li>
                                        <router-link to="/account">
                                            <span class="icon material-symbols-outlined">
                                                person
                                            </span> Profile
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="#">
                                            <span class="icon material-symbols-outlined">
                                                favorite
                                            </span> Favorites
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="#">
                                            <span class="icon material-symbols-outlined">
                                                visibility
                                            </span> Watch List
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="#">
                                            <span class="icon material-symbols-outlined">
                                                grid_on
                                            </span> My Collections
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/account/settings">
                                            <span class="icon material-symbols-outlined">
                                                settings
                                            </span> Settings
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="#">
                                            <span class="icon material-symbols-outlined">
                                                nightlight
                                            </span> Night Mode
                                        </router-link>
                                    </li>

                                </ul>

                            </div>
                        </div>
                        <img src="@/assets/icons/left.svg" class="rotate-180 w-2 hidden sm:block" alt="">
                    </router-link>

                   <div class="w-40 flex justify-end"> <SelectLocale /></div>


                </div>

                <div class="flex items-center justify-end" v-if="isMobile">
                    <button class="btn btn-sm btn-clear group" @click="toggleSearch()">
                        <img src="@/assets/icons/search.svg" width="26" alt="">
                    </button>
                    <button class="btn btn-sm btn-clear mx-1 px-1 group" @click="toggleMenu()">

                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20"
                            v-if="!nav_menu">
                            <path id="hamburger" d="M6,32V29.5H32V32Zm0-8.75v-2.5H32v2.5ZM6,14.5V12H32v2.5Z"
                                transform="translate(-6 -12)" fill="#747474" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" v-else>
                            <path id="hamburger-open"
                                d="M6,32V29.5H24.752V32Zm24.449-2.167-6.816-7.875,6.779-7.833,1.551,1.792-5.229,6.042L32,28.042ZM6,23.167v-2.5H20.424v2.5ZM6,14.5V12H24.752v2.5Z"
                                transform="translate(-6 -12)" fill="#747474" />
                        </svg>


                    </button>
                </div>
            </div>

        </div>
    </div>


</template>
<script setup>
import { onMounted } from '@vue/runtime-core'
import { inject, defineComponent, computed, watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex';

const route = useRoute()
const router = useRouter()
const store = useStore();
const pName = ref(null);
const searchWord = ref('');
const subOpen = ref(false);
const nav_menu = computed(() => store.state.nav_menu)
const search_menu = computed(() => store.state.search_menu)

const isMobile = computed(() => store.state.isMobile)
const isLogin = computed(() => store.state.isLogin)
let user = store.getters.getUser
const toggleMenu = () => {
    store.commit("TOGGLE_NAVMENU")
}
const toggleSearch = () => {
    store.commit("TOGGLE_SEARCH")
}

const userMenu = () => {
    if (isMobile.value) {
        store.commit("TOGGLE_USERMENU")
    } else {
        router.push('/profile/inventory')
    }
}

const lockScroll = (v) => {
    let body = document.getElementsByTagName("body")[0];
    if (v) {
        body.classList.add("overflow-hidden");
        //  store.dispatch("bodyBlur", true);
    } else {
        body.classList.remove("overflow-hidden");
        // store.dispatch("bodyBlur", false);
    }
}

const clearSearch = () => {
    searchWord.value = ''
}

const toggleSub = () => {
    subOpen.value = !subOpen.value
}
/*
*/
watch(
    () => route.name,
    async name => {
        //isLogin = computed(() => store.state.isLogin)
        user = store.getters.getUser;
        pName.value = name;
        store.commit("CLOSE_NAVMENU")
    }
)
watch(() => store.state.nav_menu, (val) => {
    if (isMobile.value) {
        lockScroll(val)
    }
}
)
watch(() => store.state.user_menu, (val) => {
    if (isMobile.value) {
        lockScroll(val)
    }
})

watch(() => searchWord.value, (val) => {
    if (val.length > 0) {

    }
})

onMounted(async () => {
    pName.value = route.name
})
</script>