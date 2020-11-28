<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "HomeSwiper",
    props: {
        swiperList: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                autoplay: 2000,
                speed: 800
            }
        }
    },
    computed: {
        showSwiper () {
            return this.swiperList.length;
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background #fff !important
.wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 31.25%       // 宽高比
    .swiper-img
        width 100%
</style>