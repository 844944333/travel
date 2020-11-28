<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="handleCityClick(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
    name: "CityList",
    props: {
        cities: Object,
        hotCities: Array,
        letter: String
    },
    // 将updated中的代码放在mounted中会出现执行了代码但是页面未挂载的问题，所以选择放在updated中
    updated () {
        this.scroll = new BScroll(this.$refs.wrapper)
    },
    computed: {
        ...mapState(['city'])
    },
    watch: {
        // 监视letter的变化，一旦发生改变就显示指定的页面
        letter () {
            if (this.letter) {
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
    methods: {
        handleCityClick (city) {
            // this.$store.dispatch("changeCity", city)
            // 直接调用mutations
            // this.$store.commit("changeCity", city)

            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    }
}
</script>

<style lang="stylus" scoped>
.border-topbottom
    &:before
        border-color #ccc
    &:after
        border-color #ccc
.border-bottom
    &:before
        border-color #ccc
.list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .title
        line-height .54rem
        background #eee
        padding-left .2rem
        color #666
        font-size .26rem
    .button-list
        padding .1rem .6rem .1rem .1rem
        overflow hidden
        .button-wrapper
            float left
            width 33.33%
            .button
                margin .1rem
                border .02rem solid #ccc
                text-align center
                padding .1rem 0
                border-radius .06rem
    .item-list
        .item
            line-height .76rem
            padding-left .2rem
</style>