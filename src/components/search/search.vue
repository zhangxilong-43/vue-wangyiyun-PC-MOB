<template>
    <div class="search">
        <el-card class="searchPC">
            <el-input placeholder="请输入内容" v-model="input" class="input-with-select" @keyup.enter.native="searchSongs">
                <el-button slot="append" icon="el-icon-search" @click="searchKey"></el-button>
            </el-input>
        </el-card>
        <el-card class="newSongs bottom30" v-if="newSongs !== null">
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
        <el-card class="newSongs" v-else-if="total !== 0">
            <h2>{{input}}</h2>
            <p id="p1">共找到{{total}}个结果</p>
            <el-tabs v-model="activeCat" @tab-click="handleClick" lazy>
                <el-tab-pane label="歌曲" name="0">
                    <el-table v-if="mySrceenWidth > 1200" :data="searchSongsRes" style="width: 100%" stripe @row-click="playMusicTab" highlight-current-row > 
                        <el-table-column type="index" width="50"></el-table-column>
                        <el-table-column prop="name" label="歌名" >
                            <template slot-scope="scope">
                                {{scope.row.name}}
                                <i class="el-icon-video-camera icon" v-if="scope.row.mvid !== 0" @click.stop="myGoMV(item.mvid)"></i>
                            </template>  
                        </el-table-column>
                        <el-table-column prop="artists[0].name" label="歌手" :width="80"></el-table-column>
                        <el-table-column prop="album.name" label="专辑" >
                            <template slot-scope="scope">
                                《{{scope.row.album.name}}》
                            </template>                        
                        </el-table-column>
                        <el-table-column prop="duration" label="时长" :width="90">
                            <template slot-scope="scope">
                                {{scope.row.duration | dateFormat}}
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="mobSongsList" v-if="mySrceenWidth < 1200">
                        <ul>
                            <li v-for="item in searchSongsRes" :key="item.id" @click="playMusicTab( {id: item.id,duration: item.duration} )">
                                <h4>{{item.name}}</h4>
                                <p>{{item.artists[0].name}}</p>
                                <i class="el-icon-video-camera icon" v-if="item.mvid !== 0" @click.stop="goMV(item.mvid)"></i>
                            </li>
                        </ul>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="歌单" name="1">
                    <div class="playlistsCon">
                        <div class="onePlaylistsCon" v-for="(item,i) in searchSongsListsRes" :key="i" >
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
                <el-tab-pane label="MV" name="2">
                    <div class="MVLists">
                        <div class="oneMV" v-for="item in searchSongsMVsRes" :key="item.id" @click="goMV(item.id)">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                            <img :src="item.cover">
                            <span class="iconfont icon-bofang">{{item.playCount}}</span>
                            <h3>{{item.name}}</h3>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="total">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui';

export default {
    data() {
        return {
            input: '',
            newSongs: null,
            searchSongsRes: [],
            searchSongsListsRes: [],
            searchSongsMVsRes: [],
            activeCat: 0,
            catLists: [1, 1000, 1004],
            total: 0,
            currentPage: 1
        }
    },
    created() {
        this.getNewSongs()
    },
    methods: {
        async getNewSongs() {
            const { data: res } = await this.$http.get('/personalized/newsong')
            this.newSongs = res.result
        },
        async searchSongs() {
            const { data: res } = await this.$http.get('/search', { params: {
                keywords: this.input,
                type: 1,
                limit: 30,
                offset: ( this.currentPage - 1) * 30
            } })
            this.total = 0
            this.newSongs = null
            this.searchSongsRes = res.result.songs
            if (!res.result.songCount) {
                this.$notify({
                    title: '抱歉',
                    message: '网易云找不到您的这抑首！',
                    type: 'warning'
                });
            }
            this.total = res.result.songCount
        },
        async searchSongsLists() {
            const { data: res } = await this.$http.get('/search', { params: {
                keywords: this.input,
                type: 1000,
                limit: 12,
                offset: ( this.currentPage - 1) * 12
            } })
            this.total = 0
            this.searchSongsListsRes = res.result.playlists
            this.total = res.result.playlistCount
        },
        async searchSongsMVs() {
            const { data: res } = await this.$http.get('/search', { params: {
                keywords: this.input,
                type: 1004,
                limit: 12,
                offset: ( this.currentPage - 1) * 12
            } })
            this.total = 0
            this.searchSongsMVsRes = res.result.mvs
            this.total = res.result.mvCount
        },
        async playMusic(id, br) {
            const res = await this.getMusicUrl(id, br)
            if (res !== 'ok') {
                if (this.mySrceenWidth < 450) {
                    MessageBox('提示', '抱歉，付费歌曲无法播放！');
                } else {
                    this.$message('抱歉，付费歌曲无法播放！')
                }
            }
        },
        playMusicTab(row) {
            this.playMusic(row.id, row.duration)
        },
        handleClick(tab) {
            this.currentPage = 1
            if ( tab.label === '歌曲' ) {
                this.searchSongs()
            } else if ( tab.label === '歌单' ) {
                this.searchSongsLists()                
            } else {
                this.searchSongsMVs()
            }
        },
        searchKey() {
            this.activeCat = '0'
            this.searchSongs()
        },
        handleCurrentChange(val) {
            this.currentPage = val
            if (this.activeCat === '0') {
                this.searchSongs()
            } else if (this.activeCat === '1') {
                this.searchSongsLists()
            } else if (this.activeCat === '2') {
                this.searchSongsMVs()
            }
        },
    },
    computed: {
        mySrceenWidth() {
            return this.srceenWidth()
        },
        pageSize() {
            return this.activeCat === '0' ? 30 : 12
        }
    }
}
</script>

<style lang="less" scoped>
.search {
    position: relative;
}

.searchPC {
    max-width: 1100px;
    margin: 0 auto;
    background: #a9bac3c0;
    border: none;
}

.el-input /deep/ input {
    border: none;
    background-color: #e3fbfb9e;
}

.bottom30 {
    padding-bottom: .6rem;
}

.newSongs {
    box-sizing: border-box;
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
            text-align: left;
        }
    }
}

.el-icon-video-camera {
    position: absolute;
    top: -0.3rem;
    left: -0.3rem;
    background-color: rgba(243, 165, 165, 0.753);
    border-radius: 50%;
    padding: .1rem;
    cursor: pointer;
}

.el-table .icon {
    top: 11.7px;
    left: -21px;
}

.el-table /deep/ tr {
    background-color: #cedbeda3;
}

.el-tabs /deep/ .el-tabs__item.is-active {
    color: #49698a;
}

.el-tabs /deep/ .el-tabs__active-bar {
    background-color: #8286da;
}

.el-tabs /deep/ .el-tabs__item {
    padding: 0 .4rem;
    height: .8rem;
    line-height: .8rem;
    font-size: .28rem;
}

.el-tabs /deep/ .el-tabs__nav-wrap.is-scrollable {
    padding: 0 .4rem;
}

h2, #p1 {
    margin: .1rem;
}

#p1 {
    font-size: .3rem;
    margin: .5rem;
}

.el-pagination {
    margin: .4rem 0 0 0;
    padding: .04rem .1rem;
    overflow: hidden;
}

.el-pagination /deep/ .el-pager li {
    background: none;
    padding: 0 .08rem;
    font-size: .26rem;
    min-width: .71rem;
    height: .56rem;
}

.el-pagination /deep/  .btn-next, .el-pagination /deep/  .btn-prev {
    background: none;
    padding-right: .24rem;
}

.el-pagination /deep/ .el-pager li.active {
    color: #5483b3;
}

.onePlaylistsCon {
    width: 4rem;
    margin: .5rem;
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

.MVLists {
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.oneMV {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    width: 5rem;
    overflow: hidden;
    margin: 0 .1rem .3rem;
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
            top: 31%;
            left: 90%;
            z-index: 2;
        }
    }
}

</style>