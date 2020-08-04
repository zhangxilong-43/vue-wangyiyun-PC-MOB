<template>
    <div class="discovery">
<!-- 轮播图 -->
        <div class="carousel">
            <el-carousel :interval="4000" type="card" height="200px" v-if="mySrceenWidth > 1200">
                <el-carousel-item v-for="item in bannerPCList" :key="item.encodeId">
                    <a :href="item.url"> <img :src="item.imageUrl" > </a>
                </el-carousel-item>
            </el-carousel>

            <mt-swipe :auto="4000" v-else>
                <mt-swipe-item v-for="item in bannerMobList" :key="item.bannerId">
                    <a :href="item.url"><img :src="item.pic"></a>
                </mt-swipe-item>
            </mt-swipe>
        </div>
<!-- 推荐歌单 -->
        <el-card class="songList">
            <el-row>
                <el-col :span="2.5"><h6>推荐歌单</h6></el-col>
            </el-row>
            <div class="row1">
                <div class="oneList" v-for="item in songList" :key="item.id" >
                    <span class="copywriter">{{item.copywriter}}</span>
                    <img :src="item.picUrl">
                    <a href="javascript:;">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-bofang1"></use>
                        </svg>
                    </a>
                    <p>{{item.name}}</p>
                </div>
            </div>
        </el-card>
<!-- 最新音乐 -->
        <el-card class="newSongs">
            <el-row>
                <el-col :span="2.5"><h6>最新音乐</h6></el-col>
            </el-row>
            <div class="row2">
                <div class="oneNewSongs" v-for="item in newSongs" :key="item.id" @click="playMusic(item.id ,item.song.duration)">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bofang1"></use>
                    </svg>
                    <img :src="item.picUrl">
                    <div class="txt">
                        <h3>{{item.name}}</h3>
                        <p>{{item.song.artists[0].name}}</p>
                    </div>
                </div>
            </div>
        </el-card>
<!-- 推荐MV -->
        <el-card class="MV">
            <el-row>
                <el-col :span="2.5"><h6>推荐MV</h6></el-col>
            </el-row>
            <div class="row3">
                <div class="MVList" v-for="item in MVList" :key="item.id" >
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bofang1"></use>
                    </svg>
                    <img :src="item.picUrl">
                    <span class="iconfont icon-bofang">{{item.playCount}}</span>
                    <h3>{{item.name}}</h3>
                    <p>{{item.artistName}}</p>
                </div>
            </div>
        </el-card>

    </div>
</template>

<script>

export default {
    name: 'work',
    data() {
        return {
            bannerPCList: [],
            bannerMobList: [],
            songList: [],
            newSongs: [],
            MVList: [],
        }
    },
    created() {
        this.getBannerList()
        this.getSongList()
        this.getNewSongs()
        this.getMVList()
    },
    methods: {
        async getBannerList() {
            const { data: PCres } = await this.$http.get('/banner' , { params: { type: 1 } })
            this.bannerMobList = PCres.banners
            const { data: Mobres } = await this.$http.get('/banner')
            this.bannerPCList = Mobres.banners
        },
        async getSongList() {
            const { data: res } = await this.$http.get('/personalized')
            this.songList = [...res.result.slice(0,8)]
        },
        async getNewSongs() {
            const { data: res } = await this.$http.get('/personalized/newsong')
            this.newSongs = res.result
            // console.log(this.newSongs);
        },
        async getMVList() {
            const { data: res } = await this.$http.get('/personalized/mv')
            this.MVList = res.result
        },
        playMusic(id, br) {
            this.getMusicUrl(id, br)
        }
    },
    computed: {
        mySrceenWidth() {
            return this.srceenWidth()
        }
    }
}
</script>

<style lang="less" scoped>
.discovery {
    height: 30rem;
    .carousel {
        height: 5rem;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }
    .songList, .newSongs, .MV {
        // height: 10.8rem;
        margin: 0.6rem auto;
        background: #a9bac3c0;
        border: none;
        border-radius: .2rem;
        max-width: 1100px;
        h6 {
            margin: 0 0 .2rem;
            font-size: .36rem;
        }
    }
}

.el-carousel {
    overflow: hidden;
    width: 22rem;
    height: 4.6rem!important;
    .el-carousel-item {
        width: 11rem;
    }
    img {
        border-radius: .2rem;
        width: 100%;
    }
}

.mint-swipe {
    width: 14rem;
    height: 5rem;
    overflow: hidden;
    border-radius: .2rem;
    img {
        // width: 14rem;
        height: 100%;
        border-radius: .2rem;
    }
    .mint-swipe-indicator {
        width: .16rem!important;
        height: .16rem!important;
    }
}

.mint-swipe /deep/ .mint-swipe-items-wrap {
    height: 88%;
}

.mint-swipe /deep/ .mint-swipe-indicators {
    bottom: 0rem;
}

.mint-swipe /deep/ .mint-swipe-indicator {
    width: .16rem;
    height: .16rem;
    margin: 0 .06rem;
}

.songList p {
    margin: 0;
}

.oneList {
    width: 4rem;
    margin: .273rem;
    display: inline-block;
    position: relative;
    overflow: hidden;
    &:hover .copywriter {
        top: 0;
        z-index: 2;
    }
    &:hover .icon {
        opacity: 0.8;
    }
    .copywriter {
        box-sizing: border-box;
        position: absolute;
        top: -20%; //-20% 0%
        display: inline-block;
        width: 4rem;
        background-color: rgba(5, 5, 5, 0.678);
        font-size: .28rem;
        color: #fff;
        padding: .1rem;
        transition-duration: .5s;
        text-align: left;
        z-index: -1;
    }
    .icon {
        position: absolute;
        right: .22rem;
        bottom: .68rem;
        width: .8rem;
        height: .8rem;
        transition-duration: .5s;
        opacity: 0;
    }
    img {
        border-radius: .2rem;
        width: 4rem;
        height: 4rem;
        z-index: 1;
    }
    p {
        width: 4rem;
        text-overflow: ellipsis;
        font-size: .28rem;
        margin: 0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }
}

.row1 {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.newSongs {
    box-sizing: border-box;
    padding-bottom: .3rem;
}
.oneNewSongs {
    position: relative;
    float: left;
    width: 50%;
    height: 1.8rem;
    display: flex;
    justify-content: flex-start;
    padding-top: .2rem;
    overflow: hidden;
    transition-duration: .5s;
    border-radius: .1rem;
    cursor: pointer;
    &:hover {
        background-color: rgba(250, 229, 229, 0.603);
    }
    &:hover .icon {
        opacity: .8;
    }
    .icon {
        position: absolute;
        top: 1rem;
        left: 1rem;
        transform: translate(-50%,-50%);
        opacity: 0;
        transition-duration: .5s;
    }
    img {
        width: 1.6rem;
        height: 1.6rem;
        margin: 0 0 .2rem .2rem;
    }
    .txt {
        height: 1.6rem;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;
        h3 {
            font-size: .32rem;
            margin: 0 0 .2rem .2rem;
            text-align: left;
        }
        p {
            font-size: .28rem;
            margin: 0 0 .2rem .2rem;
            display: inline-block;
        }
    }
}

.row3 {
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.MVList {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: .3rem;
    width: 5rem;
    overflow: hidden;
    &:hover .icon {
        opacity: .8;
    }
    .icon {
        position: absolute;
        top: 1.5rem;
        left: 2.5rem;
        width: .8rem;
        height: .8rem;
        opacity: 0;
        transition-duration: .5s;
        transform: translate(-50%, -50%);
    }
    img {
        width: 5rem;
        height: 3rem;
        border-radius: .2rem;
    }
    span {
        position: absolute;
        top: .04rem;
        right: .04rem;
        font-size: .3rem;
        color: #fff;
    }
    h3 {
        font-size: .3rem;
        margin: .1rem 0;
        text-align: left;
    }
    p {
        font-size: .28rem;
        margin: 0;
    }
}
</style>