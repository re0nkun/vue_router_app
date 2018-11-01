<template>
  <div id="app">
    <p>
      <input v-model="data1">
      <button v-disable="data1.length>5">ボタン</button>
    </p>
    <p>
      <input v-model="data2">
      <button v-disable="data2.length>5">ボタン</button>
    </p>

    <h4>エディタ</h4>
    <textarea v-model="content"></textarea>
    <h4>プレビュー</h4>
    <div class="preview" v-preview="content"></div>
    <p>タグの閉じ忘れがあっても外側に影響しない。</p>
  </div>
</template>

<script>
// import Vue from 'vue'
export default {
  name: 'App',
  data() {
    return {
      data1: 'サンプル',
      data2: 'サンプルデータ',

      content: '<b>test</b>'
    }
  },
  directives: {
    disable: function(el, binding) {
      el.disabled = binding.value
    },
    preview: {
      bind(el, binding, vnode) {
        el.attachShadow({mode: 'open'})
        el.shadowRoot.innerHTML = binding.value
      },
      update(el, binding, vnode) {
        if (vnode.elm.shadowRoot.innerHTML !== binding.value) {
          el.shadowRoot.innerHTML = binding.value
        }
      }
    }
  }
}
// Vue.directive('disable', function (el, binding) {
//   el.disabled = binding.value
// })
// Vue.directive('preview', {
//   bind(el, binding, vnode) {
//     el.attachShadow({mode: 'open'})
//     el.shadowRoot.innerHTML = binding.value
//   },
//   update(el, binding, vnode) {
//     if (vnode.elm.shadowRoot.innerHTML !== binding.value) {
//       el.shadowRoot.innerHTML = binding.value
//     }
//   }
// })
</script>

<style>
</style>