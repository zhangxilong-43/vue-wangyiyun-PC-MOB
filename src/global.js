import Vue from 'vue'
// import router from './router'

Vue.prototype.getMusicUrl = async function(id, br) {
    const { data: res } = await this.$http.get('/song/url', { params: { id, br } })
    if (res.data[0].url !== null) {
        const newUrl = res.data[0].url
        this.$store.commit('changemusicUrl', newUrl)
        return 'ok'
    }
}

Vue.prototype.srceenWidth = function() {
    return document.documentElement.clientWidth || document.body.clientWidth
}

Vue.prototype.getSongsListsDetail = function(id) {
    window.sessionStorage.setItem('songsListdetailId', id)
    this.$router.push('/songsListsDetail')
}

Vue.prototype.goMV = function(id) {
    window.sessionStorage.setItem('MVdetailId', id)
    this.$router.history.push('/MVsdetail')
}