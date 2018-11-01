import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    members: [
      { id: 1, name: 'サーバル'},
      { id: 2, name: 'フェネック'},
      { id: 3, name: 'アライさん'}
    ],
    message: 'メッセージ'
  },
  getters: {
    members: state => state.members,
  }
})