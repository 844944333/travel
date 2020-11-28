<template>
    <div class="icons">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.index">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.title}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "HomeIcons",
    props: {
        iconList: Array
    },
    data () {
        return {
            swiperOption: {
                loop: true
            }
        }
    },
    computed: {
        pages () {
            const pages = [];
            for (let i = 0; i < this.iconList.length; i++) {
                const page = Math.floor(i / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(this.iconList[i])
            }
            return pages
        },
        showSwiper () {
            return this.iconList.length
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "../../../assets/styles/varibles.styl"
    @import "../../../assets/styles/mixins.styl"
    .icons >>> .swiper-container
        height 0
        padding-bottom 50%
        overflow hidden
    .icon
        position relative
        overflow hidden
        height 0
        width 25%
        float left
        padding-bottom 25%
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            box-sizing border-box
            padding .1rem
            .icon-img-content
                display block
                height 100%
                margin 0 auto
        .icon-desc
            position absolute
            bottom 0
            left 0
            right 0
            line-height .44rem
            height .44rem
            text-align center
            color $darkTextColor
            ellipse()
</style>