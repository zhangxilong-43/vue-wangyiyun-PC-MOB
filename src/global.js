import Vue from 'vue'

Vue.prototype.getMusicUrl = async function(id, br) {
    const { data: res } = await this.$http.get('/song/url', { params: { id, br } })
    const newUrl = res.data[0].url
    this.$store.commit('change', newUrl)
}

Vue.prototype.srceenWidth = function() {
    return document.documentElement.clientWidth || document.body.clientWidth
}