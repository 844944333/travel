<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe670;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe612;</span>
            请输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{city}}
                <span class="iconfont arr-icon">&#xe627;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "HomeHeader",
    computed: {
        ...mapState(['city'])
    }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.header
    line-height $headerHeight
    display flex
    background $bgColor
    color #fff
    .header-left
        float left
        width .64rem
        margin-left .1rem
        .back-icon
            text-align center
            font-size .4rem
    .header-input
        flex 1
        color #ccc
        height .64rem
        line-height .64rem
        background #fff
        border-radius .1rem
        padding-left .2rem
        margin-left .2rem
        margin-top .12rem
    .header-right
        min-width 1.24rem
        float right
        text-align center
        color #ffffff
        padding 0 .1rem
        .arr-icon
            font-size .3rem
            margin-left -.05rem
            padding 0 .1rem
</style>