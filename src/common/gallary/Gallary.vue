<template>
    <div class="container" @click="handleClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item" alt="">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommonGallary",
    props: {
        imgs: {
            type: Array
        }
    },
    data () {
        return {
            swiperOption: {
                loop: true,
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                // observer启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
                // 默认false
                observer: true,
                observeParents: true
            }
        }
    },
    methods: {
        handleClick () {
            // 关闭图片详情
            this.$emit("close")
        }
    }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
    overflow inherit
.container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background-color #000
    .wrapper
        height 0
        padding-bottom 100%
        .gallary-img
            width 100%
        .swiper-pagination
            color #ffffff
            bottom -1rem
</style>