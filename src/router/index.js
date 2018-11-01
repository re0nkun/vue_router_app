import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/CustomDirective'
import Counter from '@/components/Counter'
import Member from '@/components/Member'
import List from '@/components/List'
import Detail from '@/components/Detail'

Vue.use(Router)

const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}
const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    { 
      path: '/user/:id', 
      component: User,
      children: [
        { path: '', component: UserHome },
        { path: 'profile', component: UserProfile },
        { path: 'posts', component: UserPosts }
      ]
    },
    { 
      path: '/member', 
      component: Member,
      children: [
        { 
          path: '',
          name: 'member-list',
          component: List, 
        },
        { 
          path: ':id',
          name: 'member-detail',
          component: Detail, 
          props: true
        },
      ]
    }
  ]
})
