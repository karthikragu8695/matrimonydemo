import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilePage from '../components/ProfilePage.vue'


const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ProfilePicture/:id',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfilePic.vue')
  },
  {
    path: '/profiles/:id',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue')

  },
  // {
  //   path: '/Details',
  //   component: DetailsPage
  // },
  {
    path: '/',
    component: ProfilePage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
