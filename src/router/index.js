import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

const Home = () =>
    import ( /* webpackChunkName:"login_home_welcome" */ '../views/Home.vue')
    // const Welcome = () =>
    //     import ( /* webpackChunkName:"login_home_welcome" */ '../components/Welcome.vue')
const Discovery = () =>
    import ( /* webpackChunkName:"login_home_welcome" */ '../components/discovery/discovery.vue')
const Mvs = () =>
    import ( /* webpackChunkName:"login_home_welcome" */ '../components/mvs/mvs.vue')
const Playlists = () =>
    import ( /* webpackChunkName:"login_home_welcome" */ '../components/playlists/playlists.vue')
const Songs = () =>
    import ( /* webpackChunkName:"login_home_welcome" */ '../components/songs/songs.vue')
const Search = () =>
    import ( /* webpackChunkName:"login_home_welcome" */ '../components/search/search.vue')
const SongsListsDetail = () =>
    import ( /* webpackChunkName:"login_home_welcome" */ '../components/songsListsDetail/songsListsDetail.vue')
const MVsDetail = () =>
    import ( /* webpackChunkName:"login_home_welcome" */ '../components/MVsDetail/MVsDetail.vue')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/discovery',
    children: [
        { path: '/MVsdetail', component: MVsDetail },
        { path: '/discovery', component: Discovery },
        { path: '/songs', component: Songs },
        { path: '/playlists', component: Playlists },
        { path: '/mvs', component: Mvs },
        { path: '/search', component: Search },
        { path: '/songsListsDetail', component: SongsListsDetail },
    ]
}]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path !== '/songsListsDetail') return next()
    const id = window.sessionStorage.getItem('detailId')
    if (id === 0) return next('/discovery')
    next()
})

export default router