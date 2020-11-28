<template>
    <div>
        <div class="search">
            <label>
                <input type="text" class="search-input" placeholder="请输入城市或拼音" v-model="keyword">
            </label>
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
    name: "CitySerach",
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    updated () {
        this.scroll = new BScroll(this.$refs.search)
    },
    computed: {
        hasNoData () {
            return !this.list.length
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
    },
    watch: {
        // 监视输入的值的变化
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                // 如果输入的值为空就清空数组并不执行下面的代码
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach((item) => {
                        if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
                            result.push(item)
                        }
                    })
                }
                this.list = result
            }, 100)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.search
    height .72rem
    background $bgColor
    padding 0 .1rem
    .search-input
        box-sizing border-box
        width 100%
        height .62rem
        line-height .62rem
        text-align center
        border-radius .06rem
        color #666
        padding 0 .2rem
.search-content
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    z-index 1
    background #eee
    .search-item
        line-height .62rem
        padding .2rem
        color #666
        background #fff
</style>