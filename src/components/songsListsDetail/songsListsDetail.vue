<template>
    <div class="songsListsDetail">
        <el-card>
            <div :class="changeClass" >
                <img class="coverImgUrl" :src="playlist.coverImgUrl">
                <div class="detail">
                    <h2>{{playlist.name}}</h2>
                    <div class="creacter">
                        <img class="avatarUrl" :src="playlist.creator.avatarUrl">
                        <h3>{{playlist.creator.nickname}}</h3>
                        <h4>{{playlist.createTime | dateFormat2}}创建</h4>
                    </div>
                    <p><b>标签:</b>
                        <el-tag
                            v-for="item in playlist.tags"
                            :key="item"
                            type= "warning"
                            effect="plain">
                            {{ item }}
                        </el-tag>
                    </p>
                    <p><b>简介:</b>{{playlist.description}}</p>
                </div>
            </div>
        </el-card>
        <el-card class="con">
            <el-tabs v-model="activeCat" @tab-click="handleClick" lazy>
                <el-tab-pane label="歌曲列表" name="0">
                    <el-table :data="playlist.tracks" v-if="mySrceenWidth > 1200" style="width: 100%" stripe @row-click="playMusicTab" highlight-current-row > 
                        <el-table-column type="index" width="50"></el-table-column>
                        <el-table-column prop="name" label="歌名" >
                            <template slot-scope="scope">
                                {{scope.row.name}}
                                <i class="el-icon-video-camera icon" v-if="scope.row.mv !== 0" @click.stop="goMV(scope.row.mv)"></i>
                            </template>  
                        </el-table-column>
                        <el-table-column prop="ar[0].name" label="歌手" width="250"></el-table-column>
                        <el-table-column prop="al.name" label="专辑" >
                            <template slot-scope="scope">
                                《{{scope.row.al.name}}》
                            </template>                        
                        </el-table-column>
                        <el-table-column prop="dt" label="时长" width="90">
                            <template slot-scope="scope">
                                {{scope.row.dt | dateFormat1}}
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="mobSongsList" v-else >
                        <ul>
                            <li v-for="item in playlist.tracks" :key="item.id" @click="playMusicTab( {id: item.id,duration: item.dt} )">
                                <h4>{{item.name}}</h4>
                                <p>{{item.ar[0].name}}</p>
                                <i class="el-icon-video-camera icon" v-if="item.mv !== 0" @click.stop="goMV(item.mv)"></i>
                                <span>{{ item.dt | dateFormat1 }}</span>
                            </li>
                        </ul>
                </div>
                </el-tab-pane>
                <el-tab-pane label= "评论" name="1" >
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
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui'; 

export default {
    data() {
        return {
            playlist: {
                creator: {},
                tracks: []
            },
            activeCat: '0',
            hotTotal: 0,
            topTotal: 0,
            hotComments: [],
            topComments: [],
            detailId: window.sessionStorage.getItem('songsListdetailId'),
            currentPageHot: 1,
            currentPageTop: 1,
        }
    },
    methods: {
        async getDetail() {
            const { data: res } = await this.$http.get('/playlist/detail', { params: {
                id: this.detailId
            } })
            this.playlist = res.playlist
            this.playlist.tracks = res.playlist.tracks
        },
        async playMusic(id, br) {
            const res = await this.getMusicUrl(id, br)
            if (res !== 'ok') {
                if (this.mySrceenWidth < 450) {
                    MessageBox('提示', '抱歉，付费歌曲无法播放！')
                } else {
                    this.$message('抱歉，付费歌曲无法播放！')
                }
            }
        },
        playMusicTab(row) {
            this.playMusic(row.id, row.dt)
        },
        async hotRes() {
            const { data: res1 } = await this.$http.get('/comment/hot', { params: {
                id: this.detailId,
                type: 2,
                limit: 10,
                offset: (this.currentPageHot - 1) * 10
            } })
            this.hotComments = res1.hotComments
            this.hotTotal = res1.total
        },
        async topRes() {
            const { data: res2 } = await this.$http.get('/comment/playlist', { params: {
                id: this.detailId,
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
        handleClick(tab) {
            if (tab.index !== 0) {
                this.getComment()
            } else if (tab.index !== 1) {
                this.getDetail()
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
        this.getDetail()
    },
    computed: {
        mySrceenWidth() {
            return this.srceenWidth()
        },
        changeClass() {
            if (this.srceenWidth() > 1000) {
                return 'detailShowPC'
            } else {
                return 'detailShowMob'
            }
        }
    }
}
</script>

<style lang="less" scoped>
.el-card {
    text-align: left;
}

.con {
    margin-top: .8rem;
}

.detailShowPC {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    .coverImgUrl {
        width: 4.6rem;
        height: 4.6rem;
        margin-right: .4rem;
        border-radius: .3rem;
        box-shadow: 0 .04rem .24rem 0 rgba(0,0,0,.34);
    }
    .detail {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .creacter {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 0 0 .3rem 0;
        }     
        .avatarUrl {
            width: .7rem;
            height: .7rem;
            border-radius: 50%;
        }
        h2 {
            margin: .6rem 0;
            font-size: .5rem;
        }
        h3 {
            margin: 0 .36rem;
            font-size: .4rem;
        }
        h4 {
            margin: 0;
            font-size: .28rem;
        }
        p {
            margin: .12rem 0;
            font-size: .29rem;
            b {
                margin-right: .3rem;
            }
        }
    }
}

.detailShowMob {
    display: flex;
    flex-direction: column;
    align-items: center;
    .coverImgUrl {
        width: 5.6rem;
        height: 5.6rem;
        margin-right: .4rem;
        border-radius: .3rem;
        box-shadow: 0 .04rem .24rem 0 rgba(0,0,0,.34);
    }
    .detail {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        .creacter {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            margin: 0 0 .3rem 0;
        }     
        .avatarUrl {
            width: .7rem;
            height: .7rem;
            border-radius: 50%;
        }
        h2 {
            margin: .6rem 0;
            font-size: .5rem;
        }
        h3 {
            margin: 0 .36rem;
            font-size: .4rem;
        }
        h4 {
            margin: .1rem 0;
            font-size: .24rem;
            color: #573a3a94;
        }
        p {
            margin: .12rem 0;
            font-size: .29rem;
            align-self: flex-start;
            b {
                margin-right: .3rem;
            }
        }
    }
}

.el-tag {
    margin: 0 .1rem;
    background-color: #d7ebef;
    border: .02rem solid #ccc;
    font-size: .29rem;
    color: #626e8ae6;
    cursor: pointer;
}

.el-table .icon {
    top: 11.7px;
    left: -21px;
}

.hotComments, .topComments {
    overflow: hidden;
    position: relative;
    h2 {
        margin: 0 0 .3rem 0;
        font-size: .4rem;
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
        text-align: left;
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

.mobSongsList {
    li {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        box-sizing: border-box;
        margin: .3rem 0;
        padding: .3rem;
        border: .01rem solid #cacbf1c7;
        border-radius: .3rem;
        background-color: #c7e7ea;
        h4 {
            margin: .1rem 0;
            font-size: .36rem;
        }
        p {
            margin: 0;
            font-size: .24rem;
        }
        i {
            position: absolute;
            top: 50%;
            left: 82%;
            z-index: 2;
            transform: translate(-50%, -50%);
        }
        span {
            font-size: .32rem;
            color: #252925a6;
            position: absolute;
            top: 50%;
            left: 92%;
            transform: translate(-50%, -50%);
        }
    }
}

</style>