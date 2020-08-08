import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ( /* webpackChunkName: "home1" */ '../views/Home.vue')
const Discovery = () =>
    import ( /* webpackChunkName:"home1" */ '../components/discovery/discovery.vue')
const Mvs = () =>
    import ( /* webpackChunkName:"home2" */ '../components/mvs/mvs.vue')
const Playlists = () =>
    import ( /* webpackChunkName:"home3" */ '../components/playlists/playlists.vue')
const Songs = () =>
    import ( /* webpackChunkName:"home4" */ '../components/songs/songs.vue')
const Search = () =>
    import ( /* webpackChunkName:"home4" */ '../components/search/search.vue')
const SongsListsDetail = () =>
    import ( /* webpackChunkName:"home3Detail" */ '../components/songsListsDetail/songsListsDetail.vue')
const MVsDetail = () =>
    import ( /* webpackChunkName:"home2Detail" */ '../components/MVsDetail/MVsDetail.vue')

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
    return originalPush.call(this, location)
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