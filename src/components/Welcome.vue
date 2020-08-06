<template>
  <div class="hello">
    <h3>欢迎来到网抑云音乐,来抑一首吧！</h3>
    <div class="songList" v-for="item in songList" :key="item.id">
        <img :src="item.picUrl">
        <div>
            <h4>{{ item.name }}</h4> 
            <p>{{ item.copywriter }}</p> 
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        songList: []
      }
    },
    created() {
        this.getSongList()
    },
    methods: {
        async getSongList() {
            const { data: res } = await this.$http.get('/personalized?limit=5')
            this.songList = res.result
        }
    }
}
</script>

<style scoped lang="less">
.songList {
    width: 70%;
    height: 3rem;
    margin: .3rem 0;
    display: inline-block;
    box-shadow: 0 .04rem .24rem 0 rgba(0,0,0,.1);
    border-radius: .08rem;
    border: .02rem solid #EBEEF5;
    background-color: #FFF;
    overflow: hidden;
    color: #303133;
    transition: .3s;
    padding: .4rem;
    img {
        float: left;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
    }
    div {
        display: flex;
        // justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 3.5rem;
        height: 3rem;
        h4,p  {
            margin: .2rem;
            padding: 0;
        }
        p  {
            font-size: .24rem;
        }
        h4 {
            font-size: .32rem;
        }
    }
    
}

</style>
