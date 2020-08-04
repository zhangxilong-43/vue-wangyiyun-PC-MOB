<template>
    <el-card class="newSongs">
        <el-tabs v-model="activeCat" @tab-click="handleClick" >
            <el-tab-pane label="全部" name="0">
                <div class="songlistsCon" v-if="mySrceenWidth < 450">
                    <div class="oneSonglistsCon" v-for="item in mobSonglists" :key="item.id" >
                        <i class="el-icon-video-camera" v-if="item.mvid !== 0" @click="goMV"></i>
                        <img v-lazy="item.album.blurPicUrl" @click="playMusic(item.id, item.duration)">
                        <a @click="playMusic(item.id, item.duration)">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
                <el-table :data="PCSonglists" style="width: 100%" stripe v-else @row-click="playMusicTab" highlight-current-row > 
                    <el-table-column type="index" width="50"></el-table-column>
                    <el-table-column prop="name" label="歌名" >
                        <template slot-scope="scope">
                            {{scope.row.name}}
                            <i class="el-icon-video-camera icon" v-if="scope.row.mvid !== 0" @click="goMV"></i>
                        </template>  
                    </el-table-column>
                    <el-table-column prop="artists[0].name" label="歌手" width="180"></el-table-column>
                    <el-table-column prop="album.name" label="专辑" >
                        <template slot-scope="scope">
                            《{{scope.row.album.name}}》
                        </template>                        
                    </el-table-column>
                    <el-table-column prop="duration" label="时长" width="90">
                        <template slot-scope="scope">
                            {{scope.row.duration | dateFormat}}
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="华语" name="7" >
                <div class="songlistsCon" v-if="mySrceenWidth < 450">
                    <div class="oneSonglistsCon" v-for="item in mobSonglists" :key="item.id" >
                        <i class="el-icon-video-camera" v-if="item.mvid !== 0" @click="goMV"></i>
                        <img v-lazy="item.album.blurPicUrl" @click="playMusic(item.id, item.duration)">
                        <a @click="playMusic(item.id, item.duration)">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
                <el-table :data="PCSonglists" style="width: 100%" stripe v-else @row-click="playMusicTab" highlight-current-row > 
                    <el-table-column type="index" width="50"></el-table-column>
                    <el-table-column prop="name" label="歌名" >
                        <template slot-scope="scope">
                            {{scope.row.name}}
                            <i class="el-icon-video-camera icon" v-if="scope.row.mvid !== 0" @click="goMV"></i>
                        </template>                          
                    </el-table-column>
                    <el-table-column prop="artists[0].name" label="歌手" width="180"></el-table-column>
                    <el-table-column prop="album.name" label="专辑" >
                        <template slot-scope="scope">
                            《{{scope.row.album.name}}》
                        </template>                        
                    </el-table-column>
                    <el-table-column prop="duration" label="时长" width="90">
                        <template slot-scope="scope">
                            {{scope.row.duration | dateFormat}}
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="欧美" name="96">
                <div class="songlistsCon" v-if="mySrceenWidth < 450">
                    <div class="oneSonglistsCon" v-for="item in mobSonglists" :key="item.id" >
                        <i class="el-icon-video-camera" v-if="item.mvid !== 0" @click="goMV"></i>
                        <img v-lazy="item.album.blurPicUrl" @click="playMusic(item.id, item.duration)">
                        <a @click="playMusic(item.id, item.duration)">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
                <el-table :data="PCSonglists" style="width: 100%" stripe v-else @row-click="playMusicTab" highlight-current-row > 
                    <el-table-column type="index" width="50"></el-table-column>
                    <el-table-column prop="name" label="歌名" >
                        <template slot-scope="scope">
                            {{scope.row.name}}
                            <i class="el-icon-video-camera icon" v-if="scope.row.mvid !== 0" @click="goMV"></i>
                        </template>  
                    </el-table-column>
                    <el-table-column prop="artists[0].name" label="歌手" width="180"></el-table-column>
                    <el-table-column prop="album.name" label="专辑" >
                        <template slot-scope="scope">
                            《{{scope.row.album.name}}》
                        </template>                        
                    </el-table-column>
                    <el-table-column prop="duration" label="时长" width="90">
                        <template slot-scope="scope">
                            {{scope.row.duration | dateFormat}}
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="日本" name="8" >
                <div class="songlistsCon" v-if="mySrceenWidth < 450">
                    <div class="oneSonglistsCon" v-for="item in mobSonglists" :key="item.id" >
                        <i class="el-icon-video-camera" v-if="item.mvid !== 0" @click="goMV"></i>
                        <img v-lazy="item.album.blurPicUrl" @click="playMusic(item.id, item.duration)">
                        <a @click="playMusic(item.id, item.duration)">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
                <el-table :data="PCSonglists" style="width: 100%" stripe v-else @row-click="playMusicTab" highlight-current-row > 
                    <el-table-column type="index" width="50"></el-table-column>
                    <el-table-column prop="name" label="歌名" >
                        <template slot-scope="scope">
                            {{scope.row.name}}
                            <i class="el-icon-video-camera icon" v-if="scope.row.mvid !== 0" @click="goMV"></i>
                        </template>  
                    </el-table-column>
                    <el-table-column prop="artists[0].name" label="歌手" width="180"></el-table-column>
                    <el-table-column prop="album.name" label="专辑" >
                        <template slot-scope="scope">
                            《{{scope.row.album.name}}》
                        </template>                        
                    </el-table-column>
                    <el-table-column prop="duration" label="时长" width="90">
                        <template slot-scope="scope">
                            {{scope.row.duration | dateFormat}}
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="韩国" name="16">
                <div class="songlistsCon" v-if="mySrceenWidth < 450">
                    <div class="oneSonglistsCon" v-for="item in mobSonglists" :key="item.id" >
                        <i class="el-icon-video-camera" v-if="item.mvid !== 0" @click="goMV"></i>
                        <img v-lazy="item.album.blurPicUrl" @click="playMusic(item.id, item.duration)">
                        <a @click="playMusic(item.id, item.duration)">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-bofang1"></use>
                            </svg>
                        </a>
                        <p>{{item.name}}</p>
                    </div>
                </div>
                <el-table :data="PCSonglists" style="width: 100%" stripe v-else @row-click="playMusicTab" highlight-current-row > 
                    <el-table-column type="index" width="50"></el-table-column>
                    <el-table-column prop="name" label="歌名" >
                        <template slot-scope="scope">
                            {{scope.row.name}}
                            <i class="el-icon-video-camera icon" v-if="scope.row.mvid !== 0" @click="goMV"></i>
                        </template>  
                    </el-table-column>
                    <el-table-column prop="artists[0].name" label="歌手" width="180"></el-table-column>
                    <el-table-column prop="album.name" label="专辑" >
                        <template slot-scope="scope">
                            《{{scope.row.album.name}}》
                        </template>                        
                    </el-table-column>
                    <el-table-column prop="duration" label="时长" width="90">
                        <template slot-scope="scope">
                            {{scope.row.duration | dateFormat}}
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
        
    </el-card>
</template>

<script>
import { MessageBox } from 'mint-ui';

export default {
    data() {
        return {
            activeCat: '0',
            catLists: ["全部","华语","欧美","日本","韩国"],
            mobSonglists: [],
            PCSonglists: []
        }
    },
    methods: {
        async getSonglists() {
            const { data: res } = await this.$http.get('/top/song', { params: {
                type: this.activeCat
            } })
            this.mobSonglists = res.data.slice(0, 30)
            this.PCSonglists = res.data
            // console.log(res);
            console.log(this.PCSonglists);
        },
        handleClick() {
            this.mobSonglists = []
            this.PCSonglists = []
            this.getSonglists()
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
        goMV() {
            this.$store.commit('remove')
            this.$router.history.push('/welcome')
        }
    },
    created() {
        this.getSonglists()
    },
    computed: {
        mySrceenWidth() {
            return this.srceenWidth()
        }
    }
}
</script>

<style lang="less" scoped>
.newSongs {
    max-width: 1200px;
    margin: 0 auto;
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

.oneSonglistsCon {
    width: 2rem;
    margin: .6rem;
    display: inline-block;
    position: relative;
    // overflow: hidden;
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
        right: 0.557rem;
        bottom: 1.15rem;
        transform: translate(-50%, -50%);
        width: .4rem;
        height: .4rem;
        transition-duration: .5s;
        opacity: 0;
    }
    img {
        border-radius: .2rem;
        width: 2rem;
        height: 2rem;
        z-index: 1;
        box-shadow: 0 .04rem .24rem 0 rgba(0,0,0,.34);
    }
    p {
        width: 2rem;
        text-overflow: ellipsis;
        font-size: .24rem; 
        margin: 0;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
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

</style>