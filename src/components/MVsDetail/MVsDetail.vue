<template>
    <div :class="changeMVsDetaiClass">
        <div :class="changeMVPlayClass">
            <h3>MV详情</h3>
            <video controls :src="MVUrl"></video>
            <div class="mv-info">
                <h3>{{MVInfo.name}}</h3>
                <span>发布：{{MVInfo.publishTime}}</span>
                <p>播放量：{{MVInfo.playCount}}</p>
            </div>
            <div class="singer-info">
                <div>
                    <img :src="SingerInfo.picUrl" alt="">
                    <span>歌手：{{SingerInfo.name}}</span>
                </div>
                <p>简介：{{SingerInfo.briefDesc}}</p>
            </div>
            <div class="comment">
                <div class="hotComments">
                        <h2>热门评论（{{hotTotal}}）</h2>
                        <div class="oneComment" v-for="item in hotComments" :key="item.commentId">
                            <img :src="item.user.avatarUrl" >
                            <div class="con1">
                                <div class="con2">
                                    <h5>{{item.user.nickname}}:</h5>
                                    <p>{{item.content}}</p>
                                </div>
                                <div class="con3" v-for="i in item.beReplied" :key="i.beRepliedCommentId">
                                    <h5>{{i.user.nickname}}:</h5>
                                    <p>{{i.content}}</p>
                                </div>
                                <div class="time">
                                    {{item.time | dateFormat3}}
                                </div>
                            </div>
                        </div>
                            <el-pagination
                                    v-if="hotTotal !== 0"
                                    @current-change="handleCurrentChangeHot"
                                    :current-page.sync="currentPageHot"
                                    :page-size="10"
                                    layout="prev, pager, next"
                                    :total="hotTotal">
                            </el-pagination>
                </div>
                <div class="topComments">
                        <h2>最新评论（{{topTotal}}）</h2>
                        <div class="oneComment" v-for="item in topComments" :key="item.commentId">
                            <img :src="item.user.avatarUrl" >
                            <div class="con1">
                                <div class="con2">
                                    <h5>{{item.user.nickname}}:</h5>
                                    <p>{{item.content}}</p>
                                </div>
                                <div class="con3" v-for="i in item.beReplied" :key="i.beRepliedCommentId">
                                    <h5>{{i.user.nickname}}:</h5>
                                    <p>{{i.content}}</p>
                                </div>
                                <div class="time">
                                    {{item.time | dateFormat3}}
                                </div>
                            </div>
                        </div>
                            <el-pagination
                                    v-if="topTotal !== 0"
                                    @current-change="handleCurrentChangeTop"
                                    :current-page.sync="currentPageTop"
                                    :page-size="10"
                                    layout="prev, pager, next"
                                    :total="topTotal">
                            </el-pagination>
                </div>
            </div>
        </div>
        <div class="relatedMV">
            <h3>相关推荐</h3>
            <div :class="changeOneMVClass" v-for="item in relatedMV" :key="item.id" @click="myGoMV(item.id)">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang1"></use>
                </svg>
                <img :src="item.cover">
                <span class="iconfont icon-bofang">{{item.playCount}}</span>
                <div class="time">{{item.duration | dateFormat1}}</div>
                <div class="txt">
                    <h3>{{item.name}}</h3>
                    <p>{{item.artistName}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            MVid: window.sessionStorage.getItem('MVdetailId'),
            relatedMV: [],
            MVUrl: null,
            MVInfo: {},
            artistId: 0,
            SingerInfo: {},
            hotTotal: 0,
            topTotal: 0,
            hotComments: [],
            topComments: [],
            currentPageHot: 1,
            currentPageTop: 1,
        }
    },
    methods: {
        async getRelatedMV() {
            const { data: res } = await this.$http.get('/simi/mv', { params: {
                mvid: this.MVid
            } })
            this.relatedMV = res.mvs
        },
        async getMVUrl() {
            const { data: res } = await this.$http.get('/mv/url', { params: {
                id: this.MVid
            } })
            this.MVUrl = res.data.url
        },
        async getMVInfo() {
            const { data: res } = await this.$http.get('/mv/detail', { params: {
                mvid: this.MVid
            } })
            this.MVInfo = res.data
            this.artistId = res.data.artistId
            this.getSingerInfo()
        },
        async getSingerInfo() {
            const { data: res } = await this.$http.get('/artists', { params: {
                id: this.artistId
            } })
            this.SingerInfo = res.artist
        },
        myGoMV(id) {
            window.location.reload()
            this.goMV(id)
        },
        async hotRes() {
            const { data: res1 } = await this.$http.get('/comment/hot', { params: {
                id: this.MVid,
                type: 1,
                limit: 10,
                offset: (this.currentPageHot - 1) * 10
            } })
            this.hotComments = res1.hotComments
            this.hotTotal = res1.total
        },
        async topRes() {
            const { data: res2 } = await this.$http.get('/comment/mv', { params: {
                id: this.MVid,
                limit: 10,
                offset: (this.currentPageTop - 1) * 10
            } })
            this.topComments = res2.comments
            this.topTotal = res2.total
        },
        async getComment(val) {
            if (val === 1) {
                this.hotRes()
            } else if (val === 2) {
                this.topRes()
            } else {
                this.topRes()
                this.hotRes()
            }
        },
        handleCurrentChangeHot(val) {
            this.currentPageHot = val
            this.getComment(1)
        },
        handleCurrentChangeTop(val) {
            this.currentPageTop = val
            this.getComment(2)
        }  
    },
    created() {
        this.getMVUrl()
        this.getMVInfo()
        this.getComment()
        this.getRelatedMV()
    },
    computed: {
        changeMVsDetaiClass() {
            if (this.srceenWidth() < 1290) {
                return 'MVsDetailMob'
            } else {
                return 'MVsDetailPC  el-card'
            }
        },
        changeMVPlayClass() {
            if (this.srceenWidth() < 1290) {
                return 'MVPlayMob'
            } else {
                return 'MVPlayPC'
            }
        },
        changeOneMVClass() {
            if (this.srceenWidth() < 1290) {
                return 'oneMVMob'
            } else {
                return 'oneMVPC'
            }
        },
        
    }
}
</script>

<style lang="less" scoped>

.MVsDetailPC {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 .6rem .6rem;
    box-sizing: border-box;
}

.MVsDetailMob {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
}

.MVPlayPC {
    h3 {
        margin: .5rem 0;
        font-size: .36rem;
        text-align: left;
    }
    video {
        width: 12rem;
    }
    .mv-info {
        width: 14rem;
        text-align: left;
        margin-bottom: .3rem;
        h3 {
            margin: .2rem 0 0;
            font-size: .5rem;
        }
        span {
            font-size: .28rem;
            color: #434e4c;
        }
        p {
            font-size: .28rem;
            color: #434e4c;
            margin: 0;
        }
    }
    .singer-info {
        text-align: left;
        display: flex;
        flex-direction: column;
        background-color: #99c1c8cc;
        border-radius: .3rem;
        padding: .4rem;
        margin: 0 .6rem .6rem 0;
        div {
            display: flex;
            align-items: center;
        }
        img {
            // width: 1.4rem;
            height: 1.4rem;
            border-radius: 50%;
            margin: 0 .2rem 0 0;
        }
        p {
            font-size: .24rem;
            text-indent: 2em;
            margin-bottom: 0;
        }
    }
}

.MVPlayMob {
    h3 {
        margin: .5rem 0;
        font-size: .36rem;
        text-align: left;
    }
    video {
        width: 12rem;
    }
    .mv-info {
        width: 12rem;
        text-align: left;
        margin: .2rem 0 .3rem .3rem;
        h3 {
            margin: 0;
            font-size: .5rem;
        }
        span {
            font-size: .28rem;
            color: #434e4c;
        }
        p {
            font-size: .28rem;
            color: #434e4c;
            margin: 0;
        }
    }
    .singer-info {
        text-align: left;
        display: flex;
        flex-direction: column;
        background-color: #99c1c8cc;
        border-radius: .3rem;
        padding: .4rem;
        margin: 0 0 .6rem 0;
        div {
            display: flex;
            align-items: center;
        }
        img {
            // width: 1.4rem;
            height: 1.4rem;
            border-radius: 50%;
            margin: 0 .2rem 0 0;
        }
        p {
            font-size: .24rem;
            text-indent: 2em;
            margin-bottom: 0;
        }
    }
}

.relatedMV {
    h3 {
        margin: .5rem 0 .3rem;
        font-size: .36rem;
        text-align: left;
    }
}

.oneMVPC {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    width: 7.3rem;
    height: 2.5rem;
    &:hover .icon {
        opacity: .8;
    }
    .icon {
        position: absolute;
        top: 1.25rem;
        left: 1.8rem;
        width: .8rem;
        height: .8rem;
        opacity: 0;
        transition-duration: .5s;
        transform: translate(-50%, -50%);
    }
    img {
        width: 3.6rem;
        height: 2.02rem;
        border-radius: .2rem;
    }
    .time {
        position: absolute;
        bottom: .2rem;
        right: 3.8rem;
        color: #fff;
        font-size: .3rem;
    }
    span {
        position: absolute;
        top: .3rem;
        left: .04rem;
        font-size: .3rem;
        color: #fff;
    }
    .txt {
        display: flex;
        flex-direction: column;
        margin-left: .2rem;
        text-align: left;
    }
    h3 {
        font-size: .3rem;
        margin: .1rem 0;
        text-align: left;
    }
    p {
        font-size: .28rem;
        color: #434e4c;
    }
}

.oneMVMob {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    width: 12rem;
    margin-bottom: .4rem;
    &:hover .icon {
        opacity: .8;
    }
    .icon {
        position: absolute;
        top: 1.25rem;
        left: 2.25rem;
        width: .8rem;
        height: .8rem;
        opacity: .5;
        transition-duration: .5s;
        transform: translate(-50%, -50%);
    }
    img {
        width: 4.6rem;
        border-radius: .2rem;
    }
    .time {
        position: absolute;
        bottom: 0rem;
        right: 7.5rem;
        color: #fff;
        font-size: .3rem;
    }
    span {
        position: absolute;
        top: .1rem;
        left: .04rem;
        font-size: .3rem;
        color: #fff;
    }
    .txt {
        display: flex;
        flex-direction: column;
        margin-left: .2rem;
        text-align: left;
    }
    h3 {
        font-size: .3rem;
        margin: .1rem 0;
        text-align: left;
    }
    p {
        font-size: .28rem;
        color: #434e4c;
    }
}

.hotComments, .topComments {
    overflow: hidden;
    position: relative;
    text-align: left;
    h2 {
        margin: 0 0 .3rem 0;
        font-size: .4rem;
        text-align: left;
    }
    .oneComment {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: .2rem .2rem .2rem 0;
        margin: .2rem 0;
        border: .01rem solid #cacbf1c7;
        border-radius: .3rem;
        background-color: #c7e7ea;
        box-sizing: border-box;
        img {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            margin: .2rem;
        }
        .con2 {
            h5 {
                margin: 0;
                font-size: .28rem;
            }
            p {
                margin: .2rem 0 0 .2rem;
                font-size: .28rem;
                text-indent: 2em
            }
        }
        .con3 {
            margin: .1rem;
            border: .01rem solid #cacbf1c7;
            border-radius: .3rem;
            background-color: #b5ebf0ed;
            box-sizing: border-box;
            padding: .2rem;
            h5 {
                margin: 0;
                font-size: .28rem;
            }
            p {
                margin: .1rem 0 0 0;
                font-size: .28rem;
                text-indent: 2em
            }
        }
        .time {
            color: #573a3a94;
            font-size: .24rem;
            margin: .15rem 0 0 0; 
        }
    }
}

.topComments  {
    margin-top: .6rem;
}

</style>