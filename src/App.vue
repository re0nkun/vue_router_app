<template>
  <div id="app">
    <p>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/member">Member</router-link>
      <router-link to="/counter">Counter</router-link>
    </p>

    <p>
      <router-link to="/user/foo" exact>/user/foo</router-link>
      <router-link to="/user/foo/profile">/user/foo/profile</router-link>
      <router-link to="/user/foo/posts">/user/foo/posts</router-link>
    </p>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import xxx from '@/components/xxx'
export default {
  name: 'App',
    // components: {'xxx': xxx},
}
</script>

<style>
.router-link-active {
  background: rgba(0, 0, 0, 0.1);
}
</style>