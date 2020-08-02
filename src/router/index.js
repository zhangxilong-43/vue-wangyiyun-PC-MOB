import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

const Home = () =>
    import ( /* webpackChunkName:"login_home_welcome" */ '../views/Home.vue')
const Welcome = () =>
    import ( /* webpackChunkName:"login_home_welcome" */ '../components/Welcome.vue')
const Discovery = () =>
    import ( /* webpackChunkName:"login_home_welcome" */ '../components/discovery/discovery.vue')
const Mvs = () =>
    import ( /* webpackChunkName:"login_home_welcome" */ '../components/mvs/mvs.vue')
const Playlists = () =>
    import ( /* webpackChunkName:"login_home_welcome" */ '../components/playlists/playlists.vue')
const Songs = () =>
    import ( /* webpackChunkName:"login_home_welcome" */ '../components/songs/songs.vue')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/welcome',
    children: [
        { path: '/welcome', component: Welcome },
        { path: '/discovery', component: Discovery },
        { path: '/songs', component: Songs },
        { path: '/playlists', component: Playlists },
        { path: '/mvs', component: Mvs },
    ]
}]

const router = new VueRouter({
    routes
})

export default router