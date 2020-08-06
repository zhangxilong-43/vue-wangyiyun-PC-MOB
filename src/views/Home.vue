<template>
    <el-container class="home">

        <el-container>

            <el-aside>
                 <!-- default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" -->
                <el-menu :collapse="true" background-color="#A9BAC3" active-text-color="#fff" router>
                    <el-menu-item index="discovery">
                        <el-tooltip class="item" effect="dark" content="发现音乐" placement="right">
                            <i>
                                <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-heijiao"></use>
                                </svg>
                            </i>
                        </el-tooltip>
                    </el-menu-item>
                    <el-menu-item index="playlists">
                        <el-tooltip class="item" effect="dark" content="推荐歌单" placement="right">
                        <i>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-yinle"></use>
                            </svg>
                        </i>
                        </el-tooltip>
                    </el-menu-item>
                    <el-menu-item index="songs">
                        <el-tooltip class="item" effect="dark" content="最新音乐" placement="right">
                        <i>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-yinlegedan-"></use>
                            </svg>
                        </i>
                        </el-tooltip>
                    </el-menu-item>
                    <el-menu-item index="mvs">
                        <el-tooltip class="item" effect="dark" content="最新MV" placement="right">
                        <i>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-yinle-shipin"></use>
                            </svg>
                        </i>
                        </el-tooltip>
                    </el-menu-item>
                    <el-menu-item index="search">
                        <el-tooltip class="item" effect="dark" content="最新MV" placement="right">
                        <i>
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-search"></use>
                            </svg>
                        </i>
                        </el-tooltip>
                    </el-menu-item>
                </el-menu>

            </el-aside>

            <el-container>

                <el-main>
                    <router-view/>
                </el-main>

                <el-footer>
                    <!-- <video-player  class="video-player-box"
                                   ref="videoPlayer"
                                   :options="playerOptions"
                                   :playsinline="true"
                                   customEventName="customstatechangedeventname">
                    </video-player> -->
                    <audio :src="this.$store.state.musicUrl" autoplay="autoplay" controls="controls" id="music"></audio>
                </el-footer>

            </el-container>

        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
      return {
        }
    },
    computed: {
    },
    methods: {
    },
}
</script>

<style lang="less" scoped>
.el-menu {
    width: 1.5rem;
    height: 4.48rem;
}
.el-menu i {
    font-size: .65rem
}
.el-menu-item {
    width: 1.48rem;
    min-width: 50px;
    padding: 0!important;
}
.icon {
    min-width: 32.5px;
    min-height: 32.5px;
}

</style>