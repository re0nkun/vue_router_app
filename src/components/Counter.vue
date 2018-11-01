<template>
<div>
  <button @click="current='child1'">child1</button>
  <button @click="current='child2'">child2</button>
  <button @click="current=null">close</button>

  <keep-alive>
    <child-comp 
      v-if="current=='child1'"
      :title="posts[0].title" 
      key="child1"></child-comp>
    <child-comp 
      v-if="current=='child2'" 
      :title="posts[2].title"
      key="child2"></child-comp>
  </keep-alive>
</div>
</template>

<script>
import ChildComp from './ChildComp'
export default {
  components: {'child-comp': ChildComp},
  data() {
    return {
      current: null,
      posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
    }
  }
}
</script>

<style>

</style>
