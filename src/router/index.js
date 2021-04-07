import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/views/Home'
Vue.use(Router)
// const Router=require('vue-router')
//路由懒加载
const Home=()=>import('@/views/Home.vue')
const Texttile=()=>import('@/views/Texttile.vue')
const Contact=()=>import('@/views/Contact.vue')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/Texttile',
      name:'Texttile',
      component:Texttile,
    },
    {
      path:'/Contact',
      name:'Contact',
      component:Contact,
    }
  ]
})
