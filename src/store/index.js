
import { createStore } from 'vuex'
import VuexPersistence from "vuex-persist";
import i18n from "@/i18n";
import makeBlockie from "ethereum-blockies-base64";

let lsKey = import.meta.env.VITE_STORE_KEY

const vuexPersist = new VuexPersistence({
  key: lsKey,
  storage: localStorage,
  reducer: (state) => {
    return {
      isLogin: state.isLogin,
      user: state.user,
      locale: state.locale
    }
  },

});

const store = createStore({
  plugins: [vuexPersist.plugin],
  state() {
    return {
      isLogin: false,
      isMobile: false,
      isDark: false,
      locale: null,
      nav_menu: false,
      search_menu: false,
      locale: null,
      user: {
        wallet: null,
        wallet_short: "",
        balance: 0,
        avatar: null,
        maxMemberTokenId: 0,
      },
      count: 0,
      langs: {
        "en": {
          name: "English",
          iso: "GB",
          code: "en"
        },
        "tr": {
          name: "Türkçe",
          iso: "TR",
          code: "tr"
        }
      }
    }
  },
  getters: {
    count(state) {
      return state.count
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    doLogin(state) {
      state.isLogin = !state.isLogin
    },
    SET_LOCALE(state, lang) {
      state.locale = lang
    },
    SET_MOBILE(state, mobile) {
      state.isMobile = mobile
    },
    SET_DARK(state, dark) {
      state.isDark = dark
    },
    TOGGLE_NAVMENU(state, dark) {
      state.nav_menu = !state.nav_menu
    },
    CLOSE_NAVMENU(state, dark) {
      state.nav_menu = false
    },
    TOGGLE_SEARCH(state) {
      state.search_menu = !state.search_menu
    },
    SET_MM_LOGIN(state, wallet) {
      state.isLogin = true
      state.user.wallet = wallet
      state.user.wallet_short = `${wallet.substr(0, 8)}...${wallet.substr(-6)}`
      state.user.avatar = makeBlockie(wallet)
    },
    SET_LOCALE(state, lang) {
      state.locale = lang
    }

  },
  actions: {
    async btest({ commit, dispatch, state }, b) {
      state.count = 10
      return true
    },
    setLocale({ commit }, lang) {
      commit('SET_LOCALE', lang)
      i18n.setLocale(lang);
    },
    setMobile({ commit }, mobile) {
      commit('SET_MOBILE', mobile)
    }
    ,
    setDark({ commit }, dark) {
      commit('SET_DARK', dark)
    },
    updateUserWallet({ commit }, wallet) {
      commit('SET_MM_LOGIN', wallet)
    },
    async checkWallet({ commit, state }) {
      const { ethereum } = window;
      const isUnlocked = await window.ethereum._metamask.isUnlocked();
      if (ethereum && isUnlocked) {
        let user_wallet = state.user.wallet
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        let mm_wallet = accounts[0];
        if (mm_wallet !== user_wallet) {
          commit('SET_MM_LOGIN', mm_wallet)
          location.reload();
        }
      }
    }
  }
})
export default store