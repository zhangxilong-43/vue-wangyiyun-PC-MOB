<template>
    <el-card class="newSongs">
        <el-tabs v-model="activeCat" @tab-click="handleClick" lazy>
            <el-tab-pane label="全部" name="0">
                <div class="mobSongsList" v-if="mySrceenWidth < 1200">
                        <ul>
                            <li v-for="item in mobSonglists" :key="item.id" @click="playMusicTab( {id: item.id,duration: item.duration} )">
                                <h4>{{item.name}}</h4>
                                <p>{{item.artists[0].name}}</p>
                                <i class="el-icon-video-camera icon" v-if="item.mvid !== 0" @click.stop.stop="goMV(item.mvid)"></i>
                            </li>
                        </ul>
                </div>
                <el-table :data="PCSonglists" style="width: 100%" stripe v-else @row-click="playMusicTab" highlight-current-row > 
                    <el-table-column type="index" width="50"></el-table-column>
                    <el-table-column prop="name" label="歌名" >
                        <template slot-scope="scope">
                            {{scope.row.name}}
                            <i class="el-icon-video-camera icon" v-if="scope.row.mvid !== 0" @click.stop="goMV(item.mvid)"></i>
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
                            {{scope.row.duration | dateFormat1}}
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="华语" name="7" >
                <div class="mobSongsList" v-if="mySrceenWidth < 1200">
                        <ul>
                            <li v-for="item in mobSonglists" :key="item.id" @click="playMusicTab( {id: item.id,duration: item.duration} )">
                                <h4>{{item.name}}</h4>
                                <p>{{item.artists[0].name}}</p>
                                <i class="el-icon-video-camera icon" v-if="item.mvid !== 0" @click.stop="goMV(item.mvid)"></i>
                            </li>
                        </ul>
                </div>
                <el-table :data="PCSonglists" style="width: 100%" stripe v-else @row-click="playMusicTab" highlight-current-row > 
                    <el-table-column type="index" width="50"></el-table-column>
                    <el-table-column prop="name" label="歌名" >
                        <template slot-scope="scope">
                            {{scope.row.name}}
                            <i class="el-icon-video-camera icon" v-if="scope.row.mvid !== 0" @click.stop="goMV(item.mvid)"></i>
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
                <div class="mobSongsList" v-if="mySrceenWidth < 1200">
                        <ul>
                            <li v-for="item in mobSonglists" :key="item.id" @click="playMusicTab( {id: item.id,duration: item.duration} )">
                                <h4>{{item.name}}</h4>
                                <p>{{item.artists[0].name}}</p>
                                <i class="el-icon-video-camera icon" v-if="item.mvid !== 0" @click.stop="goMV(item.mvid)"></i>
                            </li>
                        </ul>
                </div>
                <el-table :data="PCSonglists" style="width: 100%" stripe v-else @row-click="playMusicTab" highlight-current-row > 
                    <el-table-column type="index" width="50"></el-table-column>
                    <el-table-column prop="name" label="歌名" >
                        <template slot-scope="scope">
                            {{scope.row.name}}
                            <i class="el-icon-video-camera icon" v-if="scope.row.mvid !== 0" @click.stop="goMV(item.mvid)"></i>
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
                <div class="mobSongsList" v-if="mySrceenWidth < 1200">
                        <ul>
                            <li v-for="item in mobSonglists" :key="item.id" @click="playMusicTab( {id: item.id,duration: item.duration} )">
                                <h4>{{item.name}}</h4>
                                <p>{{item.artists[0].name}}</p>
                                <i class="el-icon-video-camera icon" v-if="item.mvid !== 0" @click.stop="goMV(item.mvid)"></i>
                            </li>
                        </ul>
                </div>
                <el-table :data="PCSonglists" style="width: 100%" stripe v-else @row-click="playMusicTab" highlight-current-row > 
                    <el-table-column type="index" width="50"></el-table-column>
                    <el-table-column prop="name" label="歌名" >
                        <template slot-scope="scope">
                            {{scope.row.name}}
                            <i class="el-icon-video-camera icon" v-if="scope.row.mvid !== 0" @click.stop="goMV(item.mvid)"></i>
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
                <div class="mobSongsList" v-if="mySrceenWidth < 1200">
                        <ul>
                            <li v-for="item in mobSonglists" :key="item.id" @click="playMusicTab( {id: item.id,duration: item.duration} )">
                                <h4>{{item.name}}</h4>
                                <p>{{item.artists[0].name}}</p>
                                <i class="el-icon-video-camera icon" v-if="item.mvid !== 0" @click.stop="goMV(item.mvid)"></i>
                            </li>
                        </ul>
                </div>
                <el-table :data="PCSonglists" style="width: 100%" stripe v-else @row-click="playMusicTab" highlight-current-row > 
                    <el-table-column type="index" width="50"></el-table-column>
                    <el-table-column prop="name" label="歌名" >
                        <template slot-scope="scope">
                            {{scope.row.name}}
                            <i class="el-icon-video-camera icon" v-if="scope.row.mvid !== 0" @click.stop="goMV(item.mvid)"></i>
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
            if (!this.mobSonglists[0] || !this.PCSonglists[0]) {
                this.$message({
                    message: '努力加载中......',
                    type: 'warning',
                    duration: 1500,
                });
            }
            const { data: res } = await this.$http.get('/top/song', { params: {
                type: this.activeCat
            } })
            this.mobSonglists = res.data.slice(0, 30)
            this.PCSonglists = res.data
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
                    MessageBox('提示', '抱歉，付费歌曲无法播放！')
                } else {
                    this.$message('抱歉，付费歌曲无法播放！')
                }
            }
        },
        playMusicTab(row) {
            this.playMusic(row.id, row.duration)
        },

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

.oneSonglistsCon {
    width: 2rem;
    margin: .6rem;
    display: inline-block;
    position: relative;
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