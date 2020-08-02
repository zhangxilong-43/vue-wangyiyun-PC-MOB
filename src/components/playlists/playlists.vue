<template>
    <el-card class="playlists">

        <div class="onePlaylists">
            <div class="icon-wrap">
                <img :src="onePlaylists.coverImgUrl + '?param=200y200'">
            </div>
            <div class="bg-mask"></div>
            <img :src="onePlaylists.coverImgUrl" class="bigPic">
            <div class="content-wrap">
                <div class="tag">精品歌单</div>
                <p class="info" >{{onePlaylists.description}}</p>
            </div>
        </div>

        <el-tabs v-model="activeCat" @tab-click="handleClick" >
            <el-tab-pane label="全部" name="0">
                <div class="playlistsCon">
                    <div class="onePlaylistsCon" v-for="item in playlists" :key="item.id" >
                        <span class="copywriter">播放量{{item.playCount}}</span>
                        <img :src="item.coverImgUrl">
                        <a href="javascript:;">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="华语" name="1">
                <div class="playlistsCon">
                    <div class="onePlaylistsCon" v-for="item in playlists" :key="item.id" >
                        <span class="copywriter">播放量{{item.playCount}}</span>
                        <img :src="item.coverImgUrl">
                        <a href="javascript:;">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="流行" name="2">
                <div class="playlistsCon">
                    <div class="onePlaylistsCon" v-for="item in playlists" :key="item.id" >
                        <span class="copywriter">播放量{{item.playCount}}</span>
                        <img :src="item.coverImgUrl">
                        <a href="javascript:;">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="说唱" name="3">
                <div class="playlistsCon">
                    <div class="onePlaylistsCon" v-for="item in playlists" :key="item.id" >
                        <span class="copywriter">播放量{{item.playCount}}</span>
                        <img :src="item.coverImgUrl">
                        <a href="javascript:;">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="摇滚" name="4">
                <div class="playlistsCon">
                    <div class="onePlaylistsCon" v-for="item in playlists" :key="item.id" >
                        <span class="copywriter">播放量{{item.playCount}}</span>
                        <img :src="item.coverImgUrl">
                        <a href="javascript:;">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="民谣" name="5">
                <div class="playlistsCon">
                    <div class="onePlaylistsCon" v-for="item in playlists" :key="item.id" >
                        <span class="copywriter">播放量{{item.playCount}}</span>
                        <img :src="item.coverImgUrl">
                        <a href="javascript:;">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="电子" name="6">
                <div class="playlistsCon">
                    <div class="onePlaylistsCon" v-for="item in playlists" :key="item.id" >
                        <span class="copywriter">播放量{{item.playCount}}</span>
                        <img :src="item.coverImgUrl">
                        <a href="javascript:;">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="欧美" name="7">
                <div class="playlistsCon">
                    <div class="onePlaylistsCon" v-for="item in playlists" :key="item.id" >
                        <span class="copywriter">播放量{{item.playCount}}</span>
                        <img :src="item.coverImgUrl">
                        <a href="javascript:;">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="轻音乐" name="8">
                <div class="playlistsCon">
                    <div class="onePlaylistsCon" v-for="item in playlists" :key="item.id" >
                        <span class="copywriter">播放量{{item.playCount}}</span>
                        <img :src="item.coverImgUrl">
                        <a href="javascript:;">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="影视原声" name="9">
                <div class="playlistsCon">
                    <div class="onePlaylistsCon" v-for="item in playlists" :key="item.id" >
                        <span class="copywriter">播放量{{item.playCount}}</span>
                        <img :src="item.coverImgUrl">
                        <a href="javascript:;">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="ACG" name="10">
                <div class="playlistsCon">
                    <div class="onePlaylistsCon" v-for="item in playlists" :key="item.id" >
                        <span class="copywriter">播放量{{item.playCount}}</span>
                        <img :src="item.coverImgUrl">
                        <a href="javascript:;">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="怀旧" name="11">
                <div class="playlistsCon">
                    <div class="onePlaylistsCon" v-for="item in playlists" :key="item.id" >
                        <span class="copywriter">播放量{{item.playCount}}</span>
                        <img :src="item.coverImgUrl">
                        <a href="javascript:;">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="治愈" name="12">
                <div class="playlistsCon">
                    <div class="onePlaylistsCon" v-for="item in playlists" :key="item.id" >
                        <span class="copywriter">播放量{{item.playCount}}</span>
                        <img :src="item.coverImgUrl">
                        <a href="javascript:;">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </el-tab-pane>
            <!-- <el-tab-pane label="旅行" name="13" >
                <div class="playlistsCon" v-if="appShow">
                    <div class="onePlaylistsCon" v-for="item in playlists" :key="item.id">
                        <span class="copywriter">播放量{{item.playCount}}</span>
                        <img :src="item && item.coverImgUrl" >
                        <a href="javascript:;">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </el-tab-pane> -->
        </el-tabs>

        <el-pagination
            background
            small
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="10"
            layout="prev, pager, next"
            :total="total"
            v-if="mySrceenWidth > 480">
        </el-pagination>
        
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            onePlaylists: [],
            activeCat: '0',
            catLists: ["全部","华语","流行","说唱","摇滚","民谣","电子","欧美","轻音乐","影视原声","ACG" ,"怀旧","治愈"],
            playlists: [],
            currentPage: 1,
            total: 0,
        }
    },
    methods: {
        async getOnePlaylists() {
            const res = await this.$http.get('/top/playlist/highquality', { params: {
                limit: 1,
                cat: this.catLists[this.activeCat]
            } })
            this.onePlaylists = res.data.playlists[0]
            // console.log(res.data.playlists[0]);
        },
        async getPlaylists() {
            const num = this.mySrceenWidth > 480 ? 10 : 30 
            const { data: res } = await this.$http.get('/top/playlist/', { params: {
                limit: num,
                offset: (this.currentPage - 1) * 10 ,
                cat: this.catLists[this.activeCat]
            } })
            this.playlists = res.playlists
            this.mobList = res.playlists
            // console.log(res);
            this.total = res.total
        },
        handleClick() {
            this.getPlaylists()
            this.getOnePlaylists()
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.getPlaylists()
        },
    },
    created() {
        this.getPlaylists()
        this.getOnePlaylists()
    },
    computed: {
        mySrceenWidth() {
            return this.srceenWidth()
        },
        appShow() {
            if (this.playlists) {
                return true
            }
            return false
        }
    }
}
</script>

<style lang="less" scoped>
.playlists {
    max-width: 1200px;
    margin: 0 auto;
}

.onePlaylists {
    position: relative;
    overflow: hidden;
    height: 3.2rem;
    border-radius: .1rem;
    display: flex;
    padding: .4rem;
    box-shadow: 0 .04rem .24rem 0 rgba(0,0,0,.34);
    .icon-wrap {
        margin-right: .4rem;
        z-index: 1;
        height: 3.2rem;
        img {
            width: 3.2rem;
            height: 3.2rem;
        }
    }
    .content-wrap {
        z-index: 1;
        text-align: left;
        .tag {
            color: #dfac67;
            border: 1px solid #dfac67;
            width: 2rem;
            min-width: 60px;
            height: .6rem;
            text-align: center;
            border-radius: .1rem;
            font-size: .32rem;
            line-height: .6rem;
        }
        .info {
            color: #353433bf;
            font-size: .28rem;
            height: 1.6rem;
            padding-top: .1rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
        }
    }
    .bigPic {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        -webkit-filter: blur(.4rem);
        filter: blur(.9rem);
    }
    .bg-mask {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(255 255 255 / 76%);
        // z-index: 2;
    }
}

.el-tabs {
    margin-top: .4rem;
}

.el-tab-pane {
    margin-top: .2rem;
}

.el-tabs /deep/ .el-tabs__nav-prev {
    font-size: large;
}

.el-tabs /deep/ .el-tabs__nav-next {
    font-size: large;
}

.el-tabs /deep/ .el-tabs__item {
    padding: 0 .2rem!important;
}

.el-tabs /deep/ .el-tabs__item.is-active {
    color: #7ba8e4;
}

.onePlaylistsCon {
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

.el-pagination {
    margin: .2rem;
}

</style>