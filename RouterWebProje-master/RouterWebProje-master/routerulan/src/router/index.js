import Vue from 'vue'
import VueRouter from 'vue-router'
import Anasayfa from '../views/Anasayfa.vue'
import GirisYap from '../views/GirisYap.vue'
import KayitOlSayfasi from '../views/KayitOlSayfasi.vue'
import KahveSayfasi from '../views/KahveSayfasi.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'anasayfa',
    component: Anasayfa
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/giris-yap',
    name: 'girisyap',
    component: GirisYap
  },
  {
    path: '/kayit-ol',
    name: 'kayiol',
    component: KayitOlSayfasi
  },
  {
    path: '/kahve-sayfasi',
    name: 'kahve',
    component: KahveSayfasi
  }


  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
