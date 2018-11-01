<template>
  <div>
    <h2>[{{ id }}] {{ memberName }}</h2>
    
    <router-link to="/member">戻る</router-link>
  </div>
</template>

<script>
export default {
  props: {'id': Number},
  computed: {
    members() {
      return this.$store.getters.members
    },
    memberName() {
      return this.members.find( m => m.id === this.id).name
    }
  }
}
</script>

<style>

</style>