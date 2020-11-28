<template>
    <div>
        <div class="header">
            城市选择
            <router-link to="/">
                <div class="iconfont header-back">&#xe670;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "CityHeader"
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.header
    position relative
    height $headerHeight
    line-height $headerHeight
    overflow hidden
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-back
        position absolute
        left 0
        top 0
        width .64rem
        font-size .4rem
        color #fff
        margin-left .1rem
</style>