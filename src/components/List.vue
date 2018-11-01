<template>
  <div>
    <li v-for="member in members" :key="member.id">
      <div>
        [{{ member.id }}] 
        <router-link 
          :to="{ name:'member-detail', params: { id: member.id } }" 
          v-text="member.name"/>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  computed: {
    members() {
      return this.$store.getters.members
    },
  }
}
</script>

<style>

</style>