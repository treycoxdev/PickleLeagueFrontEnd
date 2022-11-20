import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeagueView from '../views/LeagueView.vue'
import ClubView from '../views/ClubView.vue'
import GameView from '../views/GameView.vue'
import PlayerView from '../views/PlayerView.vue'
import TeamView from '../views/TeamView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/league',
    name: 'league',
    component: LeagueView
  },
  {
    path: '/club',
    name: 'club',
    component: ClubView
  },
  {
    path: '/game',
    name: 'game',
    component: GameView
  },
  {
    path: '/player',
    name: 'player',
    component: PlayerView
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
