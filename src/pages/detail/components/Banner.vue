<template>
    <div>
        <div class="banner" @click="handleImgClick">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title">
                    {{this.sightName}}
                </div>
            </div>
            <div class="banner-number">
                <span class="iconfont banner-icon">
                    &#xe61e;
                </span>
                <span>
                    {{this.bannerImgs.length}}
                </span>
            </div>
            <div class="banner-video">
                <span class="banner-video-text">视频</span>
                <span class="iconfont banner-iconfont">&#xe61f;</span>
            </div>
        </div>
        <CommonFade>
            <CommonGallary :imgs="bannerImgs" @close="handleClose" v-show="showGallary"></CommonGallary>
        </CommonFade>
    </div>
</template>

<script>
import CommonGallary from '../../../common/gallary/Gallary'
import CommonFade from '../../../common/fade/Fade'
export default {
    name: "DetailBanner",
    props: {
        sightName: String,
        bannerImg: String,
        bannerImgs: Array
    },
    data () {
        return {
            showGallary: false
        }
    },
    components: {
        CommonGallary,
        CommonFade
    },
    methods: {
        handleClose () {
            this.showGallary = false
        },
        handleImgClick () {
            this.showGallary = true
        }
    }
}
</script>

<style lang="stylus" scoped>
.banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
        width 100%
    .banner-info
        position absolute
        right .2rem
        bottom .3rem
        left .02rem
        min-height .4rem
        color #fff
        line-height .6rem
        background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
        display flex
        .banner-title
            flex 1
            font-size .38rem
            padding 0 .2rem
    .banner-number
        position absolute
        left .2rem
        bottom .86rem
        text-align center
        color #ffffff
        padding 0 .3rem
        line-height .4rem
        height .4rem
        font-size .24rem
        border-radius .2rem
        opacity .6
        background rgba(0, 0, 0, 8)
        .banner-icon
            font-size .24rem
            padding .02rem
    .banner-video
        position absolute
        bottom .36rem
        right .2rem
        z-index 9
        width 1.5rem
        color #ffffff
        font-size .36rem
        text-align center
        text-shadow 0 1px 2px rgba(0, 0, 0, .7)
        .banner-video-text
            flex 1
            font-size .38rem
            padding 0 .2rem
</style>