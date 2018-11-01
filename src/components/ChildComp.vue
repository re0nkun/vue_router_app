<template>
  <div>
    <h2>{{ $vnode.key }}</h2>
    <h2>{{ title }}</h2>
    <p>
      Count: {{ count }} 
      <button @click="count++">click</button>
    </p>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style>

</style>

