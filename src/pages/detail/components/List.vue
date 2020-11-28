<template>
    <div>
        <div class="item" v-for="(item, index) in list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon">
                </span>
                {{item.title}}
            </div>
            <!-- 递归组件 -->
            <!-- 如果有item.children这项说明这是个多级的菜单，就调用自身这个组件 -->
            <div class="children" v-if="item.children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailList",     // 用于递归组件
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
    .item-title
        line-height .8rem
        font-size .32rem
        padding 0 .2rem
    .item-title-icon
        display inline-block
        width .36rem
        height .36rem
        background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right .1rem
        background-size .4rem 3rem
        position relative
        left .06rem
        top .06rem
    .children
        padding 0 .5rem
</style>