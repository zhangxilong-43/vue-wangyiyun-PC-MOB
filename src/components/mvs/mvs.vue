<template>
<div class="mvs">

    <el-card class="mvsPC" v-if="mySrceenWidth > 685">
        <div class="menu">
            <div class="tab">地区：<el-button :class="area[i] === params1 ? 'activeBtn' : ''" @click="selectArea(i)" round size="mini" v-for="(item, i) in area" :key="i" >{{ item }}</el-button></div>
            <div class="tab">类型：<el-button :class="type[i] === params2 ? 'activeBtn' : ''" @click="selectType(i)" round size="mini" v-for="(item, i) in type" :key="i" >{{ item }}</el-button></div>
            <div class="tab">排序：<el-button :class="order[i] === params3 ? 'activeBtn' : ''" @click="selectOrder(i)" round size="mini" v-for="(item, i) in order" :key="i">{{ item }}</el-button></div>
        </div>
        <div class="MVLists">
            <div class="oneMV" v-for="item in MVLists" :key="item.id" @click="goMV(item.id)">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang1"></use>
                </svg>
                <img :src="item.cover">
                <span class="iconfont icon-bofang">{{item.playCount}}</span>
                <h3>{{item.name}}</h3>
            </div>
        </div>

    </el-card>

    <div class="mvsMob" v-else>
        <i class="el-icon-s-operation" @click="dialogVisible = true">筛选</i>
        <div class="allMVs">
            <div class="oneMV" v-for="item in MVLists" :key="item.id" @click="goMV(item.id)">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang1"></use>
                </svg>
                <img :src="item.cover">
                <span class="iconfont icon-bofang">{{item.playCount}}</span>
                <h3>{{item.name}}</h3>
            </div>
        </div>
    </div>

    <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="12"
            layout="prev, pager, next"
            :total="1000">
    </el-pagination>

    <el-dialog
        title="筛选"
        :visible.sync="dialogVisible"
        width="90%">
        <div class="menuMob">
            <div class="tab">地区：<br><el-button :class="area[i] === params1 ? 'activeBtn' : ''" @click="selectArea(i)" round size="mini" v-for="(item, i) in area" :key="i" >{{ item }}</el-button></div>
            <div class="tab">类型：<br><el-button :class="type[i] === params2 ? 'activeBtn' : ''" @click="selectType(i)" round size="mini" v-for="(item, i) in type" :key="i" >{{ item }}</el-button></div>
            <div class="tab">排序：<br><el-button :class="order[i] === params3 ? 'activeBtn' : ''" @click="selectOrder(i)" round size="mini" v-for="(item, i) in order" :key="i">{{ item }}</el-button></div>
        </div>
    </el-dialog>

</div>
    
</template>

<script>
export default {
    data() {
        return {
            area: ['全部','内地','港台','欧美','日本','韩国'],
            type: ['全部','官方版','原生','现场版','网易出品'],
            order: ['上升最快','最热','最新'],
            params1: '全部',
            params2: '全部',
            params3: '上升最快',
            MVLists: [],
            currentPage: 1,
            total: 0,
            dialogVisible: false
        }
    },
    methods: {
        async getMVLists() {
            const { data: res } = await this.$http.get('/mv/all', { params: {
                area: this.params1,
                type: this.params2,
                order: this.params3,
                limit: 12,
                offset: (this.currentPage - 1) * 12
            } } )
            this.MVLists = res.data
            this.total = res.count
        },
        selectArea(i) {
            this.params1 = this.area[i]
            this.getMVLists()
        },
        selectType(i) {
            this.params2 = this.type[i]
            this.getMVLists()
        },
        selectOrder(i) {
            this.params3 = this.order[i]
            this.getMVLists()
        },
        handleCurrentChange(val) {
            this.currentPage = val
            this.getMVLists()
        }
    },
    created() {
        this.getMVLists()
    },
    computed: {
        mySrceenWidth() {
            return this.srceenWidth()
        },
    }
}
</script>

<style lang="less" scoped>
.mvsPC {
    max-width: 1200px;
    margin: 0 auto;
}

.menu {
    font-size: .28rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column-reverse;
    margin: 0 auto .4rem;
    .tab {
        margin: .3rem .2rem;
        .el-button {
            margin: 0 .2rem;
            background-color: #cad9e1;
            border-color: #cad9e1;
            &:hover {
                color: rgb(125, 183, 209);
            }
        }
    }
    .activeBtn {
        color: rgb(4, 50, 67);
        background-color: rgb(238, 245, 245)!important;
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
    margin: 0 .2rem .3rem;
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

.mvsMob {
    position: relative;
    i {
        position: absolute;
        top: 0;
        right: 0;
        margin: .6rem;
        font-size: .6rem;
        z-index: 1;
    }
    .allMVs {
        padding-top: 1.8rem;
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        overflow: hidden;
    }
}

.menuMob {
    font-size: .28rem;
    display: flex;
    align-items: flex-start;
    margin: 0 auto .4rem;
    .tab {
        margin: .3rem .2rem;
        .el-button {
            margin: .2rem .2rem;
            background-color: #cad9e1;
            border-color: #cad9e1;
            &:hover {
                color: rgb(125, 183, 209);
            }
        }
    }
    .activeBtn {
        color: rgb(4, 50, 67);
        background-color: rgb(238, 245, 245)!important;
    }
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

</style>