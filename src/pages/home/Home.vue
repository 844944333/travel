<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper :swiperList="swiperList"></HomeSwiper>
        <HomeIcons :iconList="iconList"></HomeIcons>
        <HomeRecommend :recommendList="recommendList"></HomeRecommend>
        <HomeWeekend :weekendList="weekendList"></HomeWeekend>
    </div>
</template>

<script>
import HomeHeader from "@/pages/home/components/Header";
import HomeSwiper from "@/pages/home/components/Swiper";
import HomeIcons from '@/pages/home/components/Icons'
import HomeRecommend from "@/pages/home/components/Recommend"
import HomeWeekend from "@/pages/home/components/Weekend"
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: "Home",
    data () {
        return {
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: [],
            // 用于存放上一个城市的容器
            lastCity: ''
        }
    },
    components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
    computed: {
        ...mapState(['city'])
    },
    mounted () {
        // 页面挂载好之后就执行这个函数来发送Ajax请求
        this.getHomeInfo()

        // 将当前城市变为上一个城市
        this.lastCity = this.city
    },
    methods: {
        getHomeInfo () {
            axios.get('http://localhost:8080/mock/index.json?city=' + this.city).then(res => {
                const result = res.data
                if (result.ret && result.data) {
                    const data = result.data
                    this.swiperList = data.swiperList
                    this.iconList = data.iconList
                    this.recommendList = data.hotList
                    this.weekendList = data.weekendList
                }
            })
        }
    },
    // 使用了keep-alive会多一个声明周期函数，mounted执行了再执行activated
    activated () {
        // 当城市发生改变时就重新发一次Ajax请求
        if (this.lastCity !== this.city) {
            // 然后将当前城市变成上一个城市
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
}
</script>

<style scoped>

</style>